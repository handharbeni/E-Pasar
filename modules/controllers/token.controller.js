'use strict'
var models = require('../../modules/models/api_interface.model')
var utils = require('../../modules/utils/utils')


function verifyLogin(req, res, next){
  var session = req.session
  if (session.islogin) {
    next();
  }else{
    // res.redirect('/login');
  }
}

module.exports = verifyLogin;
