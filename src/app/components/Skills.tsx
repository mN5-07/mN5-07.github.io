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
    {
      category: 'Currently Learning',
      skills: ['AWS', 'scikit-learn', 'PyTorch', 'Tensorflow', 'Polars'],
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 sm:px-8 lg:px-12 bg-black/[0.02] dark:bg-white/[0.02]" aria-labelledby="skills-heading">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          id="skills-heading"
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
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="group p-6 rounded-2xl backdrop-blur-sm bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 hover:border-purple-500/30 dark:hover:border-blue-500/30 transition-all duration-200"
              style={{
                boxShadow: '0 4px 24px 0 rgba(59, 130, 246, 0.05)',
              }}
            >
              <h3 className="text-sm text-black dark:text-white mb-4 transition-colors duration-300 group-hover:text-black/70 dark:group-hover:text-white/70">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + idx * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="text-sm text-black/50 dark:text-white/50 transition-all duration-150 hover:text-black/70 dark:hover:text-white/70 cursor-default"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}