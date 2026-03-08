import { motion } from "framer-motion";
import { Code2, GraduationCap, Rocket } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "B.E. CSE", desc: "3rd Year • CGPA 9.01" },
  { icon: Code2, label: "iOS & Full Stack", desc: "Swift, MERN, Java, C++" },
  { icon: Rocket, label: "Builder", desc: "iOS Apps, Web Platforms & More" },
];

const AboutSection = () => (
  <section id="about" className="section-padding max-w-5xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="font-display text-sm text-primary mb-2 text-glow">{"// about"}</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
        Who I <span className="gradient-text">Am</span>
      </h2>

      <p className="font-body text-secondary-foreground text-lg leading-relaxed mb-12 max-w-3xl">
        I'm a Computer Science student who loves solving complex problems and building
        things that matter. From competitive programming to full-stack development,
        I enjoy the entire spectrum of software engineering. Currently seeking
        internship opportunities where I can grow and contribute.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
          >
            <item.icon className="w-8 h-8 text-primary mb-4 group-hover:text-glow" />
            <h3 className="font-display text-lg font-semibold mb-1">{item.label}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
