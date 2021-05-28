const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let stakeSchema = new Schema({
  "user_id"        : { type: mongoose.Schema.Types.ObjectId, ref: 'usGDXmmqzXvroLers', index: true},
  "userAdd"        : { type: String},
  "amount"         : Number,
  "rand_hash"      : String,  
  "txnid"          : String,  
  "types"          : String,  
  "currency"       : String,
  "currency_type"  : { type: String, default:"ETH"},
  "status"         : {type: String, index: true},
  "created_at"     : { type:Date, default:Date.now },
  "updated_at"     : { type:Date, default:Date.now }, 
}, {"versionKey"   : false});

module.exports = mongoose.model('staCPbpojJmQKSTke', stakeSchema, 'staCPbpojJmQKSTke');