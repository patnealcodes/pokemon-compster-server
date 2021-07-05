import * as dotenv from 'dotenv'

dotenv.config()

const {
  NODE_ENV,
  DB_NAME,
  DB_HOST,
  DB_PW,
  PORT
} = process.env

export namespace Server {
  export const port = Number(PORT || '8080')
  export const isDev = NODE_ENV === 'development'
}

export namespace Knex {
  export const config = {
    client: 'postgresql',
    connection: {
      database: DB_NAME,
      user: DB_HOST,
      password: DB_PW
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/db/migrations',
      tableName: 'knex_migrations'
    }
  }
}

export default { Server, Knex }
