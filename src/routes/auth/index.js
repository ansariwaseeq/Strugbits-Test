"use strict";

const { Router } = require("express");
const interactionRoutes = require("./interactions");


const router = Router();

router.use(interactionRoutes);

// ------------------------- Exports --------------------------------

module.exports = Router().use("/auth", router);
