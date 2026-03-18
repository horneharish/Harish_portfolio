import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import resumePdf from "@/assets/Harish_resume.pdf";

const socialLinks = [
  { icon: Github, href: "https://github.com/horneharish", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/harish-b-a7797024b/", label: "LinkedIn" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=hornetharish@gmail.com", label: "Gmail" },
  { icon: FileText, href: resumePdf, label: "Resume" },
];

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="fixed left-8 bottom-8 z-40 hidden md:flex flex-col gap-6"
    >
      {socialLinks.map((link, i) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="group relative p-3 rounded-full glass transition-all duration-300 hover:scale-110"
          whileHover={{
            boxShadow: "0 0 20px hsl(var(--primary) / 0.5)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
        >
          <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          <span className="absolute left-full ml-4 px-3 py-1 rounded-md bg-card text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
            {link.label}
          </span>
        </motion.a>
      ))}
      <motion.div
        className="w-px h-24 bg-gradient-to-b from-primary/50 to-transparent mx-auto"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 2 }}
      />
    </motion.div>
  );
};

export default SocialLinks;
