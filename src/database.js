"use strict";

const { MONGODB_URI } = require("./config");
const mongoose = require("mongoose");
console.log('hello',MONGODB_URI)
/* istanbul ignore next */
 mongoose
   .connect(
     MONGODB_URI
   )
   .then(() => console.log("MongoDB connection established"))
   .catch(error => {
     console.log(error);
     process.exit(1);
   });


