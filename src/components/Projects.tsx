import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Network } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Medical Diagnosis",
    description: "Developed a deep learning model achieving 95% accuracy in early disease detection using medical imaging data",
    icon: <Brain className="w-12 h-12 text-[#00ff9d]" />,
    tech: ["Python", "TensorFlow", "OpenCV", "Docker"]
  },
  {
    title: "Neural Network Research Platform",
    description: "Created a comprehensive platform for testing and analyzing various neural network architectures",
    icon: <Network className="w-12 h-12 text-[#00ff9d]" />,
    tech: ["PyTorch", "React", "TypeScript", "AWS"]
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-12 text-[#00ff9d]">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#112240] p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-6">{project.icon}</div>
            <h3 className="text-xl font-semibold text-[#00ff9d] mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm px-3 py-1 bg-[#1d2d50] rounded-full text-[#00ff9d]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;