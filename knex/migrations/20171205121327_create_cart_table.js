exports.up = function(knex, Promise) {
  return knex.schema.createTable('cart', function(table) {
    table.increments();
    table.increments('id').primary();
    table.integer('user_id').references('users.id');
    // table.integer('user_id').references('id').inTable('users');
    table.integer('product_id').references('products.id');
    // table.integer('product_id').references('id').inTable('products');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cart');
};
