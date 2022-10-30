import { IdbConfig } from '../types'
import { Environment } from '../utils'

const env = new Environment()

export default class Database {
  dbConfig: IdbConfig = {
    HOST: env.dbHost,
    USER: env.dbUSer,
    PASSWORD: env.dbPassword,
    DB: env.dbName,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
}
