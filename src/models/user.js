"use strict";

const { MODEL: NAME, COLLECTION, USER_GENDER, USER_STATUS, TIMESTAMPS} = require("../constants");
const { Schema, model } = require("mongoose");

// ------------------------- Schema -----------------------------

const SCHEMA = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    deleted_at: {
      type: Date,
    },
  },
  {
    collection: COLLECTION.USER,
    timestamps: TIMESTAMPS
  },
);

// ------------------------- Statics ----------------------------

SCHEMA.static({
  /**
   * Returns fields that can be selected by query parameters.
   *
   * @returns {string[]}
   */
  getSelectableFields() {
    return [
      "id",
      "email",
      "name",
      "birthdate",
      "gender",
      "phone_number",
      "status",
      "created_at",
      "updated_at",
    ];
  },
});

// ------------------------- Model ------------------------------

const MODEL = model(NAME.USER, SCHEMA);

// ------------------------- Exports ----------------------------

module.exports = MODEL;

