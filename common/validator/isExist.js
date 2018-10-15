const exception = require('@common/exception/validator').requireFieldMissingException

exist =  ( input , field) => {
    if (typeof input === "undefined" || input == ''|| input == {}) {
        throw new exception(field)
     }
     return input
}

module.exports = exist