const requestPromise = require('request-promise')
const logger = require('@common/logger')
/**
 * request service ( can do logging here as all request out will be passing thu here )
 */
var request = {
    /**
     * post requets function 
     * @param {string} url
     * @param {object} headers
     * @param {object} data ( or body or payload or postbody)
     */
    post: (url, headers, data) => {
        let options = {
            url: url,
            headers: headers,
            json: true,
            body: data,
            method: 'POST'
        }
        logger.info(options) 
        return requestPromise.post(options)
    },
    /**
     * get requets function 
     * @param {string} url
     * @param {object} headers
     * @param {object} data ( or body or payload or postbody)
     */
    get: (url, headers) => {
        let options = {
            url: url,
            headers: headers,
            method: 'GET'
        }
        logger.info(options) 
        return requestPromise.get(options)
    },
    /**
     * patch requets function 
     * @param {string} url
     * @param {object} headers
     * @param {object} data ( or body or payload or postbody)
     */
    patch: (url, headers, data) => {
        let options = {
            url: url,
            headers: headers,
            json: true,
            body: data,
            method: 'PATCH'
        }
        logger.info(options) 
        return requestPromise.patch(options)
    }



}



module.exports = request