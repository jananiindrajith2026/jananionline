import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center section-padding pt-28">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden card-shadow ring-4 ring-card">
              <img
                src={profilePhoto}
                alt="Janani I - Aspiring Software Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              Janani I
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium mb-3">
              Aspiring Software Developer · Web Development Enthusiast
            </p>
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Passionate about building clean, responsive websites and continuously improving my programming skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                View My Projects <ArrowDown size={16} />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:bg-secondary transition-colors"
              >
                Contact Me <Mail size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
