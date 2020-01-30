const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const Admin = new Schema({
  name: {
    type: String,
    required: [true, "field name is required"]
  },

  email: {
    type: String,
    required: [true, "email is required"]
  },
  password: {
    type: String,
    required: [true, "password is required"]
  },
  imgUrl: {
    type: String,
    default: "/uploads/defaultImg.png"
  }
});