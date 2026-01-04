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
    <section id="education" className="py-32 px-6 sm:px-8 lg:px-12 bg-black/[0.02] dark:bg-white/[0.02]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
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
              className="space-y-3"
            >
              <h3 className="text-xl text-black dark:text-white">{edu.degree}</h3>
              <div className="text-sm text-black/50 dark:text-white/50">
                <span>{edu.institution}</span>
                <span className="mx-3">·</span>
                <span>{edu.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}