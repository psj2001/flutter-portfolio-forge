# How to Add a New Company/Experience

## Quick Steps (Firebase Console)

1. **Open Firebase Console**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project
   - Navigate to **Firestore Database**

2. **Navigate to Experience Collection**
   - Click on `portfolio` collection
   - Click on `about` document
   - Click on `experience` subcollection (if it doesn't exist, click "Start collection" first)

3. **Add New Document** (IMPORTANT: Add directly to the experience collection, NOT inside another document)
   - Make sure you're viewing the `experience` subcollection
   - Click **"+ Add document"** button
   - You can use Auto-ID or set a custom document ID
   - ⚠️ **DO NOT** create a document inside another document - the experience should be a direct child of the `experience` collection

4. **Fill in the Fields**
   Click "Add field" for each field and set the following:

   | Field Name | Type | Example Value |
   |------------|------|---------------|
   | `title` | string | "Flutter Developer" |
   | `company` | string | "Technologies LLC" |
   | `period` | string | "Oct 2025 - Present" |
   | `description` | string | "Company description here..." |
   | `companyimg` | string | "https://example.com/logo.png" (optional) |
   | `order` | number | 1 (use 2, 3, etc. for ordering) |

5. **Save**
   - Click **"Save"** button
   - Your new company/experience will appear on the About page!

## Field Details

- **title**: Your job title/position (e.g., "Senior Flutter Developer")
- **company**: Company name (e.g., "Technologies LLC")
- **period**: Employment period (e.g., "Oct 2025 - Present" or "2021 - 2023")
- **description**: Detailed job description or company description
- **companyimg**: URL to company logo/image (optional - leave empty if you don't have one)
- **order**: Number to control display order (1 = first, 2 = second, etc.)

## Important Notes

- The `order` field determines the order in which experiences appear on your About page
- Lower numbers appear first (1, 2, 3...)
- You can leave `companyimg` empty if you don't have a company logo
- All fields except `companyimg` are required for proper display

## Using the Code Function (For Developers)

If you want to add experiences programmatically, you can use the `createExperience` function:

```typescript
import { createExperience } from "@/services/firebase";

const newExperience = {
  title: "Flutter Developer",
  company: "Technologies LLC",
  period: "Oct 2025 - Present",
  description: "Company description here...",
  companyImage: "https://example.com/logo.png", // optional
  order: 1
};

const experienceId = await createExperience(newExperience);
```

## Troubleshooting

- **Experience not showing**: 
  - Make sure you saved the document and restarted your dev server
  - **Check the document structure**: Documents should be directly under `portfolio/about/experience/`, NOT nested inside another document (e.g., NOT `portfolio/about/experience/2/8IEWdDqhuB4hiNCCiQ32`)
  - If you created a nested structure, delete it and recreate the document directly in the `experience` collection
- **Wrong order**: Check the `order` field - lower numbers appear first
- **Missing fields**: Ensure all required fields (title, company, period, description, order) are filled with actual values (not empty strings)
- **Empty fields showing**: Make sure you actually entered values for each field before clicking Save
- **Image not loading**: Check that the `companyimg` URL is valid and accessible

