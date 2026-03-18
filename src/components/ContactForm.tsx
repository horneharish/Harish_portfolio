import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_m6ioyxd",
        "template_rl3nmqr",
        {
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        },
        "26j3FzYMEA3QC6yo8"
      );

      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Email send error:", error);
      alert("Failed to send message ❌");
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses = "w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300";

  return (
    <div className="min-h-screen py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Get In Touch
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold mt-4 mb-6">
              Let's <span className="gradient-text-primary">Connect</span>
            </h1>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <ScrollReveal className="lg:col-span-2">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 rounded-xl glass">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:hornetharish@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    hornetharish@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 rounded-xl glass">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+917538807065" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 7538807065
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 rounded-xl glass">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    JJ nagar , Thirupalai, Madurai
                  </p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal className="lg:col-span-3">
            <motion.form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className={inputClasses}
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className={inputClasses}
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl overflow-hidden transition-all duration-300 disabled:opacity-70"
              >
                <motion.span
                  animate={{
                    y: isSubmitted ? -40 : 0,
                    opacity: isSubmitted ? 0 : 1,
                  }}
                  className="flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.span>
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  animate={{
                    y: isSubmitted ? 0 : 40,
                    opacity: isSubmitted ? 1 : 0,
                  }}
                  className="absolute inset-0 flex items-center justify-center text-primary-foreground"
                >
                  Message Sent! ✓
                </motion.span>
              </motion.button>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
