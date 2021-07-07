
exports.up = function(knex) {
  return knex.schema.createTable('teams', table => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'))
    table.string('team_name').notNullable().unique()
    table.specificType('team_list', 'INT[]')
    table.timestamps(true,true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('teams')
};
