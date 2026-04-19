import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Magnetic from "./Magnetic";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass rounded-full px-6 transition-all duration-300">
      <div className="flex items-center justify-between h-14">
        <Magnetic>
          <a href="#" className="font-display text-xl font-bold text-gradient-primary">
            Dhiraj
          </a>
        </Magnetic>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Magnetic key={l.href}>
              <motion.a
                href={l.href}
                whileHover={{ y: -2 }}
                className="relative text-xs uppercase tracking-widest font-semibold text-muted-foreground hover:text-primary transition-colors group px-4 py-2"
              >
                {l.label}
                <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-[calc(100%-2rem)]" />
              </motion.a>
            </Magnetic>
          ))}
          <Magnetic strength={0.2}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-widest font-bold hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all"
            >
              Hire Me
            </motion.a>
          </Magnetic>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold text-center"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
