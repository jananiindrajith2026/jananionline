import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* CTA Banner */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-primary to-hero-pink p-10 md:p-14 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-primary-foreground/10 blob-shape blur-xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary-foreground/5 blob-shape-2 blur-lg" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Got A Project!<br />Let's Talk
            </h2>
            <p className="text-primary-foreground/80 max-w-md mb-6 text-sm leading-relaxed">
              I'm always open to new opportunities, collaborations, and exciting projects. Let's create something awesome together!
            </p>
            <button
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground text-primary font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Contact <ArrowUpRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Contact Form & Info */}
      <div id="contact-form" className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold text-primary tracking-widest uppercase bg-soft-purple px-4 py-1.5 rounded-full mb-3">Contact</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              Feel free to reach out if you'd like to work together or just say hello! I'd love to hear from you.
            </p>

            {[
              { icon: Mail, label: "Email", value: "janani@example.com", href: "mailto:janani@example.com", bg: "bg-soft-purple" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/janani", href: "https://linkedin.com", bg: "bg-soft-blue" },
              { icon: Github, label: "GitHub", value: "github.com/janani", href: "https://github.com", bg: "bg-soft-yellow" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border card-hover"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <item.icon size={20} className="text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                  <p className="text-sm font-bold text-foreground">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-semibold text-foreground mb-1.5">{field.label}</label>
                  <input
                    id={field.id}
                    type={field.type}
                    required
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1.5">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                {submitted ? "Message Sent! ✓" : <><Send size={16} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
