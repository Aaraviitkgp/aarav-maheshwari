import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const education = [
    {
      degree: "B.Tech in Agricultural and Food Engineering",
      institution: "Indian Institute of Technology Kharagpur",
      period: "2023 - 2028",
      cgpa: "7.96",
    },
    {
      degree: "Class XII",
      institution: "Higher Secondary Education",
      period: "2023",
      percentage: "96.20%",
    },
    {
      degree: "Class X",
      institution: "Secondary Education",
      period: "2021",
      percentage: "93%",
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
              I am a <span className="text-primary font-semibold">Blockchain Developer</span> and{" "}
              <span className="text-primary font-semibold">Full Stack Engineer</span>, currently
              pursuing B.Tech in Agricultural and Food Engineering at the{" "}
              <span className="text-foreground font-semibold">
                Indian Institute of Technology Kharagpur
              </span>
              .
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I build scalable backend systems using <span className="text-foreground">FastAPI</span> and{" "}
              <span className="text-foreground">Node.js</span>, modern web frontends with{" "}
              <span className="text-foreground">React + Tailwind</span>, and cross-platform mobile
              apps using <span className="text-foreground">Flutter</span> and{" "}
              <span className="text-foreground">React Native</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I also contribute to decentralized apps and smart contract development as part of the{" "}
              <span className="text-secondary font-semibold">Blockchain Team at KodeinKGP</span>,
              IIT Kharagpur's Web3 & AI society.
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
