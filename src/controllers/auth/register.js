"use strict";

const { Joi } = require("../../lib");
const { validate } = require("../../middlewares");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const CONTROLLER = [
  bodyParser.urlencoded({ extended: true }),
  validate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }).required(),
  }),
  async function registerInteraction(req, res) {

    const { email, password } = req.body;
    let username = email;
    try {
      const userExists = await User.countDocuments({ username }, {maxtimeMS: 30000});

      if (userExists > 0) {
        throw new Error("User Already Exists");
      }
      const hashedPassword = bcrypt.hashSync(password, 10);
      const user = new User({ username, password: hashedPassword });
      await user.save();

      res.status(200).redirect('/auth/interaction/login');
    } catch (error) {
      console.error(error.message);
      res.status(403).send(error.message);
    }
  }
];

module.exports = CONTROLLER;