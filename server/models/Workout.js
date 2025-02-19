const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: String,
  duration: Number, // in minutes
  caloriesBurned: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Workout", WorkoutSchema);
