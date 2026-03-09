const path = require('path');

const express = require('express');

// const rootDir = require('../util/path'); niepotrzebne - folder util też można usunąć

const productsController = require('../controllers/products');
const router = express.Router();

// const products = []; usuniete na potrzeby MVC

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);


// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

// exports.routes = router;
// exports.products = products;
module.exports = router;