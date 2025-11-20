import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "Bonanza Portfolio Ltd.",
    period: "Dec 2024 - Jan 2025",
    description: [
      "Developed and optimized 5+ algorithmic trading models in Python, boosting backtested returns by ~12%",
      "Processed and analyzed millions of equity and commodity data points to improve signal accuracy",
      "Built interactive performance dashboards for stakeholders",
      "Enhanced reporting and decision-making through data visualization",
    ],
    link: null,
  },
  {
    title: "RLHF Expert",
    company: "Outlier AI (Freelance)",
    period: "Mar 2025 - Jul 2025",
    description: [
      "Supported training and fine-tuning of large-scale RLHF models",
      "Improved learning efficiency and model performance",
      "Curated and preprocessed high-quality datasets for model alignment",
      "Enhanced accuracy and robustness across diverse tasks",
    ],
    link: null,
  },
  {
    title: "Open Source Contributor",
    company: "TensorFlow Core",
    period: "2024 - Present",
    description: [
      "Contributed 3+ merged PRs to TensorFlow Core repository",
      "Fixed cross-device precision bug in segment_max/min operations",
      "Improved GPU consistency and test coverage by ~15%",
      "Collaborated with global open-source community",
    ],
    link: "https://github.com/tensorflow/tensorflow",
  },
  {
    title: "Competitive Programmer",
    company: "Codeforces & Kaggle",
    period: "2023 - Present",
    description: [
      "Codeforces Rating: 1200+ (Div 2/3 contests)",
      "Top 20% participant in 10+ Kaggle competitions",
      "Active contributor to HuggingFace and LangChain repositories",
      "Applied algorithms to solve complex ML and data problems",
    ],
    link: null,
  },
  {
    title: "Research Author",
    company: "Independent Research",
    period: "2024",
    description: [
      "Published research paper on cryptocurrency forecasting using hybrid Transformer-LSTM model",
      "Developed full data/model pipelines for BTC/USDT prediction",
      "Implemented reinforcement-based adaptive learning mechanisms",
      "Available on ResearchGate with citations",
    ],
    link: "https://www.researchgate.net",
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
