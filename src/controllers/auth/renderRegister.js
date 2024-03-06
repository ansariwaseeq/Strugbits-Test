"use strict";

const { join } = require("node:path");

const CONTROLLER = [
    function loginInteraction(req, res) {

        res.sendFile(join(__dirname, "..", "..", "..", "public", "html", "register.html"));
    }
];

module.exports = CONTROLLER;
