import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-[#0a1930] flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <svg
          className="w-16 h-16 text-[#00ffd5]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v3m0 12v3M5.636 5.636l2.122 2.122m8.484 8.484l2.122 2.122M3 12h3m12 0h3M5.636 18.364l2.122-2.122m8.484-8.484l2.122-2.122" />
        </svg>
        <motion.div
          className="absolute inset-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg
            className="w-16 h-16 text-[#4d9fff] opacity-50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;