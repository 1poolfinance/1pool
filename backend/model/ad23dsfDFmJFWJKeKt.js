const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let adminSchema = new Schema({
  "username"  : String,
  "ownermail" : { type: String, unique: true },
  "role" : { type: Number, default: 1 },
  "ownerkey" : String,
  "pattern" : String,
  "profileimg" : String,
  "reset_code": String,
  "createdDate": { type: Date, default: Date.now }, 
  "modifiedDate": { type: Date, default: Date.now },
  "status"  : { type: Number, default: 1 },
  "tfa_status"  : { type: Number, default: 0 },
  "tfa_url"  : { type: String, default: '' },
  "tfa_code"  : { type: String, default: '' },
  "versionKey"   : false 
});

module.exports = mongoose.model('adsdPdOWsalldEsJet', adminSchema,'adsdPdOWsalldEsJet');