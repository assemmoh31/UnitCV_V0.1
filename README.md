# UnitCV - Unit Converter App

A modern, responsive React application for converting between different units of measurement with Stripe payment integration.

## Features

- 🎨 **Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence
- 📱 **Fully Responsive** - Works perfectly on desktop and mobile devices
- 🎯 **Plan-Based Access** - Free, Plus, and Pro plans with different converter availability
- 💳 **Stripe Integration** - Secure payment processing for plan upgrades
- 🎪 **Smooth Animations** - Beautiful hover effects and transitions with Tailwind CSS
- 📊 **Interactive Converter UI** - Real-time conversion with unit dropdowns
- 📈 **Conversion History** - Track your recent conversions
- 📢 **AdSense Integration** - Ads for Free plan users
- 🎨 **Tailwind CSS** - Modern utility-first styling

## Plans

- **Free** (Blue): 3 converters (Length, Weight, Temperature) + AdSense ads
- **Plus** (Green): 6 converters (adds Volume, Area, Speed) - $4.99/month
- **Pro** (Gold): 9 converters (adds Energy, Pressure, Time) - $9.99/month

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Stripe account (for payment processing)
- Firebase account (for authentication)

### Installation

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your keys:

**Stripe Configuration:**
```
STRIPE_SECRET_KEY=sk_test_your_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
STRIPE_PLUS_PRICE_ID=price_your_plus_price_id
STRIPE_PRO_PRICE_ID=price_your_pro_price_id
```

**Firebase Configuration:**
```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-app-id
```

See `FIREBASE_SETUP.md` for detailed Firebase setup instructions.

3. Create Stripe products and prices:
   - Go to your Stripe Dashboard
   - Create products for "Plus" and "Pro" plans
   - Create prices for monthly subscriptions
   - Copy the price IDs to your `.env` file

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Production Build

1. Build the app:
```bash
npm run build
```

2. Start the production server:
```bash
npm run server
```

Or use the combined command:
```bash
npm start
```

## Project Structure

```
UnitCV/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header with theme toggle
│   │   ├── Sidebar.jsx         # Sidebar with plan info
│   │   ├── MainContent.jsx     # Main content with converters
│   │   ├── ConverterUI.jsx     # Interactive converter interface
│   │   ├── PlansModal.jsx      # Plan selection modal
│   │   ├── Footer.jsx          # Footer with ads for Free users
│   │   └── AdSense.jsx         # AdSense integration
│   ├── utils/
│   │   └── converterData.js    # Converter units and conversion logic
│   ├── pages/
│   │   └── Success.jsx         # Payment success page
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind CSS imports
├── server.js                   # Express backend for Stripe
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── .env.example                # Environment variables template
```

## Stripe Setup

1. **Get API Keys**:
   - Sign up at [Stripe](https://stripe.com)
   - Get your test API keys from the Dashboard

2. **Create Products**:
   - Create "Plus" and "Pro" products
   - Set up monthly subscription prices
   - Copy the Price IDs

3. **Set up Webhook**:
   - In Stripe Dashboard, go to Developers > Webhooks
   - Add endpoint: `https://yourdomain.com/api/webhook`
   - Select events: `checkout.session.completed`
   - Copy the webhook signing secret

4. **Update Environment Variables**:
   - Add all keys to your `.env` file

## Features in Detail

### Converter Types

- **Length**: Meter, Kilometer, Foot, Inch, Mile, Yard, etc.
- **Weight**: Kilogram, Gram, Pound, Ounce, Ton, Stone
- **Temperature**: Celsius, Fahrenheit, Kelvin
- **Volume**: Liter, Gallon, Cubic Meter, etc. (Plus/Pro)
- **Area**: Square Meter, Acre, Hectare, etc. (Plus/Pro)
- **Speed**: m/s, km/h, mph, etc. (Plus/Pro)
- **Energy**: Joule, Calorie, kWh, BTU (Pro)
- **Pressure**: Pascal, PSI, Bar, ATM (Pro)
- **Time**: Second, Minute, Hour, Day, etc. (Pro)

### AdSense Integration

- Ads are shown only for Free plan users
- Publisher ID: `ca-pub-2239313494905583`
- Replace the ad slot ID in `AdSense.jsx` with your actual slot ID

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Stripe** - Payment processing
- **Express** - Backend server
- **localStorage** - Client-side data persistence

## Development

### Running in Development Mode

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

### Running Production Server

```bash
npm run server
```

## Environment Variables

- `STRIPE_SECRET_KEY` - Your Stripe secret key
- `STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key (also add as `VITE_STRIPE_PUBLISHABLE_KEY` for frontend)
- `STRIPE_WEBHOOK_SECRET` - Webhook signing secret
- `STRIPE_PLUS_PRICE_ID` - Stripe price ID for Plus plan
- `STRIPE_PRO_PRICE_ID` - Stripe price ID for Pro plan
- `PORT` - Server port (default: 3000)

## License

MIT
