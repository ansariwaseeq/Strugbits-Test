"use strict";

const { ENV } = require("../constants");
const assert = require("assert");
const NODE_ENV = require("./NODE_ENV");

const MONGODB_URI = process.env.MONGODB_URI || null;

assert(
    typeof MONGODB_URI === "string",
    "Expected <MONGODB_URI> to be a valid string",
);


module.exports = MONGODB_URI;
