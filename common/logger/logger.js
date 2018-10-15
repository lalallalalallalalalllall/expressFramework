var winston = require('winston')
require('winston-daily-rotate-file')
const { combine, timestamp, prettyPrint } = winston.format;
const { LOG_LEVEL, LOG_PATH } = require('@config/logInformation')

/**
 * specific the customs logger levels
 * so we can use 
 * logger.error()
 * logger.warn()
 * logger.info()
 * logger.debug()
 */
const myCustomLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        debug: 3
    }
}

/**
 * a winston transport that rotate a new log file everytime the log file name changes 
 * currently : day changes will update
 * older log file will be compless in zip or gz file
 */
var transport = new (winston.transports.DailyRotateFile)({
    filename: `${LOG_PATH}/%DATE%.log`,
    datePattern: 'YYYY_MM_DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
})

/**
 * when changing log file , first things is to log this info
 */
transport.on('rotate', function (old, news) {
    logger.info(`Filename : ${news}`)
})

var logger = winston.createLogger({
    level: LOG_LEVEL,
    levels: myCustomLevels.levels,
    format: combine(
        // label({ label: 'right meow!' }),
        timestamp(),
        prettyPrint()
    ),
    transports: [
        transport
    ]
})


var change = (input) => {
    logger.level(input)
}


module.exports = logger