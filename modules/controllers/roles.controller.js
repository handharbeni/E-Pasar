'use strict'
var models = require('../../modules/models/api_interface.model')
var utils = require('../../modules/utils/utils')


exports.layoutRoles = async (req, res) => {
  var session = req.session
  var token = session.token
  let letMenu = await models.getMenu(token);

  // type
  let letRoles = await models.getRoles(token, {});

  res.render('view_roles', {menu: letMenu, roles: letRoles});
}
exports.layoutDetailRoles = async (req, res) => {
  var session = req.session
  var token = session.token
  let letMenu = await models.getMenu(token);

  // type
  let letDetailRoles = await models.getDetailRoles(token, req.params.id_roles, {});

  res.render('view_detail_roles', {menu: letMenu, permissions: letDetailRoles});
}

exports.readRoles = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}

  models.getRoles(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )

}
exports.createRoles = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}
  data.name = req.body.name

  models.createRoles(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.readDetailRoles = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}

  models.getDetailRoles(token, req.params.id_roles, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.updateDetailRoles = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}
  data.read = req.body.read
  data.create = req.body.create
  data.update = req.body.update
  data.delete = req.body.delete
  models.updateDetailRoles(token, req.params.id_roles, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.updateEmployeeRoles = (req, res) => {
  var session = req.session
  var token = session.token

  var data = {}
  data.id_employee = req.body.id_employee
  data.id_roles = req.body.id_roles

  models.updateRolesEmployee(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}
