import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Brain, AlertTriangle, Workflow, BarChart3, Bell, Lock, ShieldCheck, Activity } from "lucide-react";

const advanced = [
  { icon: Workflow, title: "Automated Remediation", desc: "Auto-generate remediation playbooks and integrate with your ticketing systems.", gradient: "from-blue-500 to-cyan-500", bg: "bg-blue-50" },
  { icon: BarChart3, title: "Executive Reporting", desc: "Enterprise-grade dashboards with drill-down reporting for CISOs and stakeholders.", gradient: "from-indigo-500 to-violet-500", bg: "bg-indigo-50" },
  { icon: Bell, title: "Real-Time Alerts", desc: "Instant alerts for critical threats, new exposures, and brand impersonation events.", gradient: "from-rose-500 to-pink-500", bg: "bg-rose-50" },
  { icon: ShieldCheck, title: "Dark Web Monitoring", desc: "Monitor dark web forums, paste sites, and underground marketplaces for leaked data.", gradient: "from-slate-600 to-slate-800", bg: "bg-slate-50" },
  { icon: Activity, title: "Risk Scoring Engine", desc: "Dynamic risk scoring based on asset criticality, vulnerability severity, and exploit availability.", gradient: "from-cyan-500 to-blue-600", bg: "bg-cyan-50" },
  { icon: Brain, title: "AI-Powered Threat Intel", desc: "Smart recommendations powered by ML to prioritize critical threats and reduce noise.", gradient: "from-violet-500 to-purple-600", bg: "bg-violet-50", upcoming: true },
  { icon: AlertTriangle, title: "Zero-Day Detection", desc: "Detect emerging zero-day vulnerabilities before they are exploited in the wild.", gradient: "from-amber-500 to-orange-500", bg: "bg-amber-50", upcoming: true },
  { icon: Lock, title: "Compliance Mapping", desc: "Map findings to compliance frameworks like ISO 27001, SOC 2, and NIST.", gradient: "from-teal-500 to-emerald-500", bg: "bg-teal-50", upcoming: true },
];

export function AdvancedFeatures() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solutions" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-violet-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-200 bg-violet-50 backdrop-blur"
          >
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <span className="text-xs font-semibold text-violet-700 uppercase tracking-wider">Advanced Features</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 text-5xl md:text-6xl font-black text-slate-900 tracking-tight"
          >
            Security Intelligence
            <span className="block mt-3 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              At Scale
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Go beyond basic scanning with AI-powered threat intelligence built for security teams that demand more.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advanced.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card background with border */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

              <div className="relative p-6 rounded-2xl border border-slate-200/60 bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full">
                {a.upcoming && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-violet-200 bg-white shadow-sm z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    <span className="text-[10px] font-bold text-violet-700 uppercase tracking-wider">Upcoming</span>
                  </div>
                )}
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5, type: "spring", stiffness: 200 }}
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${a.gradient} flex items-center justify-center mb-5 shadow-lg shadow-current/20 group-hover:shadow-xl group-hover:shadow-current/30 transition-all duration-300`}
                >
                  <a.icon size={28} className="text-white" strokeWidth={2} />
                </motion.div>

                {/* Content */}
                <h3 className="font-bold text-slate-900 text-base mb-3 leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                  {a.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{a.desc}</p>

                {/* Bottom accent line */}
                <motion.div
                  className={`h-0.5 rounded-full bg-gradient-to-r ${a.gradient}`}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
