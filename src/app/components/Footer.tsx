import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, ArrowUp, Heart } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    navigation: [
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Experience', href: '#experience' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Publications', href: '#' },
      { name: 'Speaking', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Email', icon: Mail, href: 'mailto:sarah.mitchell@example.com' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 relative overflow-hidden">
      {/* Flowing Wave Gradient Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Light Mode Waves */}
        <div className="absolute inset-0 dark:opacity-0 transition-opacity duration-500">
          <motion.div
            animate={{ 
              opacity: [0.15, 0.25, 0.15],
              scale: [1, 1.15, 1],
              rotate: [0, 12, 0],
              x: [0, 50, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/4 w-[600px] h-[600px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 100%)',
              filter: 'blur(60px)',
            }}
          />
          
          <motion.div
            animate={{ 
              opacity: [0.12, 0.22, 0.12],
              scale: [1.05, 1.2, 1.05],
              rotate: [0, -15, 0],
              x: [0, -45, 0],
              y: [0, 35, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-0 right-1/3 w-[550px] h-[550px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.25) 0%, rgba(124, 58, 237, 0.2) 60%, transparent 100%)',
              filter: 'blur(65px)',
            }}
          />
        </div>

        {/* Dark Mode Waves */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
          <motion.div
            animate={{ 
              opacity: [0.25, 0.4, 0.25],
              scale: [1, 1.15, 1],
              rotate: [0, 12, 0],
              x: [0, 50, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/4 w-[650px] h-[650px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(96, 165, 250, 0.4) 0%, rgba(168, 85, 247, 0.3) 45%, transparent 100%)',
              filter: 'blur(70px)',
              mixBlendMode: 'screen',
            }}
          />
          
          <motion.div
            animate={{ 
              opacity: [0.2, 0.35, 0.2],
              scale: [1.05, 1.2, 1.05],
              rotate: [0, -15, 0],
              x: [0, -45, 0],
              y: [0, 35, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-0 right-1/3 w-[600px] h-[600px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.35) 0%, rgba(147, 51, 234, 0.3) 50%, transparent 100%)',
              filter: 'blur(75px)',
              mixBlendMode: 'screen',
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold text-2xl mb-4">Matthew Nicol</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-6 leading-relaxed">
              Computer Science graduate student specializing in data analytics, visualization, and database management. 
              Turning data into actionable insights.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="p-2.5 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-200 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon size={20} className="text-gray-400 group-hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/CTA Section */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4">Stay Updated</h4>
            <p className="text-gray-400 dark:text-gray-500 mb-4 text-sm">
              Get notified about new projects and insights.
            </p>
            <button
              onClick={() => {
                const contact = document.querySelector('#contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 dark:border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-sm">
              <span>© 2025 Matthew Nicol.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Built with <Heart size={14} className="text-red-500 fill-current" /> using React & Tailwind CSS
              </span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <div className="p-2 bg-gray-800 dark:bg-gray-900 rounded-lg group-hover:bg-blue-600 dark:group-hover:bg-blue-700 transition-colors duration-200">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}