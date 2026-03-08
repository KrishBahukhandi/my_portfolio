import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/krish-bahukhandi-2158b2285" },
  { icon: Mail, label: "Email", href: "mailto:krishbahukhandi35@gmail.com" },
  { icon: Phone, label: "Phone", href: "tel:+919056049691" },
];

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-sm text-primary mb-2 text-glow">{"// contact"}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="font-body text-secondary-foreground text-lg mb-10">
          I'm always open to new opportunities, collaborations, or just a friendly chat about tech.
        </p>

        <div className="flex justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all hover:border-glow group"
            >
              <s.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
