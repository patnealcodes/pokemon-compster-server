import knex from 'knex'
import { Knex } from '../src/config'

const db = knex(Knex.config)

export default db
