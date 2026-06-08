import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Expense Tracker",
    desc: "A comprehensive financial management tool with real-time visualization and automated categorization of expenses.",
    tags: ["React", "Spring Boot", "MySQL", "JWT"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop",
    size: "large",
    github: "https://github.com/Dhiraj96k/MoneyManager-FE",
    live: "https://github.com/Dhiraj96k/MoneyManager-FE",
  },
  {
    title: "Complaint System",
    desc: "Streamlined ticket management system for organizations.",
    tags: ["React", "Spring Data", "MySQL"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    size: "small",
    github: "https://github.com/Dhiraj96k/SmartComplaint",
    live: "https://github.com/Dhiraj96k/SmartComplaint",
  },
  {
    title: "Book Store",
    desc: "A performant e-commerce solution for digital and physical books.",
    tags: ["JavaScript", "PHP", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2000&auto=format&fit=crop",
    size: "medium",
    github: "https://github.com/Dhiraj96k/Book-Store",
    live: "https://github.com/Dhiraj96k/Book-Store",
  },
];

const TiltCard = ({ children, className, p, i }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      data-cursor="VIEW"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full h-full relative">
        {children}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="section-projects py-24 relative overflow-hidden text-foreground">
    {/* Decorative blur */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-accent" />
          <p className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Portfolio</p>
        </div>
        <h2 className="text-5xl md:text-7xl font-display font-black mb-6 text-foreground leading-none">
          CRAFTED <br />
          <span className="text-gradient-accent text-outline-white">EXPERIENCES</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[250px] perspective-1000">
        {projects.map((p, i) => (
          <TiltCard
            key={p.title}
            p={p}
            i={i}
            className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 glass-card transition-colors duration-500 hover:border-accent/30 ${
              p.size === "large" ? "md:col-span-4 md:row-span-2" : 
              p.size === "medium" ? "md:col-span-2 md:row-span-2" : 
              "md:col-span-2 md:row-span-2 md:col-start-1"
            }`}
          >
            {/* Project Image backdrop */}
            <div className="absolute inset-0 z-0 rounded-[2.5rem] overflow-hidden">
              <img 
                src={p.image} 
                className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                alt={p.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>

            <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-end">
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-[9px] uppercase tracking-widest rounded-full bg-white/5 border border-white/5 text-muted-foreground font-bold group-hover:border-accent/20 group-hover:text-accent transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-tight">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {p.desc}
              </p>
              
              <div className="flex gap-4 mt-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-accent text-accent-foreground hover:scale-110 transition-transform">
                  <ExternalLink size={20} />
                </a>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-foreground hover:bg-white/10 transition-colors">
                  <GitBranch size={20} />
                </a>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
