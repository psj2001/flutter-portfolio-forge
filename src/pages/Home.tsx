import { motion } from "framer-motion";
import MaterialCard from "@/components/MaterialCard";
import FlutterButton from "@/components/FlutterButton";
import { Code2, Database, Cloud, Smartphone, LucideIcon } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import { useHomeData } from "@/hooks/usePortfolioData";
import { useMemo } from "react";

// Icon mapping for skills
const iconMap: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  database: Database,
  cloud: Cloud,
  code2: Code2,
  // Add more icon mappings as needed
};

// Default placeholder photo
const defaultProfilePhoto = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='400'%3E%3Crect fill='%23f0f0f0' width='320' height='400'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' fill='%23ccc' font-family='Arial' font-size='14'%3EAdd profile photo%3C/text%3E%3C/svg%3E";

const Home = () => {
  const { data: homeData, isLoading, error } = useHomeData();

  // Get icon component from string
  const getIcon = (iconName?: string) => {
    if (!iconName) return <Code2 className="w-8 h-8 text-primary" />;
    const IconComponent = iconMap[iconName.toLowerCase()];
    return IconComponent ? (
      <IconComponent className="w-8 h-8 text-primary" />
    ) : (
      <Code2 className="w-8 h-8 text-primary" />
    );
  };

  const profile = homeData?.profile || {
    name: "",
    title: "Flutter Developer",
    subtitle: "Building cross-platform mobile experiences with Flutter, Firebase, and modern app architecture",
    profilePhoto: defaultProfilePhoto,
  };

  const skills = useMemo(() => {
    if (!homeData?.skills || homeData.skills.length === 0) {
      // Fallback default skills
      return [
        {
          icon: <Smartphone className="w-8 h-8 text-primary" />,
          title: "Flutter Cross-Platform",
          description: "Building beautiful, native-quality apps for iOS and Android from a single codebase.",
        },
        {
          icon: <Database className="w-8 h-8 text-primary" />,
          title: "Firebase Integration",
          description: "Real-time databases, authentication, cloud storage, and serverless functions.",
        },
        {
          icon: <Cloud className="w-8 h-8 text-primary" />,
          title: "GraphQL APIs",
          description: "Efficient data fetching and state management with modern API architecture.",
        },
        {
          icon: <Code2 className="w-8 h-8 text-primary" />,
          title: "App Store Deployment",
          description: "Complete CI/CD pipeline setup and successful launches on both app stores.",
        },
      ];
    }
    return homeData.skills.map((skill) => ({
      ...skill,
      icon: getIcon(skill.icon),
    }));
  }, [homeData?.skills]);

  const profilePhoto = profile.profilePhoto || defaultProfilePhoto;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                {isLoading ? "Loading..." : profile.title || "Flutter Developer"}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {isLoading ? "Loading..." : profile.subtitle || "Building cross-platform mobile experiences"}
              </p>
              <div className="flex gap-4">
                <FlutterButton onClick={() => window.location.href = '/projects'}>
                  View Projects
                </FlutterButton>
                <FlutterButton variant="outlined" onClick={() => window.location.href = '/about'}>
                  About Me
                </FlutterButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex justify-center items-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl" />
                <img 
                  src={profilePhoto} 
                  alt={profile.name || "Profile"} 
                  className="relative w-80 h-auto rounded-2xl object-cover drop-shadow-2xl"
                  style={{
                    mixBlendMode: 'normal',
                    filter: 'contrast(1.05) brightness(1.02)',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">What I Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in building production-ready mobile applications with modern tech stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MaterialCard className="p-6 h-full">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </MaterialCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <MaterialCard className="p-12 text-center bg-primary-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-primary-onContainer mb-4">
              {homeData?.ctaTitle || "Let's Build Something Amazing"}
            </h2>
            <p className="text-lg text-primary-onContainer/80 mb-8 max-w-2xl mx-auto">
              {homeData?.ctaDescription || "Available for freelance projects and full-time opportunities"}
            </p>
            <FlutterButton onClick={() => window.location.href = '/about'}>
              Get In Touch
            </FlutterButton>
          </motion.div>
        </MaterialCard>
      </section>
    </div>
  );
};

export default Home;
