const logger = require('@common/logger')
module.exports = (req, res, next) => {
    logger.debug({
        header: req.headers,
        method: req.method,
        body: req.body
    })
    next()
}

