import knex from 'knex'
import { Knex } from '../config'

const db = knex(Knex.config)

export default db
