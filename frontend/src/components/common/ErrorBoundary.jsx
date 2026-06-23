import React from 'react';
import { ShieldAlert, RefreshCw } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl space-y-6">
            <div className="w-16 h-16 rounded-full bg-rose-50 dark:bg-rose-950/40 flex items-center justify-center text-rose-500 mx-auto">
              <ShieldAlert className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">Something went wrong</h2>
              <p className="text-xs text-slate-500 dark:text-slate-404 leading-relaxed">
                An unexpected framework error occurred. Please click below to reload the page or navigate back to safety.
              </p>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-blue-500/10 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Reload Page
            </button>
            
            <a 
              href="/"
              className="block text-xs text-slate-400 hover:text-slate-600 underline"
            >
              Go to Home Page
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
