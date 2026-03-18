import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
}

const letterVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -90,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (custom: { stagger: number; delay: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay,
    },
  }),
};

const AnimatedText = ({ 
  text, 
  className = "", 
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.03 
}: AnimatedTextProps) => {
  const letters = text.split("");

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={{ stagger: staggerChildren, delay }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          transition={{
            duration,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ 
            transformStyle: "preserve-3d",
            display: letter === " " ? "inline" : "inline-block",
            minWidth: letter === " " ? "0.3em" : undefined,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
