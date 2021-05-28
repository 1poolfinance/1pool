var express  = require('express');
var router   = express.Router();
let cms      = require('../../model/cmajklUklEs');
let common   = require('../../helpers/comIOPsdfmFDon');
var admin    = require('../../model/ad23dsfDFmJFWJKeKt');
let endecrypt = require('../../helpers/xESziDlEOgEOFrP');
let faq       = require('../../model/fa53FDSuioD');
var settings  = require('../../model/sidtJIungssfDFetJR');

let updatedDate = ()=>{
	return new Date();
};

router.get('/get_cms', common.tokenMiddleware, (req,res) => {
	cms.find({ }).sort({'updated_at': -1}).exec(function(error,resData){
		if (error) {
			return next(error);
		}
		if(resData){
			res.json({status : true, data : resData });
		}
	})
});

router.post('/post_cms', (req,res) => {
	cms.find({"pagetype":req.body.pagehint},{_id:0}).select("pagecontent pagetitle").exec(function(error,resData){
		if (error) {
			return next(error);
		}
		if(resData){
			res.json({status : true, data : resData });
		}
	})
});

router.get('/cms/:id', common.tokenMiddleware, (req,res) => {
	var id = req.params.id;
	cms.findOne({"_id": id}).exec(function(error,resData){
		if (error) {
			return next(error);
		}
		if(resData){
			res.json({status : true, data : resData });
		}
	})
});

router.post('/cmsUpdate',common.tokenMiddleware, (req,res) => {
	let info = req.body;
	let obj = {
		"pagetitle" : info.pagetitle,
		"pagecontent" : info.pagecontent,
		"updated_at" : updatedDate()
	};
	cms.updateOne({ "_id": info._id},{ "$set": obj },{multi: true}).exec(function(err, resUpdate){
		if(resUpdate) {
			response = {status : true, msg : "Successfully updated"};
		} else {
			response = {status : false, msg : "Invalid request. Please try again"};
		}
		res.json(response);	
	});
});

router.get('/faq',common.tokenMiddleware, (req,res) => {
	faq.find({ }).sort({created_at: -1}).exec(function(error,resData){
		if (error) {
			return next(error);
		}
		res.json({status : true, data : resData });		
	})
});

router.get('/get_faq', (req,res) => {
	faq.find({status:1},{_id:0}).select("question answer").sort({created_at: -1}).exec(function(error,resData){
		if (error) {
			return next(error);
		}		
		res.json({status : true, data : resData });		
	})
});

router.get('/faq/:id', common.tokenMiddleware, (req,res) => {
	var id = req.params.id;
	faq.findOne({"_id": id}).exec(function(error,resData){
		if (error) {
			return next(error);
		}
		if(resData){
			res.json({status : true, data : resData });
		}
	})
});

router.post('/faqUpdate',common.tokenMiddleware, (req,res) => {
	let info = req.body;
	let obj = {
		"question" : info.question,
		"answer" : info.answer,
		"status" : info.status,
		"updated_at" : updatedDate()
	};
	faq.findOneAndUpdate({ "_id": info._id},{ "$set": obj },{multi: true}).exec(function(err, resUpdate){
		if(resUpdate) {
			response = {status : true, msg : "Successfully updated"};
		} else {
			response = {status : false, msg : "Invalid request. Please try again"};
		}
		res.json(response);	
	});
});

router.post('/faqAdd',common.tokenMiddleware, (req,res) => {
	var info = req.body;
	let obj = {		
		"question" : info.question,
		"answer" : info.answer,
		"status" : info.status
	};
	faq.find({'question':info.question}).exec(function (error, existData) {
		if (error) {
			return next(error);
		}
		if(existData.length > 0) {
			res.json({ status : false, msg : "FAQ already exist!" });
		} else {
			faq.create( obj, function(err,result) {      
				if(result)	{
					res.json({ status : true, msg : "Successfully added" });
				} else {
					res.json({ status : false, msg : "Something went wrong. Please try again"});
				}
			});
		}
	});
});

router.get('/faqDelete/:id', common.tokenMiddleware, (req, res) => {
	var id = req.params.id;
	faq.findOneAndRemove({"_id": id}).exec(function(err,resData){     
		if(resData){
			res.json({status : true, msg : "Successfully deleted"});
		} else {
			res.json({ status : false, msg : "Something went wrong. Please try again" });
		}              
	});

});

router.get('/get_site', common.originMiddleware, (req,res) => {

	settings.findOne({},{}).exec(function(error,resData){
		if (error) {
			return res.json({status : false});
		}
		if(resData){
			res.json({status : true, data : resData });
		} 
	});
});

module.exports = router;