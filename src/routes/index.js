"use strict";

const { NODE_ENV } = require(".././config");
const { ENV } = require("../constants");
const { Router} = require("express");
const morgan = require("morgan");
const v1Routes = require('./v1')
const authRoutes = require('./auth')
const {get} = require('../controllers')
const router = Router();

// ------------------------- Middlewares ----------------------------

/* istanbul ignore next */
if (NODE_ENV === ENV.DEVELOPMENT)
  router.use(morgan("dev"));

// ------------------------- Routes ---------------------------------

router.route('/')
  .get(get)

  router
  .use(v1Routes)
  .use(authRoutes)

// ------------------------- Exports --------------------------------

module.exports = router;
