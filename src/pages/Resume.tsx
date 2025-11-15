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

          <div className="flex gap-4 mb-12">
            <a
              href="/shashikant-kataria-resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
            </a>
            <a
              href="/shashikant-kataria-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
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
                  Shashikant Kataria
                </h2>
                <p className="text-xl gradient-text font-semibold mb-4">
                  Blockchain Developer | Full Stack Engineer | Mobile Developer
                </p>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    shashi007.iitkgp@gmail.com
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    +91 6378454339
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
                <div className="space-y-2">
                  <p className="font-semibold">
                    B.Tech in Agricultural and Food Engineering
                  </p>
                  <p className="text-muted-foreground">
                    Indian Institute of Technology Kharagpur (2023-2028)
                  </p>
                  <p className="text-muted-foreground">CGPA: 7.96</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Languages:</p>
                    <p className="text-muted-foreground">
                      JavaScript, TypeScript, Python, Golang, C++, Solidity
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Frameworks:</p>
                    <p className="text-muted-foreground">
                      React, FastAPI, Django, Flutter, React Native
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Key Projects
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>
                      <strong>Niblie:</strong> Multi-purpose browser extension
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>
                      <strong>Chemsparsh:</strong> Online test series platform
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>
                      <strong>OpenSoft GC:</strong> Full stack application with
                      AI integration
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
