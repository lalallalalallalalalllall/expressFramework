// const mongo = require('@controller/mongoController')
// const giantMongoConnectionString = process.env.GIANT_MONGO || "127.0.0.1:27017"

const mongo = require('@dataComponent/implementation/mongo')
const SAMPLE_DB = 'mongo://root@127.0.0.1:27017/admin'
var database = {
    'mongo':
    {
        'mongo' : new mongo(SAMPLE_DB)
    },
    'mssql': {}
}

module.exports = database
