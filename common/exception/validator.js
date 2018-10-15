const { NOT_EXIST, INVALID_DATA_TYPE, INVALID_CLASS_TYPE } = require('@common/message/exception/validator')
const format = require('string-format')
const exception = require('./exception')

class dataTypeException extends exception {
    constructor(field, type) {
        super()
        this.error = 'Data Type Exception'
        this.message = format(INVALID_DATA_TYPE, field, type)
    }
}

class requireFieldMissingException extends exception {
    constructor(field) {
        super()
        this.error = 'Field Missing Exception'
        this.message = format(NOT_EXIST, field)
    }
}

class classTypeException extends exception {
    constructor(field, type) {
        super()
        this.error = 'Field Missing Exception'
        this.message = format(INVALID_CLASS_TYPE, field , type)
    }
}

module.exports = {
    dataTypeException: dataTypeException,
    requireFieldMissingException: requireFieldMissingException,
    classTypeException: classTypeException
}