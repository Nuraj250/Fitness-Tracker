const express = require("express");
const Meal = require("../models/Meal");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get meals
router.get("/", authMiddleware, async (req, res) => {
  const meals = await Meal.find({ userId: req.user.id });
  res.json(meals);
});

// Add meal
router.post("/", authMiddleware, async (req, res) => {
  const meal = new Meal({ ...req.body, userId: req.user.id });
  await meal.save();
  res.status(201).json(meal);
});

// Update meal
router.put("/:id", authMiddleware, async (req, res) => {
  const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(meal);
});

// Delete meal
router.delete("/:id", authMiddleware, async (req, res) => {
  await Meal.findByIdAndDelete(req.params.id);
  res.json({ message: "Meal deleted" });
});

module.exports = router;
