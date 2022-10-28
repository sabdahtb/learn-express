import express, { Application, Request, Response, NextFunction } from 'express'
import Helper from './helper'
import * as dotenv from 'dotenv'
import cors from 'cors'
import sequelize from './models/index'

// Boot express
dotenv.config()
const app: Application = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))

sequelize
  .sync()
  .then(() => {
    console.log('Synced db.')
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message)
  })

const port = process.env.PORT || 8080
const helper = new Helper('nama')

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello World' })
  helper.greet()
})

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))
