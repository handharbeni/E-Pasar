'use strict'
var models = require('../../modules/models/api_interface.model')
var utils = require('../../modules/utils/utils')

exports.showNotAvailable = async (req, res) => {
    res.render('pages/menu/skrd', {});
} 

exports.showLogin = async (req, res) => {
  res.render('index', {})
}

exports.showDashboard = async (req, res) => {
  res.render('pages/menu/realisasi', {});
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

exports.paymentKios = async (req, res) => {
  res.render('pages/menu/payment_kios_form', {});
}

exports.paymentBm = async (req, res) => {
  res.render('pages/menu/payment_bongkarmuat_form', {});
}

exports.addKios = async (req, res) => {
  res.render('pages/menu/manajemen_kios_tambah', {});
}

exports.listKios = async (req, res) => {
  res.render('pages/menu/manajemen_kios_list', {});
}

exports.sewaKios = async (req, res) => {
  res.render('pages/menu/manajemen_kios_sewa', {});
}

exports.tutupKios = async (req, res) => {
  res.render('pages/menu/manajemen_kios_tutup', {});
}

exports.tarifKios = async (req, res) => {
  res.render('pages/menu/tarif_retribusi_kios_table', {});
}

exports.tarifBongkarmuat = async (req, res) => {
  res.render('pages/menu/tarif_retribusi_bongkarmuat_table', {});
}

