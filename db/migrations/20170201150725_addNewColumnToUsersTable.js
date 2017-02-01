
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (t) {
    t.boolean('isAdmin').defaultTo(false).notNullable();

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (t) {
    t.dropColumn('isAdmin');
  })
};
