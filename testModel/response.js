class response  {
    constructor(){
        this.messageValue = ""
        this.statusValue = 200
        this.headerSent = false
    }
    status(statusValue){
        this.statusValue = statusValue
        return this
    } 
    send(messageValue){
        this.messageValue = messageValue
        this.headerSent = true
        return this
    }
}
module.exports = response