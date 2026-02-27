import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden">
      {/* Animated gradient background mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-hero-pink/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-sm mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <span className="text-xs font-medium text-muted-foreground">Open to opportunities</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-[1.1] mb-3">
              Hi, I'm{" "}
              <span className="gradient-text">Janani I</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl font-sans font-medium text-primary/80 mb-5"
            >
              Aspiring Software Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-10 mx-auto lg:mx-0"
            >
              Passionate about building clean, responsive websites and continuously 
              improving my programming skills. Currently pursuing B.E. at{" "}
              <span className="font-medium text-foreground">Kangeyam Institute of Technology</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                View My Projects
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border text-foreground font-semibold text-sm hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Me
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>

            {/* Social links + Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start"
            >
              {/* Social icons */}
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Mail, href: "mailto:janani@example.com" },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-10 h-10 rounded-xl bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              <div className="h-8 w-px bg-border hidden sm:block" />

              {/* Stats */}
              <div className="flex items-center gap-6">
                {[
                  { num: "5+", label: "Projects" },
                  { num: "4+", label: "Skills" },
                  { num: "2028", label: "Graduation" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-xl font-bold text-foreground">{stat.num}</p>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0 relative"
          >
            {/* Animated gradient ring */}
            <div className="absolute inset-0 -m-3 rounded-full bg-gradient-to-br from-primary via-hero-pink to-accent animate-spin-slow opacity-60 blur-sm" />
            <div className="absolute inset-0 -m-2 rounded-full bg-gradient-to-tr from-primary via-accent to-hero-pink animate-spin-slow opacity-40" style={{ animationDirection: "reverse" }} />

            {/* Image container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-4 ring-card shadow-2xl shadow-primary/10">
              <img
                src={profilePhoto}
                alt="Janani I - Aspiring Software Developer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-3 bg-card/90 backdrop-blur-md rounded-2xl shadow-lg px-5 py-3 border border-border"
            >
              <p className="text-sm font-bold text-foreground">🎓 B.E. Student</p>
              <p className="text-[11px] text-muted-foreground">KIT • 2024–2028</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-2 -left-4 bg-card/90 backdrop-blur-md rounded-2xl shadow-lg px-4 py-2.5 border border-border"
            >
              <div className="flex items-center gap-1.5">
                <Sparkles size={14} className="text-accent" />
                <p className="text-xs font-semibold text-foreground">Web Developer</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
