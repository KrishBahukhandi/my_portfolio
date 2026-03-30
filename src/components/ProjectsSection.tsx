import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// TODO: Add GitHub/live URLs for Healthcare and Electricity Billing projects when repos are public
const projects = [
  {
    title: "UniRide",
    desc: "A full-scale iOS campus ride-sharing & community platform with real-time location-based discovery. Built with CoreLocation for geofencing and Codable for JSON-backed data persistence — designed for daily use by hundreds of students.",
    tech: ["Swift", "SwiftUI", "Codable", "CoreLocation"],
    github: "https://github.com/iOS-DC/Odyssey-labs-iOS-App",
    live: null as string | null,
  },
  {
    title: "Healthcare Management System",
    desc: "End-to-end healthcare platform that streamlines appointment scheduling, secure patient record management, and hospital workflows. Features a React dashboard and Node.js REST API connecting medical staff and patients in one system.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: null as string | null,
    live: null as string | null,
  },
  {
    title: "Electricity Billing Automation",
    desc: "Java-based billing system that automates electricity usage calculations, invoice generation, and payment tracking — replacing manual processes with a modular, maintainable OOP architecture.",
    tech: ["Java", "OOP"],
    github: null as string | null,
    live: null as string | null,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-display text-sm text-primary mb-2 text-glow">{"// projects"}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Featured <span className="gradient-text">Work</span>
        </h2>
      </motion.div>

      <div className="grid gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:border-glow"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:gradient-text transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body mb-4 max-w-xl">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs font-display rounded bg-secondary text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {(project.github || project.live) && (
                <div className="flex gap-3 md:mt-1">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
