
exports.up = function(knex) {
  
    return knex.schema
    .createTable('ongs', function (table) {
       table.string('id').primary();
       table.string('name').notNullable();
       table.string('email').notNullable();
       table.string('whatsapp').notNullable();
       table.string('city').notNullable();
       table.string('uf',2).notNullable();
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
    return knex.schema.dropTable('ongs');
};
