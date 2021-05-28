const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let loginAttempts = new Schema({
      "emailid"    : {type:String,lowercase: true},
      "secret_key" : String,	
      "attemptCount" :{ type: Number, default: 1 },
      "ip_address": String,
      "browser"   : String,
      "deviceinfo": String,
      "created_at": { type: Date, default: Date.now },
      "status"    : {type:Number, default:1},
      "versionKey"   : false
});

module.exports = mongoose.model('loDFgindsftjksdwerfts',loginAttempts,'loDFgindsftjksdwerfts');