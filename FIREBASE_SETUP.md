# Firebase Setup Guide

This guide will help you set up Firebase for your portfolio website so you can manage all content dynamically from Firebase.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard to create your project

## Step 2: Enable Firestore Database

1. In your Firebase project, go to **Firestore Database**
2. Click "Create database"
3. Start in **production mode** (you can change security rules later)
4. Choose your preferred location for the database
5. Click "Enable"

## Step 3: Get Your Firebase Configuration

1. Go to **Project Settings** (gear icon) > **General** tab
2. Scroll down to "Your apps" section
3. Click the **Web** icon (`</>`) to create a new web app
4. Register your app with a nickname (e.g., "Portfolio Website")
5. Copy the Firebase configuration object

## Step 4: Configure Environment Variables

1. Copy `.env.example` to `.env` in the root of your project:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and replace the placeholder values with your Firebase config:
   ```
   VITE_FIREBASE_API_KEY=your-actual-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

## Step 5: Set Up Firestore Security Rules

1. Go to **Firestore Database** > **Rules** tab
2. For development, you can use these rules (⚠️ **NOT for production**):
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /portfolio/{document=**} {
         allow read: if true;
         allow write: if false; // Update this after setting up authentication
       }
     }
   }
   ```
3. Click "Publish"

## Step 6: Create Firestore Data Structure

You need to create the following collections and documents in Firestore:

### Collection Structure:
```
portfolio (collection)
├── profile (document)
│   ├── name: "Your Name"
│   ├── title: "Flutter Developer"
│   ├── subtitle: "Your subtitle here"
│   ├── profilePhoto: "URL to your photo"
│   └── bio: "Short bio"
│
├── home (document)
│   ├── ctaTitle: "Let's Build Something Amazing"
│   └── ctaDescription: "Available for freelance projects..."
│
│   └── skills (subcollection)
│       ├── [skill1] (document)
│       │   ├── title: "Flutter Cross-Platform"
│       │   ├── description: "Description here"
│       │   ├── icon: "smartphone" (icon name)
│       │   └── order: 1 (number)
│       ├── [skill2] (document)
│       └── ...
│
├── about (document)
│   ├── introduction: ["Paragraph 1", "Paragraph 2", ...] (array of strings)
│   ├── skills: ["Skill 1", "Skill 2", ...] (array of strings)
│   └── socialLinks: {
│       email: "your@email.com",
│       linkedin: "https://linkedin.com/in/yourprofile",
│       github: "https://github.com/yourusername"
│     }
│
│   └── experience (subcollection)
│       ├── [exp1] (document)
│       │   ├── title: "Senior Flutter Developer"
│       │   ├── company: "Company Name"
│       │   ├── period: "2021 - Present"
│       │   ├── description: "Job description"
│       │   └── order: 1
│       └── ...
│
├── projects (collection)
│   └── items (subcollection)
│       ├── [project1] (document)
│       │   ├── name: "Project Name"
│       │   ├── description: "Project description"
│       │   ├── stack: ["Flutter", "Firebase", ...]
│       │   ├── role: "Lead Developer"
│       │   ├── image: "URL to project image"
│       │   ├── playStore: "Play Store URL (optional)"
│       │   ├── appStore: "App Store URL (optional)"
│       │   ├── github: "GitHub URL (optional)"
│       │   └── order: 1
│       └── ...
│
└── blog (collection)
    └── posts (subcollection)
        ├── [post1] (document)
        │   ├── title: "Post Title"
        │   ├── excerpt: "Post excerpt"
        │   ├── thumbnail: "URL to thumbnail"
        │   ├── date: Timestamp
        │   ├── readTime: "8 min read"
        │   ├── tags: ["Tag1", "Tag2"]
        │   ├── content: "Full blog post content (optional)"
        │   ├── published: true
        │   └── order: 1
        └── ...
```

## Step 7: Add Sample Data

### 1. Profile Document
Create a document in `portfolio/profile`:
```json
{
  "name": "Your Name",
  "title": "Flutter Developer",
  "subtitle": "Building cross-platform mobile experiences",
  "profilePhoto": "https://your-photo-url.com/photo.jpg",
  "bio": "Short bio text"
}
```

### 2. Home Skills
Create a subcollection `portfolio/home/skills` and add skill documents:
```json
{
  "title": "Flutter Cross-Platform",
  "description": "Building beautiful, native-quality apps",
  "icon": "smartphone",
  "order": 1
}
```

### 3. About Data
Create `portfolio/about` document:
```json
{
  "introduction": [
    "Paragraph 1",
    "Paragraph 2",
    "Paragraph 3"
  ],
  "skills": [
    "Flutter & Dart",
    "Firebase",
    "State Management"
  ],
  "socialLinks": {
    "email": "your@email.com",
    "linkedin": "https://linkedin.com/in/you",
    "github": "https://github.com/you"
  }
}
```

### 4. Projects
Create `portfolio/projects/items` subcollection and add project documents:
```json
{
  "name": "Project Name",
  "description": "Project description",
  "stack": ["Flutter", "Firebase"],
  "role": "Lead Developer",
  "image": "https://image-url.com/image.jpg",
  "playStore": "https://play.google.com/store/apps/details?id=...",
  "order": 1
}
```

### 5. Blog Posts
Create `portfolio/blog/posts` subcollection and add post documents:
```json
{
  "title": "Post Title",
  "excerpt": "Post excerpt",
  "thumbnail": "https://image-url.com/thumb.jpg",
  "date": "2024-01-15T00:00:00Z",
  "readTime": "8 min read",
  "tags": ["Flutter", "Tutorial"],
  "published": true
}
```

## Step 8: Test Your Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit your website and check if data loads from Firebase

3. If you see fallback/default data, check:
   - Environment variables are set correctly
   - Firestore security rules allow reading
   - Data structure matches the expected format
   - Browser console for any errors

## Available Icons for Skills

You can use these icon names in the `icon` field for skills:
- `smartphone` - Smartphone icon
- `database` - Database icon
- `cloud` - Cloud icon
- `code2` - Code icon

To add more icons, update the `iconMap` in `src/pages/Home.tsx`.

## Next Steps

1. **Set up Authentication** (optional): If you want to allow editing from the website, set up Firebase Authentication
2. **Update Security Rules**: Create proper security rules for production
3. **Add Image Storage**: Use Firebase Storage for hosting images
4. **Deploy**: Deploy your website to Firebase Hosting or another hosting service

## Troubleshooting

- **Data not loading**: Check browser console for errors, verify environment variables
- **Permission denied**: Update Firestore security rules
- **Wrong data structure**: Ensure your Firestore structure matches the expected format
- **Environment variables not working**: Make sure to restart your dev server after changing `.env`

## Support

If you encounter issues, check:
- Firebase Console for any error logs
- Browser developer console for JavaScript errors
- Network tab to see if Firebase requests are being made








