const path = require("path");
const router = require("express").Router();

//Default Page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Exercise Page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
//Dashboard Page
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
