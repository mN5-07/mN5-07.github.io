import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type ProjectCategory =
  | 'All'
  | 'ML'
  | 'Data'
  | 'Visualization'
  | 'Dashboards'
  | 'XR'
  | 'Web';

interface Project {
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  description: string;
  tools: string[];
  image: string;
  imageAlt: string;
  demoLink: string;
  repoLink: string;
}

export function Projects() {
  const INITIAL_VISIBLE = 4;
  const LOAD_MORE = 4;

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>('All');

  const projects: Project[] = [
    {
      title: 'AI & Semiconductor Stock Dashboard',
      category: 'Dashboards',
      description:
        'Interactive Streamlit dashboard analyzing AI & semiconductor stocks versus the S&P 500.',
      tools: ['Streamlit', 'yfinance', 'pandas', 'numpy', 'Plotly'],
      image:
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1080&q=80',
      imageAlt: 'Stock market dashboard',
      demoLink: 'https://ai-market-concentration-dashboard.streamlit.app/',
      repoLink: 'https://github.com/mN5-07/ai-market-concentration-dashboard',
    },
    {
      title: 'S&P 500 Stock Performance Analysis',
      category: 'Dashboards',
      description:
        'Automated daily equity pipeline with interactive Power BI dashboard.',
      tools: [
        'Python',
        'PostgreSQL',
        'Power BI',
        'DAX',
        'pandas',
        'yfinance',
      ],
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1080&q=80',
      imageAlt: 'Power BI dashboard',
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'HR Employee Attrition & Performance Analytics',
      category: 'Data',
      description:
        'Workforce analytics identifying attrition drivers and training ROI.',
      tools: [
        'Excel',
        'Power Query',
        'pandas',
        'NumPy',
        'Seaborn',
        'Matplotlib',
      ],
      image:
        'https://images.unsplash.com/photo-1730382624709-81e52dd294d4?auto=format&fit=crop&w=1080&q=80',
      imageAlt: 'HR analytics charts',
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'NYPL Menus Data Profiling & Cleaning',
      category: 'Data',
      description:
        'Standardized 500K+ historical menu records for reliable analysis.',
      tools: ['Python', 'OpenRefine', 'Data Quality Analysis'],
      image:
        'https://images.unsplash.com/photo-1584291527935-456e8e2dd734?auto=format&fit=crop&w=1080&q=80',
      imageAlt: 'Data cleaning workflow',
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'Portfolio Website',
      category: 'Web',
      description:
        'Personal portfolio showcasing projects with motion-driven UI.',
      tools: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1080&q=80',
      imageAlt: 'Portfolio website on laptop',
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'Streaming Trends Narrative',
      category: 'Visualization',
      description:
        'Narrative D3.js visualization of Spotify’s most-streamed songs of 2024.',
      tools: ['D3.js', 'JavaScript', 'HTML/CSS', 'Kaggle Dataset'],
      image:
        'https://blog.tomsawyer.com/hubfs/2023.05.05.0.MicrowaveNetwork.Dashboard_optimized_100.png',
      imageAlt: 'D3 narrative visualization',
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'Arachnophobia VR Therapy Simulation',
      category: 'XR',
      description:
        'Unreal Engine VR therapy experience presented to Steve Wozniak.',
      tools: ['Unreal Engine', 'VR', '3D Modeling', 'Blueprints/C++'],
      image:
        'https://static.tildacdn.net/tild3665-3562-4461-a431-353531363134/psytechvr-arachnopho.jpg',
      imageAlt: 'VR spider exposure therapy',
      demoLink: '#',
      repoLink: '#',
    },
    {
      title: 'Breast Cancer Diagnosis Prediction',
      category: 'ML',
      description:
        'Interpretable ML pipeline achieving 96–98% accuracy with ROC-AUC ≈ 0.99.',
      tools: [
        'Python',
        'scikit-learn',
        'pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn',
        'Streamlit',
      ],
      image:
        'https://scikit-learn.org/stable/_images/sphx_glr_plot_permutation_importance_multicollinear_001.png',
      imageAlt: 'Permutation importance bar chart',
      demoLink: 'https://huggingface.co/spaces/mN507/breast-cancer-predictor',
      repoLink: 'https://github.com/mN5-07/breast-cancer-diagnostic-classifier',
    },
  ];

  const categories: ProjectCategory[] = [
    'All',
    'ML',
    'Data',
    'Visualization',
    'Dashboards',
    'XR',
    'Web',
  ];

  const filteredProjects = useMemo(() => {
    return activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest mb-8 text-black/40 dark:text-white/40"
        >
          Featured Projects
        </motion.h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(INITIAL_VISIBLE);
              }}
              className={`px-4 py-1.5 rounded-full text-xs transition ${
                activeCategory === category
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-sm"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-black/60 dark:text-white/60 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full text-xs bg-black/5 dark:bg-white/5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.demoLink !== '#' && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </a>
                  )}
                  {project.repoLink !== '#' && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {visibleCount < filteredProjects.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((v) => v + LOAD_MORE)}
              className="px-6 py-2 text-sm rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
            >
              Show more projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
