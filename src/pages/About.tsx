import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const education = [
    {
      degree: "Bachelor of Science in Geology",
      institution: "Indian Institute of Technology Kharagpur",
      period: "2024 - 2028",
      cgpa: "8.9 CGPA",
    },
    {
      degree: "CBSE Class XII",
      institution: "Jayshree Periwal High School",
      period: "2024",
      percentage: "92%",
    },
    {
      degree: "CBSE Class X",
      institution: "Jayshree Periwal High School",
      period: "2022",
      percentage: "92%",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            About Me
          </h1>

          <div className="bg-card border border-border rounded-lg p-8 mb-12 glow-border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a <span className="text-primary font-semibold">highly motivated AI/ML and data analytics enthusiast</span> pursuing my Bachelor of Science in Geology at{" "}
              <span className="text-foreground font-semibold">
                Indian Institute of Technology Kharagpur
              </span>
              .
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I have hands-on experience developing <span className="text-foreground">algorithmic trading models</span>,{" "}
              <span className="text-foreground">RLHF systems</span>,{" "}
              <span className="text-foreground">full-stack ML/AI applications</span>, and building
              end-to-end <span className="text-foreground">data pipelines</span>. I'm skilled in designing scalable solutions, optimizing model performance, and delivering actionable business insights.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My technical expertise spans <span className="text-foreground">PyTorch, TensorFlow, Docker, AWS</span>, and modern data tools like <span className="text-foreground">Apache Kafka and Airflow</span>. I'm passionate about competitive programming (Codeforces 1200+) and open-source contributions to TensorFlow, HuggingFace, and LangChain.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" />
            Education
          </h2>

          <div ref={ref} className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground mb-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-primary">
                      {edu.cgpa || edu.percentage}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
