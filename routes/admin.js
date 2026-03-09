const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
<<<<<<< HEAD
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, produtCSS: true, activeAddProduct: true});
=======
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
>>>>>>> a5b4dd7a06a9865f8159ccd8bd099d8d1069ac5d
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
