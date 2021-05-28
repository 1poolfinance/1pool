var express = require('express');
var router = express.Router();
var path    = require('path');
var fs    = require('fs');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/clearIP', function(req, res, next) {
	var file1    = path.join(__dirname, '../config/addipAnshd.json');
  fs.readFile(file1, "utf8", function(err, data) {
    let change = ["::1"];
    fs.writeFile(file1, JSON.stringify(change), function(err, data) {      
    });
  });
});

router.get('/RHdteghErfd', (req, res) => {
	var file 		= path.join(__dirname, '../config/addipAnshd.json');
	var ipaddress  	= require("../config/addipAnshd.json");
	let ipvalue     = req.header('x-forwarded-for') || req.connection.remoteAddress;
    ipvalue         = ipvalue.replace('::ffff:', '');    
	if (ipaddress.indexOf(ipvalue) !== -1) {
	    res.json({
          status : false,
          data   : "already exist",
        });
    } else {
		ipaddress.push(ipvalue);
        fs.readFile(file, "utf8", function(err, data) {
		  let changes = ipaddress;
		  fs.writeFile(file, JSON.stringify(changes), function(err, data) {
		    res.json({ status: true, data: changes })
		  });
		});
    }
})

module.exports = router;
