import { motion } from 'motion/react';

export function Education() {
  const education = [
    {
      degree: "Master's in Computer Science",
      institution: 'University of Illinois Urbana-Champaign',
      date: 'Jan. 2025 - Current',
      details: [],
    },
    {
      degree: 'B.S. in Computer Science',
      institution: 'High Point University',
      date: 'Aug. 2020 - May 2024',
      details: [],
    },
  ];

  return (
    <section id="education" className="py-32 px-6 sm:px-8 lg:px-12 bg-black/[0.02] dark:bg-white/[0.02]" aria-labelledby="education-heading">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          id="education-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-widest text-black/40 dark:text-white/40 mb-12"
        >
          Education
        </motion.h2>
        
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className="space-y-3 group transition-all duration-300 p-6 rounded-2xl backdrop-blur-sm bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 hover:border-purple-500/30 dark:hover:border-blue-500/30"
              style={{
                boxShadow: '0 4px 24px 0 rgba(168, 85, 247, 0.05)',
              }}
            >
              <h3 className="text-xl text-black dark:text-white transition-colors duration-300 group-hover:text-black/80 dark:group-hover:text-white/80">{edu.degree}</h3>
              <div className="text-sm text-black/50 dark:text-white/50">
                <span>{edu.institution}</span>
                <span className="mx-3" aria-hidden="true">·</span>
                <span>{edu.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}