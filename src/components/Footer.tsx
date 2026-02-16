import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    className="glass py-8 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <p className="text-sm text-muted-foreground">
      © 2026 Syed Shahban. All rights reserved.
    </p>
    <p className="text-xs text-muted-foreground/50 mt-2 font-mono">
      React · Tailwind CSS · Framer Motion
    </p>
  </motion.footer>
);

export default Footer;
