import { useQuery } from "@tanstack/react-query";
import {
  getProfileData,
  getHomeData,
  getAboutData,
  getProjects,
  getBlogPosts,
} from "@/services/firebase";
import type {
  ProfileData,
  HomeData,
  AboutData,
  Project,
  BlogPost,
} from "@/types";

// Hook for Profile Data
export const useProfileData = () => {
  return useQuery<ProfileData | null>({
    queryKey: ["profile"],
    queryFn: getProfileData,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook for Home Data
export const useHomeData = () => {
  return useQuery<HomeData | null>({
    queryKey: ["home"],
    queryFn: getHomeData,
    staleTime: 5 * 60 * 1000,
  });
};

// Hook for About Data
export const useAboutData = () => {
  return useQuery<AboutData | null>({
    queryKey: ["about"],
    queryFn: getAboutData,
    staleTime: 5 * 60 * 1000,
  });
};

// Hook for Projects
export const useProjects = () => {
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: getProjects,
    staleTime: 5 * 60 * 1000,
  });
};

// Hook for Blog Posts
export const useBlogPosts = (publishedOnly: boolean = true) => {
  return useQuery<BlogPost[]>({
    queryKey: ["blogPosts", publishedOnly],
    queryFn: () => getBlogPosts(publishedOnly),
    staleTime: 5 * 60 * 1000,
  });
};


