import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-bold text-primary text-glow">
          {"<KB />"}
        </a>

        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="font-display text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-display text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
