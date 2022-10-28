import Config from '../config/db.config'
import { Sequelize } from 'sequelize'

const config = new Config().dbConfig

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: config.operatorAliases,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
})

export default sequelize
