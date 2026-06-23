import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [compareList, setCompareList] = useState(() => {
    const saved = localStorage.getItem('compareList');
    return saved ? JSON.parse(saved) : [];
  });

  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    const saved = localStorage.getItem('recentlyViewed');
    return saved ? JSON.parse(saved) : [];
  });

  const [toasts, setToasts] = useState([]);

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('compareList', JSON.stringify(compareList));
  }, [compareList]);

  useEffect(() => {
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const toggleWishlist = (courseId) => {
    if (wishlist.includes(courseId)) {
      setWishlist(prev => prev.filter(id => id !== courseId));
      showToast('Course removed from wishlist', 'info');
    } else {
      setWishlist(prev => [...prev, courseId]);
      showToast('Course added to wishlist', 'success');
    }
  };

  const toggleCompare = (course) => {
    const exists = compareList.find(c => c.id === course.id);
    if (exists) {
      setCompareList(prev => prev.filter(c => c.id !== course.id));
      showToast('Course removed from comparison', 'info');
    } else {
      if (compareList.length >= 3) {
        showToast('You can compare a maximum of 3 courses', 'warning');
        return;
      }
      setCompareList(prev => [...prev, course]);
      showToast('Course added to comparison', 'success');
    }
  };

  const clearCompare = () => {
    setCompareList([]);
    showToast('Comparison list cleared', 'info');
  };

  const addRecentlyViewed = (courseId) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(id => id !== courseId);
      return [courseId, ...filtered].slice(0, 5);
    });
  };

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const login = (email, name) => {
    setUser({ email, name });
    showToast(`Welcome back, ${name}!`, 'success');
  };

  const logout = () => {
    setUser(null);
    showToast('Logged out successfully', 'info');
  };

  return (
    <AppContext.Provider value={{
      darkMode,
      toggleDarkMode,
      wishlist,
      toggleWishlist,
      compareList,
      toggleCompare,
      clearCompare,
      recentlyViewed,
      addRecentlyViewed,
      toasts,
      showToast,
      removeToast,
      user,
      login,
      logout
    }}>
      {children}
      
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        {toasts.map(toast => (
          <div
            key={toast.id}
            onClick={() => removeToast(toast.id)}
            className={`pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 rounded-lg shadow-lg border text-sm font-medium transition-all duration-300 transform translate-y-0 scale-100 hover:scale-95 cursor-pointer animate-slide-in-right ${
              toast.type === 'success' ? 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-900' :
              toast.type === 'warning' ? 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-900' :
              toast.type === 'info' ? 'bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-900' :
              'bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-900'
            }`}
          >
            <span>{toast.message}</span>
            <button className="text-current opacity-60 hover:opacity-100">&times;</button>
          </div>
        ))}
      </div>
    </AppContext.Provider>
  );
};
