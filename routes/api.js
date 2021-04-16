const Workout = require("./models/workoutModel.js");
const mongoose = require("mongoose");
const router = require("express").Router();

router.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", ({ params, body }, res) => {
    console.log("Params", body, params);
    
    Workout.findOneAndUpdate(
        { _id: params.id },
        { $push: { exercise: body } },
        { new: true }
        )
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .limit(7)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});