import { motion } from 'motion/react';
import { Linkedin, Github, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { 
      href: 'https://www.linkedin.com/in/mnicol07/', 
      label: 'LinkedIn',
      icon: Linkedin,
      ariaLabel: 'Visit Matthew Nicol\'s LinkedIn profile'
    },
    { 
      href: 'https://github.com/mN5-07/', 
      label: 'GitHub',
      icon: Github,
      ariaLabel: 'Visit Matthew Nicol\'s GitHub profile'
    },
    { 
      href: 'mailto:mrnicol2@illinois.edu', 
      label: 'Email',
      icon: Mail,
      ariaLabel: 'Send email to mrnicol2@illinois.edu'
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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

  return (
    <footer className="relative py-20 px-6 sm:px-8 lg:px-12 border-t border-black/5 dark:border-white/5 backdrop-blur-sm bg-white/30 dark:bg-black/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Top Section - Branding and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 pb-12 border-b border-black/5 dark:border-white/5">
          <div className="text-center md:text-left">
            <motion.h3 
              className="text-2xl text-black dark:text-white mb-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Matthew Nicol
            </motion.h3>
            <p className="text-sm text-black/50 dark:text-white/50">
              Data Professional • Computer Science Graduate Student
            </p>
            <p className="text-xs text-black/40 dark:text-white/40 mt-2">
              Huntersville, NC
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm bg-white/50 dark:bg-black/50 border border-white/30 dark:border-white/20 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-purple-500/50 dark:hover:border-blue-500/50 hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-blue-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2"
                  aria-label={link.ariaLabel}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </motion.a>
              );
            })}
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-6 justify-center mb-12" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="text-sm text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
        
        {/* Bottom Section - Copyright and Status */}
        <div className="text-center space-y-3">
          <motion.p 
            className="text-sm text-black/40 dark:text-white/40 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {currentYear} Matthew Nicol. Built with 
            Figma
            and React.
          </motion.p>
          <motion.p 
            className="text-xs text-black/30 dark:text-white/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Open to full-time opportunities in data analytics, data science, and business intelligence
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
}