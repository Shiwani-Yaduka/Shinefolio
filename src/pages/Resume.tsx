import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Mail, 
  Calendar, 
  Award, 
  GraduationCap,
  Briefcase,
  Star,
  Github,
  Linkedin,
  Code,
  Cloud,
  Cpu,
  Sparkles
} from 'lucide-react';

const Resume: React.FC = () => {
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
    { icon: Linkedin, delay: 4.0, x: '75%', y: '60%' },
    { icon: Mail, delay: 4.8, x: '90%', y: '15%' },
    { icon: Award, delay: 5.6, x: '5%', y: '25%' },
    { icon: GraduationCap, delay: 6.4, x: '95%', y: '45%' },
    { icon: Briefcase, delay: 7.2, x: '25%', y: '85%' },
    { icon: Star, delay: 8.0, x: '70%', y: '10%' },
  ];

  const skills = [
    { name: 'Python', level: 95 },
    { name: 'LangChain', level: 90 },
    { name: 'AWS', level: 88 },
    { name: 'Docker', level: 92 },
    { name: 'Jenkins', level: 85 },
    { name: 'Linux', level: 90 },
    { name: 'OpenAI', level: 87 },
    { name: 'Flask', level: 85 },
  ];

  const experience = [
    {
      title: 'AI + DevOps Engineer',
      company: 'Freelance',
      period: '2023 - Present',
      description: [
        'Developed conversational AI chatbots using LangChain and OpenAI APIs',
        'Built scalable CI/CD pipelines with Jenkins and GitHub Actions',
        'Deployed cloud infrastructure on AWS (EC2, Lambda, S3, Aurora)',
        'Created automated deployment solutions using Docker containers',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - 2023',
      description: [
        'Developed Python-based web applications and utilities',
        'Implemented automated testing and deployment workflows',
        'Collaborated with cross-functional teams on cloud migrations',
        'Optimized application performance and security',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Technical University',
      period: '2019 - 2023',
      gpa: '8.5/10',
    },
  ];

  const certifications = [
    {
      name: 'Programming in Python',
      issuer: 'Meta',
      date: 'Feb 2024',
      link: '#',
    },
    {
      name: 'Introduction to IoT',
      issuer: 'NPTEL Elite Certificate',
      date: 'May 2025',
      link: '#',
    },
  ];

  const awards = [
    {
      title: 'LinuxWorld Competition Winner',
      year: '2024',
      description: 'First place in national Linux automation competition',
    },
    {
      title: 'College Presentation – First Runner-Up',
      year: '2023',
      description: 'Technical presentation on AI and cloud integration',
    },
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
                : item.icon === Linkedin 
                ? 'text-blue-500/75 dark:text-blue-400/65'
                : item.icon === Mail 
                ? 'text-red-500/75 dark:text-red-400/65'
                : item.icon === Award 
                ? 'text-yellow-500/75 dark:text-yellow-400/65'
                : item.icon === GraduationCap 
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
          { text: "Experience", x: '8%', y: '12%', delay: 0.2, size: 'text-xl' },
          { text: "Education", x: '85%', y: '18%', delay: 0.8, size: 'text-lg' },
          { text: "Skills", x: '12%', y: '88%', delay: 1.4, size: 'text-lg' },
          { text: "Certifications", x: '78%', y: '82%', delay: 2.0, size: 'text-lg' },
          { text: "Awards", x: '92%', y: '45%', delay: 2.6, size: 'text-lg' },
          { text: "Python", x: '5%', y: '65%', delay: 3.2, size: 'text-base' },
          { text: "AWS", x: '88%', y: '72%', delay: 3.8, size: 'text-base' },
          { text: "Docker", x: '15%', y: '35%', delay: 4.4, size: 'text-base' },
          { text: "Jenkins", x: '82%', y: '28%', delay: 5.0, size: 'text-base' },
          { text: "LangChain", x: '25%', y: '78%', delay: 5.6, size: 'text-sm' },
          { text: "Flask", x: '75%', y: '15%', delay: 6.2, size: 'text-sm' },
          { text: "Linux", x: '45%', y: '92%', delay: 6.8, size: 'text-sm' },
          { text: "OpenAI", x: '95%', y: '68%', delay: 7.4, size: 'text-sm' },
          { text: "Freelance", x: '3%', y: '42%', delay: 8.0, size: 'text-sm' },
          { text: "B.Tech", x: '68%', y: '88%', delay: 8.6, size: 'text-sm' },
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
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Resume
            </h1>
            <motion.button
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </motion.button>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Info */}
              <motion.div 
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
              >
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-blue-600" />
                  Contact
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      shiwaniyaduka123@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      github.com/Shiwani-Yaduka
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      linkedin.com/in/shiwani12
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div 
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
              >
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <Star className="w-6 h-6 mr-2 text-yellow-500" />
                  Skills
                </h2>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div 
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
              >
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-green-500" />
                  Certifications
                </h2>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {cert.date}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Professional Summary */}
              <motion.div 
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Professional Summary
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Highly motivated AI + DevOps Engineer with expertise in building conversational AI systems, 
                  automated deployment pipelines, and cloud infrastructure. Proven track record of delivering 
                  scalable solutions using modern technologies like LangChain, AWS, Docker, and Jenkins. 
                  Passionate about continuous learning and innovation in the intersection of AI and cloud technologies.
                </p>
              </motion.div>

              {/* Experience */}
              <motion.div 
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <Briefcase className="w-7 h-7 mr-3 text-blue-600" />
                  Experience
                </h2>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-lg text-blue-600 dark:text-blue-400 mb-3">
                        {exp.company}
                      </p>
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div 
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <GraduationCap className="w-7 h-7 mr-3 text-purple-600" />
                  Education
                </h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-purple-500 pl-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {edu.degree}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-lg text-purple-600 dark:text-purple-400 mb-1">
                        {edu.field}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        GPA: {edu.gpa}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Awards */}
              <motion.div 
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <Award className="w-7 h-7 mr-3 text-yellow-500" />
                  Awards & Achievements
                </h2>
                <div className="space-y-6">
                  {awards.map((award, index) => (
                    <div key={index} className="border-l-4 border-yellow-500 pl-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {award.title}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {award.year}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {award.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;