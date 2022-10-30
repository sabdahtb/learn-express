import express from 'express'

import { Validation } from '../middlewares'
import { UserController } from '../controllers'

const app = express.Router()
const validation = new Validation()
const controller = new UserController()

app.post('/user/register', validation.inRegister, controller.inRegister)
app.post('/user/login', validation.inLogin, controller.inLogin)

export default app
