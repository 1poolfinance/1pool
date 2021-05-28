
var mongoose = require( 'mongoose' );
var config   = require("../config/config");

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(config.dbconnection, { useNewUrlParser: true, useUnifiedTopology:true })

mongoose.connection.on('connected', function () {
});


mongoose.connection.on('error',function (err) {
});

mongoose.connection.on('disconnected', function () {
});