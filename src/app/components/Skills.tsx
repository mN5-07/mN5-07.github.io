import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Programming & Languages',
      skills: ['Python', 'C++', 'SQL'],
    },
    {
      category: 'Data Analytics & Visualization',
      skills: ['Power BI', 'Tableau', 'Excel', 'Jupyter', 'Seaborn', 'Matplotlib'],
    },
    {
      category: 'Databases & Cloud',
      skills: ['PostgreSQL', 'MySQL'],
    },
    {
      category: 'Libraries & Frameworks',
      skills: ['pandas', 'NumPy', 'yfinance', 'SQLAlchemy', 'OpenRefine'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'DAX', 'Power Query', 'Excel Power Query'],
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 sm:px-8 lg:px-12 bg-black/[0.02] dark:bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-widest text-black/40 dark:text-white/40 mb-12"
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <h3 className="text-sm text-black dark:text-white mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-sm text-black/50 dark:text-white/50">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}