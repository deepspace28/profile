import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Jishnav'],
    loop: 1,
    delaySpeed: 2000,
  });

  return (
    <motion.section 
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-[#00ff9d]">I'm</span>
          <br />
          <span className="text-[#e6f1ff]">{text}</span>
          <Cursor cursorColor="#00ff9d" />
        </h1>
        <h2 className="text-2xl md:text-4xl text-gray-400 mb-6">I innovate with AI & Solar Technology</h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Pioneering the future through artificial intelligence and sustainable energy solutions. 
          Currently advancing cutting-edge AI research at Harvard University while developing 
          innovative solar technologies.
        </p>
        <motion.a 
          href="#contact"
          className="inline-block border-2 border-[#00ff9d] text-[#00ff9d] px-8 py-4 rounded-lg
                   hover:bg-[#00ff9d]/10 transition-colors text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in touch
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;