# Firebase Setup Instructions

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard

## Step 2: Enable Authentication

1. In Firebase Console, go to **Authentication**
2. Click **Get Started**
3. Enable **Email/Password** sign-in method
4. Enable **Google** sign-in method
   - Add your project's support email
   - Add authorized domains (your domain or localhost for development)

## Step 3: Get Firebase Configuration

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to **Your apps** section
3. Click the **Web** icon (`</>`) to add a web app
4. Register your app (give it a nickname)
5. Copy the Firebase configuration object

## Step 4: Add Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-app-id
```

## Step 5: Authorized Domains

For Google Sign-In to work:

1. Go to **Authentication** > **Settings** > **Authorized domains**
2. Add your domain (e.g., `unitcv.vercel.app`)
3. `localhost` is automatically included for development

## Testing

- **Development**: Works on `localhost` automatically
- **Production**: Make sure your domain is in authorized domains list

## Security Rules (Optional)

For production, you may want to set up Firestore security rules if you plan to store user data.


