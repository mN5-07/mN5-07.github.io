import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
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
    <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl sm:text-7xl lg:text-8xl tracking-tight text-black dark:text-white"
          >
            Matthew Nicol
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-black/50 dark:text-white/50 max-w-2xl mx-auto"
          >
            Data Analytics & Computer Science • Building data-driven solutions
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <button
            onClick={() => handleScroll('projects')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:opacity-80 transition-opacity text-sm"
          >
            <span>View Projects</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors text-sm"
          >
            <span>Get in Touch</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}