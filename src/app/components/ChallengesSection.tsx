import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Eye, AlertCircle, Globe, ShieldOff, ArrowRight } from "lucide-react";
import { AuthButton } from "./AuthButton";

const challenges = [
  {
    icon: Eye,
    title: "Shadow IT & Unknown Assets",
    desc: "Organizations lack visibility into their full external attack surface, including forgotten subdomains and exposed services.",
    gradient: "from-violet-500 to-purple-600",
    iconColor: "text-violet-600",
    borderColor: "border-violet-200",
    cardBg: "from-violet-50/60 to-white hover:from-violet-100/60 hover:to-violet-50/40",
    lightBg: "bg-violet-100 text-violet-800",
    tag: "Visibility",
  },
  {
    icon: AlertCircle,
    title: "Unpatched Vulnerabilities",
    desc: "Critical vulnerabilities in exposed assets go undetected, creating easy entry points for attackers.",
    gradient: "from-rose-500 to-pink-600",
    iconColor: "text-rose-600",
    borderColor: "border-rose-200",
    cardBg: "from-rose-50/60 to-white hover:from-rose-100/60 hover:to-rose-50/40",
    lightBg: "bg-rose-100 text-rose-800",
    tag: "Risk",
  },
  {
    icon: Globe,
    title: "Brand Impersonation",
    desc: "Phishing domains, impersonating accounts, and suspicious sites damage reputation and steal customer data.",
    gradient: "from-amber-500 to-orange-500",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200",
    cardBg: "from-amber-50/60 to-white hover:from-amber-100/60 hover:to-amber-50/40",
    lightBg: "bg-amber-100 text-amber-800",
    tag: "Brand",
  },
  {
    icon: ShieldOff,
    title: "Fragmented Security Tools",
    desc: "Disjointed security tools create blind spots, making it impossible to have a unified view of your threat landscape.",
    gradient: "from-cyan-500 to-blue-600",
    iconColor: "text-cyan-600",
    borderColor: "border-cyan-200",
    cardBg: "from-cyan-50/60 to-white hover:from-cyan-100/60 hover:to-cyan-50/40",
    lightBg: "bg-cyan-100 text-cyan-800",
    tag: "Complexity",
  },
];

export function ChallengesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.05),rgba(139,92,246,0))]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/30 bg-rose-50 backdrop-blur"
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">Critical Threats</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 text-5xl md:text-6xl font-black text-gray-900 tracking-tight"
          >
            The Security
            <span className="block mt-3 bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Risks You Face
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Organizations without continuous attack surface visibility are exposed to critical vulnerabilities. 
            Here are the threats you need to address immediately.
          </motion.p>
        </motion.div>

        {/* Challenge Cards — Alternating Layout */}
        <div className="space-y-6">
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.12, duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className={`group relative p-8 rounded-2xl border ${c.borderColor} bg-gradient-to-br ${c.cardBg} shadow-sm hover:shadow-lg overflow-hidden cursor-pointer transition-all duration-300`}
            >
              {/* Number Badge */}
              <div className="absolute top-0 right-0 w-20 h-20">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.6, type: "spring" }}
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  {i + 1}
                </motion.div>
              </div>

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${c.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10 flex gap-6">
                {/* Icon Container */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.35 + i * 0.12, duration: 0.5, type: "spring", stiffness: 200 }}
                  whileHover={{ rotate: -12, scale: 1.15 }}
                  className={`flex-shrink-0 w-16 h-16 rounded-xl bg-white border-2 ${c.borderColor} flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300`}
                >
                  <c.icon size={32} className={c.iconColor} />
                </motion.div>

                {/* Text Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-rose-600 group-hover:to-violet-600 group-hover:bg-clip-text transition-all duration-300">
                      {c.title}
                    </h3>
                    <span className={`inline-block ${c.lightBg} text-xs font-bold px-2 py-1 rounded-lg`}>
                      {c.tag}
                    </span>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">{c.desc}</p>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`mt-4 h-1 rounded-full bg-gradient-to-r ${c.gradient}`}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
                  />
                </div>
              </div>

              {/* Border animation on hover */}
              <div className={`absolute inset-0 rounded-2xl border border-transparent group-hover:border-opacity-100 bg-gradient-to-r ${c.gradient} p-[1px] -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <AuthButton
            href="https://docs.google.com/forms/d/e/1FAIpQLSewsGyCmlZkT7i-uJpclxMltrsQMwoKiW2jgRRJKk2SS72rrQ/viewform"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-violet-600 text-white font-bold text-sm shadow-lg shadow-rose-500/40 hover:shadow-rose-500/60 hover:scale-105 transition-all duration-300 group"
          >
            See How Sentinel Protects You
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </AuthButton>
        </motion.div>
      </div>
    </section>
  );
}
