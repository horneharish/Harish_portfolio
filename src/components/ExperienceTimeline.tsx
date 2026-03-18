import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "AI Creative Analyst",
    company: "SI House of Models",
    period: "May 2024 - Present",
    description: [
      "Built end-to-end AI workflows using ComfyUI, SDXL, and automation pipelines for largescale image and video generation.",
      "Developed Python-based automation systems, enabling high-volume, repeatable creative output with minimal manual effort.",
      "Produced AI-generated product images, model swaps, background changes, clothing variations, and marketing visuals for client campaigns.",
      "Integrated APIs and external AI tools to enhance workflow speed, scalability, and reliability.",
      "Created promotional visuals, ads, and campaign materials using advanced prompt engineering and creative AI techniques.",
      "Improved production efficiency through intelligent, AI-driven workflow optimization, and automation."
    ],
    technologies: ["Automation", "SDXL", "AI workflow", "ComfyUI", "POC Images Genration", "Prompt Engineering", "Creative AI Tools", "Image Generation"],
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Career
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold mt-4">
              Work <span className="gradient-text-primary">Experience</span>
            </h1>
          </div>
        </ScrollReveal>

        {/* Experience Cards */}
        <div className="space-y-16">
          {experiences.map((exp) => (
            <ScrollReveal key={exp.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 border border-primary/20"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Briefcase className="w-6 h-6" />
                    </div>

                    {/* Role + Company */}
                    <div>
                      <h3 className="text-2xl font-bold">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Date pill */}
                  <span className="px-4 py-1 text-sm rounded-full bg-secondary/40 text-muted-foreground w-fit">
                    {exp.period}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="mt-6 space-y-4 text-muted-foreground">
                  {exp.description.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary text-xs">
                        ✓
                      </span>
                      <p className="leading-relaxed">
                        {point}
                      </p>
                    </motion.li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;