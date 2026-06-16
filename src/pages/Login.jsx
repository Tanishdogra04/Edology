import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Lock, Mail, User, ShieldCheck, ArrowRight, KeyRound } from 'lucide-react';

// Zod schemas
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

const registerSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Confirm password must match')
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

export default function Login() {
  const { login, showToast } = useApp();
  const navigate = useNavigate();

  // Mode: 'login' | 'register' | 'forgot' | 'otp'
  const [mode, setMode] = useState('login');
  const [emailForOtp, setEmailForOtp] = useState('');
  const [otpCode, setOtpCode] = useState(['', '', '', '']);

  // Forms
  const { 
    register: registerLogin, 
    handleSubmit: handleSubmitLogin, 
    formState: { errors: errorsLogin } 
  } = useForm({ resolver: zodResolver(loginSchema) });

  const { 
    register: registerReg, 
    handleSubmit: handleSubmitReg, 
    formState: { errors: errorsReg } 
  } = useForm({ resolver: zodResolver(registerSchema) });

  // Handlers
  const handleLoginSubmit = (data) => {
    login(data.email, 'Alumni Student');
    navigate('/');
  };

  const handleRegisterSubmit = (data) => {
    setEmailForOtp(data.email);
    showToast('OTP verification code sent to your email!', 'info');
    setMode('otp');
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    const emailVal = e.target.forgotEmail.value;
    if (!emailVal) return;
    setEmailForOtp(emailVal);
    showToast('Reset password link sent to email!', 'success');
    setMode('login');
  };

  const handleOtpChange = (val, idx) => {
    const newOtp = [...otpCode];
    newOtp[idx] = val.slice(-1); // Only take last char
    setOtpCode(newOtp);

    // Auto-focus next input
    if (val && idx < 3) {
      document.getElementById(`otp-${idx + 1}`).focus();
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const joined = otpCode.join('');
    if (joined.length < 4) {
      showToast('Please enter the full 4-digit code', 'error');
      return;
    }
    login(emailForOtp, 'New User');
    navigate('/');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-24 text-left">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 p-8 rounded-3xl shadow-lg space-y-6">
        
        {/* Header section based on mode */}
        <div className="text-center space-y-2">
          <h2 className="font-heading text-2xl font-bold text-slate-850 dark:text-white">
            {mode === 'login' && 'Sign in to Edology'}
            {mode === 'register' && 'Create Free Account'}
            {mode === 'forgot' && 'Reset Password'}
            {mode === 'otp' && 'Verify Your Email'}
          </h2>
          <p className="text-xs text-slate-400">
            {mode === 'login' && 'Access Swiss & UK master degrees programs'}
            {mode === 'register' && 'Join 15,000+ professionals learning online'}
            {mode === 'forgot' && 'Enter your email to receive recovery parameters'}
            {mode === 'otp' && `Enter the 4-digit code sent to ${emailForOtp}`}
          </p>
        </div>

        {/* 1. LOGIN MODE */}
        {mode === 'login' && (
          <form onSubmit={handleSubmitLogin(handleLoginSubmit)} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  placeholder="name@company.com"
                  {...registerLogin('email')}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-blue-505"
                />
              </div>
              {errorsLogin.email && <p className="text-[10px] text-red-500 font-medium">{errorsLogin.email.message}</p>}
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Password</label>
                <button 
                  type="button" 
                  onClick={() => setMode('forgot')}
                  className="text-[10px] text-blue-600 hover:underline font-semibold"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  {...registerLogin('password')}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-blue-505"
                />
              </div>
              {errorsLogin.password && <p className="text-[10px] text-red-500 font-medium">{errorsLogin.password.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all shadow-blue-500/10 hover:scale-[1.01] cursor-pointer"
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center pt-2">
              <span className="text-xs text-slate-400">New to Edology? </span>
              <button 
                type="button" 
                onClick={() => setMode('register')}
                className="text-xs text-blue-600 font-bold hover:underline"
              >
                Create Account
              </button>
            </div>
          </form>
        )}

        {/* 2. REGISTER MODE */}
        {mode === 'register' && (
          <form onSubmit={handleSubmitReg(handleRegisterSubmit)} className="space-y-4">
            
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="John Doe"
                  {...registerReg('fullName')}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-855 rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-blue-505"
                />
              </div>
              {errorsReg.fullName && <p className="text-[10px] text-red-500 font-medium">{errorsReg.fullName.message}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  placeholder="john@company.com"
                  {...registerReg('email')}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-855 rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-blue-505"
                />
              </div>
              {errorsReg.email && <p className="text-[10px] text-red-500 font-medium">{errorsReg.email.message}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Create Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  {...registerReg('password')}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-855 rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-blue-505"
                />
              </div>
              {errorsReg.password && <p className="text-[10px] text-red-500 font-medium">{errorsReg.password.message}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  {...registerReg('confirmPassword')}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-855 rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-blue-505"
                />
              </div>
              {errorsReg.confirmPassword && <p className="text-[10px] text-red-500 font-medium">{errorsReg.confirmPassword.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all shadow-blue-500/10 hover:scale-[1.01] cursor-pointer"
            >
              Sign Up
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center pt-2">
              <span className="text-xs text-slate-400">Already registered? </span>
              <button 
                type="button" 
                onClick={() => setMode('login')}
                className="text-xs text-blue-600 font-bold hover:underline"
              >
                Sign In
              </button>
            </div>
          </form>
        )}

        {/* 3. FORGOT PASSWORD MODE */}
        {mode === 'forgot' && (
          <form onSubmit={handleForgotSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  name="forgotEmail"
                  type="email"
                  placeholder="john@company.com"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-blue-505"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              Send Reset Link
            </button>

            <button 
              type="button"
              onClick={() => setMode('login')}
              className="w-full text-center text-xs text-slate-450 hover:underline pt-2"
            >
              Back to Sign In
            </button>
          </form>
        )}

        {/* 4. OTP VERIFICATION MODE */}
        {mode === 'otp' && (
          <form onSubmit={handleOtpSubmit} className="space-y-6">
            
            <div className="flex justify-center gap-3">
              {otpCode.map((digit, idx) => (
                <input
                  key={idx}
                  id={`otp-${idx}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, idx)}
                  className="w-12 h-14 bg-slate-50 dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-800 focus:border-blue-600 dark:focus:border-cyan-400 text-center font-heading font-extrabold text-xl rounded-xl outline-none transition-colors"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              Verify & Sign In
            </button>

            <div className="text-center pt-2">
              <span className="text-xs text-slate-400">Didn't receive code? </span>
              <button 
                type="button" 
                onClick={() => showToast('OTP code resent!', 'info')}
                className="text-xs text-blue-600 font-bold hover:underline"
              >
                Resend OTP
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
