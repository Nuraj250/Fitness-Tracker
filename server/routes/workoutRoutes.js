const express = require("express");
const Workout = require("../models/Workout");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get workouts
router.get("/", authMiddleware, async (req, res) => {
  const workouts = await Workout.find({ userId: req.user.id });
  res.json(workouts);
});

// Add workout
router.post("/", authMiddleware, async (req, res) => {
  const workout = new Workout({ ...req.body, userId: req.user.id });
  await workout.save();
  res.status(201).json(workout);
});

// Update workout
router.put("/:id", authMiddleware, async (req, res) => {
  const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(workout);
});

// Delete workout
router.delete("/:id", authMiddleware, async (req, res) => {
  await Workout.findByIdAndDelete(req.params.id);
  res.json({ message: "Workout deleted" });
});

module.exports = router;
