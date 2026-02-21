const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  images: [String],

  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  agentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  status: {
    type: String,
    enum: ["available", "sold", "pending"],
    default: "available"
  },

  type: {
    type: String,
    enum: ["flat", "house", "land"]
  },

  area: Number,

  amenities: [String]

}, { timestamps: true });

module.exports = mongoose.model("Property", propertySchema);