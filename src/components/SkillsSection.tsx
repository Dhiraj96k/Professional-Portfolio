import { motion, useMotionValue, useTransform, useMotionTemplate } from "framer-motion";
import { Code2, Coffee, Leaf, Monitor, Smartphone, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, MouseEvent as ReactMouseEvent } from "react";

interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
  color: string;
}

const skills: Skill[] = [
  { name: "React / Next.js", level: 80, icon: Code2, color: "hsl(var(--secondary))" },
  { name: "Java", level: 90, icon: Coffee, color: "hsl(var(--primary))" },
  { name: "Spring Boot", level: 85, icon: Leaf, color: "hsl(142 70% 45%)" },
  { name: "Web Development", level: 92, icon: Monitor, color: "hsl(var(--secondary))" },
  { name: "Android Development", level: 75, icon: Smartphone, color: "hsl(var(--primary))" },
  { name: "Database", level: 90, icon: Database, color: "hsl(var(--accent))" },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col items-center p-8 rounded-3xl border border-white/5 bg-card/20 backdrop-blur-sm overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${skill.color.replace(")", " / 0.15)")},
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/5 relative z-10 transition-transform group-hover:scale-110">
        <skill.icon size={30} style={{ color: skill.color }} />
      </div>

      {/* Label */}
      <h3 className="font-display font-bold text-foreground text-lg text-center relative z-10">
        {skill.name}
      </h3>
      
      {/* Progress bar (subtle) */}
      <div className="w-full h-1 bg-white/5 rounded-full mt-6 overflow-hidden relative z-10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </motion.div>
  );
};


const SkillsSection = () => (
  <section id="skills" className="section-skills py-32 relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
          Tech <span className="text-secondary tracking-tighter italic">Stack</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          Crafting high-performance digital solutions with the latest technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
