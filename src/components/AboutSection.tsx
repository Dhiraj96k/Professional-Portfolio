import { useEffect, useState } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";
import { User, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 5, suffix: "+", label: "Years Experience" },
  { icon: User, value: 500, suffix: "+", label: "LinkedIn Connections" },
  { icon: GraduationCap, value: 15, suffix: "+", label: "Projects Done" },
];

const AnimatedNumber = ({ value }: { value: number }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  return (
    <motion.span
      onViewportEnter={() => {
        if (!hasAnimated) {
          animate(0, value, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (v) => setDisplayValue(Math.round(v)),
          });
          setHasAnimated(true);
        }
      }}
      viewport={{ once: true }}
    >
      {displayValue}
    </motion.span>
  );
};

const AboutSection = () => (
  <section id="about" className="section-about py-32 relative overflow-hidden">
    {/* Background Decorative Element */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <User size={14} className="text-primary" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Identity</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 text-foreground leading-tight">
            I build digital <br />
            <span className="text-gradient-primary">fortresses of logic</span>
          </h2>
          
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              With over half a decade in the trenches of web development, I've mastered the art of balancing <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-4">aesthetic brilliance</span> with technical robustness.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              I don't just write code; I architect experiences. My approach is rooted in meticulous planning, performance-first development, and a relentless pursuit of pixel perfection.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`p-8 rounded-[2rem] border border-white/5 glass-card flex flex-col justify-between h-48 ${
                i === 0 ? "sm:col-span-2 sm:h-auto sm:flex-row sm:items-center" : ""
              }`}
            >
              <div className="flex flex-col">
                <s.icon className="text-primary/40 mb-4" size={32} />
                <span className="text-4xl md:text-5xl font-display font-black text-foreground">
                  <AnimatedNumber value={s.value} />{s.suffix}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground mt-2">{s.label}</span>
              </div>
              
              {i === 0 && (
                <div className="hidden sm:block max-w-[200px] text-[10px] uppercase tracking-widest leading-relaxed text-muted-foreground/60 border-l border-white/10 pl-6">
                  Experience gained across diverse industries and complex tech stacks.
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
