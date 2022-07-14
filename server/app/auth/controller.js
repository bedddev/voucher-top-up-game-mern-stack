const Player = require("../player/model");
const path = require("path");
const fs = require("fs");
const config = require("../../config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  signup: async (req, res, next) => {
    let filename;

    try {
      const payload = req.body;

      if (req.file) {
        let tmp_path = req.file.path;
        let originExt =
          req.file.originalname.split(".")[
            req.file.originalname.split(".").length - 1
          ];
        filename = req.file.filename + "." + originExt;
        let target_path = path.resolve(
          config.rootPath,
          `public/uploads/${filename}`
        );

        const src = fs.createReadStream(tmp_path);
        const dest = fs.createWriteStream(target_path);
        src.pipe(dest);

        const player = new Player({ ...payload, avatar: filename });
        await player.save();
        delete player._doc.password;
        res.status(201).json({ data: player });
      } else {
        let player = new Player(payload);
        console.log(player);
        await player.save();
        delete player._doc.password;
        res.status(201).json({ data: player });
      }

      res.status(201).json({
        message: payload,
      });
    } catch (err) {
      if (err && err.name == "ValidationError") {
        let currentImage = `${config.rootPath}/public/uploads/${filename}`;
        if (fs.existsSync(currentImage)) {
          fs.unlinkSync(currentImage);
        }

        return res.status(422).json({
          error: 1,
          message: err.message,
          fields: err.errors,
        });
      }
      next(err);
    }
  },

  signin: async (req, res, next) => {
    const { email, password } = req.body;

    Player.findOne({ email: email })
      .then((player) => {
        if (player) {
          const checkPassword = bcrypt.compareSync(password, player.password);
          if (checkPassword) {
            const token = jwt.sign(
              {
                player: {
                  id: player.id,
                  username: player.username,
                  name: player.name,
                  email: player.email,
                  nama: player.nama,
                  phoneNumber: player.phoneNumber,
                  avatar: player.avatar,
                },
              },
              config.jwtKey
            );
            res.status(200).json({
              data: { token },
            });
          } else {
            res.status(403).json({
              message: "Password yang anda masukkan salah",
            });
          }
        } else {
          res.status(403).json({
            message: "Email yang anda masukkan belum terdaftar",
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || "Internal server error",
        });
        next();
      });
  },
};
