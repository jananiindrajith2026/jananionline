import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Page",
    description: "A clean, responsive personal portfolio page built to showcase projects and skills with a minimal design approach.",
    tech: ["HTML", "CSS"],
    color: "from-primary/10 to-hero-pink/10",
  },
  {
    title: "Product Landing Page",
    description: "A simple static landing page with structured layout, call-to-action sections, and responsive design.",
    tech: ["HTML", "CSS"],
    color: "from-accent/20 to-soft-yellow",
  },
  {
    title: "Responsive Blog Layout",
    description: "A practice project focused on responsive grid layouts, typography, and content-first web design.",
    tech: ["HTML", "CSS"],
    color: "from-soft-blue to-soft-purple",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-soft-yellow blob-shape opacity-30 blur-2xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold text-primary tracking-widest uppercase bg-soft-purple px-4 py-1.5 rounded-full mb-3">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            My <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-2xl bg-background border border-border overflow-hidden card-hover"
            >
              {/* Gradient header */}
              <div className={`h-36 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <Folder size={40} className="text-primary/40 group-hover:scale-110 transition-transform" />
              </div>

              <div className="p-6">
                <h3 className="font-sans font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-bold px-3 py-1 rounded-full bg-soft-purple text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-primary transition-colors">
                    <Github size={14} /> GitHub
                  </button>
                  <button className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:opacity-70 transition-opacity">
                    <ExternalLink size={14} /> View Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
