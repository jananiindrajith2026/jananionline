import { motion } from "framer-motion";
import { GraduationCap, Target, Heart } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-14">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Get to Know Me</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div {...fadeInUp} className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              I'm a motivated Bachelor of Engineering student at <span className="text-foreground font-medium">Kangeyam Institute of Technology</span> (Expected Graduation: 2028). I have a strong interest in web development and programming.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I'm learning HTML, CSS, JavaScript, and Data Structures. I enjoy building websites, solving problems, and constantly pushing myself to grow as a developer.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My goal is to become a skilled software developer who creates meaningful and user-friendly digital experiences. I'm hardworking, positive, and eager to learn every day.
            </p>
          </motion.div>

          {/* Info cards */}
          <motion.div {...fadeInUp} className="space-y-4">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                desc: "B.E. at Kangeyam Institute of Technology (2024–2028)",
              },
              {
                icon: Target,
                title: "Goal",
                desc: "Become a skilled software developer building impactful solutions",
              },
              {
                icon: Heart,
                title: "Passion",
                desc: "Web development, clean design, and continuous learning",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border hover:card-shadow-hover transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground text-sm">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
