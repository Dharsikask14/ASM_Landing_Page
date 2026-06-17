import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User as UserIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function LoginModal() {
  const { isLoginModalOpen, closeLoginModal, login } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{name?: string, email?: string, password?: string}>({});

  if (!isLoginModalOpen) return null;

  const validate = () => {
    const newErrors: {name?: string, email?: string, password?: string} = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]*$/.test(name)) {
      newErrors.name = 'Name can only contain letters and spaces';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      login({ name: name.trim(), email: email.trim() });
      setName('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLoginModal}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="p-8">
            <button
              onClick={closeLoginModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X size={16} />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-slate-900 mb-2">Welcome Back</h2>
              <p className="text-sm text-slate-500">Sign in to access your dashboard and tools.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Full Name</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <UserIcon size={16} />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-violet-500 focus:ring-violet-200'} bg-slate-50 focus:bg-white outline-none transition-all`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && <p className="text-xs text-red-500 mt-1.5 ml-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Email Address</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Mail size={16} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-violet-500 focus:ring-violet-200'} bg-slate-50 focus:bg-white outline-none transition-all`}
                    placeholder="john@company.com"
                  />
                </div>
                {errors.email && <p className="text-xs text-red-500 mt-1.5 ml-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Password</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Lock size={16} />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border ${errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-violet-500 focus:ring-violet-200'} bg-slate-50 focus:bg-white outline-none transition-all`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && <p className="text-xs text-red-500 mt-1.5 ml-1">{errors.password}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-4 rounded-xl font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 transition-opacity shadow-lg shadow-violet-200"
              >
                Log In to Account
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
