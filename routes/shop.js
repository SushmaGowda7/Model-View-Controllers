const path = require('path');

const express = require('express');

const getProductsController = require('../controllers/product');

const router = express.Router();

router.get('/', getProductsController.getProducts);

module.exports = router;
