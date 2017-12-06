const express = require('express');
const knex = require('../knex/knex');
const router = express.Router();

function validateCredentials(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send('Must send email and password');
  }
  return next();
}

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

router.post('/login', validateCredentials, (req,res) => {
  // test creds in req.body against finding user by id
  const { email, password } = req.body;

  return knex.select().where('email', email).table('users')
  .then(user => {
    if (user.length > 0) {
      // user exists, now check password
      if (user[0].password === password) {
        return res.json(user) // respond with user obj.
      } else {
        return res.json({ message: 'Incorrect password' });
      }
    } else {
      return res.json({ message: 'User not found' });
    }
  })
});

router.post('/register', validateCredentials, (req, res) => {
  // register new user in db
  const { email, password } = req.body;

  return knex.select().where('email', email).table('users')
  .then(user => {
    if (user.length > 0){
      // user found, will not insert
      return res.json({ message: 'User already exists' })
    }
    return knex.insert({ email: email, password: password }).into('users');
  })
  .then(result => {
    return knex('users').where('email', email); // fetch user because insert doesn't return user obj.
  })
  .then(user => {
    return res.json(user);
  })
  .catch(err => {
    return res.json(err);
  });
});

router.put('/:user_id/forgot-password', (req, res) => {
  // update password of user by id
  const { user_id } = req.params;
  const { password } = req.body;

  return knex.select().where('id', user_id).table('users')
  .then(user => {
    if (user.length > 0){
      // user found by id
      if (password) {
        return knex('users').where('id', user_id).update({ password: password })
      } else {
        return res.json({ message: 'Must send new password' })
      }
    } else {
      return res.json({ message: 'User not found' })
    }
  })
  .then(result => {
    if (result === 1) return res.json({ message: 'New password created!' })
  })
  .catch(err => {
    return res.json(err);
  })
});

router.delete('/:user_id/delete', (req, res) => {
  
});

module.exports = router;
