import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, Database, Cloud, Brain, Sparkles, Cpu } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Smart To-Do List',
      description: 'A Linux-based productivity app with intuitive UI to organize daily tasks. Built as a competition project, it includes task filters, date tracking, and persistence. Clean structure and design for fast navigation and usability. Automating the completion of task using Generative AI and giving a downloadable report of the task completion.',
      techStack: ['Python', 'Streamlit', 'Generative AI', 'FPDF'],
      githubUrl: 'https://github.com/Shiwani-Yaduka/SmartTo-DoListApp',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      title: 'VirtualHoney',
      description: 'A personalized AI chatbot designed to mimic a specific person\'s tone using generative AI. Combines structured prompts and memory to create a highly engaging conversation experience. Built with a modular LangChain-based architecture.',
      techStack: ['Generative AI', 'OpenAI', 'Python', 'HTML/CSS/JavaScript'],
      githubUrl: 'https://github.com/Shiwani-Yaduka/VirtualHoney',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      title: 'Remote SSH Menu-Based Dashboard',
      description: 'A secure dashboard to execute remote Linux commands over SSH via a web-based menu system. Useful for remote system admins or students practicing command-line automation. Built using Gradio UI and containerized for deployment.',
      techStack: ['Python', 'Gradio', 'Docker', 'SSH', 'Linux', 'Twilio', 'Pywhatkit'],
      githubUrl: 'https://github.com/Shiwani-Yaduka/Remote-SSH-Menu-Based',
      icon: Database,
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      title: 'Smart Book Reading Tracker',
      description: 'A fully serverless book tracker app using AWS to log, analyze, and visualize reading habits. It uses scheduled events, database triggers, and log monitoring to automate reminders and reading stats. Designed for scalability and low cost.',
      techStack: ['AWS Lambda', 'Aurora MySQL', 'CloudWatch', 'Events', ' MySQLWorkbench'],
      githubUrl: 'https://github.com/Shiwani-Yaduka/SMART_BOOK_TRACKING-AWS',
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

          {/* Enhanced 3D Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 relative">
            {/* 3D Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  x: [0, 50, 0],
                  y: [0, -30, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-amber-400/10 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 0.8, 1],
                  rotate: [0, -180, -360],
                  x: [0, -40, 0],
                  y: [0, 40, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative perspective-1000"
                initial={{ opacity: 0, rotateX: -30, y: 100 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.05,
                  z: 50
                }}
              >
                {/* 3D Card Container */}
                <div className={`relative transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-5 group-hover:rotate-x-[-5deg]`}>
                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-full h-full rounded-3xl bg-white dark:bg-gray-900"></div>
                  </div>
                  
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 ${project.bgColor} rounded-3xl backdrop-blur-sm`}
                    animate={{ 
                      background: [
                        `linear-gradient(135deg, ${project.bgColor.replace('bg-', 'rgba(').replace('/20', ', 0.1)')} 0%, rgba(147, 51, 234, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)`,
                        `linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, ${project.bgColor.replace('bg-', 'rgba(').replace('/20', ', 0.1)')} 50%, rgba(147, 51, 234, 0.1) 100%)`,
                        `linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, ${project.bgColor.replace('bg-', 'rgba(').replace('/20', ', 0.1)')} 100%)`
                      ]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Main Card Content */}
                  <div className="relative p-8 sm:p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 dark:border-gray-700/20">
                    {/* Floating Particles */}
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0, 1, 0],
                        y: [0, -20, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0, 1, 0],
                        y: [0, 20, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 + 0.5 }}
                    />
                    
                    {/* Enhanced Project Header */}
                    <div className="flex items-center space-x-4 mb-6 relative z-10">
                      <motion.div 
                        className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {/* Icon Glow Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-2xl"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <project.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" />
                      </motion.div>
                      <div>
                        <motion.h3 
                          className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {project.title}
                        </motion.h3>
                      </div>
                    </div>

                    {/* Enhanced Project Description */}
                    <motion.p 
                      className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed relative z-10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Enhanced Tech Stack */}
                    <div className="mb-6 relative z-10">
                      <motion.h4 
                        className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-400 mb-3 uppercase tracking-wider"
                        whileHover={{ scale: 1.05 }}
                      >
                        Tech Stack
                      </motion.h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Project Actions */}
                    <div className="flex justify-center relative z-10">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative flex items-center justify-center space-x-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r ${project.gradient} text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 text-sm sm:text-base overflow-hidden`}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Shimmer Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.8 }}
                        />
                        
                        {/* Button Content */}
                        <Github className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:animate-bounce" />
                        <span className="relative z-10">View Code</span>
                        
                        {/* Floating Accent */}
                        <motion.div
                          className="absolute -top-1 -right-1 w-3 h-3 bg-white/30 rounded-full"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.a>
                    </div>
                    
                    {/* Corner Accents */}
                    <motion.div
                      className="absolute top-0 right-0 w-0 h-0 border-l-[25px] border-l-transparent border-t-[25px] border-t-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ rotate: [0, 90, 180, 270, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0 border-r-[25px] border-r-transparent border-b-[25px] border-b-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ rotate: [0, -90, -180, -270, -360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>
    </div>
  );
};

export default Projects;