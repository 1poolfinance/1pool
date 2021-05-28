const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let adminSchema = new Schema({
    "adminId" : {type: mongoose.Schema.Types.ObjectId, ref: 'admin'},
    "ipaddress" : String,   
    "browser"   : String,
    "deviceinfo": String,
    "datetime"  : {type: Date, default: Date.now },
    "status"    : {type:Number, default:1},
    "versionKey"   : false
});

module.exports = mongoose.model('adFSmDsdfDGanSDFtory', adminSchema,'adFSmDsdfDGanSDFtory');