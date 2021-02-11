import Router from 'express-promise-router'

export default
  Router()
    .get('/', async (req, res, next) => {
      res.send('hello world')
    })
    .post('/', async (req, res, next) => {
      res.json({})
    })
