"use strict"
const registerUserController = require('./register');
const loginUserController = require('./login');
const getLoginPageController = require('./renderLogin')
const logoutController = require('./logout')
const getRegisterPageController = require('./renderRegister')

module.exports = {
  registerUserController,
  loginUserController,
  getLoginPageController,
  logoutController,
  getRegisterPageController
};