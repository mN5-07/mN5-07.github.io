import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.h2
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
          className="space-y-6 text-lg text-black/70 dark:text-white/70 leading-relaxed"
        >
          <p>
            Computer Science graduate student at University of Illinois Urbana-Champaign with a strong foundation in data analytics, visualization, and database management.
          </p>
          <p>
            Experienced in building end-to-end data solutions using Python, SQL, and modern BI tools. Skilled in transforming complex datasets into actionable insights through interactive dashboards, statistical analysis, and automated data pipelines.
          </p>
          <p>
            Passionate about leveraging data to solve real-world problems and drive strategic decision-making across business functions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}