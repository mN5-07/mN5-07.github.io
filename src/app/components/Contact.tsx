import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Twitter, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      handle: 'LinkedIn',
      color: 'hover:text-blue-700',
      bgColor: 'bg-blue-600',
      hoverBg: 'hover:bg-blue-700',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com',
      handle: '@matthewnicol',
      color: 'hover:text-gray-900',
      bgColor: 'bg-gray-900',
      hoverBg: 'hover:bg-black',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mrnicol2@illinois.edu',
      href: 'mailto:mrnicol2@illinois.edu',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(980) 505-5404',
      href: 'tel:+19805055404',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Huntersville, NC',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-gray-950 px-6 relative overflow-hidden">
      {/* Flowing Wave Gradient Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Light Mode Waves */}
        <div className="absolute inset-0 dark:opacity-0 transition-opacity duration-500">
          <motion.div
            animate={{ 
              opacity: [0.55, 0.75, 0.55],
              scale: [1, 1.25, 1],
              rotate: [0, -22, 0],
              x: [0, -85, 0],
              y: [0, 70, 0],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-0 w-[700px] h-[700px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.5) 0%, rgba(236, 72, 153, 0.45) 40%, rgba(147, 51, 234, 0.35) 75%, transparent 100%)',
              filter: 'blur(56px)',
            }}
          />
          
          <motion.div
            animate={{ 
              opacity: [0.5, 0.7, 0.5],
              scale: [1.1, 1.3, 1.1],
              rotate: [0, 25, 0],
              x: [0, 90, 0],
              y: [0, -75, 0],
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7
            }}
            className="absolute bottom-1/4 left-0 w-[750px] h-[750px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.5) 0%, rgba(59, 130, 246, 0.4) 45%, rgba(236, 72, 153, 0.3) 80%, transparent 100%)',
              filter: 'blur(64px)',
            }}
          />
          
          <motion.div
            animate={{ 
              opacity: [0.4, 0.6, 0.4],
              scale: [1.05, 1.2, 1.05],
              rotate: [0, -15, 0],
              x: [0, 45, 0],
              y: [0, 45, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.4
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.45) 0%, rgba(124, 58, 237, 0.35) 50%, rgba(59, 130, 246, 0.25) 85%, transparent 100%)',
              filter: 'blur(72px)',
            }}
          />
        </div>

        {/* Dark Mode Waves */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
          <motion.div
            animate={{ 
              opacity: [0.65, 0.85, 0.65],
              scale: [1, 1.25, 1],
              rotate: [0, -22, 0],
              x: [0, -85, 0],
              y: [0, 70, 0],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-0 w-[750px] h-[750px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(96, 165, 250, 0.7) 0%, rgba(219, 39, 119, 0.6) 35%, rgba(168, 85, 247, 0.5) 70%, transparent 100%)',
              filter: 'blur(74px)',
              mixBlendMode: 'screen',
            }}
          />
          
          <motion.div
            animate={{ 
              opacity: [0.6, 0.8, 0.6],
              scale: [1.1, 1.3, 1.1],
              rotate: [0, 25, 0],
              x: [0, 90, 0],
              y: [0, -75, 0],
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7
            }}
            className="absolute bottom-1/4 left-0 w-[800px] h-[800px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.7) 0%, rgba(59, 130, 246, 0.6) 40%, rgba(236, 72, 153, 0.5) 75%, transparent 100%)',
              filter: 'blur(80px)',
              mixBlendMode: 'screen',
            }}
          />
          
          <motion.div
            animate={{ 
              opacity: [0.5, 0.7, 0.5],
              scale: [1.05, 1.2, 1.05],
              rotate: [0, -15, 0],
              x: [0, 45, 0],
              y: [0, 45, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.4
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.65) 0%, rgba(147, 51, 234, 0.55) 45%, rgba(59, 130, 246, 0.4) 80%, transparent 100%)',
              filter: 'blur(85px)',
              mixBlendMode: 'screen',
            }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-gray-900 dark:text-white mb-4 text-4xl md:text-5xl font-bold">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-16">
            I'm always interested in new opportunities, collaborations, or just talking about data. 
            Feel free to reach out through any of the channels below.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-gray-900 dark:text-white font-bold text-2xl mb-6">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
                      >
                        <div className="p-3 bg-white dark:bg-gray-950 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-200">
                          <info.icon size={24} className="text-blue-600 dark:text-blue-400" strokeWidth={2} />
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{info.label}</p>
                          <p className="text-gray-900 dark:text-white font-semibold">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                        <div className="p-3 bg-white dark:bg-gray-950 rounded-lg shadow-sm">
                          <info.icon size={24} className="text-blue-600 dark:text-blue-400" strokeWidth={2} />
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{info.label}</p>
                          <p className="text-gray-900 dark:text-white font-semibold">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800"
              >
                <h4 className="text-gray-900 dark:text-white font-bold mb-3">Availability</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  Open to internships, full-time opportunities, and data projects
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Currently pursuing Master's at UIUC • Open to remote work
                </p>
              </motion.div>
            </motion.div>

            {/* Social Links & Quick Message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-gray-900 dark:text-white font-bold text-2xl mb-6">Social Platforms</h3>
              <div className="space-y-4 mb-8">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 ${link.bgColor} ${link.hoverBg} rounded-lg shadow-sm transition-colors duration-200`}>
                        <link.icon size={24} className="text-white" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-gray-900 dark:text-white font-semibold">{link.name}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{link.handle}</p>
                      </div>
                    </div>
                    <Send size={20} className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 text-white border border-gray-700 dark:border-gray-600"
              >
                <h4 className="font-bold text-xl mb-3">Quick Response</h4>
                <p className="text-gray-300 dark:text-gray-400 mb-4">
                  I typically respond to messages within 24-48 hours. For urgent inquiries, please email directly.
                </p>
                <a
                  href="mailto:mrnicol2@illinois.edu"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-950 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200"
                >
                  <Mail size={20} />
                  <span>Send Email</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}