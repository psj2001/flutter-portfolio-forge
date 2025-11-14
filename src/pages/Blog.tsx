import { motion } from "framer-motion";
import MaterialCard from "@/components/MaterialCard";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  // Placeholder blog posts - will be replaced with Firebase data
  const posts = [
    {
      id: "1",
      title: "Building Scalable Flutter Apps with Clean Architecture",
      excerpt: "Learn how to structure your Flutter projects for maintainability and scalability using clean architecture principles.",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Flutter", "Architecture", "Best Practices"],
    },
    {
      id: "2",
      title: "Firebase Authentication in Flutter: A Complete Guide",
      excerpt: "Step-by-step guide to implementing secure authentication in your Flutter app using Firebase Auth.",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["Flutter", "Firebase", "Authentication"],
    },
    {
      id: "3",
      title: "State Management Showdown: GetX vs Riverpod",
      excerpt: "Comparing two popular state management solutions in Flutter - which one should you choose?",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["Flutter", "State Management", "GetX", "Riverpod"],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Thoughts on Flutter development, mobile architecture, and building great apps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={`/blog/${post.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MaterialCard className="overflow-hidden h-full flex flex-col cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-card-foreground mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary-container text-primary text-xs rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </MaterialCard>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <MaterialCard className="p-8 bg-primary-container">
            <p className="text-primary-onContainer">
              More articles coming soon! The blog system will be powered by a backend to dynamically load posts.
            </p>
          </MaterialCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
