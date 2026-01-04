import { motion } from 'motion/react';

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
    <footer className="py-16 px-6 sm:px-8 lg:px-12 border-t border-black/5 dark:border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-black/40 dark:text-white/40">
              © {currentYear} Matthew Nicol
            </p>
            <p className="text-xs text-black/30 dark:text-white/30 mt-1">
              Data Analytics • Computer Science
            </p>
          </div>
          
          <nav className="flex flex-wrap gap-8 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-black/30 dark:text-white/30">
            Huntersville, NC • Available for opportunities
          </p>
        </div>
      </motion.div>
    </footer>
  );
}