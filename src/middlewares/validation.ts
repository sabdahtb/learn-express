import * as bcrypt from 'bcrypt'
import { check } from 'express-validator'

import { User } from '../models/user'

export default class Validation {
  inRegister = [
    check('email')
      .isEmail()
      .withMessage('Invalid Email Format')
      .custom((email) => User.findOne({ where: { email } }) === null)
      .withMessage('Email exists'),
    check('password').isLength({ min: 8 }).withMessage('Password Minimal 8 characters'),
    check('confirmPassword')
      .custom((confirmPassword, { req }) => req.body.password === confirmPassword)
      .withMessage('Wrong Confirmation Password'),
  ]
  inLogin = [
    check('email').isEmail().withMessage('Invalid Email Format'),
    check('password').isLength({ min: 8 }).withMessage('Password Minimal 8 characters'),
    check('password')
      .custom((password, { req }) => {
        return User.findOne({ where: { email: req.body.email } }).then((u) =>
          bcrypt.compare(password, u!.password),
        )
      })
      .withMessage('Invalid Email or Password'),
  ]
}
