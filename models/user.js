const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "field name is required"]
    },
    lastName: {
      type: String,
      required: [true, "field name is required"]
    },
    address: {
      type: String,
      required: [true, "address is required"]
    },
    phone1: {
      type: String,
      required: [true, "phone is required"]
    },
    phone2: {
      type: String
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
    },

    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment"
      }
    ]
  },
  {
    timestamps: true
  }
);

UserSchema.pre("save", async function(next) {
  try {
    const saltRounds = 10;
    let hash = await bcrypt.hash(this.password, saltRounds);
    this.password = hash;
  } catch (error) {
    next(error);
  }
  next();
});

module.exports = mongoose.model("Users", UserSchema);
