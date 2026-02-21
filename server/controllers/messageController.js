const Message = require("../models/Message");
const Chat = require("../models/Chat");

exports.sendMessage = async (req, res) => {
  try {
    const { chatId, senderId, text } = req.body;

    const message = await Message.create({
      chatId,
      senderId,
      text
    });

    await Chat.findByIdAndUpdate(chatId, {
      lastMessage: text
    });

    res.json(message);

  } catch (err) {
    res.status(500).json({ msg: "Error sending message" });
  }
};