
class Exception extends Error {
    constructor(error, message) {
        super()
        this.error = error || 'Error' //default error class
        this.message = message || this.stack
    }

    toJSON() {
        return {
            errorType: this.error,
            errorMessage: this.message,
            detail: this.stack
        }
    }

}



module.exports = Exception