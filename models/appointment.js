const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema(
  {
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "admin's id is required"]
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "user's id is required"]
    },
    date: {
      type: Date,
      required: [true, "Date is required"]
    },

    status: {
      type: String,
      enum: ["pending", "approved", "accepted", "canceled"],
      default: "pending",
      lowercase: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Appointment", AppointmentSchema);
