import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle, X } from "lucide-react";

const features = [
  "Continuous ASM",
  "Subdomain Discovery",
  "Vulnerability Management",
  "SSL Monitoring",
  "Brand Protection",
  "Mobile VAPT",
  "Dark Web Monitoring",
  "All-In-One Platform",
];

const competitors = [
  { name: "Infotech Sentinel", featured: true, support: [true, true, true, true, true, true, true, true] },
  { name: "Shodan", featured: false, support: [false, false, false, false, false, false, false, false] },
  { name: "Censys", featured: false, support: [true, true, false, false, false, false, false, false] },
  { name: "SecurityTrails", featured: false, support: [false, true, false, false, false, false, false, false] },
  { name: "Qualys EASM", featured: false, support: [true, true, true, true, false, false, false, false] },
  { name: "Detectify", featured: false, support: [true, true, true, true, false, false, false, false] },
];

export function CompetitiveAdvantage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-violet-50 text-violet-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Infotech Sentinel{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              vs. The Rest
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            See why security teams choose Infotech Sentinel over fragmented, costly alternatives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="overflow-x-auto rounded-3xl border border-gray-100 shadow-sm"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left p-5 text-gray-400 font-semibold text-sm w-52 bg-gray-50 rounded-tl-3xl">Feature</th>
                {competitors.map((c) => (
                  <th
                    key={c.name}
                    className={`p-5 text-center font-bold text-sm ${
                      c.featured
                        ? "bg-gradient-to-b from-violet-600 to-violet-500 text-white"
                        : "text-gray-600 bg-gray-50"
                    }`}
                  >
                    {c.featured && (
                      <div className="text-[10px] font-bold text-violet-200 mb-1 uppercase tracking-widest">⭐ Best</div>
                    )}
                    <span className="text-xs">{c.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f, fi) => (
                <motion.tr
                  key={f}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + fi * 0.07 }}
                  className={fi % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                >
                  <td className="p-4 text-sm font-semibold text-gray-700">{f}</td>
                  {competitors.map((c) => (
                    <td
                      key={c.name}
                      className={`p-4 text-center ${c.featured ? "bg-violet-50/60" : ""} ${
                        fi === features.length - 1 && c.featured ? "rounded-b-none" : ""
                      }`}
                    >
                      {c.support[fi] ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={inView ? { scale: 1 } : {}}
                          transition={{ delay: 0.35 + fi * 0.06, type: "spring" }}
                        >
                          <CheckCircle
                            size={18}
                            className={`mx-auto ${c.featured ? "text-violet-600" : "text-gray-400"}`}
                          />
                        </motion.div>
                      ) : (
                        <X size={18} className="mx-auto text-gray-200" />
                      )}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
