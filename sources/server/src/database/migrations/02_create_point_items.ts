import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('POINT_ITEMS', table => {
    table.increments('id').primary();
    
    table.integer('point_id')
      .notNullable()
      .references('id')
      .inTable('POINTS');
    
    table.integer('item_id')
      .notNullable()
      .references('id')
      .inTable('ITEMS');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('POINT_ITEMS');
}
