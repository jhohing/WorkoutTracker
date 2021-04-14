const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: String,
  rep: Number,
  weight: Number,
  sets: Number,
  duration: Number,
  distance: Number,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;