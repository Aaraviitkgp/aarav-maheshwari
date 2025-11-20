import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Monte Carlo & Black-Scholes Option Pricing Simulator",
    category: "Financial Engineering",
    description:
      "Vectorized Python simulator modeling European call/put options using Monte Carlo simulations and Black-Scholes formula. Handles 100,000+ simulations with GBM-based terminal price distributions.",
    tech: ["Python", "NumPy", "GBM", "MCS", "Black-Scholes"],
    github: "https://github.com/aaraviitkgp/option-pricing",
    live: null,
  },
  {
    title: "NSE Stock Trading Simulator",
    category: "Finance",
    description:
      "Python-based stock trading simulator with secure login, real-time price tracking, and portfolio analytics using NumPy and JSON/CSV data persistence.",
    tech: ["Python", "NumPy", "JSON", "CSV"],
    github: "https://github.com/aaraviitkgp/nse-trading-simulator",
    live: null,
  },
  {
    title: "AI/ML Chatbot & Churn Prediction",
    category: "Machine Learning",
    description:
      "Full-stack ML applications: Transformer-based chatbot and customer churn model with ~87% accuracy using Random Forest & XGBoost. Deployed on Modal/Flask handling 200+ RPS with <200ms response time.",
    tech: ["PyTorch", "XGBoost", "Flask", "Modal", "SHAP"],
    github: null,
    live: null,
  },
  {
    title: "Hybrid Transformer–LSTM Crypto Forecasting",
    category: "Research",
    description:
      "Research paper on hybrid Transformer-LSTM model with reinforcement-based adaptive learning for BTC/USDT forecasting (2020-2023). Published on ResearchGate.",
    tech: ["PyTorch", "LSTM", "Transformer", "RL"],
    github: null,
    live: "https://www.researchgate.net/profile/Aarav-Maheshwari",
  },
  {
    title: "End-to-End Database Architecture & Visualization",
    category: "Data Engineering",
    description:
      "Designed scalable relational database with ETL pipelines, ensuring data integrity and normalization. Integrated with Tableau dashboards for real-time KPI monitoring.",
    tech: ["SQL", "ETL", "Tableau", "Data Modeling"],
    github: null,
    live: null,
  },
  {
    title: "Algorithmic Trading Models",
    category: "Quantitative Finance",
    description:
      "Developed 5+ algorithmic trading models in Python for Bonanza Portfolio Ltd., boosting backtested returns by ~12%. Analyzed millions of equity and commodity data points.",
    tech: ["Python", "Pandas", "NumPy", "Trading Algorithms"],
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
