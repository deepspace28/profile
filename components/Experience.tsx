import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, GraduationCap, Lightbulb, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: "Artificial Intelligence Engineer",
    company: "Harvard University",
    period: "Nov 2024 - Present",
    type: "Part-time",
    location: "Remote",
    icon: <GraduationCap className="w-8 h-8 text-[#00ffd5]" />,
    responsibilities: [
      "Developed cutting-edge algorithms to advance machine learning capabilities",
      "Collaborated with top minds in the field to shape the future of AI",
      "Contributed to innovations at Harvard in AI development",
      "Gained hands-on experience in AI development"
    ]
  },
  {
    title: "Solar Engineer",
    company: "MittGroup",
    period: "Oct 2023 - Mar 2024",
    type: "Part-time",
    location: "Remote",
    icon: <Lightbulb className="w-8 h-8 text-[#00ffd5]" />,
    responsibilities: [
      "Designed and implemented PV systems for residential and commercial projects",
      "Conducted site assessments and feasibility studies",
      "Collaborated with cross-functional teams for system installation"
    ]
  },
  {
    title: "Research Intern",
    company: "Carnegie Mellon University",
    period: "Jul 2023 - Mar 2024",
    type: "Part-time",
    location: "Remote",
    icon: <Building2 className="w-8 h-8 text-[#00ffd5]" />,
    responsibilities: [
      "Conducted data analysis and experimental design for AI projects",
      "Enhanced Python skills for data modeling and research automation",
      "Presented findings to senior researchers",
      "Contributed to academic publications"
    ]
  }
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [openFolder, setOpenFolder] = useState<number | null>(null);

  const toggleFolder = (index: number) => {
    setOpenFolder(openFolder === index ? null : index);
  };

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-12">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-[#112240] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex">
              <div
                className={`folder-header p-6 flex items-center justify-between cursor-pointer flex-shrink-0 ${
                  openFolder === index ? 'bg-[#1d2d50]' : ''
                }`}
                onClick={() => toggleFolder(index)}
                style={{ width: '300px' }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#1d2d50] p-4 rounded-lg">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-lg">{exp.company}</p>
                  </div>
                </div>
                <ChevronRight
                  className={`w-6 h-6 text-[#00ffd5] transform transition-transform ${
                    openFolder === index ? 'rotate-90' : ''
                  }`}
                />
              </div>
              <AnimatePresence>
                {openFolder === index && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '100%', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-[#1d2d50]"
                  >
                    <p className="text-gray-400 mb-4">{exp.period} · {exp.type} · {exp.location}</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;