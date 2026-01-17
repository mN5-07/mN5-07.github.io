import { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion'; // assuming framer-motion

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleResumeDownload = () => {
    const resumePath = '/stuff/resume10_25.pdf'; // relative to public folder
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Matthew_Nicol_Resume.pdf'; // clean filename for the user
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-white/20 dark:border-white/10'
          : 'bg-white/40 dark:bg-black/40 backdrop-blur-lg'
      }`}
      role="navigation"
      aria-label="Main navigation"
      style={{
        boxShadow: isScrolled ? '0 8px 32px 0 rgba(168, 85, 247, 0.1)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="tracking-tight text-black dark:text-white hover:opacity-60 transition-opacity focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 rounded-sm"
            aria-label="Matthew Nicol - Return to top"
          >
            MN
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 rounded-sm relative group/nav"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-black dark:bg-white transition-all duration-300 group-hover/nav:w-full" />
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 hover:scale-110"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-black/60 transition-transform duration-300 hover:rotate-12" aria-hidden="true" />
              ) : (
                <Sun className="w-4 h-4 text-white/60 transition-transform duration-300 hover:rotate-12" aria-hidden="true" />
              )}
            </button>

            {/* Resume CTA - Desktop */}
            <motion.button
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-4 py-2 text-sm bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-black/80 dark:hover:bg-white/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 hover:shadow-lg flex items-center gap-2"
              aria-label="Download resume"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              Resume
            </motion.button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-black/60" aria-hidden="true" />
              ) : (
                <Sun className="w-4 h-4 text-white/60" aria-hidden="true" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={`w-5 h-5 text-black/60 dark:text-white/60 absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`}
                  aria-hidden="true"
                />
                <X
                  className={`w-5 h-5 text-black/60 dark:text-white/60 absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`}
                  aria-hidden="true"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="px-6 py-6 space-y-1 bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-black/5 dark:border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={handleResumeDownload}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-4 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2"
            aria-label="Download resume"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </nav>
  );
}