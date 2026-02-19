import { motion } from "framer-motion";
import {
  Code, FileCode, Braces, GitBranch, Database,
  MessageSquare, Users, Lightbulb, BookOpen, Sparkles,
} from "lucide-react";

const technicalSkills = [
  { name: "HTML", icon: Code, level: 80, color: "bg-primary" },
  { name: "CSS", icon: FileCode, level: 70, color: "bg-hero-pink" },
  { name: "Basic JavaScript", icon: Braces, level: 40, color: "bg-accent" },
  { name: "Data Structures", icon: Database, level: 35, color: "bg-primary" },
  { name: "Git & GitHub", icon: GitBranch, level: 40, color: "bg-hero-pink" },
];

const softSkills = [
  { name: "Communication", icon: MessageSquare, bg: "bg-soft-purple" },
  { name: "Teamwork", icon: Users, bg: "bg-soft-yellow" },
  { name: "Problem-Solving", icon: Lightbulb, bg: "bg-soft-blue" },
  { name: "Continuous Learning", icon: BookOpen, bg: "bg-soft-purple" },
  { name: "Hardworking & Positive", icon: Sparkles, bg: "bg-soft-yellow" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-10 left-10 w-52 h-52 bg-soft-blue blob-shape opacity-40 blur-2xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold text-primary tracking-widest uppercase bg-soft-purple px-4 py-1.5 rounded-full mb-3">Skills</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            My <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-sans font-bold text-foreground mb-6 text-lg flex items-center gap-2">
              <Code size={20} className="text-primary" />
              Technical Skills
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, i) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-soft-purple flex items-center justify-center">
                        <skill.icon size={15} className="text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-xs font-bold text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15 }}
                      className={`h-full rounded-full ${skill.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-sans font-bold text-foreground mb-6 text-lg flex items-center gap-2">
              <Sparkles size={20} className="text-accent" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border card-hover"
                >
                  <div className={`w-10 h-10 rounded-xl ${skill.bg} flex items-center justify-center flex-shrink-0`}>
                    <skill.icon size={18} className="text-foreground" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
