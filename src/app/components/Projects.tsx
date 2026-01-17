import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'AI & Semiconductor Stock Dashboard',
      description: 'Interactive Streamlit dashboard analyzing performance, market concentration, and risk of major AI-related and semiconductor stocks (2025–2026 focus), compared to the S&P 500.',
      problem: 'Lack of accessible, visual tools to understand how a handful of AI/tech stocks drive broader market performance and concentration risks.',
      approach: 'Built a modular Streamlit app using yfinance for real-time/historical data, pandas/numpy for calculations (compounded returns, volatility), and Plotly for interactive charts. Included clean dark theme, custom tickers, and clear explanations.',
      tools: ['Streamlit', 'yfinance', 'pandas', 'numpy', 'Plotly'],
      outcome: 'Created a clean, educational dashboard with cumulative returns, market cap concentration, contribution analysis, correlation, and basic risk metrics — fully reproducible and portfolio-ready.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Njc2NTg5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      imageAlt: 'Stock market dashboard showing charts and financial metrics',
      demoLink: 'https://ai-market-concentration-dashboard.streamlit.app/',
      repoLink: 'https://github.com/mN5-07/ai-market-concentration-dashboard',
    },
    {
      title: 'S&P 500 Stock Performance Analysis',
      description: 'Automated daily equity data pipeline with interactive Power BI dashboard for financial analysis and market insights.',
      problem: 'Need for centralized, real-time stock market analysis with historical trend tracking',
      approach: 'Built automated data ingestion pipeline using Python (yfinance, pandas, SQLAlchemy) and PostgreSQL database with optimized analytical queries',
      tools: ['Python', 'PostgreSQL', 'Power BI', 'DAX', 'pandas', 'yfinance', 'SQLAlchemy'],
      outcome: 'Created interactive dashboard with dynamic filtering and sector-level comparison, enabling non-technical stakeholders to interpret market behavior through color-coded KPIs and performance metrics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NzU0ODMyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      imageAlt: 'Data analytics dashboard showing various charts and metrics',
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
      image: 'https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNoYXJ0cyUyMGdyYXBoc3xlbnwxfHx8fDE3Njc2MDQ0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      imageAlt: 'Business charts and graphs displaying HR analytics data',
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
      image: 'https://images.unsplash.com/photo-1584291527935-456e8e2dd734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHNjcmVlbnxlbnwxfHx8fDE3Njc2MDU4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      imageAlt: 'Data visualization screen showing analysis results',
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'Advanced Analytics Platform',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      problem: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      approach: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      tools: ['Python', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
      outcome: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      image: 'https://images.unsplash.com/photo-1762279388957-c6ed514d3353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBkYXRhfGVufDF8fHx8MTc2NzY2NzEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      imageAlt: 'Abstract technology and data visualization',
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      problem: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      approach: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      tools: ['React', 'Tailwind CSS', 'Figma', 'TypeScript'],
      outcome: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV',
      imageAlt: 'Laptop displaying a personal portfolio website',
      demoLink: '#',
      repoLink: '#',
    },
    {
      "title": "Breast Cancer Diagnosis Prediction",
      "description": "A complete end-to-end machine learning project using the classic UCI Breast Cancer Wisconsin (Diagnostic) dataset to classify tumors as malignant or benign based on cell nuclei features extracted from fine needle aspirate images.",
      "problem": "Breast cancer diagnosis from fine needle aspiration (FNA) requires accurate, interpretable classification to support early detection and reduce unnecessary procedures. The challenge is to build reliable models from high-dimensional cellular features while understanding which characteristics most strongly indicate malignancy.",
      "approach": "Followed a full ML pipeline in Jupyter Notebooks: exploratory data analysis, preprocessing (scaling, encoding, train-test split), training and comparing multiple classifiers (Logistic Regression, Decision Tree, Random Forest, SVM), robust evaluation (accuracy, precision/recall/F1, ROC-AUC, cross-validation), and interpretability via permutation importance and built-in feature rankings to uncover key malignancy indicators.",
      "tools": ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      "outcome": "Achieved 96–98%+ test accuracy and near-perfect AUC with top models (SVM Linear & Random Forest). Key insight: extreme nuclear irregularities ('worst' features like concavity_worst, texture_worst, symmetry_worst) dominate predictions — aligning with medical knowledge of malignant cell morphology. Demonstrated strong model interpretability and reliability for a healthcare classification task.",
      "image": "https://miro.medium.com/v2/resize:fit:1400/1*slExkyoge8JUNOIyz-cj-w.png",
      "imageAlt": "Visualization of feature importance and model performance in breast cancer classification project",
      "demoLink": "#",  // Replace with GitHub Pages / Streamlit / Colab link if you deploy one
      "repoLink": "https://github.com/mN5-07/breast-cancer-diagnostic-classifier"   // Replace with your actual GitHub repo URL
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 sm:px-8 lg:px-12" aria-labelledby="projects-heading">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          id="projects-heading"
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
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group border border-white/20 dark:border-white/10 rounded-2xl hover:border-purple-500/30 dark:hover:border-blue-500/30 transition-all duration-300 overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-black/50"
              style={{
                boxShadow: '0 8px 32px 0 rgba(168, 85, 247, 0.1)',
              }}
            >
              {/* Project Image */}
              <div className="w-full h-48 overflow-hidden bg-black/5 dark:bg-white/5 relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-lg mb-3 text-black dark:text-white transition-colors duration-300 group-hover:text-black/80 dark:group-hover:text-white/80">{project.title}</h3>
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
                  <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                    {project.tools.map((tool, idx) => (
                      <motion.span
                        key={idx}
                        role="listitem"
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50 rounded-full text-xs hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200 cursor-default"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.demoLink}
                    className="inline-flex items-center gap-1.5 text-xs text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 rounded-sm relative group/link"
                    onClick={(e) => e.preventDefault()}
                    aria-label={`View demo of ${project.title}`}
                    whileHover={{ x: 3 }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    <span className="relative">
                      Demo
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-black dark:bg-white transition-all duration-300 group-hover/link:w-full" />
                    </span>
                  </motion.a>
                  <motion.a
                    href={project.repoLink}
                    className="inline-flex items-center gap-1.5 text-xs text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 rounded-sm relative group/link"
                    onClick={(e) => e.preventDefault()}
                    aria-label={`View source code of ${project.title}`}
                    whileHover={{ x: 3 }}
                  >
                    <Github className="w-3.5 h-3.5" aria-hidden="true" />
                    <span className="relative">
                      Code
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-black dark:bg-white transition-all duration-300 group-hover/link:w-full" />
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}