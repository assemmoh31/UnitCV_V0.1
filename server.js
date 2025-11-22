import express from 'express'
import cors from 'cors'
import Stripe from 'stripe'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder')

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

// Create checkout session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { plan } = req.body

    const priceMap = {
      'Plus': process.env.STRIPE_PLUS_PRICE_ID || 'price_plus',
      'Pro': process.env.STRIPE_PRO_PRICE_ID || 'price_pro'
    }

    const priceId = priceMap[plan]
    if (!priceId) {
      return res.status(400).json({ error: 'Invalid plan' })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
      metadata: {
        plan: plan,
      },
    })

    res.json({ sessionId: session.id })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    res.status(500).json({ error: error.message })
  }
})

// Webhook endpoint for Stripe
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature']
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  let event

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const plan = session.metadata.plan
    
    // Here you would update the user's plan in your database
    console.log(`Plan updated to ${plan} for session ${session.id}`)
    
    // In a real app, you would:
    // 1. Find the user by customer ID or email
    // 2. Update their plan in the database
    // 3. Send confirmation email
  }

  res.json({ received: true })
})

// Success page handler
app.get('/success', (req, res) => {
  res.sendFile('dist/index.html', { root: '.' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


