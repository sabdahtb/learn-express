import { matchedData, validationResult } from 'express-validator'
import { UserAddModel } from '../models/user'
import { UserService } from '../services/user'

const userService = new UserService()

export class UserController {
  inRegister(req: Request, res: any) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) return res.status(422).json(errors.array())

    const payload = matchedData(req) as UserAddModel
    const user = userService.register(payload)

    return user.then((u: any) => res.json(u))
  }
  inLogin(req: Request, res: any) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) return res.status(422).json(errors.array())

    const payload = matchedData(req) as UserAddModel
    const user = userService.login(payload)

    return user.then((u: any) => res.json(u))
  }
}
