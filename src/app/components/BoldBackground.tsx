import { motion } from 'motion/react';

export function BoldBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-full blur-3xl opacity-40"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-gradient-to-br from-[#533483] via-[#2d1b4e] to-[#1a1a2e] rounded-full blur-3xl opacity-40"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 0],
          x: [0, 50, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-[#8b0000] via-[#4a0e0e] to-[#2d1b4e] rounded-full blur-3xl opacity-30"
      />

      {/* Geometric shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-1/4 w-32 h-32 border-4 border-[#e63946]/20 rounded-lg"
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 left-1/4 w-24 h-24 border-4 border-[#0f3460]/30 rotate-45"
      />
    </div>
  );
}