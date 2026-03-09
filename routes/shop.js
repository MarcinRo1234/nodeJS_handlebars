const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
<<<<<<< HEAD
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
    layout: false
  });
});

module.exports = router;
=======
  res.render('shop', {prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0});
});

module.exports = router;
>>>>>>> a5b4dd7a06a9865f8159ccd8bd099d8d1069ac5d
