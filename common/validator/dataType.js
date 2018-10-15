const { dataTypeException, classTypeException } = require('@common/exception/validator')
const isExist = require('./isExist')

/**
 * validate guid
 * @param {guid} input 
 */
var guid = (input, field) => {
    isExist(input, field)
    let guidPattern = /^[0-9A-Fa-f]{8}[-][0-9A-Fa-f]{4}[-][0-9A-Fa-f]{4}[-][0-9A-Fa-f]{4}[-][0-9A-Fa-f]{12}$/i;
    if (!(guidPattern.test(input))) {
        throw new dataTypeException(field, 'string')
    }
    return input
}
/**
 * validate number
 * @param {Number} input 
 */
var number = (input, field) => {
    isExist(input, field)
    if (isNaN(input) == true) {
        throw new dataTypeException(field, 'number')
    }
    return input
}
/**
 * validate email string
 * @param {email} input 
 */
var email = (input, field) => {
    isExist(input, field)
    let emailPattern = /^(([^<>()[\]\\.,;=\s@\"]+(\.[^<>()[\]\\.,;=\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;   //abc@email.com
    if (input.match(emailPattern) == null) {
        throw new dataTypeException(field, 'email')
    }
    return input
}
/**
 * string
 * @param {string} input 
 */
var string = (input, field) => {
    isExist(input, field)
    if (typeof (input) != "string") {
        throw new dataTypeException(field, 'string')
    }
    return input
}
/**
 * uniqueId
 * @param {uniqueId} input
 */
var uniqueId = (input, field) => {
    return guid(input, field)
}
/**
 * checking whather it belong to the same class
 * @param {object} input
 * @param {string} field
 * @param {class} classType
 */
var classOf = (input, field, classType) => {
    isExist(input, field)
    if (!(input instanceof classType)) {
        throw new classTypeException(input, field)
    }
    return input
}

var array = (input, field) => {
    isExist(input, field)
    if (Array.isArray(input) != true) {
        throw new dataTypeException(field, 'array')
    }
    return input
}


module.exports = {
    guid,
    number,
    email,
    string,
    uniqueId,
    classOf,
    array
}