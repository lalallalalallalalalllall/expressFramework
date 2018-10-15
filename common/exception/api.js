const exception = require('./exception')
const { API_REQUEST_FAIL } = require('@common/message/exception/api')

class requestFailException extends exception {
    constructor(title) {
        super()
        this.error = 'Invalid request'
        this.message = format(API_REQUEST_FAIL, title)
    }
}

module.exports = {
    requestFailException: requestFailException
} 