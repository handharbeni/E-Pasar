'use strict'
var models = require('../../modules/models/api_interface.model')
var utils = require('../../modules/utils/utils')

exports.layoutCompany = async (req, res) => {
  // var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZXMiOjEsIm91dGxldCI6W3siaWRfb3V0bGV0IjoxLCJ0eXBlX291dGxldCI6MX0seyJpZF9vdXRsZXQiOjEsInR5cGVfb3V0bGV0IjoyfV0sImlkX2NvbXBhbnkiOiIyIiwiaWF0IjoxNTc5MTc4MzM2LCJleHAiOjE1Nzk3ODMxMzZ9.6qBIcD5yhk4NiQ7KPEa_mgwZ3GFamN_zsbZkd_7xEew'
  var session = req.session
  var token = session.token
  let letMenu = await models.getMenu(token);

  // company
  console.log(token);
  let letCompany = await models.getCompany(token);
  res.render('view_company', {menu: letMenu, company: letCompany})
}

exports.getCompany = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}
  models.getCompany(token).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.createCompany = (req, res) => {
  var session = req.session
  var token = session.token

  var data = {}

  data.name = req.body.name
  data.description = req.body.description
  data.image = req.body.image
  data.address = req.body.address
  models.createCompany(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.updateCompany = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}

  data.id_company = req.body.id_company
  data.name = req.body.name
  data.description = req.body.description
  data.image = req.body.image
  data.address = req.body.address

  models.updateCompany(token, data).then(
    (success) => {
      console.log(data);
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.deleteCompany = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}

  data.id_company = req.body.id_company

  models.deleteCompany(token, data).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}

exports.checkinCompany = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}

  data.id_company = req.params.id

  models.checkinCompany(token, data).then(
    (success) => {
      if (success.data.success) {
        session.token = success.data.data.token;
        session.save()
        utils.sendStatus(res, 200, success.data)
      }else{
        utils.sendStatus(res, 201, success)
      }
      // session.token = success.data.data.token;
      // session.islogin = true
      // session.save()
      // utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}
