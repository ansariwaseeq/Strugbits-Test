
"use strict";

const {
  registerUserController, loginUserController, getLoginPageController, logoutController,
  getRegisterPageController
} = require("../../controllers");
const passport = require('passport');
const { Router } = require("express");
const bodyParser = require("body-parser");

const router = Router();

//------------------SIGN-UP------------------------

router.route("/register")
  .get(getRegisterPageController)
  .post(registerUserController);


//---------------------LOGIN------------------------

router.route("/login")
  .get(getLoginPageController)
  .post(
    bodyParser.urlencoded({ extended: true }),
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/auth/interaction/login",
    }),
    // loginUserController
  )

//---------------------LOG-OUT------------------------

router.route("/logout")
  .post(logoutController)


module.exports = Router().use("/interaction", router);
