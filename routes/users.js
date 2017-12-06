const express = require('express');
const knex = require('../knex/knex');
const router = express.Router();

router.get('/', (req, res) => {
  // fetch all users
  return knex.select().table('users')
  .then(users => {
    return res.json(users);
  })
  .catch(err => {
    return res.json(err);
  });
});

router.get('/:user_id', (req, res) => {
  // get user by id
  const { user_id } = req.params;

  // ALTERNATE: return knex('users').where('id', user_id) 
  return knex.select().where('id', user_id).table('users')
  .then(user => {
    return res.json(user);
  })
  .catch(err => {
    return res.json(user);
  })
});

router.post('/login', (req,res) => {
  // test creds in req.body against finding user by id
});

router.post('/register', (req, res) => {
  // register new user in db
});

router.put('/:user_id/forgot-password', (req, res) => {
  // update password of user by id
});

router.delete('/:user_id/delete', (req, res) => {
  // delete user by id
});

module.exports = router;
