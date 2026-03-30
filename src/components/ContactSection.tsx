import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/KrishBahukhandi" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/krish-bahukhandi-2158b2285" },
  { icon: Mail, label: "Email", href: "mailto:krishbahukhandi35@gmail.com" },
  { icon: Phone, label: "Phone", href: "tel:+919056049691" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry — ${form.projectType || "General"}`);
    const body = encodeURIComponent(
      `Hi Krish,\n\nMy name is ${form.name}.\n\n${form.message}\n\nBest,\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:krishbahukhandi35@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-display text-sm text-primary mb-2 text-glow">{"// contact"}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Start a <span className="gradient-text">Project</span>
          </h2>
          <p className="font-body text-secondary-foreground text-lg max-w-xl mx-auto">
            Have an idea or a project in mind? Tell me about it and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-display text-xs text-muted-foreground mb-1.5">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <label className="block font-display text-xs text-muted-foreground mb-1.5">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-display text-xs text-muted-foreground mb-1.5">Project Type</label>
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body text-sm focus:outline-none focus:border-primary/50 transition-colors"
              >
                <option value="">Select a type...</option>
                <option value="iOS App">iOS App</option>
                <option value="Web App / Full-Stack">Web App / Full-Stack</option>
                <option value="API Development">API Development</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block font-display text-xs text-muted-foreground mb-1.5">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe your project, timeline, and budget..."
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm font-medium border-glow hover:border-glow-intense transition-shadow inline-flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 flex flex-col justify-center gap-6"
          >
            <div>
              <h3 className="font-display text-base font-semibold mb-2">Availability</h3>
              <p className="font-body text-sm text-muted-foreground">
                Open to freelance work, product contracts, and part-time collaborations.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold mb-2">Response Time</h3>
              <p className="font-body text-sm text-muted-foreground">
                I typically respond within 24 hours.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold mb-3">Find Me On</h3>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all hover:border-glow"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
