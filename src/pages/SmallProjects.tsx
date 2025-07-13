import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, MessageSquare, Phone, Mail, Activity, GitBranch, Monitor, Code, Cloud, Cpu, Sparkles } from 'lucide-react';

const SmallProjects: React.FC = () => {
  const smallProjects = [
    {
      title: 'Twilio SMS Sender',
      description: 'Allows sending real-time SMS messages using a custom form-based UI. Designed to quickly integrate Twilio APIs with minimal config.',
      techStack: ['Twilio', 'Python', 'Flask'],
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      githubUrl: 'https://github.com/Shiwani-Yaduka/twilio-sms-sender',
    },
    {
      title: 'WhatsApp Messenger',
      description: 'Enables automated WhatsApp messages via web interface. Supports templated messages and contact lists.',
      techStack: ['Twilio WhatsApp API', 'Python', 'Flask'],
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      githubUrl: 'https://github.com/Shiwani-Yaduka/whatsapp-messenger',
    },
    {
      title: 'Voice Calling via Twilio',
      description: 'Makes outbound calls using user-defined messages or templates. Built with Flask server and audio handling.',
      techStack: ['Twilio', 'Flask', 'Python'],
      icon: Phone,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      githubUrl: 'https://github.com/Shiwani-Yaduka/voice-calling-twilio',
    },
    {
      title: 'RAM Analyzer with Lime',
      description: 'Analyzes system RAM and provides explainable output using Lime. Highlights memory-heavy processes in simple language.',
      techStack: ['Python', 'psutil', 'Lime'],
      icon: Activity,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      githubUrl: 'https://github.com/Shiwani-Yaduka/ram-analyzer-lime',
    },
    {
      title: 'CI/CD Pipeline',
      description: 'Automatically builds and deploys containerized code changes using GitHub Webhooks and Jenkins pipelines.',
      techStack: ['Jenkins', 'GitHub', 'Docker'],
      icon: GitBranch,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      githubUrl: 'https://github.com/Shiwani-Yaduka/cicd-pipeline',
    },
    {
      title: 'Firefox GUI in Docker',
      description: 'Runs a GUI-based browser inside an isolated Docker container, accessible remotely. Great for testing or sandboxed browsing.',
      techStack: ['Docker', 'X11', 'Ubuntu'],
      icon: Monitor,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      githubUrl: 'https://github.com/Shiwani-Yaduka/firefox-docker-gui',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    { icon: MessageSquare, delay: 4.0, x: '75%', y: '60%' },
    { icon: Phone, delay: 4.8, x: '90%', y: '15%' },
    { icon: Activity, delay: 5.6, x: '5%', y: '25%' },
    { icon: GitBranch, delay: 6.4, x: '95%', y: '45%' },
    { icon: Monitor, delay: 7.2, x: '25%', y: '85%' },
    { icon: Mail, delay: 8.0, x: '70%', y: '10%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden">
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
                : item.icon === MessageSquare 
                ? 'text-blue-500/75 dark:text-blue-400/65'
                : item.icon === Phone 
                ? 'text-green-500/75 dark:text-green-400/65'
                : item.icon === Activity 
                ? 'text-orange-500/75 dark:text-orange-400/65'
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
          { text: "SMS Sender", x: '8%', y: '12%', delay: 0.2, size: 'text-xl' },
          { text: "WhatsApp", x: '85%', y: '18%', delay: 0.8, size: 'text-lg' },
          { text: "Voice Calls", x: '12%', y: '88%', delay: 1.4, size: 'text-lg' },
          { text: "RAM Analyzer", x: '78%', y: '82%', delay: 2.0, size: 'text-lg' },
          { text: "CI/CD Pipeline", x: '92%', y: '45%', delay: 2.6, size: 'text-lg' },
          { text: "Docker GUI", x: '5%', y: '65%', delay: 3.2, size: 'text-base' },
          { text: "Twilio", x: '88%', y: '72%', delay: 3.8, size: 'text-base' },
          { text: "Python", x: '15%', y: '35%', delay: 4.4, size: 'text-base' },
          { text: "Flask", x: '82%', y: '28%', delay: 5.0, size: 'text-base' },
          { text: "Jenkins", x: '25%', y: '78%', delay: 5.6, size: 'text-sm' },
          { text: "Docker", x: '75%', y: '15%', delay: 6.2, size: 'text-sm' },
          { text: "Automation", x: '45%', y: '92%', delay: 6.8, size: 'text-sm' },
          { text: "Utilities", x: '95%', y: '68%', delay: 7.4, size: 'text-sm' },
          { text: "Tools", x: '3%', y: '42%', delay: 8.0, size: 'text-sm' },
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
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Small Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Quick implementations and utility tools built to solve specific problems
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smallProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${project.bgColor} backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group`}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Project Icon */}
                <div className={`w-14 h-14 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center shadow-lg mb-4`}>
                  <project.icon className="w-7 h-7 text-white" />
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="flex space-x-2">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex-1 justify-center text-sm`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                  
                  <motion.button
                    className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              More Projects Coming Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm constantly working on new tools and utilities. Check back regularly for updates!
            </p>
            <motion.a
              href="https://github.com/Shiwani-Yaduka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SmallProjects;