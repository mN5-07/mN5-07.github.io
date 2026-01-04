import { motion } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 sm:px-8 lg:px-12 bg-black/[0.02] dark:bg-white/[0.02]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-widest text-black/40 dark:text-white/40 mb-12"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-black/60 dark:text-white/60 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Interested in discussing data opportunities, collaborations, or just want to connect? 
          I'd love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <a
            href="mailto:mrnicol2@illinois.edu"
            className="inline-flex items-center gap-3 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:opacity-80 transition-opacity text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>mrnicol2@illinois.edu</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="https://linkedin.com/in/matthew-nicol"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-black/10 dark:border-white/10 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/matthew-nicol"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-black/10 dark:border-white/10 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}