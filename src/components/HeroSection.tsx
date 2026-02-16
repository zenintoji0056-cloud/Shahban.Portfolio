import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Rocket, Users, Bug, Clock, Download } from "lucide-react";

const floatingElements = [
  { symbol: "</>", size: 50, x: -200, y: -150, duration: 6 },
  { symbol: "{ }", size: 45, x: 220, y: -120, duration: 8 },
  { symbol: "//", size: 40, x: -280, y: 80, duration: 7 },
  { symbol: "⬡", size: 55, x: 250, y: 100, duration: 10 },
  { symbol: "◯", size: 35, x: -150, y: 180, duration: 5 },
  { symbol: "△", size: 38, x: 180, y: -200, duration: 9 },
  { symbol: "[ ]", size: 42, x: -100, y: -250, duration: 11 },
  { symbol: "λ", size: 48, x: 300, y: 50, duration: 7.5 },
];

const stats = [
  { icon: Rocket, label: "Projects Shipped", value: "15+" },
  { icon: Users, label: "Users Tested", value: "100+" },
  { icon: Bug, label: "Crash Rate", value: "<1%" },
  { icon: Clock, label: "Years Experience", value: "3+" },
];

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.04,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const HeroSection = () => {
  const [typed, setTyped] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroName = "Syed Shahban";
  const tagline = "Mobile & Full-Stack Developer";

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i <= tagline.length) {
          setTyped(tagline.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, heroName.length * 40 + 600);
    return () => clearTimeout(timeout);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Floating elements - hidden on mobile */}
        <div className="hidden md:block">
          {floatingElements.map((el, i) => (
            <FloatingElement key={i} el={el} mouseX={mouseX} mouseY={mouseY} />
          ))}
        </div>

        {/* Mobile: show only 3 floating elements */}
        <div className="md:hidden">
          {floatingElements.slice(0, 3).map((el, i) => (
            <motion.div
              key={i}
              className="absolute glass rounded-lg flex items-center justify-center font-mono text-primary/70 text-sm"
              style={{
                width: el.size * 0.7,
                height: el.size * 0.7,
                left: `calc(50% + ${el.x * 0.4}px)`,
                top: `calc(50% + ${el.y * 0.4}px)`,
              }}
              animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
              transition={{ duration: el.duration, repeat: Infinity, ease: "easeInOut" }}
            >
              {el.symbol}
            </motion.div>
          ))}
        </div>

        {/* Animated letter-by-letter name reveal */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground neon-text-cyan mb-4 flex justify-center flex-wrap"
          initial="hidden"
          animate="visible"
          style={{ perspective: 600 }}
        >
          {heroName.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className="inline-block"
              style={{ display: char === " " ? "inline" : "inline-block", width: char === " " ? "0.3em" : "auto" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="font-mono text-sm sm:text-base md:text-lg text-muted-foreground h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {typed}
          <span className="animate-pulse text-primary">|</span>
        </motion.p>

        {/* Value proposition */}
        <motion.p
          className="text-sm text-muted-foreground/80 mt-4 max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          Building scalable Android, Flutter, and React applications for startups and businesses
        </motion.p>

        {/* Stats banner */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2 glass rounded-full px-4 py-2">
              <stat.icon size={14} className="text-primary" />
              <span className="text-sm font-bold text-foreground">{stat.value}</span>
              <span className="text-xs text-muted-foreground hidden sm:inline">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <motion.a
            href="#projects"
            className="glass neon-border-cyan neon-glow-cyan px-8 py-3 rounded-full text-primary font-medium hover:scale-105 transition-transform border border-primary/40"
            whileHover={{ scale: 1.08, boxShadow: "0 0 30px hsl(185 100% 50% / 0.5)" }}
          >
            View Case Studies
          </motion.a>
          <motion.a
            href="/Shahban_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-full px-8 py-3 text-muted-foreground font-medium hover:text-foreground hover:scale-105 transition-all flex items-center gap-2 border border-white/10"
            whileHover={{ scale: 1.08 }}
          >
            <Download size={16} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FloatingElement = ({
  el,
  mouseX,
  mouseY,
}: {
  el: (typeof floatingElements)[0];
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) => {
  const offsetX = useTransform(mouseX, (v: number) => {
    const dist = Math.abs(v - el.x);
    const force = Math.max(0, 1 - dist / 400);
    return v > el.x ? -force * 30 : force * 30;
  });
  const offsetY = useTransform(mouseY, (v: number) => {
    const dist = Math.abs(v - el.y);
    const force = Math.max(0, 1 - dist / 400);
    return v > el.y ? -force * 30 : force * 30;
  });
  const springX = useSpring(offsetX, { stiffness: 50, damping: 20 });
  const springY = useSpring(offsetY, { stiffness: 50, damping: 20 });

  return (
    <motion.div
      className="absolute glass rounded-lg flex items-center justify-center font-mono text-primary/60 text-xs zero-g-float"
      style={{
        width: el.size,
        height: el.size,
        left: `calc(50% + ${el.x}px)`,
        top: `calc(50% + ${el.y}px)`,
        x: springX,
        y: springY,
      }}
      animate={{
        y: [0, -15, 0, 10, 0],
        x: [0, 8, 0, -5, 0],
        rotate: [0, 5, 0, -3, 0],
      }}
      transition={{
        duration: el.duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {el.symbol}
    </motion.div>
  );
};

export default HeroSection;
