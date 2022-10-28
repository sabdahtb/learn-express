import * as dotenv from 'dotenv'

dotenv.config()

export default class Environment {
  port: number = parseInt(process.env.PORT || '8080')

  dbName: string = process.env.DB_NAME || 'testdb'
  dbHost: string = process.env.DB_HOST || 'localhost'
  dbUSer: string = process.env.DB_USER || 'root'
  dbPort: number = parseInt(process.env.DB_PORT || '3306')
  dbPassword: string = process.env.DB_PASSWORD || ''

  jwtSecret: string = process.env.JWT_SECRET || 'mySecret'
  sessionSecret: string = process.env.SESSION_SECRET || 'mySessionSecret'
}
