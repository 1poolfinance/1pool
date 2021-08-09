var express = require('express');
var router = express.Router();

var validator  = require('validator');

let wallet      = require('../../model/usXvroLGDXmmqzeErs');
let stake      = require('../../model/staDF4pojJo9QKTke');
let bridge      = require('../../model/brRfiDFd098sdfgegE');
var WAValidator = require('wallet-address-validator');
let common = require('../../helpers/comIOPsdfmFDon');
let endecrypt = require('../../helpers/xESziDlEOgEOFrP');
var pairs   = require('../../model/pa4sfdDSFIrs');


router.get('/enc',(req,res) => {
	res.json({'status' : 0, 'msg':endecrypt.encrypt('24568')});
});

router.post('/createProfile', common.originMiddleware, (req,res) => {
	try{
	  var info = req.body;
	  var valid = WAValidator.validate(info.key, 'ETH');
	  	if(valid){  		
		    wallet.findOne({userAdd:info.key}).exec(function(countErr, countRes) {
				var name = common.generateRandomNumber();
	  			var obj = {'userAdd': info.key, 'wallet' : info.wallet, 'randId' : '1Pool-'+name};
				    if(!countRes){
						wallet.create(obj, function (err, postRes) {
							if(postRes){
								var userId = postRes._id;							
	  						let authKey = common.createPayload(userId);
								res.json({status : 1, token:authKey, msg : 'User registered successfully' });
							}else{
								res.json({status : 2, msg : "User registration failed"});
							}
						});
				    }else{
					   	var userId = countRes._id;
					    let authKey = common.createPayload(userId);
					    res.json({status : 1, token:authKey, msg : "User Logged Successfully"});
					}
		    });
	  	}else {
	  		res.json({status : 0, msg : "Invalid Address"});
	  	}
	}catch(e){
		res.json({success : 401, msg:"Unauthorized",Error:e});
	}
});

router.get('/stakeHis',common.userVerify,(req,res) => {
	try{
		var info = req.body;
		let userId = req.userId;
		let validUser = validator.isMongoId(userId);
		wallet.findOne({_id:userId}).exec(function(countErr, countRes) {
	 	 	if(countRes){
				stake.find({'user_id': userId,currency_type : 'ETH'}).exec(function (err, stakeRes){ 
					if(stakeRes){
						res.json({'status' : 1, 'result':stakeRes});
					}else{
						res.json({'status' : 0, 'result':[]});
					}
				});
	 	 	}else{
	 	 		res.json({'status' : 0, 'msg':"Invalid User"});
	 	 	}
		});
	}catch(e){
		res.json({success : 401, msg:"Unauthorized",Error:e});
	}
});


router.post('/history_eth', common.userVerify, (req,res) => {
	try{
		var info = req.body;
		let userId = req.userId;
		let validUser = validator.isMongoId(userId);
				bridge.find({'userAdd': info.account,currency : 'ETH'}).exec(function (err, stakeRes){ 
					if(stakeRes){
						res.json({'status' : 1, 'result':stakeRes});
					}else{
						res.json({'status' : 0, 'result':[]});
					}
				});
	 	 
	}catch(e){
		res.json({success : 401, msg:"Unauthorized",Error:e});
	}
});


router.post('/history_bnb', common.userVerify, (req,res) => {
	try{
		var info = req.body;
		let userId = req.userId;
		let validUser = validator.isMongoId(userId);
				bridge.find({'userAdd': info.account,currency : 'BNB'}).exec(function (err, stakeRes){ 
					if(stakeRes){
						res.json({'status' : 1, 'result':stakeRes});
					}else{
						res.json({'status' : 0, 'result':[]});
					}
				});
	 	 
	}catch(e){
		res.json({success : 401, msg:"Unauthorized",Error:e});
	}
});


router.get('/stakeHis_bnb',common.userVerify,(req,res) => {
	try{
		var info = req.body;
		let userId = req.userId;
		let validUser = validator.isMongoId(userId);
		wallet.findOne({_id:userId}).exec(function(countErr, countRes) {
	 	 	if(countRes){
				stake.find({'user_id': userId,currency_type : 'BNB'}).exec(function (err, stakeRes){ 
					if(stakeRes){
						res.json({'status' : 1, 'result':stakeRes});
					}else{
						res.json({'status' : 0, 'result':[]});
					}
				});
	 	 	}else{
	 	 		res.json({'status' : 0, 'msg':"Invalid User"});
	 	 	}
		});
	}catch(e){
		res.json({success : 401, msg:"Unauthorized",Error:e});
	}
});

router.post('/stake',common.userVerify,(req,res) => {
	try{
		var info = req.body;
		let userId = req.userId;
		let validUser = validator.isMongoId(userId);
		pairs.findOne({poolid:info.poolid}).exec(function(countErr, countRes) {
	 	 	if(countRes) {
	 	 		var randHash = common.randomString(61);
		    	var obj = { 
		    		'user_id': userId, 
		    		'txnid' : info.txid, 
		    		'userAdd': info.useraddress, 
		    		'amount' : info.amount, 
		    		'types' : info.types, 
		    		'currency' : info.currency, 
		    		'currency_type' : info.currency_type, 
		    		'status' : 'Completed' 
		    	};
				stake.create(obj, function (err, postRes){ 
					if(postRes) {
						res.json({'status' : 1, 'msg':"Deposit successfully"});
					} else {
						res.json({'status' : 0, 'msg':"Deposit failed"});
					}
				});
	 	 	} else {
	 	 		res.json({'status' : 0, 'msg':"Invalid User"});
	 	 	}
		});
	}catch(e){
		res.json({success : 401, msg:"Unauthorized",Error:e});
	}
});



router.post('/eth_bridge',common.userVerify,(req,res) => {
	try{
		var info = req.body;
		pairs.findOne({poolid:1}).exec(function(countErr, countRes) {
	 	 	if(countRes) {
	 	 		var randHash = common.randomString(61);
		    	var obj = { 
		    		'amount' : info.amount, 
		    		'userAdd': info.useraddress, 
		    		'currency' : info.currency, 
		    		'transactionid' : info.txid, 
		    		'types' : info.types, 
		    		'status' : 'pending' 
		    	};
				bridge.create(obj, function (err, postRes){ 
					if(postRes) {
						res.json({'status' : 1, 'msg':"Deposit successfully"});
					} else {
						res.json({'status' : 0, 'msg':"Deposit failed"});
					}
				});
	 	 	} else {
	 	 		res.json({'status' : 0, 'msg':"Invalid User"});
	 	 	}
		});
	}catch(e){
		res.json({success : 401, msg:"Unauthorized",Error:e});
	}
});

router.post('/bnb_bridge',common.userVerify,(req,res) => {
	try{
		var info = req.body;
		pairs.findOne({poolid:1}).exec(function(countErr, countRes) {
	 	 	if(countRes) {
	 	 		var randHash = common.randomString(61);
		    	var obj = { 
		    		'amount' : info.amount, 
		    		'userAdd': info.useraddress, 
		    		'currency' : info.currency, 
		    		'transactionid' : info.txid, 
		    		'types' : info.types, 
		    		'status' : 'pending' 
		    	};
				bridge.create(obj, function (err, postRes){ 
					if(postRes) {
						res.json({'status' : 1, 'msg':"Deposit successfully"});
					} else {
						res.json({'status' : 0, 'msg':"Deposit failed"});
					}
				});
	 	 	} else {
	 	 		res.json({'status' : 0, 'msg':"Invalid User"});
	 	 	}
		});
	}catch(e){
		res.json({success : 401, msg:"Unauthorized",Error:e});
	}
});


router.post('/update_bnb',common.userVerify,(req,res) => {
	try{
		var info = req.body;
				bridge.update({ transactionid : info.transactionid }, { $set : {status:"completed"} }, (err, updateRes) => {
					if(updateRes) {
						res.json({'status' : 1, 'msg':"Deposit successfully"});
					} else {
						res.json({'status' : 0, 'msg':"Deposit failed"});
					}
				});
	 	 	
		
	}catch(e){
		res.json({success : 401, msg:"Unauthorized",Error:e});
	}
});



router.post('/getxid',common.userVerify,(req,res) => {
	try{
		var info = req.body;
		bridge.findOne({transactionid:info.txid,status:"pending"}).exec(function(countErr, countRes) {
	 	 	if(countRes) {
				res.json({'status' : 1, 'msg':"Deposit successfully",data : countRes});
	 	 	} else {
	 	 		res.json({'status' : 0, 'msg':"No data found",data:info.txid});
	 	 	}
		});
	}catch(e){
		res.json({success : 401, msg:"Unauthorized",Error:e});
	}
});



router.get('/pairHis',common.userVerify,(req,res) => {
	try{
		pairs.find({currency_type : 'ETH', status: 1}).exec(function(countErr, countRes) {
	 	 	if(countRes){
				res.json({'status' : 1, 'result':countRes});
			}else{
	 	 		res.json({'status' : 0, 'msg':"Somthing went to wrong. Please try again later."});
	 	 	}
		});
	}catch(e){
		res.json({success : 401, msg:"Unauthorized",Error:e});
	}
});

router.get('/pairHis_bnb',common.userVerify,(req,res) => {
	try{
		pairs.find({currency_type : 'BNB', status: 1}).exec(function(countErr, countRes) {
	 	 	if(countRes){
				res.json({'status' : 1, 'result':countRes});
			}else{
	 	 		res.json({'status' : 0, 'msg':"Somthing went to wrong. Please try again later."});
	 	 	}
		});
	}catch(e){
		res.json({success : 401, msg:"Unauthorized",Error:e});
	}
});

module.exports = router;