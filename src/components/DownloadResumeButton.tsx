import { motion } from "framer-motion";
import { Download } from "lucide-react";

/**
 * A floating button that allows users to download the resume.
 * Replaced the original chat/contact button at the user's request.
 */
const DownloadResumeButton = () => (
  <motion.a
    href="/resume.pdf"
    download="Resume.pdf"
    className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-110 transition-all group"
    initial={{ scale: 0, rotate: -45 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
    whileHover={{ 
      y: -5,
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.9 }}
    aria-label="Download Resume"
  >
    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    <Download size={28} className="transition-transform group-hover:translate-y-0.5" />
    
    {/* Tooltip */}
    <span className="absolute right-20 bg-background/90 text-foreground px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 border border-white/10 glass translate-x-4 group-hover:translate-x-0">
      Download CV
    </span>
  </motion.a>
);

export default DownloadResumeButton;
