"use strict"

module.exports = {
    get: require('./get'),
    ...require('./auth'),
    ...require('./v1')
}