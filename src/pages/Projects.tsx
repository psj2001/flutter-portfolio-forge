import { motion } from "framer-motion";
import MaterialCard from "@/components/MaterialCard";
import FlutterButton from "@/components/FlutterButton";
import { ExternalLink, Github } from "lucide-react";
import { useProjects } from "@/hooks/usePortfolioData";

const Projects = () => {
  const { data: projects = [], isLoading } = useProjects();

  // Fallback projects if Firebase is not configured
  const defaultProjects = [
    {
      name: "PropTelli (Casakey)",
      description: "Real estate management platform with property listings, virtual tours, and transaction management.",
      stack: ["Flutter", "Firebase", "GetX", "Google Maps API"],
      role: "Lead Flutter Developer",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      playStore: "#",
      appStore: "#",
    },
    {
      name: "Choosenfly",
      description: "Travel booking application with flight search, hotel reservations, and itinerary planning.",
      stack: ["Flutter", "GraphQL", "Provider", "Stripe"],
      role: "Full Stack Flutter Developer",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      playStore: "#",
      appStore: "#",
    },
    {
      name: "Malankara Church App",
      description: "Community management app with event scheduling, prayer requests, and live streaming.",
      stack: ["Flutter", "Firebase", "Cloud Functions", "FCM"],
      role: "Solo Developer",
      image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800&q=80",
      playStore: "#",
    },
    {
      name: "NFC Flutter Project",
      description: "NFC-enabled mobile solution for contactless payments and access control systems.",
      stack: ["Flutter", "NFC", "Dart", "Custom UI"],
      role: "Mobile Developer",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      github: "#",
    },
    {
      name: "Land Bank Super App",
      description: "Comprehensive real estate platform with separate interfaces for agents, investors, and admins.",
      stack: ["Flutter", "Firebase", "REST API", "Multi-tenant"],
      role: "Senior Flutter Developer",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      playStore: "#",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-foreground mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A collection of mobile applications I've built, showcasing expertise in Flutter development,
            backend integration, and production deployment.
          </p>
        </motion.div>

        {isLoading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading projects...</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MaterialCard className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {project.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-primary mb-2">{project.role}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-container text-primary text-xs rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    {project.playStore && (
                      <FlutterButton variant="outlined" href={project.playStore}>
                        <ExternalLink size={16} className="inline mr-1" />
                        Play Store
                      </FlutterButton>
                    )}
                    {project.appStore && (
                      <FlutterButton variant="outlined" href={project.appStore}>
                        <ExternalLink size={16} className="inline mr-1" />
                        App Store
                      </FlutterButton>
                    )}
                    {project.github && (
                      <FlutterButton variant="text" href={project.github}>
                        <Github size={16} className="inline mr-1" />
                        Code
                      </FlutterButton>
                    )}
                  </div>
                </div>
              </MaterialCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
