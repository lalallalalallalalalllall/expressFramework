const express = require('express')
const app = express()

//register all the service under this path 
//applying to all path
app.use('/*', require('./keyChecker'))
app.use('/*', require('./bodyParser'))
app.use('/*', require('./logRequest'))
module.exports = app 