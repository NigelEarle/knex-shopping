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

router.delete('/:cart_item_id/delete', (req, res) => {
  // remove record with user id and product id
  const { cart_item_id } = req.params;

  return knex('cart').where('id', cart_item_id).del()
  .then(result => {
    if (result === 1) {
      return res.json({ message: `Cart item id: ${cart_item_id} successfully deleted` });
    } else {
      return res.json({ message: `Cart item id not found` });
    }
  })
});


module.exports = router;
