import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React Native", level: 82 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "CSS/Tailwind", level: 92 },
  { name: "Next.js", level: 78 },
  { name: "Flutter", level: 70 },
  { name: "Kotlin", level: 68 },
  { name: "Jetpack Compose", level: 65 },
  { name: "UI/UX Design", level: 88 },
  { name: "Git", level: 85 },
  { name: "Figma", level: 78 },
  { name: "Firebase", level: 72 },
  { name: "Framer Motion", level: 80 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading text-center mb-2">Skills</h2>
        <div className="w-24 h-[1px] bg-primary mx-auto mb-16 shadow-[0_0_10px_hsl(185_100%_50%/0.6)]" />
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 justify-items-center">
        {skills.map((skill, i) => (
          <SkillVial key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
};

const SkillVial = ({ skill, index }: { skill: { name: string; level: number }; index: number }) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-3 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <motion.div
        className="relative w-[60px] h-[180px] glass rounded-[30px] overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.08 }}
        animate={{ y: [0, -5 - (index % 3) * 2, 0] }}
        transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Liquid fill */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 rounded-b-[30px]"
          style={{
            background: "linear-gradient(to top, #00f0ff, #a855f7)",
            boxShadow: "0 0 20px hsl(185 100% 50% / 0.3), inset 0 0 15px hsl(185 100% 50% / 0.15)",
          }}
          initial={{ height: "0%" }}
          whileInView={{ height: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3 + index * 0.15,
            duration: 1.2,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />
        {/* Percentage tooltip on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <span className="text-xs font-bold text-foreground bg-void/80 px-2 py-1 rounded">
            {skill.level}%
          </span>
        </div>
      </motion.div>
      <span className="text-xs text-muted-foreground font-medium text-center">{skill.name}</span>
    </motion.div>
  );
};

export default SkillsSection;
