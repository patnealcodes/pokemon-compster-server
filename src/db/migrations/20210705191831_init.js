
exports.up = function(knex) {
  return knex.schema.createTable('teams', table => {
    table.increments('id')
    table.string('team_name').notNullable().unique()
    table.specificType('team_members', 'INT[]')
    table.timestamps(true,true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('teams')
};
