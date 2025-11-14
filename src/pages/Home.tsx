import { motion } from "framer-motion";
import MaterialCard from "@/components/MaterialCard";
import FlutterButton from "@/components/FlutterButton";
import { Code2, Database, Cloud, Smartphone } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import appMockup from "@/assets/app-mockup.png";

const Home = () => {
  const skills = [
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
                Flutter Developer
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Building cross-platform mobile experiences with Flutter, Firebase, and modern app architecture
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
              className="hidden md:flex justify-center"
            >
              <img 
                src={appMockup} 
                alt="App Mockup" 
                className="w-64 h-auto drop-shadow-2xl"
              />
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
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-primary-onContainer/80 mb-8 max-w-2xl mx-auto">
              Available for freelance projects and full-time opportunities
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
