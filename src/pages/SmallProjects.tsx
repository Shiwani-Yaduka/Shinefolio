import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, MessageSquare, Phone, Mail, Activity, GitBranch, Monitor } from 'lucide-react';

const SmallProjects: React.FC = () => {
  const smallProjects = [
    {
      title: 'Twilio SMS Sender',
      description: 'Allows sending real-time SMS messages using a custom form-based UI. Designed to quickly integrate Twilio APIs with minimal config.',
      techStack: ['Twilio', 'Python', 'Flask'],
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      title: 'WhatsApp Messenger',
      description: 'Enables automated WhatsApp messages via web interface. Supports templated messages and contact lists.',
      techStack: ['Twilio WhatsApp API', 'Python', 'Flask'],
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      title: 'Voice Calling via Twilio',
      description: 'Makes outbound calls using user-defined messages or templates. Built with Flask server and audio handling.',
      techStack: ['Twilio', 'Flask', 'Python'],
      icon: Phone,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      title: 'RAM Analyzer with Lime',
      description: 'Analyzes system RAM and provides explainable output using Lime. Highlights memory-heavy processes in simple language.',
      techStack: ['Python', 'psutil', 'Lime'],
      icon: Activity,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
    {
      title: 'CI/CD Pipeline',
      description: 'Automatically builds and deploys containerized code changes using GitHub Webhooks and Jenkins pipelines.',
      techStack: ['Jenkins', 'GitHub', 'Docker'],
      icon: GitBranch,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    },
    {
      title: 'Firefox GUI in Docker',
      description: 'Runs a GUI-based browser inside an isolated Docker container, accessible remotely. Great for testing or sandboxed browsing.',
      techStack: ['Docker', 'X11', 'Ubuntu'],
      icon: Monitor,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
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
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
      <div className="container mx-auto px-4 py-20">
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
                  <motion.button
                    className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex-1 justify-center text-sm`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.button>
                  
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
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects on GitHub
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SmallProjects;