var express = require('express');
var multer  = require('multer');
var validator = require('validator');
var path = require('path');
var async  = require('async');
var moment = require('moment');
var router = express.Router();
var mongoose = require('mongoose');
var useragent = require('useragent');
var speakeasy = require('speakeasy');
var qrcode    = require('qrcode');
let common = require('../../helpers/comIOPsdfmFDon');
let endecrypt = require('../../helpers/xESziDlEOgEOFrP');

var admin = require('../../model/ad23dsfDFmJFWJKeKt');
var adminhis = require('../../model/adDF3dsD4rry');
var loginAttempts = require('../../model/loFDgdsftjksdts');
var settings = require('../../model/sidtJIungssfDFetJR');
var blockip = require('../../model/blo84D4sdDFidpd');
var stake = require('../../model/staDF4pojJo9QKTke');
var bridge = require('../../model/brRfiDFd098sdfgegE');
var pairs = require('../../model/pa4sfdDSFIrs');
var users = require('../../model/usXvroLGDXmmqzeErs');

var storage = multer.diskStorage({
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
});
var upload = multer({ storage: storage });

let updatedDate = ()=>{
	return new Date();
};

let response = {};

router.get('/getaccdetails',(req,res)=>{
	try{
		var ipaddress  = require("../../config/addipAnshd.json");
		let ip         = req.header('x-forwarded-for') || req.connection.remoteAddress;
		ip             = ip.replace('::ffff:', '');
		if(ip =="::1"){
			res.json({
				status : true,
				data   : "ok",
			});
		}else if(ipaddress.indexOf(ip) !== -1){
			res.json({
				status : true,
				data   : "ok",
			});
		}else{
			res.json({
				status : false,
				data   : "not_ok",
			});
		}
	} catch(e) {
	}
});

router.get('/checktfa', (req,res) => {
	admin.findOne({},{tfa_code:1,ownermail:1,tfa_url:1,tfa_status:1}).exec(function(error,resData){
		if (error) {
			return res.json({status : false});
		}
		if(resData){
			if(resData.tfa_status == 0){
				var qrName = `One Pool (${resData.ownermail})`;
				var secret = speakeasy.generateSecret({
					length: 10,
					name: qrName
				});
				var url = endecrypt.getQrUrl(secret.otpauth_url);							
				updatedRule = { tfa_status: 1, tfa_code : secret.base32, tfa_url : url};
				admin.updateOne({ "_id": resData._id },{ "$set": updatedRule }).exec(function(err, resUpdate){
					admin.findOne({},{tfa_code:1,ownermail:1,tfa_url:1,tfa_status:1}).exec(function(error,resData){
						res.json({status : true, data : resData });
					});
				})
			}else{
				res.json({status : true, data : resData });
			}
		} 
	})
});

router.post('/updateTfa', common.tokenMiddleware, (req, res) => {
	try {
		let info = req.body;
		let status;
		admin.findOne({},{tfa_code:1,ownermail:1,tfa_url:1,tfa_status:1}).exec(function(err,userRes){
			var verified = speakeasy.totp.verify({
				secret  : userRes.tfa_code,
				encoding: 'base32',
				token   : info.secret
			});
			let userValidation = validator.isMongoId(req.userId);
			if(verified && userValidation) {			
				if(userRes.tfa_status == 0){
					updatedRule = { tfa_status: 1}
					status = 'enabled';
				} else {
					var qrName = `One Pool (${userRes.ownermail})`;
					var secret = speakeasy.generateSecret({
						length: 10,
						name: qrName
					});
					var url = endecrypt.getQrUrl(secret.otpauth_url);							
					updatedRule = { tfa_status: 0, tfa_code : secret.base32, tfa_url : url};
					status = 'disabled';
				}
				admin.updateOne({ "_id": req.userId },
					{ "$set": updatedRule }).exec(function(err, resUpdate){
						if(err) {
							res.status(500).send("Something went wrong. Please try again");
						}
						else {
							res.json({
								status : true,						
								result : updatedRule												
							});
						}
					});			    
				}
				else{
					res.json({
						status: false,
						msg   : "Invalid 2FA Code"
					});
				}
			});
	}
	catch(e) {
		res.status(401).send('unauthorized')
	}
});

router.get('/check_maintain', common.originMiddleware, function(req, res) {
	var agent = useragent.parse(req.headers['user-agent']);
	let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
	ip = ip.replace('::ffff:', '');
	blockip.find({"ip_addr": ip }).countDocuments().exec(function(error,resData){
		if(resData != 0){
			return res.json({success:2});			 	
		}if(resData == 0){
			settings.findOne({}).exec(function(err,site){
				if(site.sitemode == "0"){
					return res.json({success:3});
				}else {
					return res.json({success:1});
				}
			});
		}
	});
});


router.get('/blockip', function(req, res, next) {
	var agent = useragent.parse(req.headers['user-agent']);
	let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
	ip = ip.replace('::ffff:', '');	
	let obj = {
		"ip_addr" : ip								
	}; 
	blockip.findOne({"ip": ip }).exec(function(error,resData){
		if(resData)
		{
			res.json({status:false, msg:"Ip blocked"});
		}else{
			res.json({status:true, msg:"Ip not blocked"});
		}
	});		
});

router.get('/getblockip',(req,res) => {
	blockip.find({ }).sort({created_at: -1}).exec(function(error,resData){
		if (error) {
			return res.json({status : false });
		}
		res.json({status : true, data : resData });
	})
});

router.post('/addBlockip',common.tokenMiddleware, (req,res) => {
	var info = req.body;
	let obj = {
		"ip_addr" : info.ip
	};
	blockip.find({'ip_addr':info.ip}).exec(function (error, existData) {
		if (error) {
			return res.json({ status : false, msg : "Something went wrong. Please try again"});
		}
		if(existData.length > 0) {
			res.json({ status : false, msg : "IP already exist!" });
		} else {
			blockip.create( obj, function(err,result) {      
				if(result)	{        
					res.json({ status : true, msg : "Successfully added" });
				} else {
					res.json({ status : false, msg : "Something went wrong. Please try again"});
				}
			});
		}
	});
});

router.post('/blockEmail',common.tokenMiddleware, (req,res) => {
	var info = req.body;
	var agent = useragent.parse(req.headers['user-agent']);
	let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
	ip = ip.replace('::ffff:', '');
	let obj = {
		"email"   : info.email,
	};
	blockip.find({'email':info.email}).exec(function (error, existData) {
		if (error) {
			return res.json({ status : false, msg : "Something went wrong. Please try again"});
		}
		if(existData.length > 0) {
			res.json({ status : false, msg : "Email already exist!" });
		} else {
			blockip.create( obj, function(err,result) {      
				if(result)	{        
					res.json({ status : true, msg : "Successfully added" });
				} else {
					res.json({ status : false, msg : "Something went wrong. Please try again"});
				}
			});
		}
	});
});

router.get('/ipDelete/:id', common.tokenMiddleware, (req, res) => {
	var id = req.params.id;
	blockip.findOneAndRemove({"_id": id}).exec(function(err,resData){    
		if(resData){			
			loginAttempts.findOneAndRemove({"ip_address":resData.ip_addr}).exec(function(error,resD){	
				signup.findOneAndRemove({"ip_address":resData.ip_addr}).exec(function(err,ext){
					res.json({status : true, msg : "Successfully deleted"});				
				});
			});		
		} else {
			res.json({ status : false, msg : "Something went wrong. Please try again" });
		}              
	});    
});

router.get('/settings', (req,res) => {
	settings.findOne({}).exec(function(error,resData){
		if (error) {
			return res.json({status : false});
		}
		if(resData){
			res.json({status : true, data : resData });
		} 
	})
})

router.get('/profile',common.tokenMiddleware, (req,res) => {
	let id = req.userId;
	admin.findOne({"_id": id},{ownermail:1,username:1,profileimg:1,tfa_code:1,tfa_url:1,tfa_status:1}).exec(function(error,resData){

		if (error) {
			return next(error);
		}
		if(resData){
			res.json({status : true, data : resData });
		}
	});
});

router.post('/chklogin', function(req, res, next) {
	let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
	ip = ip.replace('::ffff:', '');
	var agent = useragent.parse(req.headers['user-agent']);
	var os = agent.os.toString().split(' ')[0];
	var browser = agent.toAgent().split(' ')[0];
	let ownermail = req.body.email;
	let password = endecrypt.encrypt(req.body.password);
	let pattern = endecrypt.encrypt(req.body.pattern);

	admin.findOne({$and:[{ ownermail : ownermail, ownerkey : password, pattern : pattern }]}).exec(function (error, resData) {
		if (error) {
			return next(error);
		}
		if(resData) {
			if(resData.status==1){						
				let obj = {
					"adminId": resData._id,			  
					"ipaddress" : ip,
					"browser"   : browser,
					"deviceinfo": os,
					"status"    : 2 
				};
				adminhis.create( obj, function(err,result) { 

					let  Key = common.createPayload(resData._id);
					if(result)
					{
						var userId = resData._id;
						var encUserId = endecrypt.encrypt(userId.toString())
						if(resData.tfa_status == 1) {
							return res.json({status:2, ttoken:encodeURIComponent(encUserId)});
						}
						loginAttempts.findOneAndRemove({"emailid":resData.ownermail}).exec(function(error,resData1){
							if(resData1)
							{
								res.json({status:1, Key: Key, session : resData._id, name : resData.username, role : resData.role,access_module:resData.access_module,success: 'You are logging in. Please Wait.'});
							}
							else 
							{
								res.json({status:1, Key: Key, session : resData._id, name : resData.username, role : resData.role, success: 'You are logging in. Please Wait.'});
							}
						});
					}				

				});
			}else if(resData.status==0){
				response.status= false; 
				response.error = "Your Account is deactivated!"  
				res.json(response)  
			} 
		}else {
			Ipblock(req,res)		
		}
	});			
});

function Ipblock(info,res){ 
	let ip = info.header('x-forwarded-for') || info.connection.remoteAddress;
	ip = ip.replace('::ffff:', '');
	var agent = useragent.parse(info.headers['user-agent']);
	var os = agent.os.toString().split(' ')[0];
	var browser = agent.toAgent().split(' ')[0];
	var search = {"emailid":info.body.email,"ip_address":ip};
	async.parallel({
		attemptRst:function(cb) {
			loginAttempts.findOne(search).select('attemptCount').exec(cb)
		},
	},function(err,results){
		if (err) return res.status(500).send(err);
		if(results.attemptRst!=null){ 
			if(results.attemptRst.attemptCount > 4){   
				let object = {"ip_addr":ip,"created_at":updatedDate(),"status":2};         
				blockip.create(object,function(err,result){
					if(result){
						response.status= 401;  
						response.error = "Ip blocked" 
						res.json(response) 
					}
				});
			}
			else{         
				loginAttempts.findOne({"ip_addr":ip}).exec(function(error,resData){
					if(resData){            
						let attemptCount = resData.attemptCount + 1;             
						loginAttempts.updateOne({"_id": resData._id},{ $set: {"attemptCount":+attemptCount,"status":0} }).exec(function(err,resUpdate) {               
							if(resUpdate){
								response.status= false; 
								response.error = "Invaild Email/Password or Pattern"  
								res.json(response)  
							}
						});              
					}
				});                            
			}
		}
		else{
			let attempt={
				"emailid":info.body.email,
				"secret_key":info.body.password,
				"ipaddress":ip,
				"browser":browser,
				"deviceinfo":os,
				"status":0,
				"datetime":updatedDate()
			}
			loginAttempts.create(attempt, function(err,result){               
				if(result){
					response.status    = false; 
					response.error = "Invaild Email/Password or Pattern"  
					res.json(response)  
				}
			}); 
		} 

	})
}

router.post('/tfaLogin', (req, res) => {
	try{
		var info = req.body;
		var userId = endecrypt.decrypt(decodeURIComponent(info.ttoken));
		admin.findOne({"_id":userId}).exec(function(err,resData){
			var verified = speakeasy.totp.verify({
				secret  : resData.tfa_code,
				encoding: 'base32',
				token   : info.tfa_code,
				window  : 1
			});
			if(verified == true){
				let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
				ip = ip.replace('::ffff:', '');
				var agent = useragent.parse(req.headers['user-agent']);
				var os = agent.os.toString().split(' ')[0];
				var browser = agent.toAgent().split(' ')[0];
				let obj = {
					user_id : userId,
					ip_address : ip,
					browser : browser,
					deviceinfo : os
				};					
				var encUserId = endecrypt.encrypt(userId.toString())
				let authKey = common.createPayload(userId);
				res.json({status:true, Key:authKey, session : resData._id, name : resData.username, role : resData.role, success: 'You are logging in. Please Wait.'});
				let val = {
					"adminId": resData._id,			  
					"ipaddress" : ip,
					"browser"   : browser,
					"deviceinfo": os,
					"status"    : 2 
				};
				adminhis.create( val, function(err,result) {      
				});
			}
			else{
				res.json({status: false, msg : "Invalid 2FA Code"});
			}
		});
	}
	catch(e)
	{		
	}   

});

router.post('/userlist', common.tokenMiddleware, function(req, res, next) {
	var info = req.body;	
	var filter = info.filter || '';
	var pageNo = parseInt(info.pageIndex) || 0;
	var sortOrder = info.sortOrder;
	var size = parseInt(info.pageSize);
	var sortName = info.sortActive;
	var srt   = {}
	srt[sortName] = (sortOrder == 'desc') ? -1 : 1;

	var query = {};
	query.sort = srt;
	query.skip = size * pageNo;
	query.limit = size;
	var search = {};
	var regex = new RegExp(filter, "i");
	if(filter !="") {
		var fl = filter.toLowerCase();			
		if(moment(filter, "YYYY-MM-DD h:mm:ss").isValid()) {
			var newDate = "";
			var newDate1 = "";
			var searchDate = new Date(filter);
			var srdate = new Date(filter);
			searchDate.setDate( searchDate.getDate());
			srdate.setDate( srdate.getDate() + 1 ); 
			newDate = searchDate.toISOString();
			newDate1 = srdate.toISOString();																
			search = {$or:[{'userAdd': regex},{'randId': regex},{'updated_at': { $gte: new Date(newDate), $lt: new Date(newDate1)}}]};
		}else{
			search = {$or:[{'userAdd': regex},{'randId': regex}]};
		}		
	}			
	else {
		search = {$or:[{'userAdd': regex},{'randId': regex}]};
	}	
	async.parallel({
		usersCount:function(cb) {
			users.find(search).countDocuments().exec(cb)
		},
		usersData:function(cb) {
			users.find(search, {userAdd:1,randId:1,wallet:1,updated_at:1 }, query).exec(cb)
		},
	},function(err,results){
		if (err) return res.status(500).send(err);
		response.status    = true;
		response.data      = results.usersData;
		response.usersCount = results.usersCount;
		res.json(response);
	})
});

router.post('/stakehistory', common.tokenMiddleware, function(req, res, next) {
	var info = req.body;	
	var filter = info.filter || '';
	var pageNo = parseInt(info.pageIndex) || 0;
	var sortOrder = info.sortOrder;
	var size = parseInt(info.pageSize);
	var sortName = info.sortActive;
	var srt   = {}
	srt[sortName] = (sortOrder == 'desc') ? -1 : 1;

	var query = {};
	query.sort = srt;
	query.skip = size * pageNo;
	query.limit = size;
	var search = {};
	var regex = new RegExp(filter, "i");
	if(filter !="") {
		var fl = filter.toLowerCase();			
		if(moment(filter, "YYYY-MM-DD h:mm:ss").isValid()) {
			var newDate = "";
			var newDate1 = "";
			var searchDate = new Date(filter);
			var srdate = new Date(filter);
			searchDate.setDate( searchDate.getDate());
			srdate.setDate( srdate.getDate() + 1 ); 
			newDate = searchDate.toISOString();
			newDate1 = srdate.toISOString();																
			search = {$or:[{'userAdd': regex},{'txnid': regex},{'currency': regex},{'status': regex},{'types': regex},{'currency_type': regex},{'updated_at': { $gte: new Date(newDate), $lt: new Date(newDate1)}}]};
		}else{
			search = {$or:[{'userAdd': regex},{'txnid': regex},{'currency': regex},{'status': regex},{'types': regex},{'currency_type': regex}]};
		}		
	}			
	else {
		search = {$or:[{'userAdd': regex},{'txnid': regex},{'currency': regex},{'status': regex},{'types': regex},{'currency_type': regex}]};
	}	
	async.parallel({
		stakeCount:function(cb) {
			stake.find(search).countDocuments().exec(cb)
		},
		stakeData:function(cb) {
			stake.find(search, {userAdd:1,txnid:1,currency:1,currency_type:1, status:1, updated_at:1, amount:1, types:1 }, query).exec(cb)
		},
	},function(err,results){
		if (err) return res.status(500).send(err);
		response.status    = true;
		response.data      = results.stakeData;
		response.stakeCount = results.stakeCount;
		res.json(response);
	})
});

router.post('/bridgehistory', common.tokenMiddleware, function(req, res, next) {
	var info = req.body;	
	var filter = info.filter || '';
	var pageNo = parseInt(info.pageIndex) || 0;
	var sortOrder = info.sortOrder;
	var size = parseInt(info.pageSize);
	var sortName = info.sortActive;
	var srt   = {}
	srt[sortName] = (sortOrder == 'desc') ? -1 : 1;

	var query = {};
	query.sort = srt;
	query.skip = size * pageNo;
	query.limit = size;
	var search = {};
	var regex = new RegExp(filter, "i");
	if(filter !="") {
		var fl = filter.toLowerCase();
		if(moment(filter, "YYYY-MM-DD h:mm:ss").isValid()) {
			var newDate = "";
			var newDate1 = "";
			var searchDate = new Date(filter);
			var srdate = new Date(filter);
			searchDate.setDate( searchDate.getDate());
			srdate.setDate( srdate.getDate() + 1 ); 
			newDate = searchDate.toISOString();
			newDate1 = srdate.toISOString();																
			search = {$or:[{'userAdd': regex},{'transactionid': regex},{'currency': regex},{'status': regex},{'types': regex},{'currency_type': regex},{'date': { $gte: new Date(newDate), $lt: new Date(newDate1)}}]};
		}else{
			search = {$or:[{'userAdd': regex},{'transactionid': regex},{'currency': regex},{'status': regex}]};
		}		
	}			
	else {
		search = {$or:[{'userAdd': regex},{'transactionid': regex},{'currency': regex},{'status': regex},{'types': regex},{'currency_type': regex}]};
	}	
	async.parallel({
		bridgeCount:function(cb) {
			bridge.find(search).countDocuments().exec(cb)
		},
		bridgeData:function(cb) {
			bridge.find(search, {userAdd:1,transactionid:1,currency:1,status:1, date:1, amount:1 }, query).exec(cb)
		},
	},function(err,results){
		if (err) return res.status(500).send(err);
		response.status    = true;
		response.data      = results.bridgeData;
		response.bridgeCount = results.bridgeCount;
		res.json(response);
	})
});

router.post('/loghistory', function(req, res, next) {
	var info = req.body;	
	var filter = info.filter || '';
	var pageNo = parseInt(info.pageIndex) || 0;
	var sortOrder = info.sortOrder;
	var size = parseInt(info.pageSize);
	var sortName = info.sortActive;
	var srt   = {}
	srt[sortName] = (sortOrder == 'desc') ? -1 : 1;

	var query = {};
	query.sort = srt;
	query.skip = size * pageNo;
	query.limit = size;

	var search = {};
	var regex = new RegExp(filter, "i");
	if(filter !="") {
		var fl = filter.toLowerCase();
		if(moment(filter, "YYYY-MM-DD h:mm:ss").isValid()) {
			var newDate = "";
			var newDate1 = "";
			var searchDate = new Date(filter);
			var srdate = new Date(filter);
			searchDate.setDate( searchDate.getDate());
			srdate.setDate( srdate.getDate() + 1 ); 
			newDate = searchDate.toISOString();
			newDate1 = srdate.toISOString();																
			search = {$or:[{'ipaddress': regex}, 
			{'browser': regex},{'deviceinfo': regex},{'datetime': { $gte: new Date(newDate), $lt: new Date(newDate1)}}]};
		}else{
			search = {$or:[{'ipaddress': regex}, 
			{'browser': regex},{'deviceinfo': regex}]};
		}
	}			
	else {
		search = {$or:[{'ipaddress': regex}, 
		{'browser': regex},{'deviceinfo': regex}]};	
	}	
	async.parallel({
		logCount:function(cb) {
			adminhis.find(search).countDocuments().exec(cb)
		},
		logData:function(cb) {
			adminhis.find(search, {ipaddress:1,browser:1,deviceinfo:1,datetime:1 }, query).exec(cb)
		},
	},function(err,results){
		if (err) return res.status(500).send(err);
		response.status    = true;
		response.data      = results.logData;
		response.logCount = results.logCount;
		res.json(response);
	})
});


router.get('/admin_access', common.tokenMiddleware, (req,res) => {
	let id = req.userId;
	admin.findOne({"_id": id},{_id:0}).select("role").exec(function(error,resData){
		if (error) {
			return res.json({status : false});
		}
		if(resData){			
			res.json({status : true, data : resData });
		}
	})
});


router.post('/site_settings',common.tokenMiddleware, function (req,res) {
	let info = req.body;	
	settings.updateOne({_id: info._id},{$set : info}).exec(function(err,results){
		if(results){								
			res.json({ status : true,	msg : "Succesfully updated", data:info });				
		}
		else { 
			res.json({ status : false, msg : "Something went wrong. Please try again"	});
		}
	});	
});

router.get('/profile',common.tokenMiddleware, (req,res) => {
	let id = req.userId;
	admin.findOne({"_id": id},{ownermail:1,username:1,profileimg:1}).exec(function(error,resData){
		if(resData){
			res.json({status : true, data : resData });
		}else{
			res.json({status : false, msg: "Invaild Request"});
		}		
	});
});

router.post('/updateProfile',common.tokenMiddleware, function (req,res) {
	let info = req.body;
	let obj = {
		"username" : info.username,
		"modifiedDate" : updatedDate()
	};
	admin.findOneAndUpdate({ "_id": info._id}, { $set: obj},{multi: true}).exec(function(err, resUpdate){
		if(resUpdate) {			
			res.json({status : true, msg : "Successfully updated", data : ''});
		} else {
			res.json({status : false, msg : "Invalid request. Please Try again"});
		}
	});
});

router.post('/updatePass',common.tokenMiddleware, (req,res) => {
	var request = req.body;
	try {
		let userId = req.userId;
		let validUser = validator.isMongoId(userId);
		if(validUser){
			admin.findOne({"_id": userId}).select("ownerkey").exec(function(PassErr,passRes){      
				if(passRes){
					let encryptedcurpass = endecrypt.encrypt(request.curpass);   
					if(passRes.ownerkey == encryptedcurpass) {
						let encryptepass = endecrypt.encrypt(request.newpass);   
						admin.findOneAndUpdate({ "_id": userId},{ "$set": {"ownerkey" : encryptepass}},{multi: true}).exec(function(err, resUpdate){
							if(resUpdate) {
								res.json({status : true, msg : "Successfully updated", id : userId});
							} else {
								res.json({status : false,	msg : "Password is not updated. Please Try again"	});
							}
						});
					} else {
						res.json({ status : false, msg  : "Current password is wrong"});
					}
				}
			});	
		}else {
			res.json({status:false, msg:"Invaild Request"});
		}
	} catch (e) {
		res.json({status:false, msg:"Unauthorized"});
	}
});

router.post('/updatePat',common.tokenMiddleware, (req,res) => {
	var request = req.body;
	try {
		let userId = req.userId;
		let validUser = validator.isMongoId(userId);
		if(validUser){
			admin.findOne({"_id": userId}).select("pattern").exec(function(PassErr,passRes){     
				if(passRes){
					let encryptedcurpattern = endecrypt.encrypt(request.curpattern);   
					if(passRes.pattern == encryptedcurpattern) {
						let encryptepattern = endecrypt.encrypt(request.newpattern);   
						admin.findOneAndUpdate({ "_id": userId},{ "$set": {"pattern" : encryptepattern}},{multi: true}).exec(function(err, resUpdate){
							if(resUpdate) {
								res.json({ status : true,	msg : "Successfully updated", id :userId});
							} else {
								res.json({status : false,	msg : "Pattern is not updated. Please Try again"});
							}
						});
					} else {
						res.json({ status : false, msg : "Current Pattern is wrong"});
					}
				}
			});	
		}else {
			res.json({status:false, msg:"Invaild Request"});
		}
	} catch (e) {
		res.json({status:false, msg:"Unauthorized"});
	}
});


router.get('/adminDashboard',common.tokenMiddleware, (req, res) => {
	async.parallel({
		pairsCount:function(cb) {
			pairs.find({}).countDocuments().exec(cb)
		},stakeCount:function(cb) {
			stake.find({types:'Stake'}).countDocuments().exec(cb)
		},depositCount:function(cb) {
			stake.find({types:'Deposit'}).countDocuments().exec(cb)
		},withdrawCount:function(cb) {
			stake.find({types:'Withdraw'}).countDocuments().exec(cb)
		},earnCount:function(cb) {
			stake.find({types : 'Earn'}).countDocuments().exec(cb)
		},blockip:function(cb) {
			blockip.find({}).countDocuments().exec(cb)
		},bridgeCount:function(cb) {
			bridge.find({}).countDocuments().exec(cb)
		},usersCount:function(cb) {
			users.find({}).countDocuments().exec(cb)
		},
	},function(err,results){
		if (err) return res.status(500).send(err);
		response.status    = true;
		response.pairsCount = results.pairsCount;
		response.stakeCount = results.stakeCount;
		response.earnCount = results.earnCount;
		response.blockip = results.blockip;
		response.depositCount = results.depositCount;
		response.withdrawCount = results.withdrawCount;
		response.bridgeCount = results.bridgeCount;
		response.usersCount = results.usersCount;
		res.json(response);
	})    
});

module.exports = router;