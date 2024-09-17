'use strict'
var models = require('../../modules/models/api_interface.model')
var utils = require('../../modules/utils/utils')

exports.layoutOutletSeller = async (req, res) => {
  var session = req.session
  var token = session.token
  let letMenu = await models.getMenu(token);
  let letOutletSeller = await models.getOutletSeller(token);
  res.render('view_outlet_seller', {menu: letMenu, outletSeller: letOutletSeller})
}

exports.getOutletSeller = (req, res) => {
  var session = req.session
  var token = session.token
  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZXMiOjEsIm91dGxldCI6W3siaWRfb3V0bGV0IjoxLCJ0eXBlX291dGxldCI6MX0seyJpZF9vdXRsZXQiOjEsInR5cGVfb3V0bGV0IjoyfV0sImlkX2NvbXBhbnkiOiIyIiwiaWF0IjoxNTc5MTc4MzM2LCJleHAiOjE1Nzk3ODMxMzZ9.6qBIcD5yhk4NiQ7KPEa_mgwZ3GFamN_zsbZkd_7xEew'
  var data = {}
  models.getOutletSeller(token).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.createOutletSeller = (req, res) => {
  var session = req.session
  var token = session.token
  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZXMiOjEsIm91dGxldCI6W3siaWRfb3V0bGV0IjoxLCJ0eXBlX291dGxldCI6MX0seyJpZF9vdXRsZXQiOjEsInR5cGVfb3V0bGV0IjoyfV0sImlkX2NvbXBhbnkiOiIyIiwiaWF0IjoxNTc5MTc4MzM2LCJleHAiOjE1Nzk3ODMxMzZ9.6qBIcD5yhk4NiQ7KPEa_mgwZ3GFamN_zsbZkd_7xEew'
  var data = {}

  data.name = req.body.name
  data.address = req.body.address
  data.location = req.body.location

  models.createOutletSeller(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.updateOutletSeller = (req, res) => {
  var session = req.session
  var token = session.token
  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZXMiOjEsIm91dGxldCI6W3siaWRfb3V0bGV0IjoxLCJ0eXBlX291dGxldCI6MX0seyJpZF9vdXRsZXQiOjEsInR5cGVfb3V0bGV0IjoyfV0sImlkX2NvbXBhbnkiOiIyIiwiaWF0IjoxNTc5MTc4MzM2LCJleHAiOjE1Nzk3ODMxMzZ9.6qBIcD5yhk4NiQ7KPEa_mgwZ3GFamN_zsbZkd_7xEew'
  var data = {}

  data.name = req.body.name
  data.address = req.body.address
  data.location = req.body.location
  data.id_outlet = req.body.id_outlet

  models.updateOutletSeller(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.deleteOutletSeller = (req, res) => {
  var session = req.session
  var token = session.token
  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZXMiOjEsIm91dGxldCI6W3siaWRfb3V0bGV0IjoxLCJ0eXBlX291dGxldCI6MX0seyJpZF9vdXRsZXQiOjEsInR5cGVfb3V0bGV0IjoyfV0sImlkX2NvbXBhbnkiOiIyIiwiaWF0IjoxNTc5MTc4MzM2LCJleHAiOjE1Nzk3ODMxMzZ9.6qBIcD5yhk4NiQ7KPEa_mgwZ3GFamN_zsbZkd_7xEew'
  var data = {}

  data.id_outlet = req.body.id_outlet

  models.deleteOutletSeller(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}
