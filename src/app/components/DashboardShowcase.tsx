import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { Shield, ShieldAlert, Globe, Bug, Terminal, Activity, Search, Play, Calendar, AlertTriangle } from "lucide-react";
import { useAuth } from "../context/AuthContext";

// Asset Growth Data
const assetGrowthData = [
  { month: "Jan", assets: 120 }, { month: "Feb", assets: 145 }, { month: "Mar", assets: 190 },
  { month: "Apr", assets: 240 }, { month: "May", assets: 298 }, { month: "Jun", assets: 332 },
];

// Severity Breakdown Data
const severityData = [
  { name: "Critical", value: 4, fill: "#ef4444" },
  { name: "High", value: 12, fill: "#f97316" },
  { name: "Medium", value: 18, fill: "#eab308" },
  { name: "Low", value: 13, fill: "#3b82f6" },
];

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 40);
    return () => clearInterval(timer);
  }, [inView, end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export function DashboardShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { user, openLoginModal } = useAuth();

  const [monitoredDomains, setMonitoredDomains] = useState([
    { name: "example.com", status: "Active", lastScan: "2 hours ago", vulns: 3 },
    { name: "app.example.com", status: "Active", lastScan: "4 hours ago", vulns: 1 },
    { name: "mail.example.com", status: "Active", lastScan: "1 day ago", vulns: 0 },
  ]);

  const [findings, setFindings] = useState([
    { domain: "example.com", vuln: "CORS Misconfiguration", source: "Faraday Scan", risk: "High" },
    { domain: "example.com", vuln: "SSL Certificate Expiring", source: "SSL Auditor", risk: "Medium" },
    { domain: "example.com", vuln: "Open Ports Exposed (21, 3389)", source: "Port Scanner", risk: "Critical" },
    { domain: "example.com", vuln: "Missing SPF/DMARC Record", source: "Email Guard", risk: "Low" },
  ]);

  const [scanInput, setScanInput] = useState("");
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = (domainName: string) => {
    if (!user) {
      openLoginModal();
      return;
    }
    if (!domainName) return;
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      // Add domain if not exist
      if (!monitoredDomains.some(d => d.name === domainName)) {
        setMonitoredDomains([
          { name: domainName, status: "Active", lastScan: "Just now", vulns: 2 },
          ...monitoredDomains
        ]);
        setFindings([
          { domain: domainName, vuln: "Potential XSS Vulnerability", source: "Faraday Scan", risk: "High" },
          { domain: domainName, vuln: "Subdomain Takeover Risk", source: "Route53 Auditor", risk: "Critical" },
          ...findings
        ]);
      }
      setScanInput("");
    }, 1500);
  };

  const handleRestrictedAction = () => {
    if (!user) {
      openLoginModal();
    }
  };

  return (
    <section id="dashboard" className="py-16 lg:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/80 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-200 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-cyan-200 to-transparent rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-200 bg-violet-50/80 backdrop-blur"
          >
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <span className="text-xs font-semibold text-violet-700 uppercase tracking-wider">Interactive Dashboard</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 text-5xl md:text-6xl font-black text-slate-900 tracking-tight"
          >
            Security Intelligence
            <span className="block mt-2 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Platform in Action
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Experience real-time threat monitoring, asset discovery, and vulnerability management across your entire attack surface.
          </motion.p>
        </motion.div>

        {/* Main Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          {/* Header Bar */}
          <div className="mb-8 px-8 py-6 rounded-t-3xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs text-slate-400 font-mono">sentinel-dashboard-pro</span>
            </div>
            <div className="text-xs text-slate-300 font-mono">sentinel.security/live</div>
          </div>

          {/* Dashboard Grid */}
          <div className="rounded-b-3xl bg-white border border-slate-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="p-8 space-y-8">
              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Globe, label: "Total Assets", value: 332, color: "from-violet-500 to-purple-500", lightBg: "bg-violet-50" },
                  { icon: Bug, label: "Active Alerts", value: 47, color: "from-orange-500 to-rose-500", lightBg: "bg-orange-50" },
                  { icon: ShieldAlert, label: "Risk Rating", value: "HIGH", color: "from-amber-500 to-orange-500", lightBg: "bg-amber-50" },
                  { icon: Activity, label: "Health Score", value: 87, suffix: "%", color: "from-emerald-500 to-teal-500", lightBg: "bg-emerald-50" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.35 + idx * 0.1 }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-200 to-cyan-200 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur" />
                    <div className={`relative p-6 rounded-2xl ${stat.lightBg} border border-slate-200/60 transition-all duration-300`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-xl text-white`}>
                          <stat.icon size={24} />
                        </div>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</span>
                      </div>
                      <div className="text-3xl font-black text-slate-900">
                        {typeof stat.value === "number" ? <CountUp end={stat.value} suffix={stat.suffix || ""} /> : stat.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Domain Management Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.75 }}
                className="border-t border-slate-200 pt-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">Monitored Domains</h3>
                  <span className="px-3 py-1.5 text-xs font-semibold text-slate-600 bg-slate-100 rounded-full">
                    {monitoredDomains.length} Active
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {monitoredDomains.map((domain, idx) => (
                    <motion.div
                      key={domain.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + idx * 0.08 }}
                      className="group p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200 hover:border-violet-300 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex-1">
                          <p className="font-semibold text-slate-900">{domain.name}</p>
                          <p className="text-xs text-slate-500 mt-1">Last scanned {domain.lastScan}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          domain.vulns > 0
                            ? "bg-rose-100 text-rose-700"
                            : "bg-emerald-100 text-emerald-700"
                        }`}>
                          {domain.vulns > 0 ? `${domain.vulns} Alert${domain.vulns > 1 ? "s" : ""}` : "Secure"}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleScan(domain.name)}
                          className="flex-1 py-2 px-3 text-xs font-semibold rounded-lg bg-violet-100 text-violet-700 hover:bg-violet-200 transition-colors duration-200"
                        >
                          Rescan
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleRestrictedAction}
                          className="flex-1 py-2 px-3 text-xs font-semibold rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors duration-200"
                        >
                          Details
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Charts Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="grid lg:grid-cols-3 gap-8 border-t border-slate-200 pt-8"
              >
                {/* Findings Table */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Findings</h3>
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {findings.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1.15 + idx * 0.06 }}
                        className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-200 flex items-center justify-between"
                      >
                        <div className="flex-1">
                          <p className="font-semibold text-slate-900 text-sm">{item.vuln}</p>
                          <div className="flex gap-3 mt-2">
                            <span className="text-xs text-slate-500 bg-slate-200 px-2 py-1 rounded">{item.domain}</span>
                            <span className="text-xs text-slate-500 bg-slate-200 px-2 py-1 rounded">{item.source}</span>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap ${
                          item.risk === "Critical" ? "bg-red-100 text-red-700" :
                          item.risk === "High" ? "bg-orange-100 text-orange-700" :
                          item.risk === "Medium" ? "bg-yellow-100 text-yellow-700" :
                          "bg-blue-100 text-blue-700"
                        }`}>
                          {item.risk}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Risk Chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Risk Distribution</h3>
                  <div className="h-40 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={severityData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={65}
                          dataKey="value"
                          paddingAngle={2}
                        >
                          {severityData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: 12 }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 space-y-2">
                    {severityData.map((item) => (
                      <div key={item.name} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.fill }} />
                          <span className="text-slate-600">{item.name}</span>
                        </div>
                        <span className="font-semibold text-slate-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Growth Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 1.25 }}
                className="border-t border-slate-200 pt-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Asset Growth Trend</h3>
                  <span className="px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full">
                    +176% Growth
                  </span>
                </div>
                <div className="h-64 p-4 rounded-xl bg-gradient-to-br from-slate-50/50 to-slate-100/30 border border-slate-200">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={assetGrowthData}>
                      <defs>
                        <linearGradient id="gradientStroke" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" stroke="#cbd5e1" style={{ fontSize: 12 }} />
                      <YAxis stroke="#cbd5e1" style={{ fontSize: 12 }} />
                      <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: 12 }} />
                      <Area
                        type="monotone"
                        dataKey="assets"
                        stroke="#7c3aed"
                        fill="url(#gradientStroke)"
                        strokeWidth={2.5}
                        dot={{ fill: "#7c3aed", r: 5 }}
                        activeDot={{ r: 7 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
