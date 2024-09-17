'use strict'
var models = require('../../modules/models/api_interface.model')
var utils = require('../../modules/utils/utils')

exports.layoutSellReport = async (req, res) => {
  var session = req.session
  var token = session.token
  let letMenu = await models.getMenu(token);
  let letReport = await models.getSellReport(token);
  res.render('view_sell_report', {menu: letMenu, sellReport: letReport});
}

exports.layouEntryReport = async (req, res) => {
  var session = req.session
  var token = session.token
  var idTicket = req.params.id
  let letMenu = await models.getMenu(token);
  let letReport = await models.getEntryTicket(token, idTicket);
  res.render('view_entry_report', {menu: letMenu, entryReport: letReport});
}

exports.layoutLossTicket = async (req, res) => {
  var session = req.session
  var token = session.token
  var idTicket = req.params.id
  let letMenu = await models.getMenu(token);
  let letReport = await models.getLossTicket(token);
  res.render('view_loss_report', {menu: letMenu, lossReport: letReport});
}
