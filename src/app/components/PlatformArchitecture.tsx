import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Shield } from "lucide-react";

const modules = [
  { label: "Subdomain Discovery", emoji: "🌐", angle: 0 },
  { label: "Endpoints", emoji: "🔗", angle: 36 },
  { label: "Open Ports", emoji: "📡", angle: 72 },
  { label: "Directories", emoji: "📁", angle: 108 },
  { label: "Technologies", emoji: "⚙️", angle: 144 },
  { label: "Email Security", emoji: "📧", angle: 180 },
  { label: "Faraday Findings", emoji: "🔬", angle: 216 },
  { label: "Mobile VAPT", emoji: "📱", angle: 252 },
  { label: "SSL Certificates", emoji: "🔒", angle: 288 },
  { label: "Brand Monitoring", emoji: "🛡️", angle: 324 },
];

const moduleDetails: Record<string, { desc: string; color: string }> = {
  "Subdomain Discovery": { desc: "Auto-enumerate all subdomains across your domain portfolio in real-time.", color: "from-violet-500 to-purple-600" },
  "Endpoints": { desc: "Map exposed endpoints and APIs across your entire digital perimeter.", color: "from-cyan-500 to-blue-600" },
  "Open Ports": { desc: "Scan for open ports and identify services running on your attack surface.", color: "from-amber-500 to-orange-500" },
  "Directories": { desc: "Brute-force directory structures to expose hidden or forgotten paths.", color: "from-emerald-500 to-teal-600" },
  "Technologies": { desc: "Fingerprint web technologies, frameworks, and server versions.", color: "from-blue-500 to-indigo-600" },
  "Email Security": { desc: "Validate SPF, DKIM, and DMARC records to prevent email spoofing.", color: "from-pink-500 to-rose-600" },
  "Faraday Findings": { desc: "Integrate findings from Faraday Security for consolidated vulnerability data.", color: "from-violet-600 to-fuchsia-600" },
  "Mobile VAPT": { desc: "Automated APK/IPA analysis with permission and API security checks.", color: "from-teal-500 to-cyan-600" },
  "SSL Certificates": { desc: "Monitor certificate expiry, misconfigurations, and vulnerabilities.", color: "from-lime-500 to-green-600" },
  "Brand Monitoring": { desc: "Detect phishing domains, impersonating accounts, and brand misuse.", color: "from-rose-500 to-pink-600" },
};

export function PlatformArchitecture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string>(modules[0].label);

  const R = 195;

  return (
    <section id="architecture" className="py-16 lg:py-20 bg-gradient-to-br from-violet-50/60 via-white to-cyan-50/40 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Unified Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            The Sentinel{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Security Core
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A fully integrated telemetry engine mapping scanning activities, alerts, and intelligence feeds in real-time.
          </p>
        </motion.div>

        {/* Hub and spoke */}
        <div className="relative flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center shrink-0"
            style={{ width: 500, height: 500 }}
          >
            {/* Rotating orbit ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[390px] h-[390px] rounded-full border border-dashed border-violet-200 pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-cyan-200 pointer-events-none"
            />

            {/* Spokes */}
            {modules.map((mod, i) => {
              const isHovered = hovered === mod.label;
              return (
                <motion.div
                  key={`spoke-${i}`}
                  initial={{ width: 0, opacity: 0 }}
                  animate={inView ? {
                    width: R,
                    opacity: hovered ? (isHovered ? 1 : 0.15) : 0.25,
                    borderTopColor: isHovered ? "#8b5cf6" : "#e2e8f0",
                    borderTopWidth: isHovered ? "2px" : "1px",
                  } : {}}
                  transition={{
                    width: { delay: 0.5 + i * 0.06, duration: 0.5 },
                    opacity: { duration: 0.3 },
                    borderTopColor: { duration: 0.2 },
                  }}
                  className="absolute pointer-events-none"
                  style={{
                    left: "50%",
                    top: "50%",
                    y: "-50%",
                    rotate: mod.angle - 90,
                    transformOrigin: "left center",
                    borderTopStyle: "dashed",
                    height: 0,
                  }}
                />
              );
            })}

            {/* Center hub */}
            <motion.div
              animate={{ boxShadow: hovered ? "0 0 60px rgba(139,92,246,0.3)" : "0 0 30px rgba(139,92,246,0.1)" }}
              transition={{ duration: 0.4 }}
              className="absolute z-10 w-36 h-36 rounded-3xl bg-white border-2 border-violet-200 flex flex-col items-center justify-center gap-2 shadow-xl"
              style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
            >
              <motion.div
                animate={hovered ? { scale: [1, 1.2, 1], rotate: [0, 8, -8, 0] } : {}}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-200"
              >
                <Shield size={26} className="text-white" />
              </motion.div>
              <div className="text-center">
                <div className="text-gray-900 font-black text-xs leading-tight">Infotech</div>
                <div className="text-violet-600 font-black text-[10px] tracking-widest">SENTINEL</div>
              </div>
              <motion.div
                animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-3xl border-2 border-violet-300"
              />
            </motion.div>

            {/* Module nodes */}
            {modules.map((mod, i) => {
              const rad = (mod.angle - 90) * (Math.PI / 180);
              const x = Math.cos(rad) * R;
              const y = Math.sin(rad) * R;
              const isHov = hovered === mod.label;
              return (
                <motion.div
                  key={mod.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.07, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.15 }}
                  onMouseEnter={() => setHovered(mod.label)}
                  className="absolute cursor-pointer"
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, x: "-50%", y: "-50%" }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3 + (i % 3) * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <motion.div
                      animate={{ boxShadow: isHov ? "0 8px 30px rgba(139,92,246,0.3)" : "0 2px 10px rgba(0,0,0,0.08)" }}
                      className={`w-12 h-12 rounded-2xl bg-white border-2 flex items-center justify-center text-xl transition-colors duration-200 ${
                        isHov ? "border-violet-400" : "border-gray-100"
                      }`}
                    >
                      {mod.emoji}
                    </motion.div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap transition-all duration-200 ${
                      isHov ? "bg-violet-100 text-violet-700" : "bg-white text-gray-500 border border-gray-100"
                    }`}>
                      {mod.label}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Info panel on right */}
          <div className="flex-1 flex items-center justify-center relative min-h-[400px]">
            {/* Decorative background elements */}
            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 right-12 text-4xl pointer-events-none"
            >
              🔒
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0], rotate: [0, -15, 15, 0] }} 
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-12 left-12 text-5xl pointer-events-none"
            >
              🛡️
            </motion.div>
            <motion.div 
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }} 
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              className="absolute bottom-12 right-12 text-4xl pointer-events-none"
            >
              🎯
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0], rotate: [0, 20, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-12 left-12 text-3xl pointer-events-none"
            >
              📡
            </motion.div>

            <AnimatePresence mode="wait">
              {hovered && moduleDetails[hovered] && (
                <motion.div
                  key={hovered}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-violet-100 max-w-xs w-full relative z-10"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${moduleDetails[hovered].color} flex items-center justify-center text-2xl mb-4 shadow-md`}>
                    {modules.find(m => m.label === hovered)?.emoji}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">{hovered}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{moduleDetails[hovered].desc}</p>
                  <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${moduleDetails[hovered].color}`} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
