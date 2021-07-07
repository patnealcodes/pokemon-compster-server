import * as dotenv from 'dotenv'

dotenv.config()

const {
  NODE_ENV,
  DATABASE_URL,
  PORT
} = process.env

export namespace Server {
  export const port = Number(PORT || '5000')
  export const isDev = NODE_ENV === 'development'
}

export namespace Knex {
  export const config = {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'src/db/migrations',
      tableName: 'knex_migrations'
    }
  }
}

export default { Server, Knex }
