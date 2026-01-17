import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      title: 'Administrative Assistant',
      company: 'EDU Healthcare',
      location: 'Cornelius, NC',
      date: 'Summer 2022',
      achievements: [
        'Processed resumes and applications for open healthcare positions, organizing and tracking candidate data using efficient data entry tools to support hiring teams',
        'Maintained accurate records and minimized document errors through detailed data verification, improving overall hiring efficiency',
        'Coordinated with the business development team to align candidate profiles with client needs, strengthening client satisfaction and reducing placement turnaround time',
      ],
    },
    {
      title: 'Data Entry Clerk',
      company: 'EDU Healthcare',
      location: 'Huntersville, NC',
      date: 'Summer 2021',
      achievements: [
        'Entered and maintained candidate and client information across multiple databases, enhancing data consistency and accessibility',
        'Conducted online research and professional networking to generate potential healthcare job leads, supporting business development initiatives',
        'Ensured data integrity and streamlined record management processes, contributing to improved team efficiency and faster candidate matching',
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 sm:px-8 lg:px-12" aria-labelledby="experience-heading">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          id="experience-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-widest text-black/40 dark:text-white/40 mb-12"
        >
          Experience
        </motion.h2>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="group transition-all duration-200 p-8 rounded-2xl backdrop-blur-sm bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 hover:border-purple-500/30 dark:hover:border-blue-500/30"
              style={{
                boxShadow: '0 4px 24px 0 rgba(168, 85, 247, 0.05)',
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div>
                  <h3 className="text-xl text-black dark:text-white mb-1 transition-colors duration-300 group-hover:text-black/80 dark:group-hover:text-white/80">{exp.title}</h3>
                  <p className="text-sm text-black/50 dark:text-white/50">
                    {exp.company} <span aria-hidden="true">·</span> {exp.location}
                  </p>
                </div>
                <span className="text-sm text-black/40 dark:text-white/40 mt-2 sm:mt-0">
                  {exp.date}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                    className="text-sm text-black/60 dark:text-white/60 leading-relaxed"
                  >
                    • {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}