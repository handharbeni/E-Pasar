'use strict'
var models = require('../../modules/models/api_interface.model')
var utils = require('../../modules/utils/utils')

exports.layoutEmployee = async (req, res) => {
  var session = req.session
  var token = session.token
  let letMenu = await models.getMenu(token);

  var idparam = req.params.id;
  var typeparam = req.params.type;

  var data = {}
  data.id_outlet = idparam;
  data.type_outlet = typeparam;

  let letEmployee = await models.getEmployee(token, data);
  let letRoles = await models.getRoles(token, {});

  res.render('view_employee', {menu: letMenu, employee: letEmployee, dataOutlet: data, roles: letRoles});
}

exports.layoutAllEmployee = async (req, res) => {
  var session = req.session
  var token = session.token
  let letMenu = await models.getMenu(token);

  var idparam = req.params.id;
  var typeparam = req.params.type;

  var data = {}

  let letEmployee = await models.getAllEmployee(token, data);
  let letRoles = await models.getRoles(token, {});

  res.render('view_employee', {menu: letMenu, employee: letEmployee, dataOutlet: data, roles: letRoles});
}

exports.getAllEmployee = (req, res) => {
  var session = req.session
  var token = session.token
  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZXMiOjEsIm91dGxldCI6W3siaWRfb3V0bGV0IjoxLCJ0eXBlX291dGxldCI6MX0seyJpZF9vdXRsZXQiOjEsInR5cGVfb3V0bGV0IjoyfV0sImlkX2NvbXBhbnkiOiIyIiwiaWF0IjoxNTc5MTc4MzM2LCJleHAiOjE1Nzk3ODMxMzZ9.6qBIcD5yhk4NiQ7KPEa_mgwZ3GFamN_zsbZkd_7xEew'
  var data = {}

  models.getAllEmployee(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.getEmployee = (req, res) => {
  var session = req.session
  var token = session.token
  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZXMiOjEsIm91dGxldCI6W3siaWRfb3V0bGV0IjoxLCJ0eXBlX291dGxldCI6MX0seyJpZF9vdXRsZXQiOjEsInR5cGVfb3V0bGV0IjoyfV0sImlkX2NvbXBhbnkiOiIyIiwiaWF0IjoxNTc5MTc4MzM2LCJleHAiOjE1Nzk3ODMxMzZ9.6qBIcD5yhk4NiQ7KPEa_mgwZ3GFamN_zsbZkd_7xEew'
  var data = {}

  data.id_outlet = req.body.id_outlet
  data.type_outlet = req.body.type_outlet

  models.getEmployee(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.createEmployee = (req, res) => {
  var session = req.session
  var token = session.token
  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZXMiOjEsIm91dGxldCI6W3siaWRfb3V0bGV0IjoxLCJ0eXBlX291dGxldCI6MX0seyJpZF9vdXRsZXQiOjEsInR5cGVfb3V0bGV0IjoyfV0sImlkX2NvbXBhbnkiOiIyIiwiaWF0IjoxNTc5MTc4MzM2LCJleHAiOjE1Nzk3ODMxMzZ9.6qBIcD5yhk4NiQ7KPEa_mgwZ3GFamN_zsbZkd_7xEew'
  var data = {}

  data.id_outlet = req.body.id_outlet
  data.type_outlet = req.body.type_outlet
  data.username = req.body.username

  models.createEmployee(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.deleteEmployee = (req, res) => {
  var session = req.session
  var token = session.token
  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZXMiOjEsIm91dGxldCI6W3siaWRfb3V0bGV0IjoxLCJ0eXBlX291dGxldCI6MX0seyJpZF9vdXRsZXQiOjEsInR5cGVfb3V0bGV0IjoyfV0sImlkX2NvbXBhbnkiOiIyIiwiaWF0IjoxNTc5MTc4MzM2LCJleHAiOjE1Nzk3ODMxMzZ9.6qBIcD5yhk4NiQ7KPEa_mgwZ3GFamN_zsbZkd_7xEew'
  var data = {}

  data.id_employee = req.body.id_employee

  models.deleteEmployee(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}
