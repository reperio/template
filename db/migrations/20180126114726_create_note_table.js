exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('notes', function (table) {
        table.increments('id').primary();
        table.string('text');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('notes');
};
