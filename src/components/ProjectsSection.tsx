import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CodeCollab",
    desc: "Real-time collaborative code editor with syntax highlighting, live cursors, and integrated terminal.",
    tech: ["React", "Socket.io", "Monaco Editor", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    title: "ML Visualizer",
    desc: "Interactive visualizations of machine learning algorithms — from gradient descent to neural networks.",
    tech: ["Python", "D3.js", "Flask", "TensorFlow"],
    github: "#",
    live: "#",
  },
  {
    title: "TaskFlow",
    desc: "Kanban-style project management app with drag-and-drop, real-time sync, and team features.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    github: "#",
    live: "#",
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
              <div className="flex gap-3 md:mt-1">
                <a href={project.github} className="p-2 rounded-lg border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.live} className="p-2 rounded-lg border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
