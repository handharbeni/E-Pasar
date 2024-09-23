'use strict';

module.exports = function(app) {
    var index = require('../controllers/index.controller');
    // var account = require('../controllers/account.controller');
    // var company = require('../controllers/company.controller');
    // var employee = require('../controllers/employee.controller');
    // var outletEntry = require('../controllers/outlet_entry.controller');
    // var outletSeller = require('../controllers/outlet_seller.controller');
    // var ticket = require('../controllers/ticket.controller');
    // var menu = require('../controllers/menu.controller');
    // var report = require('../controllers/report.controller');
    // var type = require('../controllers/type.controller');
    // var roles = require('../controllers/roles.controller');
    // var token = require('../controllers/token.controller');


    app.route('/').get(index.showLogin)
    app.route('/register').get(index.showRegister)

    app.route('/dashboard').get(index.showDashboard)

    app.route('/payment').get(index.showNotAvailable);
    app.route('/payment/kios').get(index.showNotAvailable);
    app.route('/payment/bongkarmuat').get(index.showNotAvailable);
    app.route('/payment/kios/form').get(index.paymentKios);
    app.route('/payment/bongkarmuat/form').get(index.paymentBm);

    app.route('/manajemen').get(index.showNotAvailable);
    app.route('/manajemen/kios').get(index.showNotAvailable);
    app.route('/manajemen/kios/tambah').get(index.addKios);
    app.route('/manajemen/kios/list').get(index.listKios);
    app.route('/manajemen/kios/sewa').get(index.sewaKios);
    app.route('/manajemen/kios/habis').get(index.tutupKios);

    app.route('/tarif').get(index.showNotAvailable);
    app.route('/tarif/retribusi').get(index.showNotAvailable);
    app.route('/tarif/retribusi/kios').get(index.showNotAvailable);
    app.route('/tarif/retribusi/bongkarmuat').get(index.showNotAvailable);
    app.route('/tarif/retribusi/kios/table').get(index.tarifKios);
    app.route('/tarif/retribusi/bongkarmuat/table').get(index.tarifBongkarmuat);

    app.route('/pembayaran').get(index.showPembayaran)
    app.route('/skrd').get(index.showSkrd)
    app.route('/datapasar').get(index.showDataPasar)
    app.route('/realisasi').get(index.showRealisasi)

    // app.route('/login').get(account.layoutLogin)
    // app.route('/register').get(token, account.layoutRegister)
    // app.route('/company').get(token, company.layoutCompany)
    // app.route('/outletseller').get(token, outletSeller.layoutOutletSeller)
    // app.route('/outletentry').get(token, outletEntry.layoutOutletEntry)
    // app.route('/employee').get(token, employee.layoutAllEmployee)
    // app.route('/employee/:id/:type').get(token, employee.layoutEmployee)
    // app.route('/sellticket').get(token, ticket.layoutSellTicket)
    // app.route('/entryticket').get(token, ticket.layoutEntryTicket)
    // app.route('/createticket').get(token, ticket.layoutRegisterTicket)
    // app.route('/updateticket').get(token, ticket.layoutUpdateTicket)
    // app.route('/sell-report').get(token, report.layoutSellReport)
    // app.route('/entry-report/:id').get(token, report.layouEntryReport)
    // app.route('/loss-report').get(token, report.layoutLossTicket)
    // app.route('/type').get(token, type.layoutType)
    // app.route('/type/:id_type').get(token, type.layoutSetupOutlet).post(token, type.addTypeToOutlet);
    // app.route('/roles').get(token, roles.layoutRoles);
    // app.route('/roles/:id_roles').get(token, roles.layoutDetailRoles);
    // app.route('/logout').get(account.logout)
    // app.route('/detail-ticket/:id_type').get(token, ticket.layoutStockTicket)
    // app.route('/checkin-outlet-entry').get(token, account.layoutCheckinOutletEntry)
    // app.route('/checkin-outlet-seller').get(token, account.layoutCheckinOutletSeller )

    // //account
    // app.route('/process-login').post(account.postLogin);
    // app.route('/process-register').post(account.postRegister);
    // app.route('/process-me').get(account.getMe);

    // //company
    // app.route('/process-company').get(company.getCompany).post(company.createCompany).put(company.updateCompany).delete(company.deleteCompany);
    // app.route('/process-checkin-company/:id').get(company.checkinCompany);

    // //employee
    // app.route('/process-employee').get(employee.getAllEmployee).post(employee.getEmployee).put(employee.createEmployee).delete(employee.deleteEmployee);

    // //menu
    // app.route('/process-check-menu').get(menu.getMenu);

    // //outlet seller
    // app.route('/process-outlet-seller').get(outletSeller.getOutletSeller).post(outletSeller.createOutletSeller).put(outletSeller.updateOutletSeller).delete(outletSeller.deleteOutletSeller);

    // //outlet seller
    // app.route('/process-outlet-entry').get(outletEntry.getOutletEntry).post(outletEntry.createOutletEntry).put(outletEntry.updateOutletEntry).delete(outletEntry.deleteOutletEntry);

    // //entry-ticket
    // app.route('/entry-ticket').post(ticket.entryTicket);

    // //sell-ticket
    // app.route('/sell-ticket').post(ticket.sellTicket);

    // //new
    // app.route('/process-type').post(type.createType).put(type.updateType);
    // app.route('/process-register-ticket').post(ticket.registerTicket);
    // app.route('/process-update-ticket').post(ticket.updateTicket);
    // app.route('/process-roles').get(roles.readRoles).post(roles.createRoles);
    // app.route('/process-employee-roles').post(roles.updateEmployeeRoles);
    // app.route('/process-roles/:id_roles').get(roles.readDetailRoles).post(roles.updateDetailRoles);
    // app.route('/process-checkin-outlet').post(account.checkinOutlet);
}
