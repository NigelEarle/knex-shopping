const express = require('express');
const knex = require('../knex/knex');
const router = express.Router();

router.get('/:user_id', (req, res) => {
  // get all products with user id through cart
  const { user_id } = req.params;

  // return knex.
});

router.post('/:user_id', (req, res) => {
  // add new record to cart table with req.body.product_id
  const { user_id } = req.params;
  const { product_id } = req.body;

  return knex.insert({ user_id: user_id, product_id: product_id }).table('cart')
  .then(result => {
    return res.json({ success: true });
  })
  .catch(err => {
    return res.json(err);
  })
});

router.delete('/:user_id/:product_id', (req, res) => {
  // remove record with user id and product id
});


module.exports = router;
