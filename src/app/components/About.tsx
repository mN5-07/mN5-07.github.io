import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Database, BarChart3, Brain, Code } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Analyzing complex datasets using Python, pandas, and SQL for actionable insights.',
    },
    {
      icon: BarChart3,
      title: 'Data Visualization',
      description: 'Creating interactive dashboards with Power BI and Tableau for stakeholder engagement.',
    },
    {
      icon: Code,
      title: 'Database Management',
      description: 'Designing and optimizing PostgreSQL and MySQL databases for efficient data storage.',
    },
    {
      icon: Brain,
      title: 'Programming',
      description: 'Proficient in Python, C++, and SQL for data processing and analysis.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white dark:bg-gray-950 px-6 relative overflow-hidden">
      {/* Flowing Wave Gradient Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Light Mode Waves */}
        <div className="absolute inset-0 dark:opacity-0 transition-opacity duration-500">
          <motion.div
            animate={{ 
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.15, 1],
              rotate: [0, -15, 0],
              x: [0, -60, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 right-0 w-[600px] h-[600px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.45) 0%, rgba(147, 51, 234, 0.35) 40%, rgba(236, 72, 153, 0.25) 70%, transparent 100%)',
              filter: 'blur(60px)',
            }}
          />
          
          <motion.div
            animate={{ 
              opacity: [0.35, 0.55, 0.35],
              scale: [1.1, 1.25, 1.1],
              rotate: [0, 18, 0],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-0 left-0 w-[700px] h-[700px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.4) 0%, rgba(124, 58, 237, 0.35) 45%, rgba(59, 130, 246, 0.25) 75%, transparent 100%)',
              filter: 'blur(65px)',
            }}
          />
        </div>

        {/* Dark Mode Waves */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
          <motion.div
            animate={{ 
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.15, 1],
              rotate: [0, -15, 0],
              x: [0, -60, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 right-0 w-[650px] h-[650px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(96, 165, 250, 0.6) 0%, rgba(147, 51, 234, 0.5) 35%, rgba(219, 39, 119, 0.4) 65%, transparent 100%)',
              filter: 'blur(75px)',
              mixBlendMode: 'screen',
            }}
          />
          
          <motion.div
            animate={{ 
              opacity: [0.45, 0.65, 0.45],
              scale: [1.1, 1.25, 1.1],
              rotate: [0, 18, 0],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-0 left-0 w-[750px] h-[750px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.65) 0%, rgba(168, 85, 247, 0.55) 40%, rgba(59, 130, 246, 0.4) 70%, transparent 100%)',
              filter: 'blur(80px)',
              mixBlendMode: 'screen',
            }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-gray-900 dark:text-white mb-4 text-4xl md:text-5xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
              I'm currently pursuing a <span className="font-semibold text-gray-900 dark:text-white">Master's in Computer Science</span> at the University of Illinois Urbana-Champaign, 
              building on a strong foundation in data analytics and visualization from my undergraduate studies at High Point University.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              My passion lies in transforming raw data into meaningful insights through analytical tools and programming. 
              I focus on creating efficient data solutions that drive informed decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl hover:bg-gradient-to-br hover:from-blue-50/80 hover:to-purple-50/80 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 group border border-gray-200/50 dark:border-gray-800/50 hover:border-blue-200 dark:hover:border-blue-800/50 hover:shadow-lg"
              >
                <item.icon 
                  size={36} 
                  className="text-blue-600 dark:text-blue-400 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200" 
                  strokeWidth={2}
                />
                <h3 className="text-gray-900 dark:text-white mb-2 font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}