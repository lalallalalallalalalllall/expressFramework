const db = require('@config/database').mongo.dftz.connection

const mongoose = require('mongoose')
let gatepass = mongoose.Schema({
    "CompanyROC": {
        type: String,
        required: true
    },
    "CompanyName": {
        type: String,
        required: true
    },
    "VehicleRegNo": {
        type: String,
        required: true
    },
    "DriverName": {
        type: String,
        required: true
    },
    "DriverNRIC": {
        type: String,
        required: true
    },
    "TotalWeight": {
        type: Number,
        default: 0.0,
        required: true
    },
    "TotalPackages": {
        type: Number,
        default: 0,
        required: true
    },
    "Status": {
        type: String,
        required: true
    },
    "CreatedBy": {
        type: String,
        default: '',
        required: true
    },
    "ModifiedBy": {
        type: String,
        default: '',
        required: true
    },
    "CreatedDate": {
        type: String,
        required: true
    },
    "ModifiedDate": {
        type: String,
        required: true
    },
    "GateReleaseNo": {
        type: String,
        required: true
    },
    "PAMList": [
        {
            "_id": {
                type: String,
                required: true
            },
            "destinationPort": {
                type: String,
                required: true
            },
            "customsRegNo": {
                type: String,
                required: true
            },
            "sta": {
                type: String,
                required: true
            },
            "merchantCode": {
                type: String,
                required: true
            },
            "originPort": {
                type: String,
                required: true
            },
            "mawbNo": {
                type: String,
                required: true
            },
            "flightNo": {
                type: String,
                required: true
            },
            "refId": {
                type: String,
                required: true
            },
            "totalPackages": {
                type: Number,
                required: true
            },
            "agentName": {
                type: String,
                required: true
            },
            "carrierName": {
                type: String,
                required: true
            },
            "totalBagsDR": {
                type: Number,
                required: true
            },
            "totalWeightDR": {
                type: Number,
                required: true
            },
            "packages": [
                {
                    "countDR": {
                        type: Number,
                        default: 0,
                        required: true
                    },
                    "countK1": {
                        type: Number,
                        default: 0,
                        required: true
                    },
                    "packageType": {
                        type: String,
                        required: true
                    },
                    "packageNo": {
                        type: String,
                        required: true
                    },
                    "weight": {
                        type: Number,
                        default: 0.0,
                        required: true
                    },
                }
            ]
        }
    ]
}, { collection: 'gatepass', versionKey: false }
)



var gatepassDB = db.model('organization', gatepass)

const callGatepass = async () => {
    var result = await gatepassDB.find()
    console.log(result[1])
}

callGatepass()


mongoose.connection.close()