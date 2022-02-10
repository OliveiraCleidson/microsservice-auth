import { Provider } from 'oidc-provider'
import express from 'express'
import { findAccount } from './services/findAccount.mjs'

const configuration = {
  clients: [
    {
      client_id: 'client',
      client_secret: 'secret',
      redirect_uris: ['http://localhost:3000/callback'],
      findAccount: findAccount
    }]
}

const oidc = new Provider('http://localhost:3000', configuration)

const app = express()

app.use(oidc.callback())
app.get('/interaction/:uid', async (req, res) => {
  const details = await oidc.interactionDetails(req, res)
})
app.listen(3000)
