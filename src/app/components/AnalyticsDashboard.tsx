import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  LineChart, Line, BarChart, Bar, RadialBarChart, RadialBar,
  XAxis, YAxis, Tooltip, ResponsiveContainer, Legend
} from "recharts";

const vulnOverTimeData = [
  { month: "Jan", count: 34 }, { month: "Feb", count: 28 }, { month: "Mar", count: 42 },
  { month: "Apr", count: 36 }, { month: "May", count: 51 }, { month: "Jun", count: 29 },
];
const assetByTypeData = [
  { name: "Subdomains", count: 142 }, { name: "Endpoints", count: 89 }, { name: "Ports", count: 34 },
  { name: "Directories", count: 67 }, { name: "Techs", count: 45 },
];
const scanCoverageData = [
  { month: "Jan", external: 85, internal: 72 }, { month: "Feb", external: 88, internal: 75 },
  { month: "Mar", external: 82, internal: 78 }, { month: "Apr", external: 91, internal: 80 },
  { month: "May", external: 94, internal: 83 }, { month: "Jun", external: 97, internal: 88 },
];
const securityScoreRadial = [
  { name: "Asset Coverage", value: 94, fill: "#8b5cf6" },
  { name: "Vuln Remediation", value: 78, fill: "#06b6d4" },
  { name: "SSL Health", value: 89, fill: "#f59e0b" },
  { name: "Brand Safety", value: 96, fill: "#10b981" },
];

const chartCardClass = "bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-violet-100 transition-all duration-300";

export function AnalyticsDashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-cyan-50 text-cyan-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Security Analytics
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Data-Driven{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Security Intelligence
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Turn security data into actionable insights with real-time dashboards and threat analytics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Vulnerability Trends */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className={chartCardClass}
          >
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-xl bg-violet-100 flex items-center justify-center text-sm">📈</div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Vulnerability Trends</div>
                <div className="text-xs text-gray-400">Monthly vulnerability count</div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={vulnOverTimeData}>
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: "12px", border: "1px solid #e5e7eb", fontSize: 12, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                />
                <Line type="monotone" dataKey="count" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4, fill: "#8b5cf6", strokeWidth: 0 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Assets by Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className={chartCardClass}
          >
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-xl bg-cyan-100 flex items-center justify-center text-sm">🗂️</div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Assets by Category</div>
                <div className="text-xs text-gray-400">Discovered assets by type</div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={assetByTypeData} barCategoryGap="30%">
                <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid #e5e7eb", fontSize: 12 }} />
                <Bar dataKey="count" fill="url(#barGrad)" radius={[8, 8, 0, 0]} name="Assets" />
                <defs>
                  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Scan Coverage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={chartCardClass}
          >
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-sm">📡</div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Scan Coverage</div>
                <div className="text-xs text-gray-400">External vs internal (%)</div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={scanCoverageData} barCategoryGap="30%">
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid #e5e7eb", fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="external" fill="#8b5cf6" radius={[6, 6, 0, 0]} name="External" />
                <Bar dataKey="internal" fill="#06b6d4" radius={[6, 6, 0, 0]} name="Internal" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Security Score */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            className={chartCardClass}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-rose-100 flex items-center justify-center text-sm">🎯</div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Security Score</div>
                <div className="text-xs text-gray-400">Key security metrics at a glance</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <ResponsiveContainer width={160} height={160}>
                <RadialBarChart innerRadius={20} outerRadius={75} data={securityScoreRadial} startAngle={90} endAngle={-270}>
                  <RadialBar dataKey="value" cornerRadius={6} background={{ fill: "#f1f5f9" }} />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-3">
                {securityScoreRadial.map((k) => (
                  <div key={k.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: k.fill }} />
                      <span className="text-xs text-gray-500 font-medium">{k.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-16 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${k.value}%` } : {}}
                          transition={{ duration: 1, delay: 0.4 }}
                          className="h-full rounded-full"
                          style={{ background: k.fill }}
                        />
                      </div>
                      <span className="text-xs font-bold text-gray-700 w-8 text-right">{k.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
