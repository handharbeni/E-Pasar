'use strict'
var models = require('../../modules/models/api_interface.model')
var utils = require('../../modules/utils/utils')

exports.getMenu = (req, res) => {
  var session = req.session
  var token = session.token
  var data = {}

  models.getMenu(token).then(
    (success) => {
      utils.sendStatus(res, 200, success.data)
    },
    (error) => {
      utils.sendStatus(res, 201, error)
    }
  )
}
