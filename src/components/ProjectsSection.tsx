import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "UniRide",
    desc: "A full-scale iOS campus ride-sharing & community platform with real-time, location-based discovery. Built with CoreLocation for geofencing and Codable for JSON-backed persistence — now published and live on the App Store.",
    tech: ["Swift", "SwiftUI", "Codable", "CoreLocation"],
    github: "https://github.com/iOS-DC/Odyssey-labs-iOS-App",
    live: "https://apps.apple.com/in/app/uniride/id6760745418" as string | null,
  },
  {
    title: "Tareshwar Tutorials",
    desc: "A live marketing website for a K–12 coaching centre in Panchkula, currently in production use. Hand-built and fully responsive, with course details, faculty highlights, and clear calls-to-action tuned for local search and mobile visitors.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive"],
    github: null as string | null,
    live: "https://krishbahukhandi.github.io/tareshwar-tutorials-web/" as string | null,
  },
  {
    title: "Salon Website (Demo)",
    desc: "A demo landing page for a premium salon ('Luxe Beauty Studio'), showcasing conversion-focused web design for local businesses — service listings, gallery, and booking call-to-actions in a polished, responsive layout.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive"],
    github: null as string | null,
    live: "https://krishbahukhandi.github.io/demo-salon/" as string | null,
  },
  {
    title: "Clinic Website (Demo)",
    desc: "A demo site for a doctor's clinic ('HealthFirst Clinic') — a clean, trustworthy layout with services, doctor profile, and appointment call-to-actions, built to demonstrate healthcare web design for local practices.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive"],
    github: null as string | null,
    live: "https://krishbahukhandi.github.io/demo-clinic/" as string | null,
  },
  {
    title: "Gym Website (Demo)",
    desc: "A demo landing page for a fitness gym ('IronEdge Fitness') — a bold, high-energy design with membership plans, class highlights, and sign-up call-to-actions, built to showcase marketing sites for fitness brands.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive"],
    github: null as string | null,
    live: "https://krishbahukhandi.github.io/demo-gym/" as string | null,
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
