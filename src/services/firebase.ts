import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import type {
  ProfileData,
  HomeData,
  AboutData,
  Project,
  BlogPost,
  Skill,
  Experience,
  SocialLink,
} from "@/types";

// Helper to convert Firestore Timestamp to date string
const timestampToDateString = (timestamp: any): string => {
  if (!timestamp) return new Date().toISOString();
  if (timestamp.toDate) {
    return timestamp.toDate().toISOString().split("T")[0];
  }
  if (timestamp instanceof Date) {
    return timestamp.toISOString().split("T")[0];
  }
  return timestamp;
};

// Fetch Profile Data
export const getProfileData = async (): Promise<ProfileData | null> => {
  try {
    const docRef = doc(db, "portfolio", "profile");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as ProfileData;
    }
    return null;
  } catch (error) {
    console.error("Error fetching profile data:", error);
    return null;
  }
};

// Fetch Home Data (Profile + Skills)
export const getHomeData = async (): Promise<HomeData | null> => {
  try {
    const profileRef = doc(db, "portfolio", "profile");
    const skillsRef = collection(db, "portfolio", "home", "skills");
    
    const [profileSnap, skillsSnap] = await Promise.all([
      getDoc(profileRef),
      getDocs(query(skillsRef, orderBy("order", "asc"))),
    ]);
    
    const profile = profileSnap.exists() ? (profileSnap.data() as ProfileData) : null;
    const skills = skillsSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Skill[];
    
    // Get CTA data
    const ctaRef = doc(db, "portfolio", "home");
    const ctaSnap = await getDoc(ctaRef);
    const ctaData = ctaSnap.exists() ? ctaSnap.data() : {};
    
    return {
      profile: profile || {
        name: "",
        title: "",
        subtitle: "",
        profilePhoto: "",
      },
      skills,
      ctaTitle: ctaData.ctaTitle,
      ctaDescription: ctaData.ctaDescription,
    };
  } catch (error) {
    console.error("Error fetching home data:", error);
    return null;
  }
};

// Fetch About Data
export const getAboutData = async (): Promise<AboutData | null> => {
  try {
    const aboutRef = doc(db, "portfolio", "about");
    const experienceRef = collection(db, "portfolio", "about", "experience");
    
    const [aboutSnap, experienceSnap] = await Promise.all([
      getDoc(aboutRef),
      getDocs(query(experienceRef, orderBy("order", "asc"))),
    ]);
    
    const aboutData = aboutSnap.exists() ? aboutSnap.data() : {};
    const experience = experienceSnap.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        // Map companyimg (Firebase) to companyImage (TypeScript)
        companyImage: data.companyImage || data.companyimg || undefined,
      };
    }) as Experience[];
    
    return {
      introduction: aboutData.introduction || [],
      experience,
      skills: aboutData.skills || [],
      socialLinks: (aboutData.socialLinks || {}) as SocialLink,
    };
  } catch (error) {
    console.error("Error fetching about data:", error);
    return null;
  }
};

// Fetch All Projects
export const getProjects = async (): Promise<Project[]> => {
  try {
    const projectsRef = collection(db, "portfolio", "projects", "items");
    const querySnapshot = await getDocs(
      query(projectsRef, orderBy("order", "asc"))
    );
    
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Project[];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

// Fetch Single Project
export const getProject = async (id: string): Promise<Project | null> => {
  try {
    const projectRef = doc(db, "portfolio", "projects", "items", id);
    const projectSnap = await getDoc(projectRef);
    
    if (projectSnap.exists()) {
      return { id: projectSnap.id, ...projectSnap.data() } as Project;
    }
    return null;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
};

// Fetch All Blog Posts
export const getBlogPosts = async (publishedOnly: boolean = true): Promise<BlogPost[]> => {
  try {
    const postsRef = collection(db, "portfolio", "blog", "posts");
    let querySnapshot;
    
    if (publishedOnly) {
      // Try compound query first (requires index)
      try {
        const q = query(postsRef, where("published", "==", true), orderBy("date", "desc"));
        querySnapshot = await getDocs(q);
      } catch (indexError: any) {
        console.warn("Compound query failed, trying simple query:", indexError);
        // Fallback: fetch all published and sort client-side
        const q = query(postsRef, where("published", "==", true));
        querySnapshot = await getDocs(q);
      }
    } else {
      const q = query(postsRef, orderBy("date", "desc"));
      querySnapshot = await getDocs(q);
    }
    
    let blogPosts = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        date: timestampToDateString(data.date),
      };
    }) as BlogPost[];
    
    // Sort client-side if needed (fallback for compound query failure)
    if (publishedOnly && blogPosts.length > 0) {
      blogPosts = blogPosts.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA; // Descending order
      });
    }
    
    console.log(`Fetched ${blogPosts.length} blog posts from Firebase`);
    return blogPosts;
  } catch (error: any) {
    console.error("Error fetching blog posts:", error);
    // Check for Firestore index error
    if (error?.code === 'failed-precondition') {
      console.error("Firestore index required! Check the error details above.");
      console.error("You may need to create a compound index in Firebase Console.");
    }
    return [];
  }
};

// Fetch Single Blog Post
export const getBlogPost = async (id: string): Promise<BlogPost | null> => {
  try {
    const postRef = doc(db, "portfolio", "blog", "posts", id);
    const postSnap = await getDoc(postRef);
    
    if (postSnap.exists()) {
      const data = postSnap.data();
      return {
        id: postSnap.id,
        ...data,
        date: timestampToDateString(data.date),
      } as BlogPost;
    }
    return null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
};

// Create New Experience Entry
export const createExperience = async (experience: Omit<Experience, "id">): Promise<string | null> => {
  try {
    const experienceRef = collection(db, "portfolio", "about", "experience");
    const { companyImage, ...rest } = experience;
    const docRef = await addDoc(experienceRef, {
      ...rest,
      // Store as companyimg to match Firebase field name (also store companyImage for compatibility)
      companyimg: companyImage || "",
      companyImage: companyImage || "",
    });
    console.log("Experience created with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error creating experience:", error);
    return null;
  }
};

