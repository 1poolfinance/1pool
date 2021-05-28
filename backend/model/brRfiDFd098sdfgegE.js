const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let stakeSchema = new Schema({
  "userAdd"        : { type: String},
  "currency"         : { type: String},
  "transactionid"      : { type: String},  
  "amount"          : { type: String},  
  "status"          : { type: String},  
  "date"     : { type:Date, default:Date.now },
}, {"versionKey"   : false});

module.exports = mongoose.model('BriKSJGJKSK', stakeSchema, 'BriKSJGJKSK');