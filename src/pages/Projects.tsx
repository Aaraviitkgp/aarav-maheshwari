import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Niblie Browser Extension",
    category: "Browser Extension",
    description:
      "Multi-purpose browser extension featuring web scraping, ad-blocking, sound booster, and dark reader functionality. Published on Chrome Web Store.",
    tech: ["JavaScript", "Chrome API", "Web Scraping"],
    github: "https://github.com/shashix07/Niblie",
    live: null,
  },
  {
    title: "Chemsparsh Platform",
    category: "Full Stack",
    description:
      "Online test series platform with comprehensive backend architecture, multi-role admin system, and high traffic optimization using FastAPI.",
    tech: ["FastAPI", "Python", "PostgreSQL", "React"],
    github: null,
    live: "https://chemsparsh.com",
  },
  {
    title: "OpenSoft GC 2025",
    category: "Full Stack",
    description:
      "Complete authentication system with REST APIs, integrated AI chatbot, and modern React frontend with TypeScript.",
    tech: ["FastAPI", "React", "TypeScript", "AI Integration"],
    github: null,
    live: null,
  },
  {
    title: "Ahoum Mobile App",
    category: "Mobile",
    description:
      "Emotional wellbeing application with real-time chat functionality, devotional design aesthetic, and FastAPI backend.",
    tech: ["React Native", "FastAPI", "Real-time Chat"],
    github: null,
    live: null,
  },
  {
    title: "Webdada Event Platform",
    category: "Frontend",
    description:
      "Event management platform with dashboards for organizers and admins. Built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Dashboard UI"],
    github: null,
    live: null,
  },
  {
    title: "Blockchain dApps",
    category: "Blockchain",
    description:
      "Various decentralized applications built with Solidity smart contracts as part of KodeinKGP blockchain team.",
    tech: ["Solidity", "Web3.js", "Ethereum"],
    github: null,
    live: null,
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            A showcase of my technical work
          </p>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-lg group"
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
