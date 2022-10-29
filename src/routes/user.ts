import express from 'express'

import { ValidationUser } from '../middlewares/validation'
import { UserController } from '../controllers/user'

const app = express.Router()
const validation = new ValidationUser()
const controller = new UserController()

app.post('/user/register', validation.inRegister, controller.inRegister)
app.post('/user/login', validation.inLogin, controller.inLogin)

export default app
