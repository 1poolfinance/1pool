let jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
var async = require('async');
let authKey = 'JzW1011NOVMS&jLeMani92$';

exports.originMiddleware = (req,res,next) => {
  var origin = req.headers['origin'];
  if(origin == ''){
      next();
  }else {
    return res.status(401).send('unauthorized request')
  }
}

exports.createPayload = (key) => {
  let payload = { secret : key }
  let token = jwt.sign(payload, authKey, { expiresIn: 180 * 60 });
  return token;    
}

exports.generateRandomNumber = function(){
  let text = "";
  let possible = "0123456789";
  for (let i = 0; i < 7; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

exports.randomString = function(len){
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

exports.userVerify = (req,res,next) => {
  var origin = req.headers['origin'];
  if(origin == ''){
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if(!token){
      return res.json({success:401, msg:"Unauthorized"});
    }
    token = token.split(' ')[1];
    if(token === 'null'){
      return res.json({success:401, msg:"Unauthorized"});
    } else {
      let payload = jwt.verify(token, authKey)
      if(!payload){
        return res.json({success:401, msg:"Unauthorized"});
      }
        req.userId = payload.secret;
        next();
    }
  } else {
    return res.status(401).send('unauthorized request')
  } 
}

exports.tokenMiddleware = (req,res,next) => {
  var origin = req.headers['origin'];
  origin = origin.toString();
  if(origin == ''){
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if(!token){
    return res.status(401).send('unauthorized token')
  }
  token = token.split(' ')[1];
  if(token === 'null'){
    return res.status(401).send('unauthorized token split')
  } else {
      let payload = jwt.verify(token, authKey)
      if(!payload){
        return res.status(401).send('unauthorized key')
      }
      req.userId = payload.secret;
      next();
    }
  } else {
    return res.status(401).send('unauthorized request')
  }
}