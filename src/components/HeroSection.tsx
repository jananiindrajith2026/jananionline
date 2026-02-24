import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-soft-purple blob-shape opacity-60 blur-xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-soft-yellow blob-shape-2 opacity-50 blur-xl" />
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-soft-blue blob-shape opacity-40 blur-2xl animate-float" />

      {/* Decorative dots */}
      <div className="absolute top-32 left-12 w-3 h-3 rounded-full bg-accent animate-float" />
      <div className="absolute top-48 right-20 w-2 h-2 rounded-full bg-primary opacity-50 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-1/3 w-4 h-4 rounded-full bg-hero-pink opacity-30 animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-soft-purple border border-primary/20 mb-6">
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-semibold text-primary">Welcome to my portfolio</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-4">
              Hello, I'm{" "}
              <span className="gradient-text">Janani I</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">An Aspiring Developer</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Passionate about building clean, responsive websites and continuously improving my programming skills. Currently pursuing B.E. at KIT.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                View My Projects <ArrowDown size={16} />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-border bg-card text-foreground font-semibold text-sm hover:border-primary/40 transition-all"
              >
                Contact Me <Mail size={16} />
              </button>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 mt-10 justify-center md:justify-start">
              {[
                { num: "5+", label: "Projects" },
                { num: "4+", label: "Skills" },
                { num: "2028", label: "Graduation" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-foreground">{stat.num}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0 relative"
          >
            {/* Background blob behind image */}
            <div className="absolute inset-0 -m-6 bg-gradient-to-br from-primary/20 via-accent/20 to-hero-pink/20 blob-shape animate-spin-slow" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-card shadow-2xl">
              <img
                src={profilePhoto}
                alt="Janani I - Aspiring Software Developer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-2 -right-2 bg-card rounded-2xl shadow-lg px-4 py-2.5 border border-border"
            >
              <p className="text-xs font-bold text-foreground">B.E. Student</p>
              <p className="text-[10px] text-muted-foreground">KIT • 2024–2028</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
