
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, name: 'Lee Adama', email:'', password:'' }),
        knex('users').insert({id: 2, name: 'Kara Thrace', email:'', password:'' }),
        knex('users').insert({id: 3, name: 'Caprica Six',  email:'', password:''}),
        knex('users').insert({id: 4, name: 'William Adama', email:'', password:''}),
        knex('users').insert({id: 5, name: 'Gaius Balter', email:'', password:''}),
        knex('users').insert({id: 6, name: 'Boomer', email:'', password:''}),
        knex('users').insert({id: 7, name: 'Laura Roslin', email:'', password:''}),
        knex('users').insert({id: 8, name: 'Saul Tigh', email:'', password:''}),
      ]);
    });
};
