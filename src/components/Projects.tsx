
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ArrowUp } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

 const projects = [
  {
    id: 1,
    title: "Task Management App",
    description:
      "A task management app with basic features like adding, editing, and deleting tasks. Built with React as a learning project.",
    image: "/todo.jfif",
    tech: ["React", "CSS"],
    github: "https://github.com/Bavishya04/Task-Management.git",
    live: " https://bavishya04.github.io/Task-Management/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "This personal portfolio showcases my skills, projects, and experience. Features 3D animations, particle effects, and dark theme.",
    image: "/port.jfif",
    tech: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/Bavishya04/kinetic-dark-spark.git",
    live: "https://github.com/Bavishya04/kinetic-dark-spark.git",
  },
  {
    id: 3,
    title: "Spotify Frontpage Clone",
    description:
      "A clone of the Spotify front page for UI/UX practice using Figma and React. Focused on layout, styling, and responsiveness.",
    image: "/spotify.jfif",
    tech: ["React", "Tailwind CSS", "Figma"],
    github: "https://github.com/Bavishya04/Spotify-Front-Page-Clone-.git",
    live: "https://github.com/Bavishya04/Spotify-Front-Page-Clone-.git",
  },
  {
    id: 4,
    title: "Student Mark Analysis ML App",
    description:
      "A simple ML-powered app that predicts and analyzes student marks based on input data. Includes a basic dashboard for results.",
    image: "/student.jfif",
    tech: ["Python", "Flask", "Pandas", "Joblib"],
    github: "https://github.com/Bavishya04/Mark-Analysis-using-ML.git",
    live: "https://github.com/Bavishya04/Mark-Analysis-using-ML.git",
  },
  {
    id: 5,
    title: "Fruit Prediction AI Model",
    description:
      "An AI model that predicts fruit type based on uploaded image data. Built as a beginner AI project to explore classification.",
    image: "/fruit.jfif",
    tech: ["Python", "TensorFlow / Sklearn", "Flask"],
    github: "https://github.com/Bavishya04/Fruit-predictor.git",
    live: "https://github.com/Bavishya04/Fruit-predictor.git",
  },
  {
    id: 6,
    title: "Event Management Page",
    description:
      "A basic static event management webpage designed using pure HTML and CSS to practice layout and styling.",
    image: "/event.jfif",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Bavishya04/Event.git",
    live: "https://github.com/Bavishya04/Event.git",
  },
];


  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in frontend development, 
            UI/UX design, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 hover:border-cyan-400/60 transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 hover:border-cyan-400/60 transition-colors"
                  >
                    <ArrowUp size={20} className="rotate-45" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-cyan-400/20 rounded-full text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
