
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          title: '2017 macbook pro',
          description: 'good condition',
          price: 1999.99,
          inventory: 20
        },
        {
          title: 'Nike shoes',
          description: 'brand new air max',
          price: 150.89,
          inventory: 35
        },
        {
          title: 'Blank sweater',
          description: 'run of the mill sweater',
          price: 25.00,
          inventory: 65
        },
        {
          title: '27" Monitor',
          description: 'Samsung monitor',
          price: 355.76,
          inventory: 37
        },
        {
          title: 'Poker keyboard',
          description: '87 key',
          price: 225.12,
          inventory: 90
        },
      ]);
    });
};
