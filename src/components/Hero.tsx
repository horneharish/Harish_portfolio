import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";
import FloatingIcons from "@/components/FloatingIcons";
import AnimatedText from "@/components/AnimatedText";
import SocialLinks from "@/components/SocialLinks";
import profileImg from "@/assets/Profile.png";

const roles = ["AI Creative Analyst", "Prompt Engineer", "AI - Film Making", "AI Image & Video Generation Specialist", "Turning Ideas into AI-Generated Reality"];

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      <ParticleBackground />
      <FloatingIcons />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none" style={{ background: "conic-gradient(from 0deg, transparent 0deg, hsl(0 90% 55% / 0.07) 60deg, transparent 120deg, hsl(180 80% 50% / 0.05) 180deg, transparent 240deg, hsl(355 85% 45% / 0.06) 300deg, transparent 360deg)", borderRadius: "50%", animation: "spin 20s linear infinite" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] pointer-events-none" style={{ background: "conic-gradient(from 180deg, transparent 0deg, hsl(355 85% 45% / 0.05) 90deg, transparent 150deg, hsl(0 90% 55% / 0.06) 210deg, transparent 270deg, hsl(180 80% 50% / 0.04) 330deg, transparent 360deg)", borderRadius: "50%", animation: "spin 30s linear infinite reverse" }} />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* LEFT COLUMN */}
        <div className="text-center lg:text-left">
          
          {/* Hi text */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="block text-lg text-muted-foreground mb-2"
          >
            Hi, I’m
          </motion.span>

          {/* Name */}
          <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight mb-6">
            <AnimatedText text="HARISH B" delay={0.8} />
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="text-lg text-muted-foreground max-w-xl mb-10"
          >
            AI Filmmaker, AI Creator and Automation Workflow Engineer with a focus on crafting innovative visual and video solutions through artificial intelligence. Proficient in designing and automating extensive content workflows tailored for a variety of brands. I specialize in integrating creative design with smart automation to produce scalable, high quality visuals across various product categories.
          </motion.p>

          {/* Roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
          >
            {roles.map((role, i) => (
              <span
                key={role}
                className="px-4 py-2 text-sm glass rounded-full text-muted-foreground"
              >
                {role}
              </span>
            ))}
          </motion.div>

          {/* CTA — NOW LEFT ALIGNED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            <Link to="/works">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 glass rounded-full"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Glow */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[320px] h-[420px] bg-primary/30 rounded-3xl blur-3xl animate-pulse" />
          </div>

          {/* Floating Image */}
          <motion.img
            src={profileImg}
            alt="Harish B"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-[300px] sm:w-[340px] lg:w-[380px] rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>



      <SocialLinks />

      {/* Noise overlay */}
      <div className="noise-overlay" />
    </div>
  );
};

export default Hero;
