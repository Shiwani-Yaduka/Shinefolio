import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Award, Code, Users, Zap, Cloud, Cpu, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  // Use a more reliable image path for Netlify hosting
  const userImage = '/linkedin-profile.jpg'; // This will be served from the public folder

  // Fallback image in case the main image fails to load
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    // You can set a fallback image here if needed
  };

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
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Shiwani-Yaduka',
      color: 'hover:text-gray-800 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/shiwani12',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:shiwaniyaduka123@gmail.com',
      color: 'hover:text-red-500',
    },
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Problem Solver',
      description: 'Proactive approach to challenges with innovative solutions',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative mindset with strong communication skills',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Passionate about continuous learning and growth',
    },
    {
      icon: Award,
      title: 'Achievement Focused',
      description: 'Committed to excellence in every project',
    },
  ];

  const floatingIcons = [
    { icon: Code, delay: 0, x: '20%', y: '20%' },
    { icon: Cloud, delay: 0.8, x: '80%', y: '30%' },
    { icon: Cpu, delay: 1.6, x: '10%', y: '70%' },
    { icon: Sparkles, delay: 2.4, x: '85%', y: '80%' },
    { icon: Github, delay: 3.2, x: '15%', y: '40%' },
    { icon: Linkedin, delay: 4.0, x: '75%', y: '60%' },
    { icon: Mail, delay: 4.8, x: '90%', y: '15%' },
    { icon: Code, delay: 5.6, x: '5%', y: '25%' },
    { icon: Cloud, delay: 6.4, x: '95%', y: '45%' },
    { icon: Cpu, delay: 7.2, x: '25%', y: '85%' },
    { icon: Sparkles, delay: 8.0, x: '70%', y: '10%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden">
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
                : item.icon === Linkedin 
                ? 'text-blue-500/75 dark:text-blue-400/65'
                : item.icon === Mail 
                ? 'text-red-500/75 dark:text-red-400/65'
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

        {/* Floating Background Text from About Section */}
        {[
          { text: "AI + DevOps Engineer", x: '8%', y: '12%', delay: 0.2, size: 'text-xl' },
          { text: "Problem Solver", x: '85%', y: '18%', delay: 0.8, size: 'text-lg' },
          { text: "Team Player", x: '12%', y: '88%', delay: 1.4, size: 'text-lg' },
          { text: "Fast Learner", x: '78%', y: '82%', delay: 2.0, size: 'text-lg' },
          { text: "Achievement Focused", x: '92%', y: '45%', delay: 2.6, size: 'text-lg' },
          { text: "Highly Motivated", x: '5%', y: '65%', delay: 3.2, size: 'text-base' },
          { text: "Optimistic Professional", x: '88%', y: '72%', delay: 3.8, size: 'text-base' },
          { text: "Proactive Mindset", x: '15%', y: '35%', delay: 4.4, size: 'text-base' },
          { text: "Continuous Learning", x: '82%', y: '28%', delay: 5.0, size: 'text-base' },
          { text: "Innovation", x: '25%', y: '78%', delay: 5.6, size: 'text-sm' },
          { text: "Excellence", x: '75%', y: '15%', delay: 6.2, size: 'text-sm' },
          { text: "Growth", x: '45%', y: '92%', delay: 6.8, size: 'text-sm' },
          { text: "Efficiency", x: '95%', y: '68%', delay: 7.4, size: 'text-sm' },
          { text: "Security", x: '3%', y: '42%', delay: 8.0, size: 'text-sm' },
          { text: "Collaboration", x: '68%', y: '88%', delay: 8.6, size: 'text-sm' },
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
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              About Me
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-8 sm:mb-12 md:mb-16">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="flex justify-center order-2 lg:order-1">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={userImage}
                  alt="Shiwani Yaduka"
                  className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl shadow-2xl object-cover"
                  onError={handleImageError}
                  loading="lazy"
                />
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>

            {/* About Text */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
                  AI + DevOps Engineer
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Highly motivated and optimistic professional with a strong dedication to achieving excellence in every task. 
                  Skilled in creating structured and organized environments by establishing clear rules, roles, and processes 
                  to enhance efficiency and security. With a proactive mindset and a problem-solving approach, I stay committed 
                  throughout the project lifecycle, ensuring goals are met with precision and effectiveness. Passionate about 
                  continuous learning and growth, I thrive in dynamic environments and embrace challenges as opportunities for 
                  innovation and improvement.
                </p>
              </div>

              {/* Download Resume Button */}
              <motion.button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Highlights */}
          <motion.div variants={itemVariants} className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-6 sm:mb-8">
              What Drives Me
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <highlight.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">
              Let's Connect
            </h2>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center space-x-3 px-4 sm:px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 ${link.color} text-sm sm:text-base`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="font-medium">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;