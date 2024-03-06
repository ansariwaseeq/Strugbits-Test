"use strict";

const { MODEL: NAME, COLLECTION, TIMESTAMPS, DELETION_TYPE} = require("../constants");
const { Schema, model, Types } = require("mongoose");

// ------------------------- Schema -----------------------------

const SCHEMA = new Schema(
  {
    from: {
      type: Types.ObjectId,
      ref: "User",
      required: true
    },
    message: {
      type: String,
      required: true,
      searchable: true
    },
    deleted_at: {
      type: Date,
    },
    deletionType:{
      type: String,
      enum: Object.values(DELETION_TYPE)
    }
  },
  {
    collection: COLLECTION.CHAT,
    timestamps: TIMESTAMPS,
    toJSON: {virtuals: true}
  },
);
SCHEMA.index({name: 'text', 'message': 'text'});

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
      "message",
      "from",
      "created_at",
      "updated_at",
    ];
  },
});

// ------------------------- Model ------------------------------

const MODEL = model(NAME.CHAT, SCHEMA);

// ------------------------- Exports ----------------------------

module.exports = MODEL;

