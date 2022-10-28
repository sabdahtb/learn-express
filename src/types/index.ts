import { Dialect } from 'sequelize'

export interface IdbConfig {
  HOST: string
  USER: string
  PASSWORD: string
  DB: string
  dialect: Dialect
  pool: {
    max: number
    min: number
    acquire: number
    idle: number
  }
}
