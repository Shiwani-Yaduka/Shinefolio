import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Award, Code, Users, Zap, Cloud, Cpu, Sparkles, Brain, Server, Database, GitBranch, Monitor, Layers, Settings, Terminal, Globe, Briefcase } from 'lucide-react';

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
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900"></div>
                </div>
                
                {/* Animated outer glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-blue-400/30 dark:border-purple-400/30 opacity-0 group-hover:opacity-100"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Blurred background for edge blending */}
                <img
                  src={userImage}
                  alt=""
                  className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl object-cover blur-lg scale-110 opacity-50"
                  onError={handleImageError}
                  loading="lazy"
                />
                
                {/* Main image */}
                <img
                  src={userImage}
                  alt="Shiwani Yaduka"
                  className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl shadow-2xl object-cover ring-4 ring-white/20 dark:ring-gray-800/20 group-hover:ring-4 group-hover:ring-blue-400/30 dark:group-hover:ring-purple-400/30 transition-all duration-300"
                  onError={handleImageError}
                  loading="lazy"
                />
                
                {/* Floating accent elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                  <Award className="w-4 h-4 text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                  <Code className="w-4 h-4 text-white" />
                </motion.div>
                
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
                <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">AI + DevOps Engineer</h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Highly motivated and optimistic professional with a strong dedication to achieving excellence in every task. 
                  Skilled in creating structured and organized environments by establishing clear rules, roles, and processes 
                  to enhance efficiency and security. With a proactive mindset and a problem-solving approach, I stay committed 
                  throughout the project lifecycle, ensuring goals are met with precision and effectiveness. Passionate about 
                  continuous learning and growth, I thrive in dynamic environments and embrace challenges as opportunities for 
                  innovation and improvement.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Tech Stack Map Section (custom 2-3-2 layout) */}
          <section
            className="relative flex flex-col items-center justify-center w-full my-24 md:my-32 lg:my-40 xl:my-48 no-scrollbar"
            style={{ minHeight: '320px' }}
          >
            {/* Soft background and shadow for the map */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-full h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] bg-gradient-to-r from-blue-100/60 via-purple-100/40 to-pink-100/30 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-pink-900/10 shadow-2xl blur-2xl rounded-3xl" />
            </div>
            {/* First row: 2 categories */}
            <div className="relative z-10 w-full flex flex-row items-center justify-center gap-12 md:gap-20 mb-10">
              {[
                {
                  title: 'AI/ML',
                  icon: Brain,
                  color: 'from-purple-500 to-pink-500',
                  techs: [
                    { name: 'Python', icon: Code },
                    { name: 'LangChain', icon: Zap },
                    { name: 'OpenAI', icon: Brain },
                    { name: 'TensorFlow', icon: Layers },
                  ],
                },
                {
                  title: 'DevOps',
                  icon: Settings,
                  color: 'from-blue-500 to-cyan-500',
                  techs: [
                    { name: 'Jenkins', icon: GitBranch },
                    { name: 'Docker', icon: Server },
                    { name: 'GitHub Actions', icon: GitBranch },
                    { name: 'Linux', icon: Terminal },
                  ],
                },
              ].map((cat, i) => (
                <div key={cat.title} className="flex flex-col items-center shrink-0 relative">
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full relative flex items-center justify-center mb-2 border-4 border-white dark:border-gray-900 animate-bounce-slow globe-3d`}>
                    {/* 3D globe effect: radial gradient, shine, shadow */}
                    <div className="absolute inset-0 rounded-full globe-gradient z-0" />
                    <div className="absolute left-3 top-3 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/30 opacity-60 globe-shine z-10" />
                    <cat.icon className="w-8 h-8 md:w-10 md:h-10 text-white relative z-20" />
                  </div>
                  <div className="text-base md:text-lg font-bold text-gray-800 dark:text-white mb-2 text-center drop-shadow whitespace-nowrap">{cat.title}</div>
                  <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-3 mt-1">
                    {cat.techs.map((tech, j) => (
                      <div key={tech.name} className="flex flex-col items-center group relative">
                        <svg className="absolute left-1/2 top-[-18px] -translate-x-1/2 pointer-events-none z-10" width="2" height="18">
                          <motion.line
                            x1="1" y1="0" x2="1" y2="18"
                            stroke="#8884"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5 + j * 0.1 }}
                          />
                        </svg>
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900 group-hover:shadow-2xl transition-all duration-200 animate-pop`}>
                          <tech.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <span className="text-xs md:text-sm mt-1 text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 px-2 py-0.5 rounded-full shadow group-hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Second row: 3 categories */}
            <div className="relative z-10 w-full flex flex-row items-center justify-center gap-12 md:gap-20 mb-10">
              {[
                {
                  title: 'Cloud',
                  icon: Cloud,
                  color: 'from-orange-500 to-red-500',
                  techs: [
                    { name: 'AWS EC2', icon: Server },
                    { name: 'AWS Lambda', icon: Zap },
                    { name: 'AWS S3', icon: Database },
                    { name: 'Aurora', icon: Database },
                    { name: 'CloudWatch', icon: Monitor },
                  ],
                },
                {
                  title: 'UI Tools',
                  icon: Globe,
                  color: 'from-green-500 to-emerald-500',
                  techs: [
                    { name: 'Flask', icon: Code },
                    { name: 'Streamlit', icon: Monitor },
                    { name: 'Gradio', icon: Globe },
                    { name: 'React', icon: Code },
                  ],
                },
                {
                  title: 'Backend',
                  icon: Server,
                  color: 'from-indigo-500 to-blue-500',
                  techs: [
                    { name: 'Node.js', icon: Cpu },
                    { name: 'Express', icon: Terminal },
                    { name: 'PostgreSQL', icon: Database },
                    { name: 'MongoDB', icon: Database },
                  ],
                },
              ].map((cat, i) => (
                <div key={cat.title} className="flex flex-col items-center shrink-0 relative">
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full relative flex items-center justify-center mb-2 border-4 border-white dark:border-gray-900 animate-bounce-slow globe-3d`}>
                    {/* 3D globe effect: radial gradient, shine, shadow */}
                    <div className="absolute inset-0 rounded-full globe-gradient z-0" />
                    <div className="absolute left-3 top-3 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/30 opacity-60 globe-shine z-10" />
                    <cat.icon className="w-8 h-8 md:w-10 md:h-10 text-white relative z-20" />
                  </div>
                  <div className="text-base md:text-lg font-bold text-gray-800 dark:text-white mb-2 text-center drop-shadow whitespace-nowrap">{cat.title}</div>
                  <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-3 mt-1">
                    {cat.techs.map((tech, j) => (
                      <div key={tech.name} className="flex flex-col items-center group relative">
                        <svg className="absolute left-1/2 top-[-18px] -translate-x-1/2 pointer-events-none z-10" width="2" height="18">
                          <motion.line
                            x1="1" y1="0" x2="1" y2="18"
                            stroke="#8884"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5 + j * 0.1 }}
                          />
                        </svg>
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900 group-hover:shadow-2xl transition-all duration-200 animate-pop`}>
                          <tech.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <span className="text-xs md:text-sm mt-1 text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 px-2 py-0.5 rounded-full shadow group-hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Third row: 2 categories */}
            <div className="relative z-10 w-full flex flex-row items-center justify-center gap-12 md:gap-20">
              {[
                {
                  title: 'Frontend',
                  icon: Monitor,
                  color: 'from-pink-500 to-yellow-500',
                  techs: [
                    { name: 'React', icon: Code },
                    { name: 'TypeScript', icon: Code },
                    { name: 'Tailwind', icon: Sparkles },
                    { name: 'Vite', icon: Zap },
                  ],
                },
                {
                  title: 'Data & Analytics',
                  icon: Database,
                  color: 'from-yellow-500 to-orange-500',
                  techs: [
                    { name: 'Pandas', icon: Layers },
                    { name: 'NumPy', icon: Cpu },
                    { name: 'Matplotlib', icon: Sparkles },
                    { name: 'SQL', icon: Database },
                  ],
                },
              ].map((cat, i) => (
                <div key={cat.title} className="flex flex-col items-center shrink-0 relative">
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full relative flex items-center justify-center mb-2 border-4 border-white dark:border-gray-900 animate-bounce-slow globe-3d`}>
                    {/* 3D globe effect: radial gradient, shine, shadow */}
                    <div className="absolute inset-0 rounded-full globe-gradient z-0" />
                    <div className="absolute left-3 top-3 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/30 opacity-60 globe-shine z-10" />
                    <cat.icon className="w-8 h-8 md:w-10 md:h-10 text-white relative z-20" />
                  </div>
                  <div className="text-base md:text-lg font-bold text-gray-800 dark:text-white mb-2 text-center drop-shadow whitespace-nowrap">{cat.title}</div>
                  <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-3 mt-1">
                    {cat.techs.map((tech, j) => (
                      <div key={tech.name} className="flex flex-col items-center group relative">
                        <svg className="absolute left-1/2 top-[-18px] -translate-x-1/2 pointer-events-none z-10" width="2" height="18">
                          <motion.line
                            x1="1" y1="0" x2="1" y2="18"
                            stroke="#8884"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5 + j * 0.1 }}
                          />
                        </svg>
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900 group-hover:shadow-2xl transition-all duration-200 animate-pop`}>
                          <tech.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <span className="text-xs md:text-sm mt-1 text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 px-2 py-0.5 rounded-full shadow group-hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <style>{`
                  @keyframes pop { 0% { transform: scale(0.7); } 60% { transform: scale(1.2); } 100% { transform: scale(1.1); } }
                  .animate-pop { animation: pop 0.7s cubic-bezier(.68,-0.55,.27,1.55) both; }
                  @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
                  .animate-bounce-slow { animation: bounce-slow 2.5s infinite; }
                  @keyframes pulse-slow { 0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.3); } 50% { box-shadow: 0 0 40px 10px rgba(168,85,247,0.25); } }
                  .animate-pulse-slow { animation: pulse-slow 3s infinite; }
                  @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                  .animate-spin-slow { animation: spin-slow 12s linear infinite; }
                  /* Hide scrollbars for all browsers */
                  .no-scrollbar::-webkit-scrollbar { display: none; }
                  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                  /* 3D Globe effect */
                  .globe-3d {
                    box-shadow: 0 12px 40px 0 rgba(0,0,0,0.28), 0 2px 12px 0 rgba(0,0,0,0.18) inset, 0 0 32px 8px rgba(255, 200, 100, 0.18);
                    overflow: visible;
                    animation: globe-rotate 16s linear infinite;
                  }
                  .globe-gradient {
                    background: radial-gradient(ellipse at 65% 35%, #fff700 0%, #ff00e6 30%, #00fff7 60%, #3b5cff 80%, #ff3b3b 100%);
                    background-size: 200% 200%;
                    animation: globe-gradient-shift 8s ease-in-out infinite;
                    pointer-events: none;
                  }
                  @keyframes globe-gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                  }
                  .globe-shine {
                    filter: blur(1.5px);
                    background: radial-gradient(circle at 60% 40%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 80%, transparent 100%);
                    opacity: 0.85;
                    pointer-events: none;
                  }
                  @keyframes globe-rotate { 0% { transform: rotateZ(0deg); } 100% { transform: rotateZ(360deg); } }
                `}</style>
          </section>

          {/* Enhanced Highlights Section */}
          <motion.div 
            variants={itemVariants} 
            className="mb-8 sm:mb-12 md:mb-16 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                  y: [0, -20, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-400/10 to-amber-400/10 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 0.8, 1],
                  x: [0, -30, 0],
                  y: [0, 30, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <motion.h2 
              className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-6 sm:mb-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              What Drives Me
              <motion.div
                className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mt-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 text-center overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900"></div>
                  </div>
                  
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl"
                    animate={{ 
                      background: [
                        "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)",
                        "linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(147, 51, 234, 0.05) 100%)",
                        "linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(59, 130, 246, 0.05) 100%)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Floating particles */}
                  <motion.div
                    className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 + 0.5 }}
                  />
                  
                  {/* Enhanced icon container */}
                  <motion.div 
                    className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Icon glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <highlight.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white relative z-10" />
                  </motion.div>
                  
                  {/* Enhanced title */}
                  <motion.h3 
                    className="text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-2 relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {highlight.title}
                  </motion.h3>
                  
                  {/* Enhanced description */}
                  <motion.p 
                    className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 relative z-10 leading-relaxed"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {highlight.description}
                  </motion.p>
                  
                  {/* Corner accent elements */}
                  <motion.div
                    className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ rotate: [0, -90, -180, -270, -360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div 
            variants={itemVariants} 
            className="text-center relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-0 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  x: [0, 15, 0],
                  y: [0, -15, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 right-1/3 w-32 h-32 bg-gradient-to-r from-pink-400/15 to-amber-400/15 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 0.8, 1],
                  x: [0, -20, 0],
                  y: [0, 20, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <motion.h2 
              className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's Connect
              <motion.div
                className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mt-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.h2>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 relative z-10">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.5, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Glowing background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center justify-center space-x-3 px-6 sm:px-8 py-4 sm:py-5 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-gray-700 dark:text-gray-200 font-semibold text-sm sm:text-base border-2 border-transparent hover:border-blue-400/30 dark:hover:border-purple-400/30 overflow-hidden`}
                    whileHover={{ scale: 1.05, y: -5, rotateY: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl"
                      animate={{ 
                        background: [
                          "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)",
                          "linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(147, 51, 234, 0.1) 100%)",
                          "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    {/* Icon with enhanced styling */}
                    <motion.div
                      className={`relative z-10 p-2 rounded-full ${
                        link.name === 'GitHub' 
                          ? 'bg-gray-800 dark:bg-gray-700 text-white' 
                          : link.name === 'LinkedIn' 
                          ? 'bg-blue-600 text-white'
                          : 'bg-red-500 text-white'
                      } shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                    
                    {/* Text with enhanced styling */}
                    <span className="relative z-10 font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {link.name}
                    </span>
                    
                    {/* Floating particles */}
                    <motion.div
                      className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 + 0.5 }}
                    />
                    
                    {/* Corner accents */}
                    <motion.div
                      className="absolute top-0 right-0 w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ rotate: [0, 90, 180, 270, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0 border-r-[15px] border-r-transparent border-b-[15px] border-b-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ rotate: [0, -90, -180, -270, -360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;