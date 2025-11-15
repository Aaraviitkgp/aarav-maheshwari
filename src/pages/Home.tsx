import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg md:text-xl text-muted-foreground mb-4">
              Hi, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text">
              Shashikant Kataria
            </h1>
            <div className="text-2xl md:text-3xl gradient-text font-semibold mb-8">
              Blockchain Developer • Full Stack Engineer • Mobile Developer
            </div>
            <p className="text-xl text-muted-foreground mb-12">
              IIT Kharagpur, India
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-border"
              >
                <Link to="/projects">
                  View My Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Link to="/resume">
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10"
              >
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" /> Contact Me
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Floating tech icons */}
          <motion.div
            className="mt-20 flex flex-wrap gap-6 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {["Solidity", "React", "FastAPI", "Flutter", "TypeScript", "Web3"].map(
              (tech, index) => (
                <motion.div
                  key={tech}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary transition-colors cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
