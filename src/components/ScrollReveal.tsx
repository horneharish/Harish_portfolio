import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollReveal = ({ children, className = "", delay = 0 }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
