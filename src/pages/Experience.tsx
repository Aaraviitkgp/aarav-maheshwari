import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "OpenSoft GC 2025",
    period: "Jan 2025 - Present",
    description: [
      "Built authentication system and REST APIs using FastAPI",
      "Developed complete frontend using React + TypeScript",
      "Integrated AI chatbot with FastAPI backend",
      "Designed smooth and responsive UI components",
    ],
    link: null,
  },
  {
    title: "Full Stack Developer",
    company: "Chemsparsh",
    period: "Dec 2024 - Present",
    description: [
      "Developed backend for online test series platform",
      "Implemented multi-role admin system",
      "Optimized for high traffic handling",
      "Built scalable architecture with FastAPI",
    ],
    link: "https://chemsparsh.com",
  },
  {
    title: "Creator & Developer",
    company: "Niblie - Web Extension",
    period: "Apr 2024 - Present",
    description: [
      "Multi-purpose browser extension with advanced features",
      "Web scraping and ad-blocking capabilities",
      "Sound booster and dark reader functionality",
      "Published on Chrome Web Store",
    ],
    link: "https://github.com/shashix07/Niblie",
  },
  {
    title: "React Native Developer",
    company: "Ahoum",
    period: "Jul 2024",
    description: [
      "Emotional wellbeing mobile application",
      "Real-time chat UI implementation",
      "Devotional minimal design aesthetic",
      "FastAPI backend integration",
    ],
    link: null,
  },
  {
    title: "Frontend Developer",
    company: "Webdada",
    period: "May 2024",
    description: [
      "Event management platform development",
      "React + Tailwind CSS implementation",
      "Admin and organizer dashboards",
      "Interactive UI components",
    ],
    link: null,
  },
  {
    title: "Secretary Web",
    company: "Technology Students' Gymkhana, IIT Kharagpur",
    period: "2024",
    description: [
      "Managed entire Gymkhana website infrastructure",
      "Built admin and user interfaces for SOAC portal",
      "Implemented responsive design patterns",
      "Led web development initiatives",
    ],
    link: null,
  },
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            My professional journey in tech
          </p>

          <div ref={ref} className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background animate-glow-pulse" />

                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-lg">
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary font-semibold mb-2">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.period}
                        </p>
                      </div>
                      {exp.link && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary/10"
                        >
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View
                          </a>
                        </Button>
                      )}
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="text-primary mt-1">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
