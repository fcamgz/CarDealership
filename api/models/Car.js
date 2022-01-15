const mongoose = require("mongoose");

const CarSchema = mongoose.Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    type: { type: String, default: "unknown" },
    img: {
      data: Buffer,
      contentType: String,
    },
    topSpeed: { type: Number },
    weight: { type: Number },
    numberOfSeats: { type: Number },
    price: { type: Number, default: "unknown" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", CarSchema);
