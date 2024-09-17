'use strict'
var axios = require('../../tools/axios');
var utils = require('../../modules/utils/utils')
// Utils.settoken(sesstoken)


exports.register = (data) => {
  return post('registration', data, null);
}

exports.login = (data) => {
  return post('login', data, null);
}

exports.getMe = (token) => {
  return get('me', null, utils.settoken(token));
}

exports.getMyOutlet = (token) => {
  return get('list-outlet', null, utils.settoken(token));
}


// manajemen company
exports.getCompany = (token) => {
  return get('company', null, utils.settoken(token));
}

exports.createCompany = (token, data) => {
  return post('company', data, utils.settoken(token));
}

exports.updateCompany = (token, data) => {
  return put('company', data, utils.settoken(token));
}

exports.deleteCompany = (token, data) => {
  return del('company', data, token);
}

exports.checkinCompany = (token, data) => {
  return post('checkin_company', data, utils.settoken(token));
}


// manajemen employee
exports.getAllEmployee = (token, data) => {
  return get('employee', data, utils.settoken(token));
}
exports.getEmployee = (token, data) => {
  return post('employee', data, utils.settoken(token));
}

exports.createEmployee = (token, data) => {
  return put('employee', data, utils.settoken(token));
}

exports.deleteEmployee = (token, data) => {
  return del('employee', data, utils.settoken(token));
}

// get menu
exports.getMenu = (token) => {
  return get('get-menu', null, utils.settoken(token));
}

// manajemen outlet entry
exports.getOutletEntry = (token) => {
  return get('outlet_entry', null, utils.settoken(token));
}

exports.createOutletEntry = (token, data) => {
  return post('outlet_entry', data, utils.settoken(token));
}

exports.updateOutletEntry = (token, data) => {
  return put('outlet_entry', data, utils.settoken(token));
}

exports.deleteOutletEntry = (token, data) => {
  return del('outlet_entry', data, utils.settoken(token));
}

// manajemen outlet seller
exports.getOutletSeller = (token) => {
  return get('outlet_seller', null, utils.settoken(token));
}

exports.createOutletSeller = (token, data) => {
  return post('outlet_seller', data, utils.settoken(token));
}

exports.updateOutletSeller = (token, data) => {
  return put('outlet_seller', data, utils.settoken(token));
}

exports.deleteOutletSeller = (token, data) => {
  return del('outlet_seller', data, utils.settoken(token));
}

// transaction ticket
exports.sellTicket = (token, data) => {
  return post('sell-ticket', data, utils.settoken(token));
}

exports.entryTicket = (token, data) => {
  return post('entry-ticket', data, utils.settoken(token));
}


exports.getSellReport = (token) => {
  return get('sell-report', null, utils.settoken(token));
}

exports.getEntryTicket = (token, id) => {
  return get(`entry-report/${id}`, null, utils.settoken(token));
}

exports.getLossTicket = (token) => {
  return get(`lost-report`, null, utils.settoken(token));
}

exports.checkinOutlets = (token, id, type) => {
  return get(`checkin-outlet/${id}/${type}`, null, utils.settoken(token));
}

// new
exports.registerTicket = (token, data) => {
  return post(`create-ticket`, data, utils.settoken(token));
}
exports.getStockTicket = (token) => {
  return get(`stock-ticket`, null, utils.settoken(token));
}
exports.detailStockTicket = (token, data) => {
  return post(`detail-stock-ticket`, data, utils.settoken(token));
}
exports.updateTypeTicket = (token, data) => {
  return post(`update-ticket`, data, utils.settoken(token));
}
exports.getType = (token) => {
  return get('type', null, utils.settoken(token));
}
exports.createType = (token, data) => {
  return post(`type`, data, utils.settoken(token));
}
exports.updateType = (token, data) => {
  return put(`type`, data, utils.settoken(token));
}
exports.detailOutletType = (token, id) => {
  return get(`transaction-type/${id}`, null, utils.settoken(token));
}
exports.addOutletType = (token, id, data) => {
  return post(`transaction-type/${id}`, data, utils.settoken(token));
}



//Roles
exports.getRoles = (token, data) => {
  return get(`roles`, data, utils.settoken(token));
}
exports.createRoles = (token, data) => {
  return post(`roles`, data, utils.settoken(token));
}
exports.getDetailRoles = (token, id, data) =>{
  return get(`roles/${id}`, data, utils.settoken(token));
}
exports.updateDetailRoles = (token, id, data) => {
  return post(`roles/${id}`, data, utils.settoken(token));
}
exports.updateRolesEmployee = (token, data) => {
  return post(`roles-employee`, data, utils.settoken(token));
}

function get(endpoint, data, utils) {
  return new Promise((resolve, reject) => {
    axios.get(endpoint, utils)
      .then(
        (response) => {
          resolve(response)
        }
      )
      .catch(
        (error) => {
          reject(error)
        }
      )
  });
}

function post(endpoint, data, utils) {
  return new Promise((resolve, reject) => {
    axios.post(endpoint, data, utils)
      .then(
        (response) => {
          resolve(response)
        }
      )
      .catch(
        (error) => {
          reject(error)
        }
      )
  });
}

function put(endpoint, data, utils) {
  return new Promise((resolve, reject) => {
    axios.put(endpoint, data, utils)
      .then(
        (response) => {
          resolve(response)
        }
      )
      .catch(
        (error) => {
          reject(error)
        }
      )
  });
}

function del(endpoint, data, utils) {
  return new Promise((resolve, reject) => {
    const globalAxiosConfig = {
      headers: {
        'access_token': utils,
      },
    }

    const axiosConfig = {
      globalAxiosConfig,
      data
    }
    axios.delete(endpoint, axiosConfig)
      .then(
        (response) => {
          resolve(response)
        }
      )
      .catch(
        (error) => {
          reject(error)
        }
      )
  });
}
