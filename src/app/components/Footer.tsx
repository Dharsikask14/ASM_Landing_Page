import { Shield } from "lucide-react";

export function Footer() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Organizations", href: "#who-we-serve" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <Shield size={17} className="text-white" />
            </div>
            <span className="font-black text-lg tracking-tight">
              Infotech <span className="text-violet-400">Sentinel</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
            Continuous Attack Surface Management & External Threat Monitoring
          </p>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Hackers Infotech. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-violet-400 text-sm font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-3">
            {["ISO 27001", "SOC 2", "GDPR"].map((badge) => (
              <span key={badge} className="text-xs bg-gray-800 text-gray-400 px-3 py-1 rounded-full border border-gray-700">
                {badge}
              </span>
            ))}
          </div>
          <p className="text-gray-600 text-xs">Enterprise-grade security compliance</p>
        </div>
      </div>
    </footer>
  );
}
