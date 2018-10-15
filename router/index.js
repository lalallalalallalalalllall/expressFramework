const express = require('express')
const app = express()

app.use('/gateRelease',require('./gateReleaseServiceRouter'))

module.exports = app