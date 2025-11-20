import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Award, Medal } from "lucide-react";

const achievements = [
  {
    title: "Codeforces Rating 1200+ & Top 20% Kaggle",
    description: "Achieved Codeforces rating of 1200+ in Div 2/3 contests and ranked in top 20% across 10+ Kaggle competitions",
    icon: Trophy,
    color: "text-neon-cyan",
  },
  {
    title: "TensorFlow Core Contributor",
    description: "Contributed 3+ merged PRs to TensorFlow, fixing critical GPU precision bugs and improving test coverage by ~15%",
    icon: Award,
    color: "text-neon-purple",
  },
  {
    title: "Published Research Paper",
    description: "Authored and published research on hybrid Transformer-LSTM model for cryptocurrency forecasting on ResearchGate",
    icon: Medal,
    color: "text-neon-blue",
  },
  {
    title: "Open-Source ML Contributor",
    description: "Active contributor to HuggingFace, LangChain, and other prominent open-source ML repositories",
    icon: Trophy,
    color: "text-neon-cyan",
  },
];

const Achievements = () => {
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
            Achievements
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Milestones and recognitions
          </p>

          <div ref={ref} className="grid gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all hover:shadow-lg group"
                >
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 p-4 rounded-lg group-hover:scale-110 transition-transform">
                      <Icon className={`h-10 w-10 ${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Decorative trophy display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 flex justify-center gap-8 flex-wrap"
          >
            <motion.div 
              className="bg-primary/10 p-6 rounded-full animate-float"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <Trophy className="h-16 w-16 text-neon-cyan" />
            </motion.div>
            <motion.div 
              className="bg-primary/10 p-6 rounded-full animate-float" 
              style={{ animationDelay: "0.5s" }}
              whileHover={{ scale: 1.1, rotate: -10 }}
            >
              <Award className="h-16 w-16 text-neon-purple" />
            </motion.div>
            <motion.div 
              className="bg-primary/10 p-6 rounded-full animate-float" 
              style={{ animationDelay: "1s" }}
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <Medal className="h-16 w-16 text-neon-blue" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
