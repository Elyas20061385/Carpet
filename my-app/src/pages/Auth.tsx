import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      toast.success("Welcome back!");
    } else {
      toast.success("Account created successfully!");
    }
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden bg-[#1D2530]">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B6181]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C9B9B2]/5 rounded-full blur-3xl" />

      {/* Back button */}
      <Link
        to="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-[#C9B9B2]/70 hover:text-[#C9B9B2] transition-colors duration-300"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm tracking-wide">Back to Home</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        {/* Glassmorphism Card */}
        <div
          className="relative backdrop-blur-xl bg-white/[0.03] rounded-2xl p-8 md:p-10"
          style={{
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 0 0.5px rgba(201, 185, 178, 0.3)",
          }}
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9B9B2]/5 via-transparent to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.h1
                key={isLogin ? "login" : "register"}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-display text-white mb-2 tracking-tight"
              >
                {isLogin ? "Welcome Back" : "Create Account"}
              </motion.h1>
              <p className="text-[#C9B9B2]/70 text-sm">
                {isLogin
                  ? "Sign in to access your account"
                  : "Join our exclusive collection"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-white/90 text-sm mb-2 tracking-wide">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9B9B2]/50" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full bg-white/[0.03] border border-[#C9B9B2]/20 rounded-lg py-3.5 pl-12 pr-4 text-white placeholder:text-[#C9B9B2]/40 focus:outline-none focus:border-[#C9B9B2]/50 transition-colors duration-300"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className="block text-white/90 text-sm mb-2 tracking-wide">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9B9B2]/50" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white/[0.03] border border-[#C9B9B2]/20 rounded-lg py-3.5 pl-12 pr-4 text-white placeholder:text-[#C9B9B2]/40 focus:outline-none focus:border-[#C9B9B2]/50 transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/90 text-sm mb-2 tracking-wide">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9B9B2]/50" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-white/[0.03] border border-[#C9B9B2]/20 rounded-lg py-3.5 pl-12 pr-12 text-white placeholder:text-[#C9B9B2]/40 focus:outline-none focus:border-[#C9B9B2]/50 transition-colors duration-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#C9B9B2]/50 hover:text-[#C9B9B2] transition-colors duration-300"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-[#C9B9B2]/70 hover:text-[#C9B9B2] transition-colors duration-300"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              {/* Primary Action Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 bg-[#3B6181] text-white font-medium tracking-wider uppercase text-sm rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,97,129,0.4)]"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </motion.button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9B9B2]/20 to-transparent" />
              <span className="text-[#C9B9B2]/40 text-xs tracking-widest uppercase">
                or
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C9B9B2]/20 to-transparent" />
            </div>

            {/* Toggle Login/Register */}
            <p className="text-center text-[#C9B9B2]/70 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="relative text-[#C9B9B2] font-medium hover:text-white transition-colors duration-300 group"
              >
                <span>{isLogin ? "Register" : "Sign In"}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9B9B2] group-hover:w-full transition-all duration-300" />
              </button>
            </p>
          </div>
        </div>

        {/* Brand */}
        <p className="text-center mt-8 text-[#C9B9B2]/40 text-xs tracking-widest uppercase">
          Afghan Carpets
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;
