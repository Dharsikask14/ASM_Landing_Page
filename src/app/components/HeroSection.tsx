import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight, Play, Shield, Globe, Radar, Bug,
  ShieldAlert, Zap, Lock, Activity
} from "lucide-react";
import { AuthButton } from "./AuthButton";

const stats = [
  { value: "10K+", label: "Assets Discovered", icon: Globe },
  { value: "99.8%", label: "Uptime SLA", icon: Activity },
  { value: "< 5min", label: "Threat Detection", icon: Zap },
  { value: "24/7", label: "Support and Monitoring", icon: Radar },
];

const floatingPills = [
  { icon: ShieldAlert, label: "3 Critical Vulns Found", color: "bg-red-50 text-red-600 border-red-100", dot: "bg-red-500" },
  { icon: Globe, label: "142 Subdomains Mapped", color: "bg-violet-50 text-violet-600 border-violet-100", dot: "bg-violet-500" },
  { icon: Radar, label: "Port Scan Complete", color: "bg-cyan-50 text-cyan-600 border-cyan-100", dot: "bg-cyan-500" },
  { icon: Bug, label: "0 Phishing Domains", color: "bg-emerald-50 text-emerald-600 border-emerald-100", dot: "bg-emerald-500" },
  { icon: Lock, label: "SSL Cert Healthy", color: "bg-amber-50 text-amber-600 border-amber-100", dot: "bg-amber-500" },
];

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50/40 to-cyan-50/30 pt-20"
    >
      {/* Animated mesh gradient blobs */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(139,92,246,0.08) 60%, transparent 100%)" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className="space-y-8">


          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight">
              Secure Your{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-violet-600 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                  Attack Surface
                </span>
              </span>
              <br />Before It's Too Late.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
              Continuously discover assets, detect vulnerabilities, monitor brand threats, and manage your external digital footprint — all from one intelligent platform.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <AuthButton
              href="https://docs.google.com/forms/d/e/1FAIpQLSewsGyCmlZkT7i-uJpclxMltrsQMwoKiW2jgRRJKk2SS72rrQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-lg shadow-[0_8px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)] transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-2xl bg-white/20 group-hover:bg-white/0 transition-colors duration-300" />
              <Zap size={20} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative z-10">Get Started Free</span>
            </AuthButton>
            <span className="inline-flex items-center gap-2 bg-white border border-violet-200 shadow-sm rounded-full px-4 py-1.5">
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-violet-500 rounded-full inline-block"
              />
              <span className="text-sm font-semibold text-violet-700">Continuous Attack Surface Management</span>
            </span>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(139,92,246,0.15)" }}
                className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-center cursor-default transition-all"
              >
                <div className="text-2xl font-black bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right – floating card cluster */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center h-[560px] gap-8"
        >
          {/* Large background blue round */}
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(6,182,212,0.10) 60%, transparent 100%)" }}
          />

          {/* Central glow orb */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-64 h-64 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(6,182,212,0.12) 60%, transparent 100%)" }}
          />

          {/* Central shield hub */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 flex-shrink-0 w-44 h-44 bg-white rounded-[2rem] shadow-2xl shadow-violet-200/60 border border-violet-100 flex flex-col items-center justify-center gap-2"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-300/50">
              <Shield size={30} className="text-white" />
            </div>
            <div className="text-center">
              <div className="text-gray-900 font-black text-sm">Infotech</div>
              <div className="text-violet-600 font-black text-xs tracking-widest">SENTINEL</div>
            </div>
            {/* Pulse rings */}
            <motion.div
              animate={{ scale: [1, 2], opacity: [0.4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute inset-0 rounded-[2rem] border-2 border-violet-300"
            />
            <motion.div
              animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 rounded-[2rem] border border-cyan-300"
            />
          </motion.div>

          {/* Professional grid status cards */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
            {floatingPills.map((pill, i) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl border border-gray-200 ${pill.color} bg-white shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group`}
              >
                <div className={`w-4 h-4 rounded-full ${pill.dot} flex-shrink-0`} />
                <span className="text-sm font-semibold text-gray-900 group-hover:text-gray-950">{pill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
