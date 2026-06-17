import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { AuthButton } from "./AuthButton";

const floatingEmojis = ["🛡️", "🔍", "🔒", "📡", "🌐", "⚡", "🎯", "🔐"];

export function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="py-16 lg:py-20 relative overflow-hidden final-cta-section"
    >
      {/* Animated mesh blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full final-cta-blob"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full final-cta-blob final-cta-blob--secondary"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none final-cta-grid" />

      {/* Floating emojis */}
      {floatingEmojis.map((emoji, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4 + i * 0.6, repeat: Infinity, delay: i * 0.5 }}
          className={`final-cta-emoji final-cta-emoji--${i} text-2xl`}
        >
          {emoji}
        </motion.div>
      ))}

      <div className="relative max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/30 mb-6"
            >
              Secure Your Attack Surface
            </motion.span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight">
            Take Control of Your{" "}
            <span className="relative">
              <span className="text-yellow-300 drop-shadow-lg">
                External Exposure
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-yellow-300 rounded-full origin-left"
              />
            </span>
          </h2>

          <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Discover assets, detect vulnerabilities, monitor brand threats, and secure your organization's digital footprint — all in one platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <AuthButton
              href="https://docs.google.com/forms/d/e/1FAIpQLSewsGyCmlZkT7i-uJpclxMltrsQMwoKiW2jgRRJKk2SS72rrQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-violet-600 font-bold text-lg shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Request Demo <ArrowRight size={18} />
            </AuthButton>
            <AuthButton
              href="https://docs.google.com/forms/d/e/1FAIpQLSewsGyCmlZkT7i-uJpclxMltrsQMwoKiW2jgRRJKk2SS72rrQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-2xl bg-transparent hover:bg-white/10 text-white font-bold text-lg border-2 border-white transition-all duration-300 backdrop-blur-sm"
            >
              <Phone size={17} /> Contact Sales
            </AuthButton>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 pt-6"
          >
            {["✅ No setup fees", "✅ 24/7 Support", "✅ Cancel anytime"].map((badge) => (
              <span key={badge} className="text-white/70 text-sm font-medium">
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
