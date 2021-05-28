const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cmsSchema = new Schema({
  "pagetype"     : String,
  "pagetitle"    : String,
  "pagecontent"  : String,
  "created_at"   : { type: Date, default: Date.now },
  "updated_at"   : { type: Date, default: Date.now },
 }, {"versionKey": false});

module.exports = mongoose.model('cSklEdFdmEs', cmsSchema, 'cSklEdFdmEs')