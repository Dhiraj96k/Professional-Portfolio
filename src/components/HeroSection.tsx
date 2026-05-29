import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroArt from "@/assets/hero-art.jpg";

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="section-hero min-h-screen flex items-center relative overflow-hidden pt-24 pb-12">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-secondary" />
            <p className="text-secondary font-bold tracking-[0.3em] uppercase text-xs">Available for Freelance</p>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-display font-black leading-[0.9] mb-8 overflow-hidden flex flex-col">
            <motion.span 
              className="block overflow-hidden flex"
              variants={wordVariants}
              initial="hidden"
              animate="visible"
            >
              {"DIGITAL".split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.span>
            <motion.span 
              className="text-gradient-primary block overflow-hidden flex"
              variants={wordVariants}
              initial="hidden"
              animate="visible"
            >
              {"ALCHEMIST".split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-muted-foreground text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-light">
            I transform complex problems into <span className="text-foreground font-medium">elegant digital narratives</span> through code and design excellence.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex gap-6 flex-wrap">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] transition-all"
            >
              Explore Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full border border-white/10 glass text-foreground font-bold uppercase tracking-widest text-xs hover:border-primary/50 transition-all"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="relative"
          style={{
            x: mousePosition.x * -1,
            y: mousePosition.y * -1,
          }}
        >
          <motion.div 
            className="relative z-10 aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[2rem] border border-white/10 glass-card p-4"
            style={{
              x: mousePosition.x * 2,
              y: mousePosition.y * 2,
            }}
          >
             <img
              src={heroArt}
              alt="Creative portrait"
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none"
            />
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 border-l-2 border-b-2 border-primary/30 rounded-bl-3xl" />
          <div className="absolute -top-8 -right-8 w-32 h-32 border-r-2 border-t-2 border-secondary/30 rounded-tr-3xl" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground group-hover:text-primary transition-colors">Scroll</span>
        <ArrowDown size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
