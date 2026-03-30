import { motion } from "framer-motion";
import { Smartphone, Globe, Plug, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "iOS App Development",
    desc: "Native iPhone and iPad apps built with Swift and SwiftUI. From concept to App Store — clean UI, smooth animations, REST API integration, and CoreLocation support.",
    tags: ["Swift", "SwiftUI", "UIKit", "Xcode"],
  },
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    desc: "End-to-end web applications using the MERN stack. Responsive React frontends, Node.js/Express backends, and MongoDB or SQL databases — scalable and production-ready.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    icon: Plug,
    title: "API Development & Integration",
    desc: "RESTful API design, third-party integrations, and data pipelines. I can build the backend your app needs or wire up the services you already use.",
    tags: ["REST APIs", "JSON", "Auth", "Node.js"],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-sm text-primary mb-2 text-glow">{"// services"}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          What I <span className="gradient-text">Build</span>
        </h2>
        <p className="font-body text-secondary-foreground text-lg mb-12 max-w-2xl">
          Here's what you can hire me for. Every project is delivered with clean code, clear communication, and on-time delivery.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:border-glow flex flex-col"
          >
            <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
              <service.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold mb-3">{service.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{service.desc}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {service.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs font-display rounded bg-secondary text-primary border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-display text-xs text-primary hover:gap-2.5 transition-all"
            >
              Get a Quote <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
