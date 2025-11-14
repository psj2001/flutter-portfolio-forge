import { motion } from "framer-motion";
import MaterialCard from "@/components/MaterialCard";
import FlutterButton from "@/components/FlutterButton";
import { Mail, Linkedin, Github } from "lucide-react";

const About = () => {
  const experience = [
    {
      title: "Senior Flutter Developer",
      company: "Various Projects",
      period: "2021 - Present",
      description: "Leading mobile app development for multiple clients, specializing in Flutter cross-platform solutions.",
    },
    {
      title: "Mobile Developer",
      company: "Previous Company",
      period: "2019 - 2021",
      description: "Built and maintained mobile applications using Flutter and native technologies.",
    },
  ];

  const skills = [
    "Flutter & Dart",
    "Firebase (Auth, Firestore, Storage, Functions)",
    "State Management (GetX, Provider, Riverpod)",
    "GraphQL & REST APIs",
    "CI/CD (Codemagic, Fastlane)",
    "Google Maps Integration",
    "Payment Gateway Integration",
    "Push Notifications",
    "App Store & Play Store Publishing",
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
          <h1 className="text-5xl font-bold text-foreground mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Flutter developer passionate about creating exceptional mobile experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <MaterialCard className="p-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Introduction</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hi, I'm Pranav P S, a Flutter developer specializing in building production-ready 
                  cross-platform mobile applications. With experience across multiple successful 
                  projects, I focus on creating beautiful, performant apps that users love.
                </p>
                <p>
                  My expertise spans the entire mobile development lifecycle - from initial architecture 
                  and design to deployment on both the App Store and Play Store. I'm particularly 
                  passionate about integrating modern backend technologies like Firebase and GraphQL 
                  to create seamless user experiences.
                </p>
                <p>
                  I believe in writing clean, maintainable code and following best practices in 
                  state management, testing, and continuous integration. Whether it's a real estate 
                  platform, travel booking app, or community management tool, I bring the same level 
                  of dedication and quality to every project.
                </p>
              </div>
            </MaterialCard>

            <MaterialCard className="p-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">Experience</h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-primary pl-6"
                  >
                    <h3 className="text-lg font-semibold text-card-foreground">{exp.title}</h3>
                    <p className="text-sm text-primary mb-1">{exp.company}</p>
                    <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </MaterialCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <MaterialCard className="p-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-primary-container text-primary text-sm rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </MaterialCard>

            <MaterialCard className="p-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">Get In Touch</h2>
              <div className="space-y-4">
                <FlutterButton 
                  variant="outlined" 
                  href="mailto:pranav@example.com"
                  className="w-full justify-center flex items-center gap-2"
                >
                  <Mail size={18} />
                  Email Me
                </FlutterButton>
                <FlutterButton 
                  variant="outlined" 
                  href="https://linkedin.com"
                  className="w-full justify-center flex items-center gap-2"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </FlutterButton>
                <FlutterButton 
                  variant="outlined" 
                  href="https://github.com"
                  className="w-full justify-center flex items-center gap-2"
                >
                  <Github size={18} />
                  GitHub
                </FlutterButton>
              </div>
            </MaterialCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
