const Workout = require("../models/workoutModel.js");
const router = require("express").Router();

router.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
        .then((dbWorkout) => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(({ message }) => {
            console.log(message);
        });
});

router.put("/api/workouts/:id", ({ params, body }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercise: body } },
        { new: true }
        )
        .then((dbWorkout) => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", function (req, res) {
    Workout.find()
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.post("/api/workouts/range", function (req, res) {
    Workout.create(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout)
      })
      .catch(err => {
        res.json(err)
      });
  });

module.exports = router;