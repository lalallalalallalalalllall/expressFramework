const logger = require('@common/logger')
var handleError = {
    /**
     * log the error
     * @param error
     */
    basic : (error) => {
        logger.error(error)
    },
    complexity : (error)=> {
        logger.error(error)
    }
}


module.exports = handleError