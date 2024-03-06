"use strict";

/**
 *
 * @param {Object[]} details
 * @returns {Object}
 */
function serialize(details) {
  return details.reduce((acc, cur) => {
    const key = cur.path.join(".");

    if (!acc[key]) acc[key] = [];

    acc[key].push(cur.message);

    return acc;
  }, {});
}

function validate(schema = {}) {
  const { body, query } = schema;

  return function validator(req, res, next) {
    if (body) {
      const { error, value } = body.label("body").validate(req.body, { abortEarly: false });

      if (error != null) {
        return res.status(400).json({
          error: 'UNPROCESSABLE_ENTITY',
          details: serialize(error.details),
        });
      }

      req.body = value;
    }

    if (query) {
      const { error, value } = query.label("query").validate(req.query, { abortEarly: false });

      if (error != null) {
        return res.status(400).json({
          error: 'BAD_REQUEST',
          details: serialize(error.details),
        });
      }

      req.query = value;
    }

    next();
  };
}

module.exports = validate;
