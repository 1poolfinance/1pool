const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blockipSchema = new Schema({
  "ip_addr"   : {type: String, index: true},
  "email"     : {type: String, index: true},
  "status"    : {type: Number, default:1},
  "created_at": { type: Date, default: Date.now },
  "versionKey": false
});

module.exports = mongoose.model('blFDocdskiDfp', blockipSchema, 'blFDocdskiDfp');
