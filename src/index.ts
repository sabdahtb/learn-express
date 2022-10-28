import express, { Application, Request, Response, NextFunction } from 'express'
import Helper from './helper'

// Boot express
const app: Application = express()
const port = 8080

const helper = new Helper('nama')

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello World' })
  helper.greet()
})

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))
