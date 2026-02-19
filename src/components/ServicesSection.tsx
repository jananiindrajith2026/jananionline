import { motion } from "framer-motion";
import { Palette, Code, Smartphone, Layout } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const services = [
  { icon: Palette, title: "Basic Web Design", desc: "Creating visually appealing and clean web designs that prioritize user experience." },
  { icon: Code, title: "Front-End Development", desc: "Building structured web pages using HTML, CSS, and basic JavaScript." },
  { icon: Smartphone, title: "Responsive Websites", desc: "Ensuring websites look great and work seamlessly on all screen sizes." },
  { icon: Layout, title: "User-Friendly Design", desc: "Focusing on intuitive layouts and clear navigation for better usability." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-14">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">What I Offer</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Services</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed text-sm">
            I create simple and responsive websites using HTML, CSS, and JavaScript. I focus on clean layouts and user-friendly designs, continuously learning to build better and more efficient websites.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:card-shadow-hover transition-all group"
            >
              <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon size={20} className="text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-sans font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
