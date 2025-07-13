import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, Code, Cloud, Brain, Github, Mail, Cpu, Sparkles } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: 'Building Conversational AI with LangChain',
      excerpt: 'Explore how to create intelligent chatbots that understand context and provide meaningful responses using LangChain framework.',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'AI/ML',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      featured: true,
    },
    {
      title: 'Automating CI/CD Pipelines with Jenkins',
      excerpt: 'Learn how to set up robust continuous integration and deployment workflows using Jenkins, Docker, and GitHub Actions.',
      date: '2024-12-10',
      readTime: '12 min read',
      category: 'DevOps',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      title: 'Serverless Computing with AWS Lambda',
      excerpt: 'Discover the power of serverless architecture and how to build scalable applications without managing servers.',
      date: '2024-12-05',
      readTime: '10 min read',
      category: 'Cloud',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
    {
      title: 'Docker Containerization Best Practices',
      excerpt: 'Master the art of containerization with Docker, including security, optimization, and deployment strategies.',
      date: '2024-11-28',
      readTime: '15 min read',
      category: 'DevOps',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      title: 'Machine Learning Model Deployment',
      excerpt: 'From training to production: A complete guide to deploying ML models in cloud environments.',
      date: '2024-11-20',
      readTime: '14 min read',
      category: 'AI/ML',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    },
    {
      title: 'AWS Security Best Practices',
      excerpt: 'Comprehensive guide to securing your AWS infrastructure with IAM, VPC, and monitoring tools.',
      date: '2024-11-15',
      readTime: '11 min read',
      category: 'Cloud',
      icon: Cloud,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
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
    { icon: Brain, delay: 4.0, x: '75%', y: '60%' },
    { icon: BookOpen, delay: 4.8, x: '90%', y: '15%' },
    { icon: Calendar, delay: 5.6, x: '5%', y: '25%' },
    { icon: Clock, delay: 6.4, x: '95%', y: '45%' },
    { icon: ArrowRight, delay: 7.2, x: '25%', y: '85%' },
    { icon: Mail, delay: 8.0, x: '70%', y: '10%' },
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
                : item.icon === BookOpen 
                ? 'text-blue-500/75 dark:text-blue-400/65'
                : item.icon === Calendar 
                ? 'text-green-500/75 dark:text-green-400/65'
                : item.icon === Cloud 
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
          { text: "Tech Journal", x: '8%', y: '12%', delay: 0.2, size: 'text-xl' },
          { text: "AI/ML", x: '85%', y: '18%', delay: 0.8, size: 'text-lg' },
          { text: "DevOps", x: '12%', y: '88%', delay: 1.4, size: 'text-lg' },
          { text: "Cloud", x: '78%', y: '82%', delay: 2.0, size: 'text-lg' },
          { text: "Tutorials", x: '92%', y: '45%', delay: 2.6, size: 'text-lg' },
          { text: "LangChain", x: '5%', y: '65%', delay: 3.2, size: 'text-base' },
          { text: "Jenkins", x: '88%', y: '72%', delay: 3.8, size: 'text-base' },
          { text: "AWS Lambda", x: '15%', y: '35%', delay: 4.4, size: 'text-base' },
          { text: "Docker", x: '82%', y: '28%', delay: 5.0, size: 'text-base' },
          { text: "Insights", x: '25%', y: '78%', delay: 5.6, size: 'text-sm' },
          { text: "Experiences", x: '75%', y: '15%', delay: 6.2, size: 'text-sm' },
          { text: "Best Practices", x: '45%', y: '92%', delay: 6.8, size: 'text-sm' },
          { text: "Security", x: '95%', y: '68%', delay: 7.4, size: 'text-sm' },
          { text: "Deployment", x: '3%', y: '42%', delay: 8.0, size: 'text-sm' },
          { text: "Architecture", x: '68%', y: '88%', delay: 8.6, size: 'text-sm' },
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
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
                Tech Journal
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sharing insights, tutorials, and experiences in AI, DevOps, and cloud technologies
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${post.bgColor} backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 mb-12 group`}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${post.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <post.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                      Featured
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
              <motion.button
                className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${post.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-6`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Read More</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${post.bgColor} backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group`}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Post Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${post.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <post.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                    {post.category}
                  </span>
                </div>

                {/* Post Content */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  {post.excerpt}
                </p>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <motion.button
                  className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${post.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full justify-center`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Subscribe to get the latest articles and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;