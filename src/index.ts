import cors from 'cors'
import express, { Application, Request, Response, NextFunction, Router } from 'express'
import { Environment } from './utils'
import { sequelize } from './config'

// Boot express
const app: Application = express()
const env = new Environment()

export const userRouter = Router()

app.use(cors())
app.use(express.urlencoded({ extended: true }))

sequelize
  .sync()
  .then(() => {
    console.log('db connected')
  })
  .catch((err) => {
    console.log('db connect fail : ' + err.message)
  })

const port = env.port || 8080

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello World' })
})

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))
