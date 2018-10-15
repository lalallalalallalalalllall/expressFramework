const mongoose = require('mongoose');
class mongo {
    constructor(connectionString){
        this.connectionString = connectionString
        this.connect()
    }

    connect(){
        var options = { useNewUrlParser: true }
        this.connection = mongoose.createConnection( this.connectionString, options )
    }

}

module.exports = mongo

