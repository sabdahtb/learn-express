import { Dialect, OperatorsAliases } from 'sequelize'

export interface IdbConfig {
  HOST: string
  USER: string
  PASSWORD: string
  DB: string
  dialect: Dialect
  operatorAliases: OperatorsAliases
  pool: {
    max: number
    min: number
    acquire: number
    idle: number
  }
}
