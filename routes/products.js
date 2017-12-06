const express = require('express');
const knex = require('../knex/knex');
const router = express.Router();

router.get('/', (req, res) => {
  // fetch all products
  return knex.select('*').table('products')
  .then(products => {
    return res.json(products)
  })
  .catch(err => {
    return res.json(err);
  })
});

router.get('/:product_id', (req, res) => {
  // fetch single product
});

router.post('/new', (req, res) => {
 // create new product
});

router.put('/:product_id/update', (req, res) => {
  // update product details
});

router.delete('/:product_id/delete', (req, res) => {
  // delete product by id
});

module.exports = router;
