const express = require('express');
const knex = require('../knex/knex');
const router = express.Router();

function validateProduct(req, res, next) {
  const {
    title,
    description,
    inventory,
    price
  } = req.body
  if (!title || !description || !inventory || !price) {
    return res.json({ message: 'Must send all fields' })
  }
  return next();
}

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
  const { product_id } = req.params;

  return knex.where('id', product_id).table('products')
  .then(product => {
    if (product.length > 0) {
      // product found
      return res.json(product);
    }
    return res.json({ message: 'Product not found' })
  })
  .catch(err => {
    return res.json(err);
  })
});

router.post('/new', validateProduct, (req, res) => {
  // create new product
  const {
    title,
    description,
    price,
    inventory
  } = req.body;

  return knex.insert({
    title: title,
    description: description,
    price: price,
    inventory: inventory
  })
  .into('products')
  .then(result => {
    if (result.rows.length === 0) {
      // check result.rows obj, insert doesn't return object
      return knex.where('title', title).table('products')
    }
  })
  .then(product => {
    return res.json(product);
  })
  .catch(err => {
    return res.json(err);
  })
});

router.put('/:product_id/update', (req, res) => {
  // update product details
});

router.delete('/:product_id/delete', (req, res) => {
  // delete product by id
});

module.exports = router;
