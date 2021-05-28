var CryptoJS = require("crypto-js");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var config = require('../config/config');
var key = "D^VnwslniRWLqRKXjrYMIt";
var iv  = "&Zo!o%hmMwFDGLxsInbCPg";

key = CryptoJS.enc.Base64.parse(key);
iv  = CryptoJS.enc.Base64.parse(iv);

module.exports = {
	encrypt : function(txt){
		return CryptoJS.AES.encrypt(txt, key,{iv:iv}).toString();
	},
	decrypt : function(txt){
		if(txt != undefined){
			var bytes  = CryptoJS.AES.decrypt(txt.toString(), key, {iv:iv});
			return bytes.toString(CryptoJS.enc.Utf8);	
		}
	},
	Pass : function(txt, cb){
		bcrypt.hash(txt, saltRounds, function(err, hash) {			
  		cb(hash);
		});
	},
	Passcmp : function(txt, key, cb){
	bcrypt.compare(txt, key, function(err, res) {
   		cb(res);
	});
},
	MulPassCmp : function(txt, passArr, cb){
		var i = 1; var len = passArr.length;		
		if(len > 0){
			passArr.forEach((val) => {
				bcrypt.compare(txt, val, function(err, res) {
					if(res) {
						cb(1); return;
	        } else {          
	   				if(i == len) {cb(0); }
	        }
	      	i = i + 1;
				});				
			});			
		}else {
			cb(0);
		}
	},
	generateRandomNumber : function(randomArr, cb){
		var i = 1; var len = randomArr.length;
		if(len > 0){
			randomArr.forEach((val) => {
				if(val != ran){
				cb(ran); return;
			} 
	      i = i + 1;		
			});
		}else {
			cb(ran);
		}
	},
	siteUrl: function(req) {
		return req.headers.origin+"/";
	},
	userUrl: function(req) {
		return req.headers.origin+"/";
	},
	adminUrl: function() {
		return "#"
	},
	firstMail: function(email) {
		return email.substr(0, 5);
	},
	secondMail: function(email) {
		return email.substr(5);
	},
	encryptemail : function(txt){
		let email = txt.substr(0, 5)
		return CryptoJS.AES.encrypt(email, key,{iv:iv}).toString();
	},
	generateRandom: function(string_length) {
		let random_string = '';
		let random_ascii;
		let ascii_low = 65;
		let ascii_high = 90
		for(let i = 0; i < string_length; i++) {
			random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
			random_string += String.fromCharCode(random_ascii)
		}
		return random_string
	},
	getQrUrl(url) {
		return 'https://chart.googleapis.com/chart?chs=168x168&chld=M|0&cht=qr&chl='+url+'';
	}
}