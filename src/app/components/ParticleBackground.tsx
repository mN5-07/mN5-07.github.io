import { motion } from 'motion/react';

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated purple blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 100%)',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: '10%', left: '10%' }}
      />

      {/* Animated blue blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.2) 50%, transparent 100%)',
        }}
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 100, -80, 0],
          scale: [1, 0.9, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: '50%', right: '10%' }}
      />

      {/* Animated purple-blue gradient blob */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)',
        }}
        animate={{
          x: [0, 80, -120, 0],
          y: [0, -80, 100, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ bottom: '20%', left: '30%' }}
      />

      {/* Small accent blob */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.5) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
        }}
        animate={{
          x: [0, -60, 80, 0],
          y: [0, 120, -60, 0],
          scale: [1, 1.3, 0.85, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: '60%', right: '40%' }}
      />

      {/* Additional purple accent */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.4) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 100%)',
        }}
        animate={{
          x: [0, 100, -80, 0],
          y: [0, -60, 90, 0],
          scale: [1, 0.85, 1.2, 1],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ bottom: '10%', right: '20%' }}
      />
    </div>
  );
}