const Property = require("../models/Property");

exports.createProperty = async (req, res) => {
  try {
    const property = await Property.create(req.body);
    res.json(property);
  } catch (err) {
    res.status(500).json({ msg: "Error creating property" });
  }
};

exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find().populate("ownerId", "name email");
    res.json(properties);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching properties" });
  }
};