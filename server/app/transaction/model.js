const mongoose = require("mongoose");

let transactionSchema = mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: {
        type: String,
        require: [true, "Nama game harus disi"],
      },
      category: {
        type: String,
        require: [true, "Kategori harus disi"],
      },
      thumbnail: {
        type: String,
      },
      coinName: {
        type: String,
        require: [true, "Nama coin harus disi"],
      },
      coinQuantity: {
        type: String,
        require: [true, "Jumlah coin harus disi"],
      },
      price: {
        type: Number,
      },
    },
    historyPayment: {
      name: {
        type: String,
        require: [true, "Nama game harus disi"],
      },
      type: {
        type: String,
        require: [true, "Tipe pembayaran harus disi"],
      },
      bankName: {
        type: String,
        require: [true, "Nama bank harus disi"],
      },
      noRekening: {
        type: String,
        require: [true, "No rekening harus disi"],
      },
    },
    name: {
      type: String,
      require: [true, "Nama harus diisi"],
      maxLength: [255, "Panjang nama harus antara 3 - 255 karakter"],
      minLength: [3, "Panjang nama harus antara 3 - 255 karakter"],
    },
    accountUser: {
      type: String,
      require: [true, "Nama akun diisi"],
      maxLength: [255, "Panjang nama harus antara 3 - 255 karakter"],
      minLength: [3, "Panjang nama harus antara 3 - 255 karakter"],
    },
    tax: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    historyUser: {
      name: { type: String, require: [true, "Nama player harus disi"] },
      phoneNumber: {
        type: Number,
        maxLength: [13, "Panjang nama harus antara 3 - 13 karakter"],
        minLength: [9, "Panjang nama harus antara 3 - 13 karakter"],
      },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
