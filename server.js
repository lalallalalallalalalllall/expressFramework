const express = require('express')
const app = express()
const logger =require('@common/logger')
var queue = require('express-queue');
let port = process.env.SERVER_PORT|| 3333

app.use(queue({ activeLimit: 1, queuedLimit: -1 }));

app.use(require('@middleware'));

app.use(require('@router'))
 
app.listen( port , () => {
    console.log('Server is started on '+port)
    logger.info('Server is started on '+port)
})

