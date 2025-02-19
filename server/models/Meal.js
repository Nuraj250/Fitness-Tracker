const mongoose = require("mongoose");

const MealSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  foodItems: [String],
  calories: Number,
  protein: Number,
  carbs: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Meal", MealSchema);
