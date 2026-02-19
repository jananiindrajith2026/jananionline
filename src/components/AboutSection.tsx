import { motion } from "framer-motion";
import { GraduationCap, Target, Heart, Code } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-soft-purple blob-shape opacity-40 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-soft-yellow blob-shape-2 opacity-30 blur-2xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div {...fadeInUp} className="text-center mb-14">
          <span className="inline-block text-xs font-bold text-primary tracking-widest uppercase bg-soft-purple px-4 py-1.5 rounded-full mb-3">About Me</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Designing Solutions, Not<br />Just <span className="gradient-text">Visuals</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left – info cards */}
          <motion.div {...fadeInUp} className="space-y-5">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                desc: "B.E. at Kangeyam Institute of Technology (2024–2028)",
                color: "bg-soft-purple",
                iconColor: "text-primary",
              },
              {
                icon: Code,
                title: "Currently Learning",
                desc: "HTML, CSS, JavaScript, and Data Structures",
                color: "bg-soft-yellow",
                iconColor: "text-accent-foreground",
              },
              {
                icon: Target,
                title: "Goal",
                desc: "Become a skilled software developer building impactful solutions",
                color: "bg-soft-blue",
                iconColor: "text-primary",
              },
              {
                icon: Heart,
                title: "Passion",
                desc: "Building websites, solving problems, and continuous learning",
                color: "bg-soft-purple",
                iconColor: "text-hero-pink",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-border card-hover"
              >
                <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                  <item.icon size={20} className={item.iconColor} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-foreground text-sm">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right – bio text */}
          <motion.div {...fadeInUp} className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              I'm a motivated Bachelor of Engineering student at <span className="text-foreground font-semibold">Kangeyam Institute of Technology</span>. I have a strong interest in web development and programming.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I enjoy building websites, solving problems, and constantly pushing myself to grow as a developer. I'm hardworking, positive, and eager to learn every day.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My goal is to become a skilled software developer who creates meaningful and user-friendly digital experiences.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-soft-purple text-center">
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="text-xs text-muted-foreground mt-1">Practice Projects</p>
              </div>
              <div className="p-4 rounded-2xl bg-soft-yellow text-center">
                <p className="text-2xl font-bold text-accent-foreground">4+</p>
                <p className="text-xs text-muted-foreground mt-1">Technologies Learning</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
