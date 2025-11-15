# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/13972422-0826-462a-b523-ce619926a93e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/13972422-0826-462a-b523-ce619926a93e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Firebase (Firestore) - For dynamic content management

## Firebase Integration

This portfolio website is integrated with Firebase Firestore, allowing you to manage all content (profile, projects, blog posts, etc.) dynamically from Firebase Console.

### Quick Setup

1. **Create a Firebase project** at [Firebase Console](https://console.firebase.google.com/)
2. **Enable Firestore Database** in your Firebase project
3. **Get your Firebase config** from Project Settings > General
4. **Create a `.env` file** in the root directory with your Firebase credentials:
   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```
5. **Set up Firestore data structure** - See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for detailed instructions

### Managing Content

Once set up, you can manage all your portfolio content directly from Firebase Console:
- **Profile**: Name, title, bio, profile photo
- **Home**: Hero section, skills, CTA
- **About**: Introduction, experience, skills, social links
- **Projects**: Project listings with details
- **Blog**: Blog posts with metadata

For detailed setup instructions, see [FIREBASE_SETUP.md](./FIREBASE_SETUP.md).

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/13972422-0826-462a-b523-ce619926a93e) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
