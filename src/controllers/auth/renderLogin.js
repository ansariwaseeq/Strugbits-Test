"use strict";

const { join } = require("node:path");

const CONTROLLER = [
  async function loginInteraction(req, res) {
    if (req.user) {
      return res.redirect("/");
    }
    res.sendFile(join(__dirname, "..", "..", "..", "public", "html", "login.html"));
  }
];

module.exports = CONTROLLER;
