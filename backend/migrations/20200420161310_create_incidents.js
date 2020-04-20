
exports.up = function(knex) {
    return knex.schema
    .createTable('incidents', function (table) {
       table.increments();
       table.string('title').notNullable();
       table.string('description').notNullable();
       table.decimal('value').notNullable();

       table.string('ong_id').notNullable();
       table.foreign('ong_id').references('id').inTable('ongs');
       
       //table.increments('id');
       //table.string('first_name', 255).notNullable();
       //table.string('last_name', 255).notNullable();
    //})
    //.createTable('products', function (table) {
    //   table.increments('id');
    //   table.decimal('price').notNullable();
    //   table.string('name', 1000).notNullable();
    });

};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};

