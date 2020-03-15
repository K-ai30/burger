// Dependencies
const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
let burger = require("../models/burger.js");

router.get("/", (req, res) => {
    res.render("index");
})

module.exports = router;