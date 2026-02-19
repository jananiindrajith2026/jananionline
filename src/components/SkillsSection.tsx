import { motion } from "framer-motion";
import {
  Code, FileCode, Braces, GitBranch, Database,
  MessageSquare, Users, Lightbulb, BookOpen, Sparkles,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const technicalSkills = [
  { name: "HTML", icon: Code, level: 80 },
  { name: "CSS", icon: FileCode, level: 70 },
  { name: "Basic JavaScript", icon: Braces, level: 40 },
  { name: "Data Structures", icon: Database, level: 35 },
  { name: "Git & GitHub", icon: GitBranch, level: 40 },
];

const softSkills = [
  { name: "Communication", icon: MessageSquare },
  { name: "Teamwork", icon: Users },
  { name: "Problem-Solving", icon: Lightbulb },
  { name: "Continuous Learning", icon: BookOpen },
  { name: "Hardworking & Positive", icon: Sparkles },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-14">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">What I Know</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">My Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical */}
          <motion.div {...fadeInUp}>
            <h3 className="font-sans font-semibold text-foreground mb-6 text-lg">Technical Skills</h3>
            <div className="space-y-5">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <skill.icon size={16} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft */}
          <motion.div {...fadeInUp}>
            <h3 className="font-sans font-semibold text-foreground mb-6 text-lg">Soft Skills</h3>
            <div className="grid grid-cols-1 gap-3">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:card-shadow-hover transition-shadow"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <skill.icon size={18} className="text-accent-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
