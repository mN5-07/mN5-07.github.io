import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'S&P 500 Stock Performance Analysis',
      description: 'Automated daily equity data ingestion using Python (yfinance, pandas, SQLAlchemy) and stored results in PostgreSQL for centralized access.',
      tools: ['Python', 'yfinance', 'pandas', 'PostgreSQL', 'Power BI', 'DAX'],
      details: [
        'Optimized analytical queries with PostgreSQL (CTEs, Subqueries, Window Functions) to calculate returns, volatility, and trend indicators',
        'Built an interactive Power BI dashboard with DAX measures (CALCULATE, DATESINPERIOD, TOPN) for dynamic filtering and sector-level comparison',
        'Presented key performance metrics (avg return, win rate, volume trends) through color-coded KPIs for non-technical stakeholders',
      ],
      github: '#',
      demo: '#',
    },
    {
      title: 'HR Employee Attrition & Performance Analytics',
      description: 'Integrated HR data sources using Excel Power Query and pandas for data integration, processing employee records to create a master dataset for workforce analytics.',
      tools: ['Excel', 'Power Query', 'pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
      details: [
        'Developed a refreshable Excel workbook with dynamic pivot tables, enabling ongoing attrition analysis by department, tenure, and demographics',
        'Performed statistical analysis using pandas and NumPy (correlation matrices, percentile calculations, cohort analysis) to quantify training ROI and identify high-risk employee segments',
        'Created data visualizations using Seaborn and Matplotlib to translate complex HR metrics into actionable insights for strategic workforce planning',
      ],
      github: '#',
      demo: '#',
    },
    {
      title: 'NYPL Menus Data Profiling and Cleaning',
      description: 'Cleaned and organized a 500K+ record historical dataset using Python and OpenRefine, ensuring data accuracy for analysis of historical dining trends.',
      tools: ['Python', 'OpenRefine', 'pandas'],
      details: [
        'Standardized data to resolve inconsistencies (nulls, whitespace, case errors), improving data integrity for research purposes',
        'Produced data-quality improvement reports and visual workflows, adopted by the curation team to streamline future data-cleaning workflows',
      ],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-white dark:bg-gray-950 px-6 relative overflow-hidden">
      {/* Flowing Wave Gradient Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Light Mode Waves */}
        <div className="absolute inset-0 dark:opacity-0 transition-opacity duration-500">
          <motion.div
            animate={{ 
              opacity: [0.5, 0.7, 0.5],
              scale: [1.05, 1.2, 1.05],
              rotate: [0, 20, 0],
              x: [0, 70, 0],
              y: [0, -60, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-0 w-[650px] h-[650px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.45) 0%, rgba(59, 130, 246, 0.4) 40%, rgba(236, 72, 153, 0.3) 70%, transparent 100%)',
              filter: 'blur(55px)',
            }}
          />
          
          <motion.div
            animate={{ 
              opacity: [0.45, 0.65, 0.45],
              scale: [1, 1.18, 1],
              rotate: [0, -15, 0],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
            className="absolute bottom-1/4 right-0 w-[700px] h-[700px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.5) 0%, rgba(168, 85, 247, 0.4) 45%, rgba(236, 72, 153, 0.3) 75%, transparent 100%)',
              filter: 'blur(62px)',
            }}
          />

          <motion.div
            animate={{ 
              opacity: [0.4, 0.6, 0.4],
              scale: [1.08, 1.22, 1.08],
              rotate: [0, 10, 0],
              x: [0, 40, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute top-1/2 right-1/3 w-[550px] h-[550px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.45) 0%, rgba(147, 51, 234, 0.35) 50%, rgba(59, 130, 246, 0.25) 80%, transparent 100%)',
              filter: 'blur(70px)',
            }}
          />
        </div>

        {/* Dark Mode Waves */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
          <motion.div
            animate={{ 
              opacity: [0.6, 0.8, 0.6],
              scale: [1.05, 1.2, 1.05],
              rotate: [0, 20, 0],
              x: [0, 70, 0],
              y: [0, -60, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-0 w-[700px] h-[700px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.65) 0%, rgba(96, 165, 250, 0.55) 35%, rgba(219, 39, 119, 0.45) 65%, transparent 100%)',
              filter: 'blur(72px)',
              mixBlendMode: 'screen',
            }}
          />
          
          <motion.div
            animate={{ 
              opacity: [0.55, 0.75, 0.55],
              scale: [1, 1.18, 1],
              rotate: [0, -15, 0],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
            className="absolute bottom-1/4 right-0 w-[750px] h-[750px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.7) 0%, rgba(147, 51, 234, 0.6) 40%, rgba(236, 72, 153, 0.5) 70%, transparent 100%)',
              filter: 'blur(78px)',
              mixBlendMode: 'screen',
            }}
          />

          <motion.div
            animate={{ 
              opacity: [0.5, 0.7, 0.5],
              scale: [1.08, 1.22, 1.08],
              rotate: [0, 10, 0],
              x: [0, 40, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute top-1/2 right-1/3 w-[600px] h-[600px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.65) 0%, rgba(168, 85, 247, 0.55) 45%, rgba(59, 130, 246, 0.4) 75%, transparent 100%)',
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
          <h2 className="text-center text-gray-900 dark:text-white mb-4 text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12">
            A selection of projects demonstrating end-to-end data solutions, from ML models to production systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 hover:bg-white/60 dark:hover:bg-gray-900/60 transition-all duration-300 group border border-gray-200/30 dark:border-gray-800/30 hover:border-blue-300/50 dark:hover:border-blue-700/50 hover:shadow-lg"
              >
                <h3 className="text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 font-bold text-xl">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}