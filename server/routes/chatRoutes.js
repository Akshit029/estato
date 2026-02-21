const express = require("express");
const { createChat } = require("../controllers/chatController");

const router = express.Router();

router.post("/create", createChat);

module.exports = router;