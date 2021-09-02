exports.up = knex => {
  return knex.schema
    .createTable('brands', t => {
      t.increments('id').primary();
      t.string('name', 255).notNullable().unique();
    })
    .then(() => {
      return knex.schema.createTable('devices', t => {
        t.increments('id').primary();
        t.string('model', 255).notNullable();
        t.integer('brand_id').notNullable().references('id').inTable('brands');
        t.jsonb('dimensions').notNullable();
        t.string('notes');
      });
    });
};

exports.down = knex => {
  return knex.schema.dropTable('devices').then(() => {
    return knex.schema.dropTable('brands');
  });
};
