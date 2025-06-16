
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "TypeScript", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "Next.js", level: 85, color: "from-gray-400 to-gray-600" },
        { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-teal-500" },
        { name: "Framer Motion", level: 80, color: "from-purple-400 to-pink-500" },
      ]
    },
    {
      title: "3D & Animation",
      skills: [
        { name: "Three.js", level: 75, color: "from-green-400 to-emerald-500" },
        { name: "GSAP", level: 70, color: "from-yellow-400 to-orange-500" },
        { name: "CSS Animations", level: 90, color: "from-pink-400 to-rose-500" },
        { name: "WebGL", level: 60, color: "from-red-400 to-red-600" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90, color: "from-orange-400 to-red-500" },
        { name: "Figma", level: 85, color: "from-purple-400 to-purple-600" },
        { name: "Node.js", level: 75, color: "from-green-500 to-green-700" },
        { name: "MongoDB", level: 70, color: "from-green-600 to-teal-600" },
      ]
    }
  ];

  const techIcons = [
    { name: "React", icon: "⚛️", delay: 0 },
    { name: "TypeScript", icon: "📘", delay: 0.1 },
    { name: "Next.js", icon: "▲", delay: 0.2 },
    { name: "Tailwind", icon: "🎨", delay: 0.3 },
    { name: "Three.js", icon: "🎯", delay: 0.4 },
    { name: "Node.js", icon: "🟢", delay: 0.5 },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm proficient in a wide range of modern technologies and tools that help me create 
            amazing web experiences.
          </p>
        </motion.div>

        {/* Floating tech icons */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {techIcons.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: tech.delay }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                }}
                className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <span className="text-sm text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill bars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
