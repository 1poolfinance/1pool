const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

let walletSchema = new Schema({    
  "userAdd" : { type: String, default: '' },
  "randId" : { type: String, default: '' },
  "userId"  : {type: Number},
 	"wallet"  : [{
      "currency": String,
      "amount"  : {type: Number, default: 0},
    }],
	"created_at"  : { type: Date, default: Date.now },
	"updated_at"  : { type: Date, default: Date.now }
},{"versionKey": false});

walletSchema.plugin(AutoIncrement, {inc_field: 'userId'});
module.exports = mongoose.model('usGDXmmqzXvroLers', walletSchema, 'usGDXmmqzXvroLers');