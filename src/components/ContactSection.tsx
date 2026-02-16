import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Instagram, Phone, Clock, Briefcase, CheckCircle, XCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_u8piqgb";
const TEMPLATE_ID = "template_ezyiput";
const PUBLIC_KEY = "1tx_Xm-Rr-_XZDEZc";

const socials = [
  { icon: Github, href: "https://github.com/Toji-cmd7", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shahban-shah", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Syed_ShahbanX", label: "Twitter/X" },
  { icon: Instagram, href: "https://www.instagram.com/toxji.exe", label: "Instagram" },
  { icon: Mail, href: "mailto:syedshahban111@gmail.com", label: "Email" },
  { icon: Phone, href: "https://wa.me/923302563374", label: "WhatsApp" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

type FormStatus = "idle" | "sending" | "success" | "error";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all fields before sending.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name, email, message },
        PUBLIC_KEY
      );

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");

      // Auto-dismiss success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
      console.error("EmailJS error:", err);
    }
  };

  const isSending = status === "sending";

  return (
    <section id="contact" className="relative py-32 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-heading text-center mb-2">Get In Touch</h2>
        <div className="w-24 h-[1px] bg-primary mx-auto mb-4 shadow-[0_0_10px_hsl(185_100%_50%/0.6)]" />
        <p className="text-center text-muted-foreground mb-6 max-w-md mx-auto text-sm">
          Have a project in mind or just want to chat? I'd love to hear from you.
        </p>

        {/* Availability badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
            <Briefcase size={13} className="text-primary" />
            <span className="text-xs text-muted-foreground">Open to freelance &amp; full-time opportunities</span>
          </div>
          <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
            <Clock size={13} className="text-primary" />
            <span className="text-xs text-muted-foreground">Typically responds within 24 hours</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="glass rounded-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="glass-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSending}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="glass-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSending}
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="glass-input resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSending}
            />
          </div>

          <motion.button
            type="submit"
            className="glass neon-border-cyan neon-glow-cyan px-8 py-3 rounded-full text-primary font-medium border border-primary/40 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={isSending ? {} : { scale: 1.05, boxShadow: "0 0 30px hsl(185 100% 50% / 0.5)" }}
            whileTap={isSending ? {} : { scale: 0.97 }}
            disabled={isSending}
          >
            {isSending ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>

        {/* Status messages */}
        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex items-center gap-3 rounded-xl px-5 py-4"
              style={{
                background: "rgba(34, 197, 94, 0.1)",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                boxShadow: "0 0 20px rgba(34, 197, 94, 0.15)",
              }}
            >
              <CheckCircle size={20} className="text-green-400 shrink-0" />
              <p className="text-sm text-green-300">Your message has been sent successfully.</p>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex items-center gap-3 rounded-xl px-5 py-4"
              style={{
                background: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                boxShadow: "0 0 20px rgba(239, 68, 68, 0.15)",
              }}
            >
              <XCircle size={20} className="text-red-400 shrink-0" />
              <p className="text-sm text-red-300">{errorMsg}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Preferred contact */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-muted-foreground/60 mb-1">Preferred contact method</p>
          <a href="mailto:syedshahban111@gmail.com" className="text-sm text-primary hover:underline">
            syedshahban111@gmail.com
          </a>
        </div>

        {/* Social icons */}
        <motion.div
          className="flex justify-center gap-6 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="glass w-12 h-12 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow-cyan transition-all"
              variants={itemVariants}
              whileHover={{ scale: 1.2, y: -4 }}
            >
              <s.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
