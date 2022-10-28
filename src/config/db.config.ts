import { IdbConfig } from 'types'

export default class Config {
  dbConfig: IdbConfig = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'testdb',
    dialect: 'mysql',
    operatorAliases: {},
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
}
