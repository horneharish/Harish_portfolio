import { motion } from "framer-motion";
import { Brain, Cpu, Star } from "lucide-react";

const stages = [
  {
    id: 1,
    title: "Product Creativity",
    icon: Brain,
    color: "cyan",
    glowColor: "shadow-cyan-500/50",
    bgColor: "bg-cyan-500/20",
    borderColor: "border-cyan-400/40",
    hoverBg: "hover:bg-cyan-500/30",
    hoverBorder: "hover:border-cyan-400/50",
    iconColor: "text-cyan-400",
    description: "Creative ideation, concept development, and AI-assisted visual experimentation."
  },
  {
    id: 2,
    title: "AI Tools & Models",
    icon: Cpu,
    color: "red",
    glowColor: "shadow-primary/50",
    bgColor: "bg-primary/20",
    borderColor: "border-primary/40",
    hoverBg: "hover:bg-primary/30",
    hoverBorder: "hover:border-primary/50",
    iconColor: "text-primary",
    description: "Generative AI tools, models, and automation pipelines.",
    dominant: true
  },
  {
    id: 3,
    title: "High Quality Outputs",
    icon: Star,
    color: "green",
    glowColor: "shadow-green-500/50",
    bgColor: "bg-green-500/20",
    borderColor: "border-green-400/40",
    hoverBg: "hover:bg-green-500/30",
    hoverBorder: "hover:border-green-400/50",
    iconColor: "text-green-400",
    description: "Final polished results and production-ready outputs."
  }
];

const AutomationWorkflow = () => {
  return (
    <section className="py-24 px-6">
      {/* Dotted Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 text-white">
            Automation <span className="gradient-text-primary">Workflow</span>
          </h2>
        </motion.div>

        {/* Workflow Diagram */}
        <div className="relative flex items-center justify-center gap-8 lg:gap-16">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isDominant = stage.dominant;

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: isDominant ? 1.05 : 1.02 }}
                className={`relative group ${isDominant ? 'scale-110' : ''}`}
              >
                {/* Stage Card */}
                <div className={`glass rounded-3xl p-8 border backdrop-blur-xl
                  ${stage.glowColor} hover:shadow-2xl transition-all duration-500
                  ${isDominant ? 'min-h-[320px]' : 'min-h-[280px]'} flex flex-col items-center justify-center text-center
                  ${stage.borderColor} ${stage.hoverBorder}`}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-full ${stage.bgColor} ${stage.borderColor}
                      flex items-center justify-center mb-6 ${stage.hoverBg} transition-colors duration-300`}
                  >
                    <Icon className={`w-8 h-8 ${stage.iconColor}`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">{stage.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    {stage.description}
                  </p>
                </div>

                {/* Connection Line (not for last stage) */}
                {index < stages.length - 1 && (
                  <div className="absolute top-1/2 -right-8 lg:-right-16 transform -translate-y-1/2 z-20">
                    {/* Glowing Line */}
                    <div className="relative w-16 lg:w-32 h-0.5 bg-gradient-to-r from-primary via-cyan-500 to-primary/70 rounded-full">
                      {/* Animated Particles */}
                      <motion.div
                        animate={{
                          x: [0, 100],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                      />
                      <motion.div
                        animate={{
                          x: [0, 100],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.5,
                          ease: "easeInOut"
                        }}
                        className="absolute top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-lg shadow-primary/50"
                      />
                      <motion.div
                        animate={{
                          x: [0, 100],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1,
                          ease: "easeInOut"
                        }}
                        className="absolute top-1/2 transform -translate-y-1/2 w-1 h-1 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Subtle Pulse Effect */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-primary/5 via-cyan-500/5 to-primary/3 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default AutomationWorkflow;