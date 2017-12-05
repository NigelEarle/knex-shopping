const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const users = require('./routes/users')
const products = require('./routes/products')
const cart = require('./routes/cart')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', users);
app.use('/products', products);
app.use('/cart', cart);


app.listen(PORT, (err) => {
  console.log(`Server listening on port: ${PORT}`);
});