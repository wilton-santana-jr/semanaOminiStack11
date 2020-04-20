// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',    
    connection: {
      host : '127.0.0.1',
      database: 'DataBaseReact',
      user:     'postgres',
      password: 'postgres',
      port:5432
    },
    migrations: {
      tableName: 'knex_migrations'
    }


  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'DataBaseReactProdTeam',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'DataBaseReactProd',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
