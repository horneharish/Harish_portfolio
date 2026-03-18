import ParticleBackground from "@/components/ParticleBackground";
import FloatingIcons from "@/components/FloatingIcons";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import AutomationWorkflow from "@/components/AutomationWorkflow";
import FigJamShowcase from "@/components/FigJamShowcase";

const Experience = () => {
  return (
    <>
      <ParticleBackground />
      <FloatingIcons />
      <ExperienceTimeline />

      <div className="my-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <FigJamShowcase />

      <div className="my-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <AutomationWorkflow />
    </>
  );
};

export default Experience;
