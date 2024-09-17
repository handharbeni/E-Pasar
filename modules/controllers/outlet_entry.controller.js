'use strict'
var models = require('../../modules/models/api_interface.model')
var utils = require('../../modules/utils/utils')

exports.layoutOutletEntry = async (req, res) => {
  var session = req.session
  var token = session.token
  let letMenu = await models.getMenu(token);
  let letOutletEntry = await models.getOutletEntry(token);
  res.render('view_outlet_entry', {menu: letMenu, outletEntry: letOutletEntry})
}

exports.getOutletEntry = (req, res) => {
  var session = req.session
  var token = session.token
  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZXMiOjEsIm91dGxldCI6W3siaWRfb3V0bGV0IjoxLCJ0eXBlX291dGxldCI6MX0seyJpZF9vdXRsZXQiOjEsInR5cGVfb3V0bGV0IjoyfV0sImlkX2NvbXBhbnkiOiIyIiwiaWF0IjoxNTc5MTc4MzM2LCJleHAiOjE1Nzk3ODMxMzZ9.6qBIcD5yhk4NiQ7KPEa_mgwZ3GFamN_zsbZkd_7xEew'
  var data = {}
  models.getOutletEntry(token).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.createOutletEntry = (req, res) => {
  var session = req.session
  var token = session.token
  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZXMiOjEsIm91dGxldCI6W3siaWRfb3V0bGV0IjoxLCJ0eXBlX291dGxldCI6MX0seyJpZF9vdXRsZXQiOjEsInR5cGVfb3V0bGV0IjoyfV0sImlkX2NvbXBhbnkiOiIyIiwiaWF0IjoxNTc5MTc4MzM2LCJleHAiOjE1Nzk3ODMxMzZ9.6qBIcD5yhk4NiQ7KPEa_mgwZ3GFamN_zsbZkd_7xEew'
  var data = {}

  data.name = req.body.name
  data.address = req.body.address
  data.location = req.body.location

  models.createOutletEntry(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.updateOutletEntry = (req, res) => {
  var session = req.session
  var token = session.token
  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZXMiOjEsIm91dGxldCI6W3siaWRfb3V0bGV0IjoxLCJ0eXBlX291dGxldCI6MX0seyJpZF9vdXRsZXQiOjEsInR5cGVfb3V0bGV0IjoyfV0sImlkX2NvbXBhbnkiOiIyIiwiaWF0IjoxNTc5MTc4MzM2LCJleHAiOjE1Nzk3ODMxMzZ9.6qBIcD5yhk4NiQ7KPEa_mgwZ3GFamN_zsbZkd_7xEew'
  var data = {}

  data.name = req.body.name
  data.address = req.body.address
  data.location = req.body.location
  data.id_outlet = req.body.id_outlet

  models.updateOutletEntry(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.deleteOutletEntry = (req, res) => {
  var session = req.session
  var token = session.token
  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZXMiOjEsIm91dGxldCI6W3siaWRfb3V0bGV0IjoxLCJ0eXBlX291dGxldCI6MX0seyJpZF9vdXRsZXQiOjEsInR5cGVfb3V0bGV0IjoyfV0sImlkX2NvbXBhbnkiOiIyIiwiaWF0IjoxNTc5MTc4MzM2LCJleHAiOjE1Nzk3ODMxMzZ9.6qBIcD5yhk4NiQ7KPEa_mgwZ3GFamN_zsbZkd_7xEew'
  var data = {}

  data.id_outlet = req.body.id_outlet

  models.deleteOutletEntry(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}
