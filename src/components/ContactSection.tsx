import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Linkedin, Github } from "./SocialIcons";
import Magnetic from "./Magnetic";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/dhiraj-salunke-259169222", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Dhiraj96k", label: "GitHub" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:hello@example.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="section-contact py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-display font-black mb-6 text-foreground">
              Let's <span className="text-gradient-primary">Collaborate</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Accelerate your digital evolution. Reach out and let's build something that stands out in the crowd.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 space-y-8"
            >
              {[
                { icon: Mail, label: "Email", value: "dhirajsalunke7350" },
                { icon: Phone, label: "Phone", value: "+91 73503 97408" },
                { icon: MapPin, label: "Locate", value: "Pune, Maharashtra, India " },
              ].map((item, i) => (
                <div key={i} className="group flex items-start gap-6 p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-muted-foreground mb-6 ml-2">Social Connections</p>
                <div className="flex gap-4">
                  {socials.map((social) => (
                    <Magnetic key={social.label} strength={0.3}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                      >
                        <social.icon size={20} />
                      </a>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6 p-8 md:p-12 rounded-[2.5rem] border border-white/10 glass-card"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground ml-4">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/5 text-foreground placeholder:text-muted-foreground/30 focus:border-primary focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground ml-4">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/5 text-foreground placeholder:text-muted-foreground/30 focus:border-primary focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground ml-4">Your Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-8 py-6 rounded-[2rem] bg-white/5 border border-white/5 text-foreground placeholder:text-muted-foreground/30 focus:border-primary focus:outline-none transition-all duration-300 resize-none"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] text-xs hover:shadow-[0_0_40px_rgba(var(--primary),0.3)] flex items-center justify-center gap-3 transition-all"
                >
                  Engage <Send size={18} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
