const express = require("express");
const { createProperty, getAllProperties } = require("../controllers/propertyController");
const { protect } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");

const router = express.Router();

router.post(
  "/create",
  protect,
  allowRoles("seller", "agent"),
  createProperty
);

router.get("/", getAllProperties);

module.exports = router;