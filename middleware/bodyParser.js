const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
  }));


module.exports = router
