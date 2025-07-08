import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Server, 
  Cloud, 
  Database, 
  GitBranch, 
  Monitor,
  Zap,
  Layers,
  Settings,
  Terminal,
  Globe
} from 'lucide-react';

const TechStack: React.FC = () => {
  const techCategories = [
    {
      title: 'AI/ML',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      technologies: [
        { name: 'Python', icon: Code, proficiency: 95 },
        { name: 'LangChain', icon: Zap, proficiency: 90 },
        { name: 'OpenAI', icon: Brain, proficiency: 85 },
        { name: 'TensorFlow', icon: Layers, proficiency: 80 },
      ],
    },
    {
      title: 'DevOps',
      icon: Settings,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      technologies: [
        { name: 'Jenkins', icon: GitBranch, proficiency: 90 },
        { name: 'Docker', icon: Server, proficiency: 95 },
        { name: 'GitHub Actions', icon: GitBranch, proficiency: 85 },
        { name: 'Linux', icon: Terminal, proficiency: 90 },
      ],
    },
    {
      title: 'Cloud',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      technologies: [
        { name: 'AWS EC2', icon: Server, proficiency: 90 },
        { name: 'AWS Lambda', icon: Zap, proficiency: 85 },
        { name: 'AWS S3', icon: Database, proficiency: 85 },
        { name: 'Aurora', icon: Database, proficiency: 80 },
        { name: 'CloudWatch', icon: Monitor, proficiency: 85 },
      ],
    },
    {
      title: 'UI Tools',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      technologies: [
        { name: 'Flask', icon: Code, proficiency: 90 },
        { name: 'Streamlit', icon: Monitor, proficiency: 85 },
        { name: 'Gradio', icon: Globe, proficiency: 80 },
        { name: 'React', icon: Code, proficiency: 85 },
      ],
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
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900/20">
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
              Tech Stack
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technologies and tools I use to build innovative solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Tech Categories */}
          <div className="grid lg:grid-cols-2 gap-8">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className={`${category.bgColor} backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300`}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h2>
                </div>

                {/* Technologies */}
                <div className="space-y-6">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                            <tech.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-lg font-semibold text-gray-800 dark:text-white">
                            {tech.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {tech.proficiency}%
                        </span>
                      </div>
                      
                      {/* Proficiency Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.proficiency}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (techIndex * 0.1) }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Additional Skills
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Languages</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Python, JavaScript, Bash, SQL, YAML
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Databases</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  MySQL, PostgreSQL, MongoDB, Redis
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Tools</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Git, VS Code, Postman, Figma
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to build something amazing?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how these technologies can solve your next challenge.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;