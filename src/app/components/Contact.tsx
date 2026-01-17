import { motion } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 sm:px-8 lg:px-12 bg-black/[0.02] dark:bg-white/[0.02]" aria-labelledby="contact-heading">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-widest text-black/40 dark:text-white/40 mb-12"
        >
          Get in Touch
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="p-12 rounded-3xl backdrop-blur-md bg-white/40 dark:bg-black/40 border border-white/30 dark:border-white/20 mb-8"
          style={{
            boxShadow: '0 8px 32px 0 rgba(168, 85, 247, 0.1), 0 0 0 1px rgba(168, 85, 247, 0.05)',
          }}
        >
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
            <motion.a
              href="mailto:mrnicol2@illinois.edu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full transition-all duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-500 focus:ring-offset-2 hover:shadow-xl hover:shadow-purple-500/30 dark:hover:shadow-blue-500/30"
              aria-label="Send email to mrnicol2@illinois.edu"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>mrnicol2@illinois.edu</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4 justify-center"
            role="list"
            aria-label="Social media links"
          >
            <motion.a
              href="https://www.linkedin.com/in/mnicol07/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center w-11 h-11 rounded-full backdrop-blur-sm bg-white/50 dark:bg-black/50 border border-white/30 dark:border-white/20 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-purple-500/50 dark:hover:border-blue-500/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-blue-500/20"
              aria-label="Visit Matthew Nicol's LinkedIn profile"
              role="listitem"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="https://github.com/mN5-07/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center w-11 h-11 rounded-full backdrop-blur-sm bg-white/50 dark:bg-black/50 border border-white/30 dark:border-white/20 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-purple-500/50 dark:hover:border-blue-500/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-blue-500/20"
              aria-label="Visit Matthew Nicol's GitHub profile"
              role="listitem"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}