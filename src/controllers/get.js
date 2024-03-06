"use strict";

const { join } = require("node:path");
const { name, version } = require("../../package.json");

const CONTROLLER = [
  function get(req, res) {
    if (!req.user) {
      return res.redirect("/auth/interaction/login");
    }
    res.sendFile(join(__dirname, "..", "..", "public", "html", "index.html"));
  }
];

module.exports = CONTROLLER;
