import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle, Globe, Smartphone, Unlock, Shield } from "lucide-react";

const features = [
  {
    icon: Globe,
    iconColor: "text-violet-500",
    title: "Asset Discovery",
    gradient: "from-violet-500 to-purple-600",
    lightBg: "bg-violet-50",
    border: "border-violet-100 hover:border-violet-300",
    items: [
      "Subdomain Discovery",
      "Endpoint Enumeration",
      "Open Port Scanning",
      "Directory Bruteforcing",
      "Technology Fingerprinting",
      "Email Security (SPF/DKIM/DMARC)",
      "Faraday Findings Integration",
    ],
  },
  {
    icon: Smartphone,
    iconColor: "text-cyan-500",
    title: "Mobile App Monitoring",
    gradient: "from-cyan-500 to-blue-600",
    lightBg: "bg-cyan-50",
    border: "border-cyan-100 hover:border-cyan-300",
    items: [
      "Mobile VAPT",
      "APK/IPA Analysis",
      "API Security Testing",
      "Permission Analysis",
    ],
  },
  {
    icon: Unlock,
    iconColor: "text-amber-500",
    title: "Vulnerability Management",
    gradient: "from-amber-500 to-orange-500",
    lightBg: "bg-amber-50",
    border: "border-amber-100 hover:border-amber-300",
    items: [
      "Vulnerability Scanning",
      "SSL Certificate Monitoring",
      "CVE Correlation",
      "Risk Prioritization",
    ],
  },
  {
    icon: Shield,
    iconColor: "text-rose-500",
    title: "Brand Monitoring",
    gradient: "from-rose-500 to-pink-600",
    lightBg: "bg-rose-50",
    border: "border-rose-100 hover:border-rose-300",
    items: [
      "Surface Web Monitoring",
      "Suspicious Domain Detection",
      "Phishing Domain Detection",
      "Impersonating Account Detection",
      "Anti-Malware Scanning",
    ],
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-violet-50 text-violet-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Feature Suite
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Stay Secure
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Every security tool your team needs — built into one coherent, powerful ASM platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06 * i, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(99,102,241,0.12)" }}
              className={`group bg-white rounded-3xl p-6 border-2 ${f.border} shadow-sm transition-all duration-300 relative overflow-hidden`}
            >
              {/* Background gradient fill on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`}
              />

              <div className={`relative w-14 h-14 ${f.lightBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                <f.icon size={28} className={f.iconColor} />
              </div>

              <h3 className="relative font-bold text-gray-900 text-base mb-4 leading-snug">{f.title}</h3>

              <ul className="relative space-y-2.5">
                {f.items.map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.15 + i * 0.06 + j * 0.04 }}
                    className="flex items-start gap-2 text-sm text-gray-500"
                  >
                    <CheckCircle size={13} className={`mt-0.5 flex-shrink-0 text-transparent`}
                      style={{ color: i === 0 ? "#8b5cf6" : i === 1 ? "#06b6d4" : i === 2 ? "#f59e0b" : "#f43f5e" }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Bottom color bar */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${f.gradient} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
