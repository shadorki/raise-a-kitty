import express from 'express'
import routes from './routes'
const app = express()

app.use('/api', routes)

app.listen(3000, (): void => {
  console.log('running!')
})
