import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Shield, Zap, User, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { AuthButton } from "./AuthButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logout, openLoginModal } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Architecture", href: "#architecture" },
    { name: "Organizations", href: "#who-we-serve" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_2px_40px_rgba(99,102,241,0.12)] border-b border-violet-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2.5 cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-300/40">
            <Shield size={17} className="text-white" />
          </div>
          <div>
            <span className="font-black text-gray-900 text-lg leading-none tracking-tight">Infotech</span>
            <span className="text-violet-600 font-black text-lg leading-none tracking-tight"> Sentinel</span>
          </div>
        </motion.div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-gray-600 hover:text-violet-700 font-medium text-sm rounded-lg hover:bg-violet-50 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="relative">
              <button
                onMouseEnter={() => setProfileOpen(true)}
                onMouseLeave={() => setProfileOpen(false)}
                className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 hover:bg-violet-200 transition-colors border border-violet-200"
              >
                <User size={18} />
              </button>
              
              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseEnter={() => setProfileOpen(true)}
                    onMouseLeave={() => setProfileOpen(false)}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-2"
                  >
                    <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                      <p className="text-sm font-bold text-slate-900 truncate">{user.name}</p>
                      <p className="text-xs text-slate-500 truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
                    >
                      <LogOut size={16} /> Log Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openLoginModal}
              className="text-sm font-bold text-slate-600 hover:text-violet-700 transition-colors px-2"
            >
              Log In
            </motion.button>
          )}

          <AuthButton
            href="https://docs.google.com/forms/d/e/1FAIpQLSewsGyCmlZkT7i-uJpclxMltrsQMwoKiW2jgRRJKk2SS72rrQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-violet-200 hover:opacity-90 hover:shadow-xl transition-all duration-200"
          >
            <Zap size={14} /> Get Demo
          </AuthButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} className="text-gray-700" /> : <Menu size={22} className="text-gray-700" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2.5 px-3 rounded-lg text-gray-700 font-medium text-sm hover:bg-violet-50 hover:text-violet-700 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {user ? (
                <div className="mt-2 p-3 bg-violet-50 rounded-xl flex items-center justify-between">
                  <div className="overflow-hidden">
                    <p className="text-sm font-bold text-slate-900 truncate">{user.name}</p>
                    <p className="text-xs text-slate-500 truncate">{user.email}</p>
                  </div>
                  <button onClick={logout} className="p-2 text-red-600 hover:bg-red-100 rounded-lg">
                    <LogOut size={16} />
                  </button>
                </div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { setMenuOpen(false); openLoginModal(); }}
                  className="mt-2 w-full text-center py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200"
                >
                  Log In
                </motion.button>
              )}
              <AuthButton
                href="https://docs.google.com/forms/d/e/1FAIpQLSewsGyCmlZkT7i-uJpclxMltrsQMwoKiW2jgRRJKk2SS72rrQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full text-center py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-sm hover:opacity-90 flex justify-center items-center"
              >
                Request Demo
              </AuthButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
