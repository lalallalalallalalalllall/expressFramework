const { backgroundProcess, requestAccepted } = require('@common/message/response')
const { SUCCESS_STATUS, FAIL_STATUS } = require('@config/status/request')

/**
 * Use to send back response to the user
 * basic stands for returning a valid result to the user when all the api flow is completed
 * @param {response} resp 
 * @param {Error or object} result 
 */
const basicResponse = (resp, result) => {
    //check whether is an error
    if (result instanceof Error) {
        if (!resp.headerSent) {
            resp.status(FAIL_STATUS).send(result)
        }
    } else {
        resp.status(SUCCESS_STATUS).send(result)
    }
}

/**
 * Use to send a quick response to user and process the request afterward 
 * quick response might be notice user request is accepted
 * @param {response} resp 
 */
const backgroundResponse = (resp) => {
    return resp.status(SUCCESS_STATUS).send(requestAccepted)
}

module.exports = {
    basicResponse: basicResponse,
    backgroundResponse: backgroundResponse

}
