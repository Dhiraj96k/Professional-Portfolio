import { motion } from "framer-motion";
import { GitBranch, Link, AtSign } from "lucide-react";

const Footer = () => (
  <footer className="py-12 bg-background relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="font-display text-2xl font-black text-gradient-primary mb-2">Dhiraj</a>
          <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] font-medium">
            Architecting Tomorrow
          </p>
        </div>
        
        <div className="flex gap-6">
          {[GitBranch, Link, AtSign].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ y: -3, scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold">
          © 2026 Crafted with Passion.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
