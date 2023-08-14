const express = require("express");

const path = require('path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  console.log("In add-product middleware");
  res.render('add-product', {
    pageTitle: 'Add-Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

router.post('/add-product', (req, res, next) => {
  console.log("In product middleware");
  products.push({ title : req.body.title });
  res.redirect("/");
  // res.send('<h1>Hello Product</h1>');
});

exports.routes = router;
exports.products = products;