import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { prettyJSON } from 'hono/pretty-json'
import {cors} from 'hono/cors'

export const config = {
  runtime: 'edge'
}

const app = new Hono().basePath('/api')

app.use('*', prettyJSON())
app.use('*', cors())

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono!'
  })
})

app.get('/users/:id', (c) => {
  const userName: string = c.req.param('id');

  return c.json({
    name: userName,
    dub: userName + userName
  })
})

export default handle(app)
