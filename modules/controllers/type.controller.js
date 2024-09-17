'use strict'
var models = require('../../modules/models/api_interface.model')
var utils = require('../../modules/utils/utils')

exports.layoutType = async (req, res) => {
  var session = req.session
  var token = session.token
  let letMenu = await models.getMenu(token);

  // type
  let letType = await models.getType(token);

  res.render('view_type', {menu: letMenu, type: letType});
}

exports.layoutSetupOutlet = async (req, res) => {
  var session = req.session
  var token = session.token
  let letMenu = await models.getMenu(token);

  // detail type
  let letDetailType = await models.detailOutletType(token, req.params.id_type)

  res.render('view_detail_type', {menu: letMenu, detailType: letDetailType, idOutlet: req.params.id_type});
}

exports.addTypeToOutlet = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}
  data.id_outlet = req.body.id_outlet
  data.expired_value = req.body.expired_value
  models.addOutletType(token, req.params.id_type, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.createType = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}
  data.name = req.body.name
  data.price = req.body.price
  models.createType(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.readType = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}
  models.getType(token).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.updateType = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}
  data.id_type = req.body.id_type
  data.name = req.body.name
  data.price = req.body.price
  models.updateType(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}
