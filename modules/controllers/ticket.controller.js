'use strict'
var models = require('../../modules/models/api_interface.model')
var utils = require('../../modules/utils/utils')

exports.layoutSellTicket = async (req, res) => {
  var session = req.session
  var token = session.token
  let letMenu = await models.getMenu(token);
  res.render('view_sell_ticket', {menu: letMenu});
}

exports.layoutEntryTicket = async (req, res) => {
  var session = req.session
  var token = session.token
  let letMenu = await models.getMenu(token);
  res.render('view_entry_ticket', {menu: letMenu});
}

exports.layoutRegisterTicket = async (req, res) => {
  var session = req.session
  var token = session.token
  let letMenu = await models.getMenu(token);

  let letOutlet = await models.getMyOutlet(token);
  let dataEntry = letOutlet.data.data.entry
  let dataSell = letOutlet.data.data.sell
  let letType = await models.getType(token);

  res.render('view_create_ticket', {menu: letMenu, entry: dataEntry, sell: dataSell, type: letType});
}

exports.layoutUpdateTicket = async (req, res) => {
  var session = req.session
  var token = session.token
  var letMenu = await models.getMenu(token);

  let letOutlet = await models.getMyOutlet(token);
  let dataEntry = letOutlet.data.data.entry
  let dataSell = letOutlet.data.data.sell
  let letType = await models.getType(token);

  res.render('view_update_ticket', {menu: letMenu, entry: dataEntry, sell: dataSell, type: letType})
}

exports.layoutStockTicket = async (req, res) => {
  var session = req.session
  var token = session.token
  var letMenu = await models.getMenu(token);

  var data = {}
  data.type_ticket = req.params.id_type
  var letStock = await models.detailStockTicket(token, data);
  res.render('view_stock_ticket', {menu: letMenu, stokTicket: letStock})
}

exports.updateTicket = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}

  data.prefix_ticket = req.body.prefix_ticket_number
  data.start_ticket_number = req.body.start_ticket_number
  data.end_ticket_number = req.body.end_ticket_number
  data.type_ticket = req.body.type_ticket

  models.updateTypeTicket(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.registerTicket = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}

  data.prefix_ticket = req.body.prefix_ticket_number
  data.start_ticket_number = req.body.start_ticket_number
  data.end_ticket_number = req.body.end_ticket_number
  data.type_ticket = req.body.type_ticket

  models.registerTicket(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.entryTicket = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}

  data.prefix_ticket = req.body.prefix_ticket_number
  data.ticket_number = req.body.ticket_number

  models.entryTicket(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.sellTicket = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}

  data.prefix_ticket = req.body.prefix_ticket_number
  data.ticket_number = req.body.ticket_number

  models.sellTicket(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}
