import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Circle, Cpu, Sparkles, Activity, Clock, GraduationCap, Brain, Image, MessageSquare, Video, Wrench, Zap } from "lucide-react";
import portraitImage from "@/assets/harish.jpeg";

const capabilities = [
  { name: "GEN AI", icon: Brain },
  { name: "Image Generation", icon: Image },
  { name: "Prompt Engineering", icon: MessageSquare },
  { name: "Video Generation", icon: Video },
  { name: "Advanced AI Tools", icon: Wrench },
  { name: "LLM Automation", icon: Zap },
];

// Floating UI elements data
const floatingElements = [
  {
    id: "status",
    icon: Circle,
    title: "Status",
    content: "Available for Projects",
    badge: "● Live",
    color: "text-green-400",
    glowColor: "shadow-green-500/20",
    positions: [
      { top: "5%", left: "-15%", right: "auto" },
      { top: "15%", right: "-10%", left: "auto" },
      { bottom: "20%", left: "-12%", top: "auto", right: "auto" },
    ],
  },
  {
    id: "tech",
    icon: Cpu,
    title: "Tech Stack",
    content: "AI & Automation",
    color: "text-cyan-400",
    glowColor: "shadow-cyan-500/20",
    positions: [
      { top: "25%", right: "-18%", left: "auto" },
      { bottom: "35%", left: "-15%", top: "auto", right: "auto" },
      { top: "8%", left: "-10%", right: "auto" },
    ],
  },
  {
    id: "quality",
    icon: Sparkles,
    title: "Quality",
    content: "4K / Ultra HD Outputs",
    color: "text-primary",
    glowColor: "shadow-primary/20",
    positions: [
      { bottom: "10%", right: "-12%", top: "auto", left: "auto" },
      { top: "40%", left: "-18%", right: "auto" },
      { top: "5%", right: "-15%", left: "auto" },
    ],
  },
  {
    id: "workflow",
    icon: Activity,
    title: "Client Workflow",
    content: "Rendering… 95%",
    subContent: "AI Pipeline v2.5",
    color: "text-cyan-400",
    glowColor: "shadow-cyan-500/20",
    positions: [
      { top: "55%", right: "-20%", left: "auto" },
      { bottom: "5%", left: "-10%", top: "auto", right: "auto" },
      { top: "30%", left: "-16%", right: "auto" },
    ],
  },
];

const FloatingUIElement = ({
  element,
  isVisible,
  positionIndex
}: {
  element: typeof floatingElements[0];
  isVisible: boolean;
  positionIndex: number;
}) => {
  const position = element.positions[positionIndex % element.positions.length];
  const Icon = element.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -5, 0],
          }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 0.8, ease: "easeOut" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className={`absolute z-30 glass rounded-xl px-4 py-3 backdrop-blur-xl border border-white/10 shadow-lg ${element.glowColor}`}
          style={{
            ...position,
            minWidth: "140px",
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Icon className={`w-3.5 h-3.5 ${element.color}`} />
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
              {element.title}
            </span>
            {element.badge && (
              <span className="text-[9px] text-green-400 ml-auto">{element.badge}</span>
            )}
          </div>
          <div className="text-xs text-foreground/90 font-medium">{element.content}</div>
          {element.subContent && (
            <div className="text-[10px] text-muted-foreground mt-0.5">{element.subContent}</div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // State for cycling through visible elements (show 2-3 at a time)
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set([0, 2]));
  const [positionIndices, setPositionIndices] = useState<number[]>([0, 0, 0, 0, 0]);

  useEffect(() => {
    const cycleElements = () => {
      setVisibleElements(prev => {
        const allIndices = [0, 1, 2, 3, 4];
        const currentVisible = Array.from(prev);

        // Hide one random visible element
        const toHide = currentVisible[Math.floor(Math.random() * currentVisible.length)];

        // Show one random hidden element
        const hidden = allIndices.filter(i => !prev.has(i));
        const toShow = hidden[Math.floor(Math.random() * hidden.length)];

        const newSet = new Set(prev);
        newSet.delete(toHide);
        if (toShow !== undefined) newSet.add(toShow);

        // Update position for the newly shown element
        setPositionIndices(prevPos => {
          const newPos = [...prevPos];
          if (toShow !== undefined) {
            newPos[toShow] = (newPos[toShow] + 1) % 3;
          }
          return newPos;
        });

        // Ensure we always have 2-3 visible
        if (newSet.size < 2) {
          const available = allIndices.filter(i => !newSet.has(i));
          newSet.add(available[Math.floor(Math.random() * available.length)]);
        }

        return newSet;
      });
    };

    const interval = setInterval(cycleElements, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        style={{ y }}
        className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image & Floating UI Elements */}
          <ScrollReveal>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-3xl overflow-hidden aspect-[3/4]"
              >
                <img
                  src={portraitImage}
                  alt="Profile"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>

              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-primary/20 rounded-3xl -z-10" />
              <div className="absolute -inset-8 border border-primary/10 rounded-3xl -z-10" />

              {/* Floating UI Elements */}
              {floatingElements.map((element, index) => (
                <FloatingUIElement
                  key={element.id}
                  element={element}
                  isVisible={visibleElements.has(index)}
                  positionIndex={positionIndices[index]}
                />
              ))}
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div className="space-y-8">
            <ScrollReveal>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-6">
                About <span className="gradient-text-primary">Me</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-2">
                AI Creator and Automation Workflow Engineer with a focus on crafting innovative visual and video solutions through artificial intelligence. Proficient in designing and automating extensive content workflows tailored for a variety of brands. I specialize in integrating creative design with smart automation to produce scalable, high quality visuals across various product categories.
              </p>
            </ScrollReveal>

            {/* Education */}
            <ScrollReveal>
              <div className="space-y-6 pt-8">
                <h3 className="font-display text-xl font-semibold">Education</h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ y: -3 }}
                  className="glass rounded-xl p-6 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-primary/20 hover:border-primary/30 transition-all duration-500 relative"
                >
                  {/* Floating Education Icon Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute -top-3 -left-3 w-10 h-10 glass rounded-lg backdrop-blur-md border border-primary/30 shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center"
                  >
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </motion.div>
                  {/* Row 1: Degree | Duration */}
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display text-sm font-medium text-foreground">
                      B. Com, Art/Art Studies, General
                    </h4>
                    <span className="text-muted-foreground text-sm">
                      2020–2023
                    </span>
                  </div>

                  {/* Row 2: College | GPA */}
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground text-sm">
                      National College Trichy
                    </p>
                    <span className="text-muted-foreground text-sm">
                      GPA: 7.62
                    </span>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Capabilities */}
            <ScrollReveal>
              <div className="space-y-6 pt-8">
                <h3 className="font-display text-xl font-semibold">Capabilities & Expertise</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {capabilities.map((capability, index) => {
                    const Icon = capability.icon;
                    return (
                      <motion.div
                        key={capability.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animate={{ y: [0, -2, 0] }}
                        transition={{
                          opacity: { delay: index * 0.1, duration: 0.6 },
                          y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }
                        }}
                        whileHover={{ scale: 1.03 }}
                        className="glass rounded-lg p-4 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 text-center group"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/20 border border-primary/30 group-hover:shadow-primary/30 transition-shadow duration-300">
                             <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium">{capability.name}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;