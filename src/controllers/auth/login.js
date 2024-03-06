"use strict";

const { Joi } = require("../../lib");
const { validate } = require("../../middlewares");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const CONTROLLER = [
  async function loginInteraction(req, res) {
    req.flash('success', 'welcome back!');
    const redirectUrl = req.session.returnTo || '/auth/interaction/login';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
  }
];

module.exports = CONTROLLER;
