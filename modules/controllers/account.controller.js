'use strict'
var models = require('../../modules/models/api_interface.model')
var utils = require('../../modules/utils/utils')


exports.showLogin = async (req, res) => {
  res.render('index', {})
}

exports.showDashboard = async (req, res) => {
  res.render('dashboard', {});
}

exports.showRegister = async (req, res) => {
  res.render('register', {});
}

exports.showPembayaran = async (req, res) => {
  res.render('pages/menu/pembayaran', {});
}

exports.showSkrd = async (req, res) => {
  res.render('pages/menu/skrd', {});
}

exports.showDataPasar = async (req, res) => {
  res.render('pages/menu/datapasar', {});
}

exports.showRealisasi = async (req, res) => {
  res.render('pages/menu/realisasi', {});
}

// exports.layoutCheckinOutletEntry = async (req, res) => {
//   var session = req.session
//   var token = session.token
//   let letMenu = await models.getMenu(token);
//   let letOutletEntry = await models.getMyOutlet(token);
//   res.render('view_checkin_outlet_entry', {menu: letMenu, outlet: letOutletEntry})
// }

// exports.layoutCheckinOutletSeller = async (req, res) => {
//   var session = req.session
//   var token = session.token
//   let letMenu = await models.getMenu(token);
//   let letOutletSeller = await models.getMyOutlet(token);
//   console.log(letOutletSeller);
//   res.render('view_checkin_outlet_seller', {menu: letMenu, outlet: letOutletSeller})
// }

// exports.layoutLogin = async (req, res) => {
//   // var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZXMiOjEsIm91dGxldCI6W3siaWRfb3V0bGV0IjoxLCJ0eXBlX291dGxldCI6MX0seyJpZF9vdXRsZXQiOjEsInR5cGVfb3V0bGV0IjoyfV0sImlkX2NvbXBhbnkiOiIyIiwiaWF0IjoxNTc5MTc4MzM2LCJleHAiOjE1Nzk3ODMxMzZ9.6qBIcD5yhk4NiQ7KPEa_mgwZ3GFamN_zsbZkd_7xEew'
//   // let letMenu = await models.getMenu(token);

//   // company
//   // let letCompany = await models.getCompany('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZXMiOjEsIm91dGxldCI6W3siaWRfb3V0bGV0IjoxLCJ0eXBlX291dGxldCI6MX0seyJpZF9vdXRsZXQiOjEsInR5cGVfb3V0bGV0IjoyfV0sImlkX2NvbXBhbnkiOjAsImlhdCI6MTU3ODkyNjYwNiwiZXhwIjoxNTc5NTMxNDA2fQ.8caMOnkNd7Q7duk_G9Qur6aoj48zrDZ7P4VfWIzo65A');
//   // res.render('view_company', {menu: letMenu, company: letCompany})


//   //outlet seller
//   // let letOutletSeller = await models.getOutletSeller(token);
//   // res.render('view_outlet_seller', {menu: letMenu, outletSeller: letOutletSeller})

//   //outlet entry
//   // let letOutletEntry = await models.getOutletEntry(token);
//   // res.render('view_outlet_entry', {menu: letMenu, outletEntry: letOutletEntry})

//   // employee
//   // var idparam = req.params.id;
//   // var typeparam = req.params.type;
//   // var data = {}
//   // data.id_outlet = idparam;
//   // data.type_outlet = typeparam;
//   // let letEmployee = await models.getEmployee(token, data);
//   // res.render('view_employee', {menu: letMenu, employee: letEmployee, dataOutlet: data});

//   // sell ticket
//   // res.render('view_sell_ticket', {menu: letMenu});

//   // sell ticket
//   // res.render('view_entry_ticket', {menu: letMenu});
//   res.render('index');
// }

// exports.layoutRegister = async (req, res) => {
//     // var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZXMiOjEsIm91dGxldCI6W3siaWRfb3V0bGV0IjoxLCJ0eXBlX291dGxldCI6MX0seyJpZF9vdXRsZXQiOjEsInR5cGVfb3V0bGV0IjoyfV0sImlkX2NvbXBhbnkiOiIyIiwiaWF0IjoxNTc5MTc4MzM2LCJleHAiOjE1Nzk3ODMxMzZ9.6qBIcD5yhk4NiQ7KPEa_mgwZ3GFamN_zsbZkd_7xEew'
//   var session = req.session
//   var token = session.token
//   let letMenu = await models.getMenu(token);
//   let letRoles = await models.getRoles(token, {});
  
//   res.render('view_register_employee', {menu: letMenu, roles: letRoles})
// }

// exports.layoutForgotPassword = (req, res) => {
//   res.render('index')
// }
// exports.logout = (req, res) => {
//   var session = req.session;
//   session.islogin = false;
//   session.token = '';
//   res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
//   res.redirect('/login');
// }

// exports.postLogin = (req, res) => {
//   var session = req.session;
//   var data = {}
//   data.username = req.body.username
//   data.password = req.body.password
//   models.login(data).then(
//     (success) => {
//       if (success.data.success) {
//         session.token = success.data.data.token;
//         session.islogin = true
//         session.save()

//         console.log(session)
//         utils.sendStatus(res, 200, success.data)
//       }else{
//         utils.sendStatus(res, 201, success)
//       }
//     },
//     (error) => {
//       utils.sendStatus(res, 201, error)
//     }
//   )
// }

// exports.postRegister = (req, res) => {
//   var data = {}
//   data.username = req.body.username
//   data.email = req.body.email
//   data.password = req.body.password
//   data.id_roles = req.body.id_roles

//   models.register(data).then(
//     (success) => {
//       utils.sendStatus(res, 200, success.data)
//     },
//     (error) => {
//       utils.sendStatus(res, 201, error)
//     }
//   )
// }

// exports.getMe = (req, res) => {
//   var session = req.session
//   models.getMe(sesion.token).then(
//     (success) => {
//       utils.sendStatus(res, 200, success.data)
//     },
//     (error) => {
//       utils.sendStatus(res, 201, error)
//     }
//   )
// }

// exports.checkinOutlet = (req, res) => {
//   var session = req.session

//   var id = req.body.outlet
//   var type = req.body.typeOutlet
//   models.checkinOutlets(session.token, id, type).then(
//     (success) => {
//       console.log(success)
//       if (success.data.success) {
//         session.token = success.data.data.token;
//         session.islogin = true
//         session.save()
//         utils.sendStatus(res, 200, success.data)
//       }else{
//         utils.sendStatus(res, 201, success)
//       }
//     },
//     (error) => {
//       utils.sendStatus(res, 201, error)
//     }
//   )
// }