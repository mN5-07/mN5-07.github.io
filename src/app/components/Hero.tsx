import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950 px-6 relative overflow-hidden">
      {/* Flowing Wave Gradient Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Light Mode Waves */}
        <div className="absolute inset-0 dark:opacity-0 transition-opacity duration-500">
          {/* Wave 1 - Blue to Purple */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.6, 0.8, 0.6],
              scale: [1, 1.2, 1],
              rotate: [0, 15, 0],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-1/4 -right-1/4 w-[900px] h-[900px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.5) 0%, rgba(147, 51, 234, 0.4) 35%, rgba(236, 72, 153, 0.3) 65%, transparent 100%)',
              filter: 'blur(50px)',
            }}
          />
          
          {/* Wave 2 - Purple to Pink */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.5, 0.7, 0.5],
              scale: [1.1, 0.9, 1.1],
              rotate: [0, -20, 0],
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-1/3 -left-1/4 w-[800px] h-[800px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.5) 0%, rgba(236, 72, 153, 0.45) 40%, rgba(59, 130, 246, 0.35) 75%, transparent 100%)',
              filter: 'blur(55px)',
            }}
          />
          
          {/* Wave 3 - Pink to Blue accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: [0.45, 0.65, 0.45],
              scale: [1, 1.25, 1],
              rotate: [0, 12, 0],
              x: [0, -60, 0],
              y: [0, -80, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-0 right-1/4 w-[750px] h-[750px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.5) 0%, rgba(124, 58, 237, 0.4) 40%, rgba(59, 130, 246, 0.3) 70%, transparent 100%)',
              filter: 'blur(60px)',
            }}
          />
          
          {/* Wave 4 - Center flowing accent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.4, 0.6, 0.4],
              scale: [1.05, 1.3, 1.05],
              rotate: [0, -25, 0],
              x: [0, 40, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute top-1/2 left-1/3 w-[600px] h-[600px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.45) 0%, rgba(168, 85, 247, 0.4) 45%, rgba(236, 72, 153, 0.3) 75%, transparent 100%)',
              filter: 'blur(65px)',
            }}
          />
        </div>

        {/* Dark Mode Waves */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
          {/* Wave 1 - Electric Blue to Magenta */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.6, 0.8, 0.6],
              scale: [1, 1.2, 1],
              rotate: [0, 15, 0],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-1/4 -right-1/4 w-[900px] h-[900px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(96, 165, 250, 0.7) 0%, rgba(147, 51, 234, 0.6) 30%, rgba(219, 39, 119, 0.5) 60%, transparent 100%)',
              filter: 'blur(70px)',
              mixBlendMode: 'screen',
            }}
          />
          
          {/* Wave 2 - Deep Purple to Pink */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.55, 0.75, 0.55],
              scale: [1.1, 0.9, 1.1],
              rotate: [0, -20, 0],
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-1/3 -left-1/4 w-[850px] h-[850px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.65) 0%, rgba(236, 72, 153, 0.6) 35%, rgba(59, 130, 246, 0.45) 70%, transparent 100%)',
              filter: 'blur(80px)',
              mixBlendMode: 'screen',
            }}
          />
          
          {/* Wave 3 - Magenta Pink to Blue */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.25, 1],
              rotate: [0, 12, 0],
              x: [0, -60, 0],
              y: [0, -80, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-0 right-1/4 w-[800px] h-[800px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.7) 0%, rgba(147, 51, 234, 0.6) 35%, rgba(59, 130, 246, 0.45) 65%, transparent 100%)',
              filter: 'blur(75px)',
              mixBlendMode: 'screen',
            }}
          />
          
          {/* Wave 4 - Accent Blue wave */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.45, 0.65, 0.45],
              scale: [1.05, 1.3, 1.05],
              rotate: [0, -25, 0],
              x: [0, 40, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute top-1/2 left-1/3 w-[700px] h-[700px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.6) 0%, rgba(124, 58, 237, 0.55) 40%, rgba(236, 72, 153, 0.4) 70%, transparent 100%)',
              filter: 'blur(70px)',
              mixBlendMode: 'screen',
            }}
          />
          
          {/* Wave 5 - Additional flowing layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.35, 0.55, 0.35],
              scale: [1.1, 1.4, 1.1],
              rotate: [0, 18, 0],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/4 left-1/2 w-[650px] h-[650px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.5) 0%, rgba(96, 165, 250, 0.45) 50%, transparent 100%)',
              filter: 'blur(85px)',
              mixBlendMode: 'screen',
            }}
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-6"
          >
            Data Analytics & Computer Science
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Matthew Nicol
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Master's student in Computer Science with expertise in data analytics and visualization. 
            Specialized in <span className="font-semibold text-gray-800 dark:text-gray-100">Python</span>, <span className="font-semibold text-gray-800 dark:text-gray-100">SQL</span>, and <span className="font-semibold text-gray-800 dark:text-gray-100">Power BI</span> for data-driven insights.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-base font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 text-base font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-all duration-200 transform hover:-translate-y-0.5"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}