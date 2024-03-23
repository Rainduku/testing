const morganMiddleware = require("./morgan.middlewares");
const errorHandler = require("./errorHandler.middlewares");
const validator = require("./validator");

module.exports = {
    errorHandler,
    morganMiddleware,
    validator,
  };
