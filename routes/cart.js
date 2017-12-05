const express = require('express');
const knex = require('../knex/knex');
const router = express.Router();

router.get('/:user_id', (req, res) => {
  // get all products with user id through cart
});

router.post('/:user_id', (req, res) => {
  // add new record to cart table with req.body.product_id
});

router.delete('/:user_id/:product_id', (req, res) => {
  // remove record with user id and product id
});


module.exports = router;
