const router = require("express").Router();
const Category = require("../models/Category");

// Create category

router.post("/", async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const savedCat = await newCategory.save();
    res.status(200).json(savedCat);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get all categories

router.get("/", async (req, res) => {
  try {
    const category = await Category.find(req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
