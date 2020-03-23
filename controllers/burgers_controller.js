// Dependencies
const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
let Burger = require("../models/burger.js");

router.get("/", (req, res) => {
    Burger.all(function(data) {
        res.render("index", {burgers: data});
    })
})

router.post("/addBurger", (req, res) => {
    let burgerName = req.body.burgerName;
    Burger.create("burger_name", [burgerName], function(error, data) {
        if(error){ console.log(error)}
        res.redirect("/");
    })
})

router.post("/devourBurger", (req, res) => {
    let id = req.body.burgerID;
    let update = {devoured:1};
    Burger.update(update, `id = ${id}`, function(data) {
        res.redirect("/");
    })
})

module.exports = router;