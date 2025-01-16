import React from 'react';
import { Bot, LinkedinIcon, UserCircle2, Briefcase, FolderGit2, MessageSquareMore, Terminal, BinaryIcon, Hash } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-lg hover:bg-[#1d2d50] transition-colors relative group"
        >
          <Bot className="w-8 h-8 text-[#00ff9d]" />
          <span className="absolute -top-1 -right-1 text-[10px] text-[#00ff9d] opacity-60 font-mono">
            ./home
          </span>
        </motion.button>
        
        <div className="flex items-center space-x-4 md:space-x-6">
          <motion.a 
            href="#about" 
            className="nav-item hidden md:flex items-center space-x-2 hover:text-[#00ff9d] transition-colors group"
            whileHover={{ scale: 1.05 }}
          >
            <UserCircle2 className="w-4 h-4" />
            <span>About</span>
            <span className="text-[10px] text-[#00ff9d] opacity-60 font-mono group-hover:opacity-100">
              ~$
            </span>
          </motion.a>
          
          <motion.a 
            href="#experience" 
            className="nav-item hidden md:flex items-center space-x-2 hover:text-[#00ff9d] transition-colors group"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="w-4 h-4" />
            <span>Experience</span>
            <span className="text-[10px] text-[#00ff9d] opacity-60 font-mono group-hover:opacity-100">
              &gt;_
            </span>
          </motion.a>
          
          <motion.a 
            href="#projects" 
            className="nav-item hidden md:flex items-center space-x-2 hover:text-[#00ff9d] transition-colors group"
            whileHover={{ scale: 1.05 }}
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Projects</span>
            <span className="text-[10px] text-[#00ff9d] opacity-60 font-mono group-hover:opacity-100">
              $_
            </span>
          </motion.a>
          
          <motion.a 
            href="#contact" 
            className="nav-item hidden md:flex items-center space-x-2 hover:text-[#00ff9d] transition-colors group"
            whileHover={{ scale: 1.05 }}
          >
            <MessageSquareMore className="w-4 h-4" />
            <span>Contact</span>
            <span className="text-[10px] text-[#00ff9d] opacity-60 font-mono group-hover:opacity-100">
              &lt;/&gt;
            </span>
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/deepspace-inc/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#00ff9d] text-[#00ff9d] p-2 rounded-lg hover:bg-[#00ff9d]/10 transition-colors relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedinIcon className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 text-[10px] opacity-60 font-mono">
              @_
            </span>
          </motion.a>
        </div>
      </div>
      
      {/* Terminal decorative elements */}
      <div className="fixed bottom-4 left-4 text-[#00ff9d] opacity-20 hidden md:block">
        <Terminal className="w-4 h-4" />
      </div>
      <div className="fixed top-4 right-4 text-[#00ff9d] opacity-20 hidden md:block">
        <BinaryIcon className="w-4 h-4" />
      </div>
      <div className="fixed bottom-4 right-4 text-[#00ff9d] opacity-20 hidden md:block">
        <Hash className="w-4 h-4" />
      </div>
    </nav>
  );
};

export default Navbar;