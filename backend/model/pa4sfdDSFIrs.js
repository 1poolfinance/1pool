var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pairsSchema = new Schema({
	"symbol"  		: { type: String, index: true },
	"address" 		: { type:String, default:'' },
	"decimals" 		: { type:Number, default:0 },
	"status"      : { type:Number, default:1, index: true},
	"poolid"      : { type:String, default:"", index: true},
	"price"       : { type: String, default:""},
	"created_at"  : { type:Date, default:Date.now },
	"updated_at"  : { type:Date, default:Date.now },
	"versionKey"  : false,
});

module.exports = mongoose.model('paiHdfjsEuuhcir', pairsSchema, 'paiHdfjsEuuhcir')