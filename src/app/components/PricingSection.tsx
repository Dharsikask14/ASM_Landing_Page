import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle, Sparkles, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "₹49,000",
    period: "/ Year",
    subprice: "(₹4,999 / Month)",
    badge: "",
    description: "Ideal For: Startups & Small Businesses",
    features: [
      "1 Domain Monitoring",
      "Subdomain Discovery",
      "Endpoint Enumeration",
      "Open Port Scanning",
      "Directory Discovery",
      "Technology Fingerprinting",
      "Vulnerability Scanning",
      "SSL Certificate Monitoring",
      "Email Security (SPF/DKIM/DMARC)",
      "Dashboard Access",
      "PDF Security Reports",
    ],
    upcomingFeatures: [],
    cta: "Get Started",
    ctaStyle: "bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white shadow-lg shadow-violet-200",
    featured: false,
  },
  {
    name: "Professional",
    price: "₹1,99,000",
    period: "/ Year",
    subprice: "(₹19,999 / Month)",
    badge: "",
    description: "Ideal For: Growing Organizations & SMEs",
    features: [
      "Up to 10 Domains",
      "Everything in Starter",
      "Brand Monitoring Suite",
      "Surface Web Monitoring",
      "Suspicious Domain Detection",
      "Phishing Domain Detection",
      "Impersonating Account Detection",
      "Anti-Malware Monitoring",
      "Mobile APK Security Scanning",
      "Executive Reports",
      "Findings Management",
      "Historical Scan Results",
    ],
    upcomingFeatures: [],
    cta: "Get Started",
    ctaStyle: "bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white shadow-lg shadow-violet-200",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "₹5,00,000+",
    period: "/ Year",
    subprice: "(Starting Price)",
    badge: "Recommended",
    description: "Ideal For: Large Enterprises",
    features: [
      "Everything in Professional",
      "Custom Domain Limits",
      "Custom APK Limits",
      "Multi-User Access",
      "Priority Support",
      "Advanced Reporting",
      "Dedicated Deployment Options",
      "Custom Integrations",
      "Alerting & Notifications",
    ],
    upcomingFeatures: [],
    cta: "Contact Sales",
    ctaStyle: "bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white shadow-lg shadow-violet-200",
    featured: false,
  },
];

const sliderSteps = [1, 3, 5, 10, 25, 50];

export function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sliderIdx, setSliderIdx] = useState(2);

  const domains = sliderSteps[sliderIdx];

  const getSliderPrice = (d: number) => {
    if (d === 1) return "₹49,000 / Year";
    if (d <= 10) return "₹1,99,000 / Year";
    return "Custom Enterprise Pricing";
  };

  return (
    <section id="pricing" className="py-16 lg:py-20 scroll-mt-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #faf8ff 0%, #f0f9ff 100%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Transparent,{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Scalable Pricing
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your security needs today and scale as your attack surface grows.
          </p>
        </motion.div>

        {/* Domain slider estimator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 mb-14 max-w-2xl mx-auto shadow-lg border border-violet-100"
        >
          <p className="text-center text-gray-500 font-medium text-sm mb-4">Estimate your cost for</p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl font-black bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              {domains === 50 ? "50+" : domains}
            </span>
            <span className="text-gray-500 font-semibold text-lg">domains</span>
          </div>

          <div className="text-center text-lg font-bold text-gray-900 mb-5">
            →{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              {getSliderPrice(domains)}
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={sliderSteps.length - 1}
            value={sliderIdx}
            onChange={(e) => setSliderIdx(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #8b5cf6 ${(sliderIdx / (sliderSteps.length - 1)) * 100}%, #e5e7eb ${(sliderIdx / (sliderSteps.length - 1)) * 100}%)`,
              accentColor: "#8b5cf6",
            }}
          />
          <div className="flex justify-between mt-3">
            {sliderSteps.map((s, i) => (
              <button
                key={s}
                onClick={() => setSliderIdx(i)}
                className={`text-xs font-bold transition-colors ${i === sliderIdx ? "text-violet-600" : "text-gray-400"}`}
              >
                {s === 50 ? "50+" : s}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-7 items-start max-w-6xl mx-auto">
          {tiers.map((t, i) => (
            <div key={t.name} className="relative group flex h-full">
              {t.featured && (
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-cyan-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
              )}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.12 }}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col rounded-3xl p-6 border-2 transition-all duration-300 w-full ${
                  t.featured
                    ? "border-violet-200 bg-white shadow-xl"
                    : "border-gray-100 bg-white shadow-sm"
                }`}
              >
                {t.badge && (
                  <motion.div
                    animate={t.featured ? { scale: [1, 1.04, 1] } : {}}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap ${
                      t.badge.toLowerCase().includes('recommended')
                        ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-md shadow-violet-200'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {t.badge.toLowerCase().includes('recommended') && <Sparkles size={11} />}
                    <span className="uppercase">{t.badge}</span>
                  </motion.div>
                )}

                <div className="mb-4 pt-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-1 tracking-tight">{t.name}</h3>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                      {t.price}
                    </span>
                    <span className="text-gray-400 text-sm">{t.period}</span>
                  </div>
                  {t.subprice && <div className="text-xs font-bold text-gray-500 mb-3">{t.subprice}</div>}
                  <p className="text-xs font-semibold text-gray-600 mt-2 leading-relaxed border-b border-gray-100 pb-4 mb-4">{t.description}</p>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <CheckCircle size={14} className={t.featured ? "text-violet-500 flex-shrink-0" : "text-gray-400 flex-shrink-0"} />
                      <span>{f}</span>
                    </li>
                  ))}
                  {t.upcomingFeatures && t.upcomingFeatures.length > 0 && (
                    <div className="pt-4 border-t border-gray-100 mt-4">
                      <p className="text-xs font-bold text-gray-900 mb-3 uppercase tracking-wider">Upcoming Features</p>
                      {t.upcomingFeatures.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-500 mb-2">
                          <span className="text-base flex-shrink-0">🚀</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </div>
                  )}
                </ul>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSewsGyCmlZkT7i-uJpclxMltrsQMwoKiW2jgRRJKk2SS72rrQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm transition-all mt-auto ${t.ctaStyle}`}
                >
                  {t.cta} <ArrowRight size={15} />
                </motion.a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
