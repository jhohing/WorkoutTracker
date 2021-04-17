const path = require("path");

module.exports = function(app) {
    // Called when "Continue Workout" or "New Workout" is clicked on index.html
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};