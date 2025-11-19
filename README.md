## Flutter Photo Uploader & Editor (Blueprint)

A production-ready blueprint for a Flutter app that lets users capture, import, edit, and upload photos with Firebase backend. Use this README as your master plan; we can refine and implement each section together.

### Why this app
- **Capture/Import**: Camera and gallery support with permissions.
- **Edit**: Crop, rotate, flip, filters, basic adjustments.
- **Upload**: Firebase Storage with progress, retries, and metadata in Firestore.
- **Manage**: Gallery grid, detail view, edit/update, delete, share.
- **Scale**: Secure rules, pagination, caching, offline-friendly, analytics.

---

## Screens and Flows

### Primary Screens
1) Auth Screen
   - Google Sign-In or Email/Password.
   - Redirects to Gallery after success.

2) Gallery Grid (Home)
   - User-scoped photos in a grid.
   - Infinite scroll/pagination, pull-to-refresh.
   - FAB: Upload (pick/import or camera).
   - Empty state + helpful CTA.

3) Capture/Import
   - Camera capture or image picker (multi-select optional).
   - Permission prompts with graceful fallback/explanations.

4) Editor
   - Crop (free, 1:1, 4:3, 16:9), rotate, flip.
   - Filters (preset) and basic adjustments (brightness/contrast/saturation).
   - Undo/redo and reset.
   - Save as new or overwrite (configurable).

5) Upload Progress
   - Shows per-file progress, speed (optional), cancel/retry.
   - Background-safe with queued tasks (resumes on app reopen).

6) Photo Detail
   - Fullscreen viewer with pinch-to-zoom.
   - Actions: Edit, Share, Delete, Download (local).
   - Metadata card (size, createdAt, edited, EXIF subset).

7) Profile & Settings
   - Account info, sign-out.
   - Dark mode toggle, cache management (clear thumbnails).
   - About/Privacy/Support links.

8) Error/Empty/Permission States
   - Friendly, actionable copy for network/offline, permissions denied, no results.

### Optional (Phase 2)
- Search & Filters (by date, tag).
- Collections/Albums.
- Batch actions (multi-select).
- In-editor brush/markup, text overlays, stickers.

---

## Architecture

- **State management**: Bloc
- **Routing**: go_router
- **Data**: Firebase Auth, Storage, Firestore
- **Media**: image_picker, camera, photo_view
- **Editing**: image_cropper or image_editor_plus
- **Caching**: cached_network_image, local thumbnails
- **Utilities**: connectivity_plus, path_provider, package_info_plus (optional)

### Suggested Folder Structure (feature-first)
```
lib/
  app/
    app.dart
    router.dart
    theme.dart
  features/
    auth/
      data/
      domain/
      presentation/
    gallery/
      data/
      domain/
      presentation/
    editor/
      data/
      domain/
      presentation/
    photo_detail/
      data/
      domain/
      presentation/
    settings/
      data/
      domain/
      presentation/
  common/
    widgets/
    services/
    utils/
```

---

## Data Model (baseline)

### Firestore
- Collection: `users/{uid}/photos/{photoId}`
```
Photo {
  id: string,
  ownerUid: string,
  storagePath: string,          // e.g., users/{uid}/photos/{photoId}.jpg
  downloadUrl: string,          // Firebase Storage getDownloadURL
  thumbnailUrl: string,         // optional: pre-generated thumbnail
  width: int,
  height: int,
  sizeBytes: int,
  createdAt: Timestamp,
  updatedAt: Timestamp,
  edited: bool,
  exif: {
    cameraModel?: string,
    focalLength?: number
  }
}
```

### Storage
- Path: `users/{uid}/photos/{photoId}.{ext}`
- Optional thumbnails: `users/{uid}/thumbnails/{photoId}.jpg`

---

## Firebase Security Rules (starting point)

### Firestore (`users/{uid}/photos/{photoId}`)
- Read/Write only if `request.auth.uid == uid`
- Validate fields (types, max sizes)
- Server timestamps for created/updated

### Storage (`users/{uid}/**`)
- Read/Write only if the path `uid` matches `request.auth.uid`
- Limit file size and mime type to images

We can harden these rules as requirements evolve (e.g., rate limits, custom claims).

---

## Setup & Installation

### Prerequisites
- Flutter (stable) installed
- Firebase project (Console)
- Android/iOS dev setup (SDKs, Xcode for iOS)

### Create project
```
flutter create photo_portfolio
cd photo_portfolio
```

### Add dependencies
```
dart pub add firebase_core firebase_auth cloud_firestore firebase_storage
dart pub add flutter_riverpod go_router image_picker camera photo_view cached_network_image
dart pub add image_cropper
dart pub add connectivity_plus path_provider
dart pub add --dev flutter_lints
```

### Configure Firebase
1) Create a Firebase project in the console.
2) Add Android app (set package name), download `google-services.json`.
3) Add iOS app (set bundle id), download `GoogleService-Info.plist`.
4) Run:
```
dart pub global activate flutterfire_cli
flutterfire configure
```

### iOS/Android platform notes
- iOS: add camera/photos usage descriptions in `Info.plist`.
- Android: ensure `minSdkVersion` meets package requirements; add camera/storage permissions in `AndroidManifest.xml`.

---

## Running the App
```
flutter run
```
Common scripts to add later:
```
flutter format .
flutter analyze
flutter test
```

---

## UX Notes and Editing Principles
- Make edit tools discoverable and undoable (undo/redo + Reset).
- Always preserve originals unless user chooses overwrite.
- Show non-blocking upload progress; allow background/queued uploads.
- Prefer thumbnails for grid performance; lazy load full images.
- Be clear on destructive actions (confirmations for delete/overwrite).

---

## Roadmap
- Phase 1: Auth, Gallery, Import/Capture, Editor (crop/rotate), Upload, Detail.
- Phase 2: Filters/Adjustments, Offline queue, Thumbnails, Settings, Theming.
- Phase 3: Search/Tags, Collections, Batch actions, Advanced editing tools.

---

## License
MIT (or add your preferred license)

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
