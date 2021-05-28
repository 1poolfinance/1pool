var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
let common   = require('../../helpers/comIOPsdfmFDon');
var pairs    = require('../../model/pa4sfdDSFIrs');
var stake    = require('../../model/staDF4pojJo9QKTke');
var async    = require('async');

let updatedDate = ()=>{
	return new Date();
};


router.get('/pairs', common.tokenMiddleware, (req,res) => {
	pairs.find({ }).exec(function(error,resData){
		if (error) {
			return next(error);
		}
		res.json({status : true, data : resData });
	})
});

router.get('/editPair/:id', (req,res) => {
	var id = req.params.id;	
	pairs.find({"_id": id}).exec(function(error,resData){
		if (error) {
			return next(error);
		}
		if(resData){
			res.json({status : true, data : resData });
		}
	})
});

router.post('/pairStatus',common.tokenMiddleware, (req,res) => {
	let info = req.body;
	let sts = info.status==1?0:1;
	let obj = {
		"status" : sts,
		"modifiedDate" : updatedDate()
	};
	var selPair = info.from_symbol+"_"+info.to_symbol;
	pairs.findOneAndUpdate({ "_id": info._id},{ "$set": obj },{multi: true}).exec(function(err, resUpdate){
		if(resUpdate) {
			response = {status : true, msg : "Successfully updated"};
		} else {
			response = {status : false, msg : "Invalid request. Please try again"};
		}
		res.json(response);	
	});
});

router.post('/pairUpdate',common.tokenMiddleware, (req,res) => {
	let info = req.body;
	let obj = {   	
		"symbol" : info.symbol,  	
		"address" : info.address,  	
		"decimals" : info.decimals,  	
		"status" : info.status,
		"price" : info.price,    	
		"created_at" : updatedDate()
	};
	var selPair = info.symbol;
	pairs.updateOne({ "_id": info._id},{ "$set": obj }).exec(function(err, resUpdate){
		if(resUpdate) {
			response = {status : true, msg : "Successfully updated"};
		} else {
			response = {status : false, msg : "Invalid request. Please Try again"};
		}
		res.json(response);	
	});
});

router.get('/totalprice', common.tokenMiddleware, (req,res) => {
	let userId = req.userId;
	async.parallel({
		pairInfo:function(cb) {
			pairs.find({},{price:1, symbol:1, _id:0}).exec(cb)
		},
		stakeInfo:function(cb) {
			stake.find({},{_id:0, amount:1, currency:1}).exec(cb)
		},	
	},function(err,results){
		if (err) return res.status(500).send(err);
		let pairData = results.pairInfo;
		let stakeData = results.stakeInfo; 
		let info = {"pairs": pairData,"stakes":stakeData}
		res.json({status : true, data : info });
	});
});

module.exports = router;