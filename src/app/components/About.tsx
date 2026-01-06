import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-32 px-6 sm:px-8 lg:px-12" aria-labelledby="about-heading">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          id="about-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-widest text-black/40 dark:text-white/40 mb-12"
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-10 rounded-3xl backdrop-blur-md bg-white/40 dark:bg-black/40 border border-white/30 dark:border-white/20 space-y-6 text-lg text-black/70 dark:text-white/70 leading-relaxed"
          style={{
            boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.05)',
          }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Computer Science graduate student at University of Illinois Urbana-Champaign with a strong foundation in data analytics, visualization, and database management.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Experienced in building end-to-end data solutions using Python, SQL, and modern BI tools. Skilled in transforming complex datasets into actionable insights through interactive dashboards, statistical analysis, and automated data pipelines.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Passionate about leveraging data to solve real-world problems and drive strategic decision-making across business functions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}