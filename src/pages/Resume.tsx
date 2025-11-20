import { motion } from "framer-motion";
import { Download, ExternalLink, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
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
            Resume
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Download or view my complete resume
          </p>

          <div className="flex gap-4 mb-12 flex-wrap">
            <a
              href="/aarav-maheshwari-resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-0 flex-1"
            >
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
            </a>

            <a
              href="/aarav-maheshwari-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-0 flex-1"
            >
              <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Full Resume
              </Button>
            </a>
          </div>

          {/* Resume Preview */}
          <div className="bg-card border border-border rounded-lg p-8 glow-border">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Aarav Maheshwari
                </h2>
                <p className="text-xl gradient-text font-semibold mb-4">
                  AI/ML Engineer | Data Analyst | Algorithmic Trading Developer
                </p>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    maheshwariaarav12@gmail.com
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    +91 6377386854
                  </span>
                  <span className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    <a href="https://github.com/aaraviitkgp" className="underline">github</a>
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
                <div className="space-y-2">
                  <p className="font-semibold">Bachelor of Science in Geology</p>
                  <p className="text-muted-foreground">Indian Institute of Technology Kharagpur (2024 — 2028)</p>
                  <p className="text-muted-foreground">CGPA: 8.9 | Roll: 24GG10004</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Languages:</p>
                    <p className="text-muted-foreground">Python, C++, SQL</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">ML/AI Frameworks:</p>
                    <p className="text-muted-foreground">PyTorch, TensorFlow, HuggingFace, Scikit-learn, LangChain</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Tools:</p>
                    <p className="text-muted-foreground">Git, Docker, AWS, Pinecone, Tableau, Flask</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Data Tools:</p>
                    <p className="text-muted-foreground">Pandas, NumPy, Apache Kafka, Apache Airflow</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Key Projects</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>
                      <strong>Monte Carlo & Black-Scholes Option Pricing:</strong> Vectorized Python simulator for European options with 100,000+ simulations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>
                      <strong>AI/ML Chatbot & Churn Prediction:</strong> Transformer-based chatbot and customer churn model with 87% accuracy, deployed on Modal/Flask
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>
                      <strong>Hybrid Transformer-LSTM Crypto Forecasting:</strong> Research paper on BTC/USDT prediction with adaptive learning (2020-2023 dataset)
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Experience</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Data Analyst Intern</strong>, Bonanza Portfolio Ltd. (Dec '24 - Jan '25) — Developed 5+ algorithmic trading models, boosted returns by ~12%</p>
                  <p><strong>RLHF Expert</strong>, Outlier AI (Mar '25 - Jul '25) — Trained RLHF models, curated datasets for model alignment</p>
                  <p><strong>TensorFlow Contributor</strong> — 3+ merged PRs fixing GPU precision bugs, improved test coverage by ~15%</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Achievements</h3>
                <div className="text-muted-foreground">
                  <ul className="list-disc list-inside">
                    <li>Codeforces Rating: 1200+ (Div 2/3 contests)</li>
                    <li>Top 20% participant in 10+ Kaggle competitions</li>
                    <li>Contributor to open-source ML repos (HuggingFace, LangChain, TensorFlow)</li>
                    <li>Published research paper on cryptocurrency forecasting (ResearchGate)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
