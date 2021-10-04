exports.up = async (knex) => {
    await knex.schema
    .createTable('users', (tbl) => {
      tbl.increments('user_id')
      tbl.string('username', 200).notNullable().unique()
      tbl.string('password', 200).notNullable()
      tbl.timestamps(false, true)
    })
    .createTable('friends_list', (tbl) => {
      tbl.increments('friends_list_id')
      tbl.integer('friend_id')
         .unsigned()
         .notNullable()
         .references('user_id')
         .inTable('users')
         .onUpdate('CASCADE')
         .onDelete('CASCADE')
      tbl.integer('user_id')
         .unsigned()
         .notNullable()
         .references('user_id')
         .inTable('users')
         .onUpdate('CASCADE')
         .onDelete('CASCADE')
    })
      .createTable('lists', (tbl) => {
        tbl.increments('list_id')
        tbl.integer('user_id')
           .unsigned()
           .notNullable()
           .references('user_id')
           .inTable('users')
           .onUpdate('CASCADE')
           .onDelete('CASCADE')
        tbl.integer('anime_id') 
        tbl.integer('completed')
        tbl.integer('rating').unsigned()
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('list')
    await knex.schema.dropTableIfExists('friends_list')
    await knex.schema.dropTableIfExists('users')
  }
