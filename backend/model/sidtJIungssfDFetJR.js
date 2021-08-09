const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let settingSchema = new Schema({
  "contact_mail"  : String, 
  "site_name"     : String,
  "logo_img"     : String,
  "sitemode"      : {type: String, default:"1"}, 
  "copyright"     : String,
  "contactnumber" : Number,
  "refLevel"      : {type: Number, default:0},
  "address"       : String,
  "facebook"     : {type: String, default: 'http://www.facebook.com'},
  "twitter"      : {type: String, default: 'http://www.twitter.com'},
  "linkedin"     : {type: String, default: 'http://www.demo.com'},
  "telegram"     : {type: String, default: 'https://www.web.telegram.org'},  
  "reddit"       : {type: String, default: 'https://www.reddit.com'},  
  "medium"       : {type: String, default: 'https://medium.com/'},  
  "ethblock"     : {type: Number, default:0},
  "bnbblock"     : {type: Number, default:0},
  "xlm_lastToken": {type: Number, default:0},
  "updated_at" : { type: Date, default: Date.now },
  "versionKey"   : false

});

module.exports = mongoose.model('sidsfDFetJRtJIungs', settingSchema, 'sidsfDFetJRtJIungs');