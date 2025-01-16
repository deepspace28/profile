import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: "Solar System Design", level: 90 },
  { name: "Artificial Neural Networks", level: 85 },
  { name: "Artificial Intelligence", level: 88 },
  { name: "Python", level: 92 },
  { name: "Programming Languages", level: 85 },
  { name: "Propulsion Systems", level: 80 }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-12">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-[#64ffda]">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="h-2 bg-[#233554] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#64ffda]"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;