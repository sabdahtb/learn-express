import cors from 'cors'
import express, { Application } from 'express'

import { sequelize } from './config'
import { Environment } from './utils'
import UserRouter from './routes/user'

// Boot express
const app: Application = express()
const port = new Environment().port

// SetUp express
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Sync DB
sequelize
  .sync()
  .then(() => {
    console.log('db connected')
  })
  .catch((err) => {
    console.log('db connect fail : ' + err.message)
  })

// Routing
app.use(UserRouter)

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))
