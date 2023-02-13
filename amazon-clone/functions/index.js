const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
  'sk_test_51Ma6UlKfBctCzgpTmP6lXcHdXCoUAg75MM5uJhhHX5WNnF1jd5a3TLjT3cPI1c4h457dnNoDE6X2E5r4SXznooNS006s7tmuYt'
)
// API

// - App config
const app = express()

// - Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// - API routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/payments/create', async (req, res) => {
  const total = req.query.total
  console.log('Payment Request Received BOOM!!!! for this amount >>>>', total)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: 'usd',
  })
  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://127.0.0.1:5001/challenge-f9b45/us-central1/api

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
