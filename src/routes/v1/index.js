"use strict";

const { Router } = require("express");
const chats = require("./chats")

const router = Router();

router
  .use(chats)
  
module.exports = Router().use("/v1", router);
