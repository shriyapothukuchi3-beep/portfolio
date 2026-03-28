import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { label: 'Work', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F13]/80 backdrop-blur-md border-b border-[#2a2a35]">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-sm font-medium tracking-wider text-[#F5F5F5] hover:text-[#C4A9F0] transition-colors">
            SHRIYA POTHUKUCHI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              const isItemActive = isActive(item.path);
              return (
                <div key={item.path} className="flex items-center">
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-normal transition-colors ${
                      isItemActive
                        ? 'text-[#F5F5F5]'
                        : 'text-[#999] hover:text-[#F5F5F5]'
                    }`}
                  >
                    {item.label}
                    {isItemActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#6C3FC8]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                  {index < navItems.length - 1 && (
                    <span className="text-[#444] text-sm">·</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F5F5F5] hover:text-[#C4A9F0] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-[#2a2a35]"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-sm transition-colors ${
                      isActive(item.path)
                        ? 'text-[#F5F5F5] bg-[#1A1A2A]'
                        : 'text-[#999] hover:text-[#F5F5F5] hover:bg-[#1A1A2A]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}