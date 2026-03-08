import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "iOS Application Development Intern",
    company: "Infosys – Education, Training & Assessment",
    period: "Dec 2025 – Jan 2026",
    points: [
      "Built iOS applications using Swift, SwiftUI, UIKit, and Xcode following industry coding standards.",
      "Implemented reusable UI components, navigation flows, and responsive layouts.",
      "Integrated REST APIs with JSON parsing and asynchronous data handling.",
      "Applied MVC / MVVM architecture to develop scalable and maintainable codebases.",
      "Used Git and Agile practices while debugging and optimizing application performance.",
    ],
  },
  {
    role: "Coding Expert Contributor",
    company: "OutliersAI",
    period: "Ongoing",
    points: [
      "Improved reasoning quality of Large Language Models using Reinforcement Learning from Human Feedback (RLHF).",
      "Identified logical inconsistencies and hallucinations in AI-generated responses.",
      "Contributed to enhanced accuracy, coherence, and reliability of large-scale AI systems.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-sm text-primary mb-2 text-glow">{"// experience"}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Work <span className="gradient-text">Experience</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-[19px]" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />

              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <h3 className="font-display text-lg font-bold flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    {exp.role}
                  </h3>
                  <span className="font-display text-xs text-primary border border-primary/30 rounded-full px-3 py-1 w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground font-display text-sm mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, pi) => (
                    <li key={pi} className="text-secondary-foreground font-body text-sm flex gap-2">
                      <span className="text-primary mt-1 shrink-0">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
