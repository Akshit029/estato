const Chat = require("../models/Chat");

exports.createChat = async (req, res) => {
  try {
    const { propertyId, buyerId, sellerId, agentId } = req.body;

    // Check if chat already exists
    const existingChat = await Chat.findOne({
      propertyId,
      buyerId,
      sellerId
    });

    if (existingChat) {
      return res.json(existingChat);
    }

    const chat = await Chat.create({
      propertyId,
      buyerId,
      sellerId,
      agentId
    });

    res.json(chat);

  } catch (err) {
    res.status(500).json({ msg: "Error creating chat" });
  }
};