
const express = require('express')
const router = express.Router()
var servicekey = process.env.SERVICE_KEY 

router.use(function (req, res, next) {
    if (servicekey && req.headers.servicekey != servicekey) {
        res.status(403).send("A service key header is not valid or not exist!")
    }
        next()
    }
)


module.exports = router
