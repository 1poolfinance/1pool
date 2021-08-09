var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var https = require('https');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');

var datas = require("./model/daeERdsfDFas");
var indexRouter = require('./routes/iDnddseFxdaS');
var usersRouter = require('./routes/users/u3DFsesdfrDF3s');


var adminRouter = require('./routes/admin/aDSFdmsdfinwe');
var pairRouter = require('./routes/admin/paIOsdfirerws');
var cmsRouter = require('./routes/admin/cmSDweDffgds');
const port = process.env.PORT;


var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use('/admin', adminRouter);
app.use('/pairs', pairRouter);
app.use('/cms', cmsRouter);

var options = {
    key: fs.readFileSync('1poOldFi.key'),
    cert: fs.readFileSync('1poOldFi.crt'),
  };
var server = https.createServer(options, app);
server.listen(port, () => {
});


app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
