import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, Eye, AlertTriangle, CheckCircle2 } from "lucide-react";

import focusly1 from "@/assets/project-focusly-1.jpg";
import focusly2 from "@/assets/project-focusly-2.jpg";
import focusly3 from "@/assets/project-focusly-3.jpg";
import nopreference1 from "@/assets/project-nopreference-1.jpg";
import nopreference2 from "@/assets/project-nopreference-2.jpg";
import automind1 from "@/assets/project-automind-1.jpg";
import automind2 from "@/assets/project-automind-2.jpg";
import freshbite1 from "@/assets/project-freshbite-1.jpg";
import freshbite2 from "@/assets/project-freshbite-2.jpg";
import freshbite3 from "@/assets/project-freshbite-3.jpg";
import freshbite4 from "@/assets/project-freshbite-4.jpg";
import freshbite5 from "@/assets/project-freshbite-5.jpg";
import stayease1 from "@/assets/project-stayease-1.jpg";
import stayease2 from "@/assets/project-stayease-2.jpg";
import stayease3 from "@/assets/project-stayease-3.jpg";
import shadowrise1 from "@/assets/project-shadowrise-1.jpg";
import shadowrise2 from "@/assets/project-shadowrise-2.jpg";
import shadowrise3 from "@/assets/project-shadowrise-3.jpg";
import shadowrise4 from "@/assets/project-shadowrise-4.jpg";
import playdate1 from "@/assets/project-playdate-1.jpg";
import playdate2 from "@/assets/project-playdate-2.jpg";
import playdate3 from "@/assets/project-playdate-3.jpg";
import playdate4 from "@/assets/project-playdate-4.jpg";
import playdate5 from "@/assets/project-playdate-5.jpg";
import shadowriseThumb from "@/assets/project-shadowrise-thumb.jpg";
import freshbiteThumb from "@/assets/project-freshbite-thumb.jpg";
import playdateThumb from "@/assets/project-playdate-thumb.jpg";
import automindThumb from "@/assets/project-automind-thumb.jpg";
import nopreferenceThumb from "@/assets/project-nopreference-thumb.jpg";

const projects = [
  {
    id: 1,
    title: "ShadowRise",
    tagline: "Dark Fantasy RPG Fitness App",
    description: "A Solo Leveling-inspired fitness RPG that gamifies workouts with XP, ranks, daily quests, leaderboards, and an in-game shop.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM", "Hilt", "Coroutines"],
    images: [shadowriseThumb, shadowrise1, shadowrise2, shadowrise3, shadowrise4],
    color: "#00f0ff",
    liveUrl: "#",
    githubUrl: "https://github.com/Toji-cmd7",
    caseStudy: {
      problem: "Users find fitness apps boring and lack motivation to maintain workout routines. Needed an engaging gamification layer to drive daily engagement.",
      role: "Solo developer - Full architecture, UI/UX design, backend integration, and deployment.",
      approach: [
        "Built with Kotlin & Jetpack Compose using MVVM + Clean Architecture",
        "Implemented real-time sync with Firebase Realtime Database for social features",
        "Created dual-currency economy system with transaction-based conflict resolution",
        "Optimized performance: reduced load time by ~50% through aggressive caching",
        "35+ screens with custom dark-fantasy UI animations",
      ],
      results: [
        "50+ active beta testers",
        "<1% crash rate (Crashlytics monitoring)",
        "30-45 min average session time",
        "75 MB APK (optimized from 120 MB)",
        "Sub-second real-time message delivery",
      ],
    },
  },
  {
    id: 2,
    title: "PlayDate",
    tagline: "Multiplayer Mini-Games Platform",
    description: "A cozy multiplayer gaming platform where couples and friends can play Tic-Tac-Toe, Connect Four, and more together online.",
    tech: ["Flutter", "Firebase", "Realtime DB", "Multiplayer"],
    images: [playdateThumb, playdate1, playdate2, playdate3, playdate4, playdate5],
    color: "#ff2d95",
    liveUrl: "https://intimate-game-nights.lovable.app",
    githubUrl: "https://github.com/Toji-cmd7",
    caseStudy: {
      problem: "Long-distance couples and friends lack fun, lightweight ways to spend quality time together online beyond video calls.",
      role: "Solo developer - Architecture, real-time multiplayer engine, UI/UX design.",
      approach: [
        "Built with Flutter for cross-platform reach",
        "Firebase Realtime DB for instant game state synchronization",
        "Spectator mode and room-based matchmaking with link sharing",
        "Live commentary and reaction system for engagement",
        "Warm, delightful UI with playful animations",
      ],
      results: [
        "Instant room creation with shareable links",
        "Real-time gameplay with <100ms latency",
        "Multiple game modes (Tic-Tac-Toe, Connect Four)",
        "Spectator mode for watching live games",
        "Cross-platform (Web, Android, iOS)",
      ],
    },
  },
  {
    id: 3,
    title: "Focusly",
    tagline: "Task & Progress Tracking App",
    description: "A beautifully designed mobile app for task management with calendar views, task categorization, and completion tracking.",
    tech: ["Flutter", "Clean Architecture", "Dart", "BLoC"],
    images: [focusly1, focusly2, focusly3],
    color: "#a855f7",
    liveUrl: "#",
    githubUrl: "https://github.com/Toji-cmd7",
    caseStudy: {
      problem: "Existing task management apps are either too complex for casual users or too basic for productivity-focused users.",
      role: "Solo developer - Full design and development using Flutter with Clean Architecture.",
      approach: [
        "Clean Architecture with BLoC pattern for state management",
        "Custom calendar views with task categorization",
        "Priority levels with visual indicators",
        "Circular progress tracking for daily goals",
      ],
      results: [
        "Intuitive UI with minimal learning curve",
        "Smooth 60fps animations on all screens",
        "Offline-first with local persistence",
      ],
    },
  },
  {
    id: 4,
    title: "FreshBite",
    tagline: "Food Delivery App",
    description: "A complete food delivery app with restaurant discovery, menu browsing, cart management with promo codes, and checkout flow.",
    tech: ["Flutter", "Firebase", "Payment Integration"],
    images: [freshbiteThumb, freshbite2, freshbite3, freshbite1, freshbite5, freshbite4],
    color: "#22c55e",
    liveUrl: "#",
    githubUrl: "https://github.com/Toji-cmd7",
    caseStudy: {
      problem: "Local restaurants needed a branded delivery platform without the high commission fees of third-party apps.",
      role: "Solo developer - Full-stack development including payment integration.",
      approach: [
        "Flutter for cross-platform mobile app",
        "Firebase for real-time order tracking and notifications",
        "Integrated payment gateway for seamless checkout",
        "Category filters, restaurant ratings, and promo code system",
      ],
      results: [
        "Complete order lifecycle from browsing to delivery",
        "Real-time order tracking with push notifications",
        "Promo code system for customer retention",
      ],
    },
  },
  {
    id: 5,
    title: "StayEase",
    tagline: "Property Management App",
    description: "A property management app with dashboard, revenue tracking, booking management, and occupancy stats.",
    tech: ["Flutter", "Property Management"],
    images: [stayease2, stayease3, stayease1],
    color: "#a855f7",
    liveUrl: "#",
    githubUrl: "https://github.com/Toji-cmd7",
    caseStudy: {
      problem: "Property hosts juggling multiple listings needed a centralized dashboard to manage bookings and track revenue.",
      role: "Solo developer - Dashboard design, data visualization, and app development.",
      approach: [
        "Revenue tracking with visual charts and analytics",
        "Booking management with calendar integration",
        "Occupancy statistics and activity feed",
        "Social authentication for quick onboarding",
      ],
      results: [
        "Unified dashboard for all property metrics",
        "Quick actions for common management tasks",
        "Clean, professional host interface",
      ],
    },
  },
  {
    id: 6,
    title: "AutoMind AI",
    tagline: "Web Design Agency Website",
    description: "A sleek, dark-themed agency website with animated hero, service cards, portfolio showcase, and contact CTA.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    images: [automindThumb, automind1, automind2],
    color: "#ff2d95",
    liveUrl: "#",
    githubUrl: "https://github.com/Toji-cmd7",
    caseStudy: {
      problem: "AI web design agency needed a portfolio site that showcased their capabilities through the site itself.",
      role: "Frontend developer - Design and development of the entire website.",
      approach: [
        "Next.js with server-side rendering for SEO",
        "Framer Motion for smooth page transitions and scroll animations",
        "Tailwind CSS for rapid, consistent styling",
        "Responsive design across all breakpoints",
      ],
      results: [
        "Fast loading with optimized Next.js build",
        "SEO-friendly with proper meta tags and structure",
        "Fully responsive across all devices",
      ],
    },
  },
  {
    id: 7,
    title: "No Preference",
    tagline: "Cafe & Restaurant Website",
    description: "A modern, elegant website for a Portland-based cafe with full-bleed photography and glass overlay cards.",
    tech: ["React", "Next.js", "Responsive Design"],
    images: [nopreferenceThumb, nopreference1, nopreference2],
    color: "#00f0ff",
    liveUrl: "#",
    githubUrl: "https://github.com/Toji-cmd7",
    caseStudy: {
      problem: "Independent cafe needed an online presence that reflected their warm, minimal brand identity.",
      role: "Frontend developer - Full design and responsive implementation.",
      approach: [
        "Hero with full-bleed photography reflecting the cafe atmosphere",
        "Glass overlay cards for menu highlights",
        "Embedded Google Maps for easy directions",
        "Warm, minimal design matching the brand identity",
      ],
      results: [
        "Warm, inviting digital presence matching the physical cafe",
        "Fully responsive from mobile to desktop",
        "Fast loading with optimized imagery",
      ],
    },
  },
];

type Project = (typeof projects)[0];

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [galleryImg, setGalleryImg] = useState<{ images: string[]; index: number } | null>(null);
  const [githubNotice, setGithubNotice] = useState(false);

  const openGallery = (images: string[], index: number) => {
    setGalleryImg({ images, index });
  };

  const handleGithubClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    setGithubNotice(true);
    setTimeout(() => setGithubNotice(false), 4000);
  };

  return (
    <section id="projects" className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading text-center mb-2">Case Studies</h2>
        <div className="w-24 h-[1px] bg-primary mx-auto mb-4 shadow-[0_0_10px_hsl(185_100%_50%/0.6)]" />
        <p className="text-center text-muted-foreground mb-16 max-w-md mx-auto text-sm">
          Tap any project to explore the full case study with problem, process, and results.
        </p>
      </motion.div>

      {/* Responsive Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="glass rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,240,255,0.12)] flex flex-col"
            style={{ borderColor: project.color + "25" }}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelected(project)}
          >
            {/* Thumbnail */}
            <div className="h-48 overflow-hidden relative">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="flex items-center gap-1.5 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Eye size={12} /> View Case Study
                </span>
              </div>
              {/* Color accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: project.color }}
              />
            </div>

            {/* Card content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-semibold text-foreground text-base mb-1">{project.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{project.tagline}</p>
              <p className="text-xs text-muted-foreground/70 leading-relaxed mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Notice Toast */}
      <AnimatePresence>
        {githubNotice && (
          <motion.div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] glass rounded-xl px-6 py-4 max-w-md flex items-start gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <AlertTriangle size={18} className="text-primary flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Public repositories coming soon. Most work is under NDA or in private repos for client confidentiality.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Case Study Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{selected.title}</h3>
                  <p className="text-sm text-muted-foreground">{selected.tagline}</p>
                </div>
                <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground p-1">
                  <X size={20} />
                </button>
              </div>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-1.5 my-4">
                {selected.tech.map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                    {t}
                  </span>
                ))}
              </div>

              {/* Clickable image thumbnails */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {selected.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => openGallery(selected.images, i)}
                    className="rounded-lg overflow-hidden border border-white/10 hover:border-primary/50 transition-colors aspect-[3/4] group"
                  >
                    <img
                      src={img}
                      alt={`${selected.title} screenshot ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>

              {/* Case study content */}
              {selected.caseStudy && (
                <div className="space-y-5">
                  <div>
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Problem</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{selected.caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">My Role</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{selected.caseStudy.role}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Technical Approach</h4>
                    <ul className="space-y-1.5">
                      {selected.caseStudy.approach.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Results</h4>
                    <ul className="space-y-1.5">
                      {selected.caseStudy.results.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex gap-3 mt-6 pt-4 border-t border-white/10">
                {selected.liveUrl !== "#" && (
                  <a
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-full px-5 py-2 text-sm text-primary neon-border-cyan flex items-center gap-2 hover:neon-glow-cyan transition-shadow border border-primary/30"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
                <button
                  onClick={(e) => handleGithubClick(e, selected.githubUrl)}
                  className="glass rounded-full px-5 py-2 text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Github size={14} /> GitHub
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Image Gallery */}
      <AnimatePresence>
        {galleryImg && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setGalleryImg(null)}
          >
            <button
              onClick={() => setGalleryImg(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10 p-2"
            >
              <X size={28} />
            </button>

            {galleryImg.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setGalleryImg((prev) =>
                      prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null
                    );
                  }}
                  className="absolute left-4 z-10 text-white/70 hover:text-white p-2 glass rounded-full"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setGalleryImg((prev) =>
                      prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null
                    );
                  }}
                  className="absolute right-4 z-10 text-white/70 hover:text-white p-2 glass rounded-full"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            <motion.img
              key={galleryImg.index}
              src={galleryImg.images[galleryImg.index]}
              alt="Project screenshot"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 flex gap-2">
              {galleryImg.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setGalleryImg((prev) => (prev ? { ...prev, index: i } : null));
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === galleryImg.index ? "bg-primary" : "bg-white/30"
                    }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

