const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({

  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property"
  },

  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  agentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  lastMessage: String

}, { timestamps: true });

module.exports = mongoose.model("Chat", chatSchema);