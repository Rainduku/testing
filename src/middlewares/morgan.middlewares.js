const morgan = require('morgan');
const logger = require('../utils/logger');
const { IS_DEVELOPMENT } = require("../config");

const stream = {
  write: (message) => logger.http(message),
};

const skip = () => !IS_DEVELOPMENT;

const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip },
);

module.exports = morganMiddleware;
