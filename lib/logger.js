const winston = require('winston');
const path = require('path')
const fecha = new Date().toLocaleDateString()
const pathBase = (path.join(__dirname, '../logs'));
const logName = `${pathBase}/logs-${fecha}`

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: logName }),
  ],
});
 
//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }


module.exports = logger
