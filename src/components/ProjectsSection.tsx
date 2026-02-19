import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const projects = [
  {
    title: "Personal Portfolio Page",
    description: "A clean, responsive personal portfolio page built to showcase projects and skills with a minimal design approach.",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Product Landing Page",
    description: "A simple static landing page with structured layout, call-to-action sections, and responsive design.",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Responsive Blog Layout",
    description: "A practice project focused on responsive grid layouts, typography, and content-first web design.",
    tech: ["HTML", "CSS"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-14">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Projects</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-background border border-border hover:card-shadow-hover transition-all"
            >
              <h3 className="font-sans font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-accent text-accent-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:opacity-80 transition-opacity">
                  <Github size={14} /> GitHub
                </button>
                <button className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:opacity-80 transition-opacity">
                  <ExternalLink size={14} /> View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
