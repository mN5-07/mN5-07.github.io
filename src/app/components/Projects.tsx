import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'S&P 500 Stock Performance Analysis',
      description: 'Automated daily equity data pipeline with interactive Power BI dashboard for financial analysis and market insights.',
      problem: 'Need for centralized, real-time stock market analysis with historical trend tracking',
      approach: 'Built automated data ingestion pipeline using Python (yfinance, pandas, SQLAlchemy) and PostgreSQL database with optimized analytical queries',
      tools: ['Python', 'PostgreSQL', 'Power BI', 'DAX', 'pandas', 'yfinance', 'SQLAlchemy'],
      outcome: 'Created interactive dashboard with dynamic filtering and sector-level comparison, enabling non-technical stakeholders to interpret market behavior through color-coded KPIs and performance metrics',
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'HR Employee Attrition & Performance Analytics',
      description: 'Comprehensive workforce analytics solution for identifying attrition patterns and quantifying training ROI.',
      problem: 'HR teams lacked visibility into attrition drivers and training effectiveness across departments',
      approach: 'Integrated HR data sources using Excel Power Query and pandas, performed statistical analysis (correlation matrices, percentile calculations, cohort analysis)',
      tools: ['Excel', 'Power Query', 'pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
      outcome: 'Delivered refreshable Excel workbook with dynamic pivot tables and actionable data visualizations, supporting strategic workforce planning initiatives and high-risk employee identification',
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'NYPL Menus Data Profiling and Cleaning',
      description: 'Historical dataset standardization project processing 500K+ records for dining trend analysis.',
      problem: 'Large historical dataset contained inconsistencies and quality issues preventing reliable analysis',
      approach: 'Cleaned and organized dataset using Python and OpenRefine, standardizing data to resolve nulls, whitespace, and case errors',
      tools: ['Python', 'OpenRefine', 'Data Quality Analysis'],
      outcome: 'Produced data-quality improvement reports and visual workflows adopted by curation team to streamline future data-cleaning workflows',
      demoLink: '#',
      repoLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-widest text-black/40 dark:text-white/40 mb-12"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 border border-black/5 dark:border-white/5 rounded-2xl hover:border-black/10 dark:hover:border-white/10 transition-colors"
            >
              <h3 className="text-lg mb-3 text-black dark:text-white">{project.title}</h3>
              <p className="text-sm text-black/50 dark:text-white/50 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-black/40 dark:text-white/40">Problem</span>
                  <p className="text-sm text-black/60 dark:text-white/60 mt-1">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-black/40 dark:text-white/40">Approach</span>
                  <p className="text-sm text-black/60 dark:text-white/60 mt-1">{project.approach}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-black/40 dark:text-white/40">Outcome</span>
                  <p className="text-sm text-black/60 dark:text-white/60 mt-1">{project.outcome}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50 rounded-full text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.demoLink}
                  className="inline-flex items-center gap-1.5 text-xs text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Demo</span>
                </a>
                <a
                  href={project.repoLink}
                  className="inline-flex items-center gap-1.5 text-xs text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}