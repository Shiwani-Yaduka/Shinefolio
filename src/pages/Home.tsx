import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Code, Cloud, Cpu, Github, Linkedin, Mail, Download, Star, Award } from 'lucide-react';
import TypingAnimation from '../components/TypingAnimation';

// Use a more reliable image path for Netlify hosting
const userImage = '/linkedin-profile.jpg'; // This will be served from the public folder

// Fallback image in case the main image fails to load
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.target as HTMLImageElement;
  console.log('Image failed to load:', userImage);
  target.style.display = 'none';
  // You can set a fallback image here if needed
};

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    { icon: Linkedin, delay: 4.0, x: '75%', y: '60%' },
    { icon: Mail, delay: 4.8, x: '90%', y: '15%' },
    { icon: Code, delay: 5.6, x: '5%', y: '25%' },
    { icon: Cloud, delay: 6.4, x: '95%', y: '45%' },
    { icon: Cpu, delay: 7.2, x: '25%', y: '85%' },
    { icon: Sparkles, delay: 8.0, x: '70%', y: '10%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-slate-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multiple Gradient Orbs for richer effect */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
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
          className="absolute w-80 h-80 bg-gradient-to-r from-pink-400/25 to-amber-400/25 rounded-full blur-3xl"
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
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ bottom: '20%', left: '60%' }}
        />

        {/* Floating Icons with enhanced animations */}
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

        {/* Enhanced Floating Background Text */}
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
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <motion.div
          className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-8rem)] gap-4 sm:gap-6 md:gap-8 lg:gap-12 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Profile Image Section */}
          <motion.div 
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <div className="relative group">
              {/* Enhanced glowing ring effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-1 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
              </div>
              
              {/* Animated outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-400/30 dark:border-purple-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Blurred background image for edge blending */}
              <img
                src={userImage}
                alt=""
                className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full object-cover blur-lg scale-110 opacity-50"
                onError={handleImageError}
                loading="lazy"
              />
              {/* Main image with enhanced styling */}
              <img
                src={userImage}
                alt="Shiwani Yaduka"
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full shadow-2xl object-cover ring-4 ring-white/20 dark:ring-gray-800/20 hover:ring-4 hover:ring-blue-400/30 dark:hover:ring-purple-400/30 transition-all duration-300"
                onError={handleImageError}
                loading="lazy"
              />
              
              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Star className="w-4 h-4 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Award className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Text Content */}
          <motion.div 
            className="space-y-8 max-w-4xl"
            variants={itemVariants}
          >
            <div className="space-y-6">
              {/* Simple title with basic animation */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-800 dark:text-white leading-tight">
                  <TypingAnimation text="Shiwani Yaduka" />
                </h1>
                {/* Simple decorative underline */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "8rem" }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </motion.div>

              {/* Enhanced subtitle */}
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium px-4"
                variants={itemVariants}
              >
                Engineering intelligent solutions with{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-bold">
                  AI and cloud
                </span>
              </motion.p>
              
              {/* Enhanced tagline */}
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto px-4"
                variants={itemVariants}
              >
                Passionate about creating innovative solutions that bridge the gap between artificial intelligence and cloud infrastructure
              </motion.p>
            </div>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center px-4"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/Shiwani-Yaduka"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center space-x-3 relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
              
              <motion.button
                className="group w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-blue-400 dark:hover:border-purple-400 transition-all duration-300 inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>

            {/* Enhanced scroll indicator */}
            <motion.div 
              className="pt-12 flex items-center justify-center"
              variants={itemVariants}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-purple-400 transition-colors duration-300"
              >
                <ChevronDown className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Additional Content Sections */}
        <div className="mt-16 sm:mt-24 md:mt-32 space-y-16 sm:space-y-24 md:space-y-32">
          {/* Enhanced Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center px-4"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Core Skills
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Expertise in cutting-edge technologies that drive modern software development
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
              {[
                { 
                  name: 'AWS', 
                  level: 'Advanced', 
                  color: 'from-green-500 to-emerald-500', 
                  icon: Cloud,
                  symbol: '☁️',
                  description: 'Cloud Infrastructure & Services'
                },
                { 
                  name: 'Docker', 
                  level: 'Intermediate', 
                  color: 'from-blue-500 to-cyan-500', 
                  icon: Cpu,
                  symbol: '🐳',
                  description: 'Containerization & DevOps'
                },
                { 
                  name: 'AI/ML', 
                  level: 'Intermediate', 
                  color: 'from-purple-500 to-pink-500', 
                  icon: Sparkles,
                  symbol: '🤖',
                  description: 'Machine Learning & AI'
                },
                { 
                  name: 'Full Stack', 
                  level: 'Intermediate', 
                  color: 'from-orange-500 to-red-500', 
                  icon: Code,
                  symbol: '💻',
                  description: 'Frontend & Backend Development'
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300/50 dark:hover:border-purple-300/50 overflow-hidden cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05) translateY(-8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0px)';
                  }}
                >
                  {/* Technology Symbol - Only visible on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/90 via-purple-500/90 to-pink-500/90 dark:from-blue-600/95 dark:via-purple-600/95 dark:to-pink-600/95 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <div className="text-6xl md:text-7xl lg:text-8xl drop-shadow-2xl">
                      {skill.symbol}
                    </div>
                  </div>
                  
                  {/* Main Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-transform duration-300 shadow-lg relative z-10`}>
                    <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-3 relative z-10">
                    {skill.name}
                  </h3>
                  
                  {/* Skill Level */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium relative z-10">
                    {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Quick Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-gray-800/50 dark:to-purple-900/20 rounded-3xl p-8 sm:p-12 md:p-16 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 mx-4"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Quick Stats
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Numbers that reflect my journey and achievements
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 max-w-5xl mx-auto">
              {[
                { number: '1+', label: 'Years Experience', icon: Award },
                { number: '20+', label: 'Projects Completed', icon: Code },
                { number: '10+', label: 'Tools & Technologies', icon: Cpu },
                { number: '100%', label: 'Client Satisfaction', icon: Star },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-semibold text-sm sm:text-base md:text-lg">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 rounded-3xl p-8 sm:p-12 md:p-16 backdrop-blur-sm border border-blue-200/30 dark:border-purple-200/30 mx-4"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Collaborate?
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Let's work together to bring your ideas to life with cutting-edge technology
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <motion.a
                href="https://github.com/Shiwani-Yaduka"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center space-x-3 relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
              <motion.a
                href="mailto:shiwaniyaduka123@gmail.com"
                className="group w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold text-base sm:text-lg rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-blue-400 dark:hover:border-purple-400 transition-all duration-300 inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 group-hover:animate-bounce" />
                <span>Get In Touch</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;