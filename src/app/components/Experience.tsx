import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      type: 'work',
      title: 'Administrative Assistant',
      organization: 'EDU Healthcare, Cornelius, NC',
      period: 'Summer 2022',
      description: [
        'Processed resumes and applications for open healthcare positions, organizing and tracking candidate data using efficient data entry tools to support hiring teams',
        'Maintained accurate records and minimized document errors through detailed data verification, improving overall hiring efficiency',
        'Coordinated with the business development team to align candidate profiles with client needs, strengthening client satisfaction and reducing placement turnaround time',
      ],
    },
    {
      type: 'work',
      title: 'Data Entry Clerk',
      organization: 'EDU Healthcare, Huntersville, NC',
      period: 'Summer 2021',
      description: [
        'Entered and maintained candidate and client information across multiple databases, enhancing data consistency and accessibility',
        'Conducted online research and professional networking to generate potential healthcare job leads, supporting business development initiatives',
        'Ensured data integrity and streamlined record management processes, contributing to improved team efficiency and faster candidate matching',
      ],
    },
  ];

  const education = [
    {
      degree: 'Master\'s in Computer Science',
      institution: 'University of Illinois Urbana-Champaign',
      period: 'Jan. 2025 – Current',
      details: 'Advanced coursework in algorithms, data structures, and software engineering',
    },
    {
      degree: 'B.S. in Computer Science',
      institution: 'High Point University',
      period: 'Aug. 2020 – May 2024',
      details: 'Focus on data analytics, programming, and database systems',
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-white dark:bg-gray-950 px-6 relative overflow-hidden">
      {/* Flowing Wave Gradient Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Light Mode Waves */}
        <div className="absolute inset-0 dark:opacity-0 transition-opacity duration-500">
          <motion.div
            animate={{ 
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.2, 1],
              rotate: [0, 16, 0],
              x: [0, 80, 0],
              y: [0, -70, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 right-1/4 w-[700px] h-[700px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.5) 0%, rgba(59, 130, 246, 0.4) 45%, rgba(147, 51, 234, 0.3) 75%, transparent 100%)',
              filter: 'blur(60px)',
            }}
          />
          
          <motion.div
            animate={{ 
              opacity: [0.45, 0.65, 0.45],
              scale: [1.05, 1.25, 1.05],
              rotate: [0, -20, 0],
              x: [0, -75, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/3 left-0 w-[750px] h-[750px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.5) 0%, rgba(168, 85, 247, 0.4) 40%, rgba(236, 72, 153, 0.3) 70%, transparent 100%)',
              filter: 'blur(65px)',
            }}
          />
        </div>

        {/* Dark Mode Waves */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
          <motion.div
            animate={{ 
              opacity: [0.6, 0.8, 0.6],
              scale: [1, 1.2, 1],
              rotate: [0, 16, 0],
              x: [0, 80, 0],
              y: [0, -70, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 right-1/4 w-[750px] h-[750px]"
            style={{
              background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.7) 0%, rgba(96, 165, 250, 0.6) 40%, rgba(147, 51, 234, 0.5) 70%, transparent 100%)',
              filter: 'blur(78px)',
              mixBlendMode: 'screen',
            }}
          />
          
          <motion.div
            animate={{ 
              opacity: [0.55, 0.75, 0.55],
              scale: [1.05, 1.25, 1.05],
              rotate: [0, -20, 0],
              x: [0, -75, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/3 left-0 w-[800px] h-[800px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.7) 0%, rgba(168, 85, 247, 0.6) 35%, rgba(219, 39, 119, 0.5) 65%, transparent 100%)',
              filter: 'blur(82px)',
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
          <h2 className="text-center text-gray-900 dark:text-white mb-4 text-4xl md:text-5xl font-bold">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12">
            Professional experience in healthcare administration and academic background in computer science.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg">
                  <Briefcase size={28} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="text-gray-900 dark:text-white font-bold text-2xl">Work Experience</h3>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={`${exp.organization}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full transform -translate-x-[9px] shadow-sm" />
                    
                    <h4 className="text-gray-900 dark:text-white mb-1 font-bold text-lg">{exp.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-1 font-semibold">{exp.organization}</p>
                    <p className="text-gray-500 dark:text-gray-400 mb-4 font-medium text-sm">{exp.period}</p>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400 flex leading-relaxed">
                          <span className="mr-2 text-blue-600 dark:text-blue-400 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-lg">
                  <GraduationCap size={28} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="text-gray-900 dark:text-white font-bold text-2xl">Education</h3>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={`${edu.institution}-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full transform -translate-x-[9px] shadow-sm" />
                    
                    <h4 className="text-gray-900 dark:text-white mb-1 font-bold text-lg">{edu.degree}</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-1 font-semibold">{edu.institution}</p>
                    <p className="text-gray-500 dark:text-gray-400 mb-3 font-medium text-sm">{edu.period}</p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}