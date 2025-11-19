# Firestore Quick Start Guide

Follow these steps to add your first data to Firestore:

## Step 1: Create Profile Document

1. In Firestore Database, click **"Start collection"**
2. Collection ID: `portfolio`
3. Document ID: `profile` (or click "Auto-ID" then edit it)
4. Add these fields:

| Field | Type | Value |
|-------|------|-------|
| `name` | string | Your Name |
| `title` | string | Flutter Developer |
| `subtitle` | string | Your subtitle here |
| `profilePhoto` | string | URL to your photo (or empty string for now) |
| `bio` | string | Short bio text (optional) |

5. Click **Save**

## Step 2: Create Home Document

1. In the `portfolio` collection, click **"Add document"**
2. Document ID: `home`
3. Add these fields:

| Field | Type | Value |
|-------|------|-------|
| `ctaTitle` | string | Let's Build Something Amazing |
| `ctaDescription` | string | Available for freelance projects and full-time opportunities |

4. Click **Save**

## Step 3: Add Skills (Subcollection)

1. Click on the `home` document you just created
2. Click **"Start collection"** (this creates a subcollection)
3. Collection ID: `skills`
4. Create your first skill document:
   - Click **"Add document"** → Use Auto-ID
   - Add these fields:

| Field | Type | Value |
|-------|------|-------|
| `title` | string | Flutter Cross-Platform |
| `description` | string | Building beautiful, native-quality apps for iOS and Android from a single codebase. |
| `icon` | string | smartphone |
| `order` | number | 1 |

5. Add more skills (repeat step 4) with different icons:
   - `database` - for Firebase Integration
   - `cloud` - for GraphQL APIs
   - `code2` - for App Store Deployment

**Available icons**: `smartphone`, `database`, `cloud`, `code2`

## Step 4: Create About Document

1. In `portfolio` collection, click **"Add document"**
2. Document ID: `about`
3. Add these fields:

| Field | Type | Value |
|-------|------|-------|
| `introduction` | array | Click "Add field" → Type: array → Add strings: ["Paragraph 1", "Paragraph 2"] |
| `skills` | array | ["Flutter & Dart", "Firebase", "State Management"] |
| `socialLinks` | map | Click "Add field" → Type: map → Add: `email` (string), `linkedin` (string), `github` (string) |

**For array fields:**
- Click "Add field"
- Choose "array" type
- Click "Add item" to add each string

**For map fields:**
- Click "Add field"  
- Choose "map" type
- Add nested fields like `email`, `linkedin`, `github`

## Step 5: Add Experience (Subcollection)

### To Add Your First Experience:
1. Click on the `about` document
2. Click **"Start collection"** → Collection ID: `experience`
3. Click **"Add document"** (use Auto-ID or set a custom ID)
4. Add these fields:

| Field | Type | Value |
|-------|------|-------|
| `title` | string | Senior Flutter Developer |
| `company` | string | Company Name |
| `period` | string | 2021 - Present |
| `description` | string | Job description here |
| `companyImage` or `companyimg` | string | URL to company logo/image (optional) |
| `order` | number | 1 |

5. Click **Save**

### To Add More Experience Entries:
1. Navigate to `portfolio` → `about` → `experience` (subcollection)
2. Click **"+ Add document"**
3. Fill in the fields as shown above
4. Make sure to set the `order` field to control the display order (lower numbers appear first)
5. Click **Save**

**Note**: The `order` field is important - it determines the order in which experiences appear on your About page. Use sequential numbers (1, 2, 3...) for the order you want.

## Step 6: Add Projects

1. In `portfolio` collection, click **"Add document"**
2. Document ID: `projects`
3. Click **"Start collection"** → Collection ID: `items`
4. Add your first project:

| Field | Type | Value |
|-------|------|-------|
| `name` | string | Project Name |
| `description` | string | Project description |
| `stack` | array | ["Flutter", "Firebase"] |
| `role` | string | Lead Developer |
| `image` | string | URL to project image |
| `playStore` | string | Play Store URL (optional) |
| `appStore` | string | App Store URL (optional) |
| `github` | string | GitHub URL (optional) |
| `order` | number | 1 |

## Step 7: Add Blog Posts (Optional)

1. In `portfolio` collection, click **"Add document"**
2. Document ID: `blog`
3. Click **"Start collection"** → Collection ID: `posts`
4. Add a blog post:

| Field | Type | Value |
|-------|------|-------|
| `title` | string | Blog Post Title |
| `excerpt` | string | Short excerpt |
| `thumbnail` | string | Image URL |
| `date` | timestamp | Use date picker |
| `readTime` | string | 8 min read |
| `tags` | array | ["Flutter", "Tutorial"] |
| `published` | boolean | true |
| `order` | number | 1 |

## Quick Tips:

- **Order field**: Use numbers (1, 2, 3...) to control the order items appear
- **Arrays**: Click "Add item" to add multiple values
- **Maps**: Use for nested objects like `socialLinks`
- **Timestamps**: Use the date picker for date fields
- **Empty fields**: You can leave optional fields empty

## Test Your Setup

1. After adding data, restart your dev server:
   ```bash
   npm run dev
   ```

2. Visit your website - you should see your Firebase data!

3. If you see default/fallback data, check:
   - `.env` file has correct values
   - Dev server was restarted after adding `.env`
   - Browser console for any errors

