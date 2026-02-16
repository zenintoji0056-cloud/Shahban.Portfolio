import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const approach = [
  "Start with scalable architecture (MVVM, Clean Architecture)",
  "Prioritize performance optimization and user experience",
  "Write maintainable, testable code with proper separation of concerns",
  "Implement comprehensive error handling and monitoring (Crashlytics)",
  "Iterate based on real user feedback and metrics",
];

const philosophy = [
  "Clean code over clever code",
  "Performance metrics over assumptions",
  "Real user testing over opinions",
  "Continuous learning and improvement",
];

const textReveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading text-center mb-2">About</h2>
        <div className="w-24 h-[1px] bg-primary mx-auto mb-16 shadow-[0_0_10px_hsl(185_100%_50%/0.6)]" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Profile image */}
        <motion.div
          className="flex justify-center md:sticky md:top-32"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="w-56 h-56 md:w-64 md:h-64 rounded-2xl glass overflow-hidden flex items-center justify-center"
            style={{
              borderImage: "linear-gradient(135deg, #00f0ff, #a855f7) 1",
              boxShadow: "0 0 30px hsl(185 100% 50% / 0.2), 0 0 60px hsl(270 91% 65% / 0.1)",
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={profilePhoto}
              alt="Syed Shahban"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="space-y-6">
          {/* How I Work */}
          <motion.div
            className="glass rounded-2xl p-8"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">How I Work</h3>
            <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
              I specialize in building production-grade mobile and web applications using 
              modern frameworks and Clean Architecture principles. I've shipped 15+ projects - 
              from gamified fitness RPGs and multiplayer gaming platforms to food delivery 
              systems and agency websites.
            </p>
            <ul className="space-y-3">
              {approach.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                  variants={textReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                >
                  <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Technical Philosophy */}
          <motion.div
            className="glass rounded-2xl p-8"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={2}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Technical Philosophy</h3>
            <ul className="space-y-3">
              {philosophy.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  variants={textReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 3}
                >
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <p className="text-muted-foreground/70 text-xs mt-5 leading-relaxed">
              Currently focused on Android (Kotlin/Jetpack Compose), Flutter, and modern 
              React/Next.js applications for startups and businesses.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-3 h-3 rounded-full bg-neon-cyan/30 hidden md:block"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-4 h-4 border border-neon-violet/30 rotate-45 hidden md:block"
        animate={{ y: [0, 15, 0], rotate: [45, 90, 45] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
};

export default AboutSection;
