import express from 'express'
import RingCentral from 'ringcentral-js-concise'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const rc = new RingCentral(
  process.env.RINGCENTRAL_CHATBOT_CLIENT_ID,
  process.env.RINGCENTRAL_CHATBOT_CLIENT_SECRET,
  process.env.RINGCENTRAL_SERVER
)

app.get('/bot/oauth', async (req, res) => {
  const code = req.query.code
  await rc.authorize({ code, redirectUri: process.env.RINGCENTRAL_CHATBOT_SERVER + '/bot/oauth' })
  try {
    const r = await rc.post('/restapi/v1.0/subscription', {
      eventFilters: [
        '/restapi/v1.0/glip/posts',
        '/restapi/v1.0/glip/groups'
      ],
      expiresIn: 473040000, // 15 years
      deliveryMode: {
        transportType: 'WebHook',
        address: process.env.RINGCENTRAL_CHATBOT_SERVER + '/bot/webhook'
      }
    })
    console.log(r.data)
  } finally {
    const r = await rc.get('/restapi/v1.0/account/~/extension/~')
    console.log(r.data)
  }
  res.send('')
})

app.post('/bot/webhook', async (req, res) => {
  res.header('Validation-Token', req.header('Validation-Token'))
  res.send('')
})

app.listen(3000)
