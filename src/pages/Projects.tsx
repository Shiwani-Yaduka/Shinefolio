import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Cloud, Brain, Sparkles, Cpu } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Smart To-Do List',
      description: 'A Linux-based productivity app with intuitive UI to organize daily tasks. Built as a competition project, it includes task filters, date tracking, and persistence. Clean structure and design for fast navigation and usability. Automating the completion of task using Generative AI and giving a downloadable report of the task completion.',
      techStack: ['Python', 'Flask', 'SQLite', 'HTML/CSS'],
      githubUrl: 'https://github.com/Shiwani-Yaduka/SmartTo-DoListApp',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      title: 'VirtualHoney',
      description: 'A personalized AI chatbot designed to mimic a specific person\'s tone using generative AI. Combines structured prompts and memory to create a highly engaging conversation experience. Built with a modular LangChain-based architecture.',
      techStack: ['LangChain', 'OpenAI', 'Python', 'Streamlit'],
      githubUrl: 'https://github.com/Shiwani-Yaduka/VirtualHoney',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      title: 'Remote SSH Menu-Based Dashboard',
      description: 'A secure dashboard to execute remote Linux commands over SSH via a web-based menu system. Useful for remote system admins or students practicing command-line automation. Built using Gradio UI and containerized for deployment.',
      techStack: ['Python', 'Gradio', 'Docker', 'SSH', 'Linux'],
      githubUrl: 'https://github.com/Shiwani-Yaduka/Remote-SSH-Menu-Based',
      icon: Database,
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      title: 'Smart Book Reading Tracker',
      description: 'A fully serverless book tracker app using AWS to log, analyze, and visualize reading habits. It uses scheduled events, database triggers, and log monitoring to automate reminders and reading stats. Designed for scalability and low cost.',
      techStack: ['AWS Lambda', 'Aurora MySQL', 'CloudWatch', 'Events', ' MySQLWorkbench'],
      githubUrl: '#',
      icon: Cloud,
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const floatingIcons = [
    { icon: Code, delay: 0, x: '20%', y: '20%' },
    { icon: Cloud, delay: 0.8, x: '80%', y: '30%' },
    { icon: Cpu, delay: 1.6, x: '10%', y: '70%' },
    { icon: Sparkles, delay: 2.4, x: '85%', y: '80%' },
    { icon: Github, delay: 3.2, x: '15%', y: '40%' },
    { icon: Brain, delay: 4.0, x: '75%', y: '60%' },
    { icon: Database, delay: 4.8, x: '90%', y: '15%' },
    { icon: Code, delay: 5.6, x: '5%', y: '25%' },
    { icon: Cloud, delay: 6.4, x: '95%', y: '45%' },
    { icon: Cpu, delay: 7.2, x: '25%', y: '85%' },
    { icon: Sparkles, delay: 8.0, x: '70%', y: '10%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-pink-400/20 to-amber-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: '50%', right: '10%' }}
        />

        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${
              item.icon === Github 
                ? 'text-gray-600/75 dark:text-gray-400/65' 
                : item.icon === Brain 
                ? 'text-purple-500/75 dark:text-purple-400/65'
                : item.icon === Database 
                ? 'text-green-500/75 dark:text-green-400/65'
                : 'text-blue-400/80 dark:text-blue-300/70'
            }`}
            initial={{ 
              opacity: 0, 
              scale: 0.3,
              z: -100,
              rotateX: 30,
              rotateY: 30,
              filter: "blur(2px)"
            }}
            animate={{ 
              opacity: [0, 0.5, 0.9, 0.7, 0.4, 0],
              scale: [0.3, 0.8, 1.2, 1.0, 0.6, 0.4],
              z: [-100, -50, 0, 50, 100, 150],
              rotateX: [30, 15, 0, -15, -30, -45],
              rotateY: [30, 15, 0, 15, 30, 45],
              y: [0, -30, -60, -90, -120, -150],
              x: [0, 8, -5, 10, -3, 5],
              filter: ["blur(2px)", "blur(1px)", "blur(0px)", "blur(1px)", "blur(2px)", "blur(3px)"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: item.delay * 0.8,
              ease: "easeInOut"
            }}
            style={{ 
              left: item.x, 
              top: item.y,
              transformStyle: "preserve-3d"
            }}
          >
            <item.icon className="w-12 h-12" />
          </motion.div>
        ))}

        {/* Floating Background Text */}
        {[
          { text: "Smart To-Do List", x: '8%', y: '12%', delay: 0.2, size: 'text-xl' },
          { text: "VirtualHoney", x: '85%', y: '18%', delay: 0.8, size: 'text-lg' },
          { text: "Remote SSH", x: '12%', y: '88%', delay: 1.4, size: 'text-lg' },
          { text: "Book Tracker", x: '78%', y: '82%', delay: 2.0, size: 'text-lg' },
          { text: "AI Projects", x: '92%', y: '45%', delay: 2.6, size: 'text-lg' },
          { text: "Cloud Solutions", x: '5%', y: '65%', delay: 3.2, size: 'text-base' },
          { text: "DevOps Tools", x: '88%', y: '72%', delay: 3.8, size: 'text-base' },
          { text: "Python Apps", x: '15%', y: '35%', delay: 4.4, size: 'text-base' },
          { text: "AWS Services", x: '82%', y: '28%', delay: 5.0, size: 'text-base' },
          { text: "Innovation", x: '25%', y: '78%', delay: 5.6, size: 'text-sm' },
          { text: "Automation", x: '75%', y: '15%', delay: 6.2, size: 'text-sm' },
          { text: "Scalability", x: '45%', y: '92%', delay: 6.8, size: 'text-sm' },
          { text: "Security", x: '95%', y: '68%', delay: 7.4, size: 'text-sm' },
          { text: "Performance", x: '3%', y: '42%', delay: 8.0, size: 'text-sm' },
          { text: "Integration", x: '68%', y: '88%', delay: 8.6, size: 'text-sm' },
        ].map((item, index) => (
          <motion.div
            key={`text-${index}`}
            className="absolute text-blue-500/60 dark:text-purple-400/55 font-semibold tracking-wide"
            initial={{ 
              opacity: 0, 
              scale: 0.9,
              z: -80,
              rotateZ: -8,
              filter: "blur(1px)"
            }}
            animate={{ 
              opacity: [0, 0.4, 0.8, 0.6, 0.3, 0],
              scale: [0.9, 1.05, 1.15, 1.05, 0.95, 0.85],
              z: [-80, -40, 0, 40, 80, 120],
              rotateZ: [-8, -4, 0, 4, 8, 12],
              y: [0, -15, -30, -45, -60, -75],
              x: [0, 3, -2, 4, -1, 2],
              filter: ["blur(1px)", "blur(0.5px)", "blur(0px)", "blur(0.5px)", "blur(1px)", "blur(1.5px)"]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
            style={{ 
              left: item.x, 
              top: item.y,
              transformStyle: "preserve-3d"
            }}
          >
            <span className={item.size}>{item.text}</span>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Featured Projects
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              A showcase of my major projects combining AI, DevOps, and cloud technologies
            </p>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4 sm:mt-6"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${project.bgColor} backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group`}
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Project Header */}
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <project.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-400 mb-2 sm:mb-3 uppercase tracking-wide">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>View Code</span>
                  </motion.a>
                  
                  <motion.button
                    className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Demo</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-8 sm:mt-12 md:mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl mx-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
              Interested in collaborating?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
              I'm always open to discussing new projects and opportunities.
            </p>
            <motion.button
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;