"use strict";

const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  API_URI: require("./API_URI"),
  API_PORT: require("./API_PORT"),
  AUTH_URI: require("./AUTH_URI"),
  MONGODB_URI: require("./MONGODB_URI"),
  NODE_ENV: require("./NODE_ENV"),
  RELEASE_ENV: require("./RELEASE_ENV"),
};
