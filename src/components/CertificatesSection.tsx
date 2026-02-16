import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, ChevronLeft, ChevronRight } from "lucide-react";

import certGooglePrompting from "@/assets/cert-google-prompting.jpg";
import certDataAnalysis from "@/assets/cert-data-analysis.jpg";
import certAiCurve from "@/assets/cert-ai-curve.jpg";
import certAiResponsibly from "@/assets/cert-ai-responsibly.jpg";
import certArtOfPrompting from "@/assets/cert-art-of-prompting.jpg";
import certAiProductivity from "@/assets/cert-ai-productivity.jpg";
import certPromptsPro1 from "@/assets/cert-prompts-pro-1.jpg";
import certPromptsPro2 from "@/assets/cert-prompts-pro-2.jpg";
import certIntroAi from "@/assets/cert-intro-ai.jpg";
import certKagglePython from "@/assets/cert-kaggle-python.jpg";

const certificates = [
  {
    title: "Google Prompting Essentials",
    issuer: "Google via Coursera",
    image: certGooglePrompting,
    type: "Specialization",
  },
  {
    title: "Introduction to AI",
    issuer: "Google via Coursera",
    image: certIntroAi,
    type: "Course",
  },
  {
    title: "Discover the Art of Prompting",
    issuer: "Google via Coursera",
    image: certArtOfPrompting,
    type: "Course",
  },
  {
    title: "Use AI Responsibly",
    issuer: "Google via Coursera",
    image: certAiResponsibly,
    type: "Course",
  },
  {
    title: "Stay Ahead of the AI Curve",
    issuer: "Google via Coursera",
    image: certAiCurve,
    type: "Course",
  },
  {
    title: "Speed Up Data Analysis & Presentation Building",
    issuer: "Google via Coursera",
    image: certDataAnalysis,
    type: "Course",
  },
  {
    title: "Maximize Productivity With AI Tools",
    issuer: "Google via Coursera",
    image: certAiProductivity,
    type: "Course",
  },
  {
    title: "Start Writing Prompts like a Pro",
    issuer: "Google via Coursera",
    image: certPromptsPro1,
    type: "Course",
  },
  {
    title: "Writing Prompts like a Pro",
    issuer: "Google via Coursera",
    image: certPromptsPro2,
    type: "Course",
  },
  {
    title: "Python Coder",
    issuer: "Kaggle",
    image: certKagglePython,
    type: "Badge",
  },
];

const CertificatesSection = () => {
  const [viewImage, setViewImage] = useState<{ images: string[]; index: number } | null>(null);

  const allImages = certificates.map((c) => c.image);

  return (
    <section id="certificates" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading text-center mb-2">Certificates & Achievements</h2>
        <div className="w-24 h-[1px] bg-primary mx-auto mb-4 shadow-[0_0_10px_hsl(185_100%_50%/0.6)]" />
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto text-sm">
          Continuous learning through industry-recognized certifications in AI, data, and development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.title}
            className="glass glass-hover rounded-xl overflow-hidden cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -4 }}
            onClick={() => setViewImage({ images: allImages, index: i })}
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent" />
              <div className="absolute top-3 right-3">
                <span className="glass rounded-full px-3 py-1 text-[10px] font-medium text-primary">
                  {cert.type}
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start gap-2">
                <Award size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm leading-tight">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {viewImage && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setViewImage(null)}
          >
            <button onClick={() => setViewImage(null)} className="absolute top-4 right-4 text-white/70 hover:text-white z-10 p-2">
              <X size={28} />
            </button>
            {viewImage.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); setViewImage((p) => p ? { ...p, index: (p.index - 1 + p.images.length) % p.images.length } : null); }}
                  className="absolute left-4 z-10 text-white/70 hover:text-white p-2 glass rounded-full"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setViewImage((p) => p ? { ...p, index: (p.index + 1) % p.images.length } : null); }}
                  className="absolute right-4 z-10 text-white/70 hover:text-white p-2 glass rounded-full"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
            <motion.img
              key={viewImage.index}
              src={viewImage.images[viewImage.index]}
              alt="Certificate"
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 text-center">
              <p className="text-white/80 text-sm font-medium mb-3">{certificates[viewImage.index]?.title}</p>
              <div className="flex gap-2 justify-center">
                {viewImage.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setViewImage((p) => p ? { ...p, index: i } : null); }}
                    className={`w-2 h-2 rounded-full transition-colors ${i === viewImage.index ? "bg-primary" : "bg-white/30"}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating decorative */}
      <motion.div
        className="absolute top-32 left-8 w-3 h-3 rounded-full bg-neon-cyan/20 hidden md:block"
        animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-12 w-4 h-4 border border-neon-violet/20 rotate-45 hidden md:block"
        animate={{ y: [0, 12, 0], rotate: [45, 90, 45] }}
        transition={{ duration: 11, repeat: Infinity }}
      />
    </section>
  );
};

export default CertificatesSection;
