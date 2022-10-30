import { RequestHandler } from 'express'
import { IncomingHttpHeaders } from 'http'

import { UserService } from '../services'

const userService = new UserService()

export default class Token {
  getTokenFromHeaders(headers: IncomingHttpHeaders) {
    const header = headers.authorization as string

    if (!header) return header

    return header.split(' ')[1]
  }
  tokenGuard: () => RequestHandler = () => (req, res, next) => {
    const token = this.getTokenFromHeaders(req.headers) || req.query.token || req.body.token || ''
    const hasAccess = userService.verifyToken(token)

    hasAccess.then((a) => {
      if (!a) return res.status(403).send({ message: 'No access' })
      next()
    })
  }
}
