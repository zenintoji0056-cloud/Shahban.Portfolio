import { useMemo } from "react";

const ParticleBackground = () => {
  const particles = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const count = isMobile ? 8 : 25;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 18,
      size: 1 + Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient gradient orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] md:animate-[orb-drift-1_20s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, #00f0ff, transparent 70%)", top: "10%", left: "10%" }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[120px] md:animate-[orb-drift-2_25s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)", top: "50%", right: "5%" }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full opacity-10 blur-[100px] md:animate-[orb-drift-3_30s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, #ff2d95, transparent 70%)", bottom: "10%", left: "30%" }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-neon-cyan"
          style={{
            left: `${p.left}%`,
            bottom: "-5%",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `particle-rise ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
