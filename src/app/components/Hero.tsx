import { ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
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
    <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-20 relative overflow-hidden" aria-labelledby="hero-heading">
      <motion.div 
        style={{ y, opacity }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <div className="mb-12 space-y-4">
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl sm:text-7xl lg:text-8xl tracking-tight text-black dark:text-white"
          >
            Matthew Nicol
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-black/50 dark:text-white/50 max-w-2xl mx-auto"
          >
            Data Analytics & Computer Science • Building data-driven solutions
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <motion.button
            onClick={() => handleScroll('projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-white/20"
            aria-label="View featured projects"
          >
            <span>View Projects</span>
            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </motion.button>
          <motion.button
            onClick={() => handleScroll('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 hover:border-black/20 dark:hover:border-white/20"
            aria-label="Navigate to contact section"
          >
            <span>Get in Touch</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Animated gradient background element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black dark:bg-white rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black dark:bg-white rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '6s' }} />
      </motion.div>
    </section>
  );
}