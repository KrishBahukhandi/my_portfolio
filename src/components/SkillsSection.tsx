import { motion } from "framer-motion";

const skillGroups = [
  { title: "Languages & DB", skills: ["Swift", "Java", "C++", "Python", "JavaScript", "MySQL", "MongoDB"] },
  { title: "Core Concepts", skills: ["OOP", "DSA", "REST APIs", "MVC/MVVM"] },
  { title: "Frameworks & Tools", skills: ["SwiftUI", "UIKit", "MERN Stack", "Xcode", "Git", "Jira"] },
  { title: "Practices", skills: ["Agile Development", "Debugging", "UI/UX Principles"] },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-sm text-primary mb-2 text-glow">{"// skills"}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Tech <span className="gradient-text">Stack</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <h3 className="font-display text-primary text-sm mb-4">
              {">"} {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-body border border-border hover:border-primary/40 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
