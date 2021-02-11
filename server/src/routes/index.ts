import Router from 'express-promise-router'
import auth from './auth'

export default
    Router()
      .use('/auth', auth)
