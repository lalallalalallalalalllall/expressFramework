const uuidv1 = require('uuid/v1')
const uuidv4 = require('uuid/v4');
/**
 * generate a guid based on timestamp ( AKA uuidv1)
 */
var timestampGuid = () => {
    return uuidv1()
}
/**
 * generate a guid randomly ( AKA uuidv4)
 */
var randomGuid = () => {
    return uuidv4()
}
/**
 * returning a uniqueId function 
 */
module.exports = uniqueId = () => {
    return timestampGuid()
}