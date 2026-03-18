import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/works", label: "Works" },
  { path: "/about", label: "About" },
  { path: "/experience", label: "Experience" },
  { path: "/contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="relative z-50">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-2xl font-bold gradient-text-primary"
            >
              PORTFOLIO
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`relative font-medium text-sm uppercase tracking-wider link-underline transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  custom={i}
                  variants={itemVariants}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-4xl font-bold transition-colors duration-300 ${
                      location.pathname === item.path
                        ? "text-primary glow-text"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
