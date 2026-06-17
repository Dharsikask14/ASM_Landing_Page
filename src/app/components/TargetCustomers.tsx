import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle, Building2, Building, ArrowRight, Sparkles } from "lucide-react";
import { AuthButton } from "./AuthButton";

const segments = [
  {
    icon: Building2,
    title: "Normal Organisation",
    subtitle: "Essential attack surface visibility",
    gradient: "from-slate-600 to-slate-800",
    accentColor: "#64748b",
    items: [
      "Subdomain & port discovery",
      "Basic vulnerability scanning",
      "SSL certificate monitoring",
      "Email security checks",
      "Monthly security reports",
    ],
    cta: "Get Started",
    ctaStyle: "bg-gray-900 hover:bg-gray-800 text-white",
    badgeText: null,
  },
  {
    icon: Building,
    title: "Enterprise Organisation",
    subtitle: "Full-spectrum security operations",
    gradient: "from-violet-600 to-cyan-500",
    accentColor: "#8b5cf6",
    items: [
      "Full ASM feature suite",
      "Brand monitoring & anti-phishing",
      "Mobile VAPT (APK/IPA)",
      "Dedicated security analyst",
      "Priority support & 99.9% SLA",
    ],
    cta: "Contact Sales",
    ctaStyle: "bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white shadow-lg shadow-violet-200",
    badgeText: "Recommended",
    featured: true,
  },
];

export function TargetCustomers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="who-we-serve" className="py-16 lg:py-20 scroll-mt-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-violet-50 text-violet-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Who We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Built for Every{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Security Scale
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Whether you're a growing organization or a global enterprise, Infotech Sentinel scales with your requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7 max-w-4xl mx-auto">
          {segments.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.5, type: "spring" }}
              whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(99,102,241,0.15)" }}
              className={`relative rounded-3xl p-8 border-2 transition-all duration-300 ${
                s.featured
                  ? "border-violet-200 bg-gradient-to-b from-violet-50/60 to-white"
                  : "border-gray-100 bg-white"
              }`}
            >
              {s.badgeText && (
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md shadow-violet-200"
                >
                  <Sparkles size={11} /> {s.badgeText}
                </motion.div>
              )}

              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-6 pt-2">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-md`}
                  style={{ boxShadow: `0 8px 24px ${s.accentColor}30` }}
                >
                  <s.icon size={26} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 leading-tight">{s.title}</h3>
                  <p className="text-sm text-gray-500 font-medium">{s.subtitle}</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {s.items.map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.25 + i * 0.1 + j * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={15} className={s.featured ? "text-violet-500" : "text-gray-400"} />
                    <span className="text-gray-600 text-sm font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <AuthButton
                  href="https://docs.google.com/forms/d/e/1FAIpQLSewsGyCmlZkT7i-uJpclxMltrsQMwoKiW2jgRRJKk2SS72rrQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 group ${s.ctaStyle}`}
                >
                  {s.cta} <ArrowRight size={15} />
                </AuthButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
