import { motion } from "framer-motion";

import serviceWebdesign from "@/assets/service-webdesign.png";
import serviceFrontend from "@/assets/service-frontend.png";
import serviceResponsive from "@/assets/service-responsive.png";
import serviceUidesign from "@/assets/service-uidesign.png";

const services = [
  { logo: serviceWebdesign, title: "Basic Web Design", desc: "Creating visually appealing and clean web designs that prioritize user experience.", bg: "bg-soft-purple" },
  { logo: serviceFrontend, title: "Front-End Development", desc: "Building structured web pages using HTML, CSS, and basic JavaScript.", bg: "bg-soft-yellow" },
  { logo: serviceResponsive, title: "Responsive Websites", desc: "Ensuring websites look great and work seamlessly on all screen sizes.", bg: "bg-soft-blue" },
  { logo: serviceUidesign, title: "User-Friendly Design", desc: "Focusing on intuitive layouts and clear navigation for better usability.", bg: "bg-soft-purple" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute top-20 left-0 w-40 h-40 bg-soft-purple blob-shape-2 opacity-40 blur-2xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold text-primary tracking-widest uppercase bg-soft-purple px-4 py-1.5 rounded-full mb-3">Services</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Expertise Service!{" "}
            <span className="gradient-text">Let's check it out</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed text-sm">
            I create simple and responsive websites using HTML, CSS, and JavaScript. I focus on clean layouts and user-friendly designs, continuously learning to build better websites.
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
              className="p-7 rounded-2xl bg-card border border-border card-hover group"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform overflow-hidden border border-border`}>
                <img src={service.logo} alt={service.title} className="w-10 h-10 object-contain brightness-125 animate-float" style={{ animationDelay: `${i * 0.5}s` }} />
              </div>
              <h3 className="font-sans font-bold text-foreground text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
