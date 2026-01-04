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
    <section id="experience" className="py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.h2
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div>
                  <h3 className="text-xl text-black dark:text-white mb-1">{exp.title}</h3>
                  <p className="text-sm text-black/50 dark:text-white/50">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className="text-sm text-black/40 dark:text-white/40 mt-2 sm:mt-0">
                  {exp.date}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                    • {achievement}
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