const mongoose = require("mongoose");

let bankSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Nama pemilik harus disi"],
  },
  bankName: {
    type: String,
    require: [true, "Nama bank harus disi"],
  },
  noRekening: {
    type: String,
    require: [true, "Nama rekening harus disi"],
  },
}, { timestamps: true });

module.exports = mongoose.model("Bank", bankSchema);
