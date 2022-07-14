const mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email harus disi"],
    },
    name: {
      type: String,
      require: [true, "Nama harus disi"],
    },
    password: {
      type: String,
      require: [true, "Password harus disi"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "admin",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    phoneNumber: {
      type: String,
      require: [true, "No Telepon harus disi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
