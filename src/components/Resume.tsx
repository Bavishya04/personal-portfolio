
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Eye } from "lucide-react";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    // In a real implementation, this would download your actual resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would put your actual resume file here
    link.download = 'Bavishya_Developer_Resume.pdf';
    link.click();
  };

  const handleView = () => {
    // In a real implementation, this would open your resume in a new tab
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto"
          >
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Interested in my background and experience? Download my resume to learn more 
              about my skills, projects, and professional journey in frontend development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleView}
                className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                <Eye size={20} />
                View Online
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
