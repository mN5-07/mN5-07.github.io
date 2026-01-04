import { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';

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
    // In a real app, this would trigger an actual PDF download
    alert('Resume download would start here. Replace with your actual resume PDF link.');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md'
          : 'bg-white/50 dark:bg-black/50 backdrop-blur-sm'
      }`}
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
            className="tracking-tight text-black dark:text-white hover:opacity-60 transition-opacity"
          >
            DP
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-black/60" />
              ) : (
                <Sun className="w-4 h-4 text-white/60" />
              )}
            </button>

            {/* Resume CTA */}
            <button
              onClick={handleResumeDownload}
              className="flex items-center gap-2 px-5 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:opacity-80 transition-opacity text-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-black/60" />
              ) : (
                <Sun className="w-4 h-4 text-white/60" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={`w-5 h-5 text-black/60 dark:text-white/60 absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`}
                />
                <X
                  className={`w-5 h-5 text-black/60 dark:text-white/60 absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`}
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
      >
        <div className="px-6 py-6 space-y-1 bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-black/5 dark:border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={handleResumeDownload}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity text-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </nav>
  );
}