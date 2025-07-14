import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, ChevronUp, ChevronDown, Mic, Volume2, VolumeX } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm Shinny, Shiwani's personal AI assistant! 🤖✨ I know everything about her - from her favorite coding challenges to her secret superpowers! What would you like to discover about this amazing human?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isVoiceOutput, setIsVoiceOutput] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  // Enhanced knowledge base about Shiwani
  const knowledgeBase = {
    personal: {
      name: "Shiwani Yaduka",
      role: "AI + DevOps Engineer",
      description: "A brilliant tech enthusiast who transforms complex problems into elegant solutions. She's not just a developer - she's a digital architect who builds bridges between AI and cloud infrastructure.",
      personality: {
        traits: ["Problem Solver", "Team Player", "Fast Learner", "Achievement Focused", "Highly Motivated", "Optimistic Professional", "Proactive Mindset"],
        strengths: ["Analytical thinking", "Creative problem-solving", "Excellent communication", "Adaptability", "Attention to detail", "Leadership potential"],
        workStyle: "She thrives in dynamic environments, embraces challenges as opportunities, and maintains a structured approach to complex projects. Her proactive mindset means she's always thinking three steps ahead.",
        motivation: "Driven by the desire to create meaningful impact through technology, she's passionate about continuous learning and pushing the boundaries of what's possible with AI and cloud solutions."
      },
      background: {
        education: "Strong foundation in computer science and engineering principles",
        interests: ["AI/ML technologies", "Cloud architecture", "DevOps practices", "Innovation", "Problem-solving", "Team collaboration"],
        philosophy: "Believes in creating technology that serves humanity, with a focus on efficiency, security, and scalability."
      },
      email: "shiwaniyaduka123@gmail.com",
      location: "Focused on remote collaboration and global tech communities"
    },
    skills: {
      core: ["AWS", "Docker", "AI/ML", "Full Stack Development"],
      technologies: ["Python", "Streamlit", "Generative AI", "FPDF", "OpenAI", "HTML/CSS/JavaScript", "Gradio", "Docker", "SSH", "Linux", "Twilio", "Pywhatkit", "AWS Lambda", "Aurora MySQL", "CloudWatch", "Events", "MySQL Workbench"],
      levels: {
        "AWS": "Advanced - Cloud infrastructure expert with deep understanding of serverless architecture",
        "Docker": "Intermediate - Containerization specialist with deployment expertise", 
        "AI/ML": "Intermediate - Generative AI practitioner with practical implementation experience",
        "Full Stack": "Intermediate - End-to-end development with modern web technologies"
      },
      specialties: {
        "Cloud Architecture": "Designing scalable, cost-effective cloud solutions",
        "AI Integration": "Bridging AI capabilities with practical applications",
        "DevOps Automation": "Streamlining development and deployment processes",
        "Problem Solving": "Breaking down complex challenges into manageable solutions"
      }
    },
    projects: {
      "Smart To-Do List": {
        description: "A revolutionary productivity app that combines traditional task management with cutting-edge AI. What makes it special? It doesn't just track tasks - it uses Generative AI to automate task completion and generates downloadable reports. Built as a competition project, it showcases her ability to think beyond conventional solutions and create tools that actually make life easier.",
        tech: ["Python", "Streamlit", "Generative AI", "FPDF"],
        github: "https://github.com/Shiwani-Yaduka/SmartTo-DoListApp",
        highlights: ["AI-powered task automation", "Competition-winning design", "User-friendly interface", "Report generation"],
        impact: "Demonstrates her innovative approach to solving everyday problems with AI"
      },
      "VirtualHoney": {
        description: "A breakthrough in personalized AI communication. This isn't just another chatbot - it's a sophisticated system that can mimic specific personalities using generative AI. The project showcases her deep understanding of AI/ML concepts and her ability to create engaging user experiences. Built with a modular LangChain architecture, it's both technically impressive and practically useful.",
        tech: ["Generative AI", "OpenAI", "Python", "HTML/CSS/JavaScript"],
        github: "https://github.com/Shiwani-Yaduka/VirtualHoney",
        highlights: ["Personality mimicry", "Modular architecture", "LangChain integration", "Advanced AI concepts"],
        impact: "Shows her expertise in cutting-edge AI technologies and user experience design"
      },
      "Remote SSH Menu-Based Dashboard": {
        description: "A game-changer for remote system administration. This secure dashboard allows users to execute Linux commands over SSH through an intuitive web-based menu system. It's perfect for remote system admins or students learning command-line automation. The project demonstrates her understanding of security, user experience, and practical system administration needs.",
        tech: ["Python", "Gradio", "Docker", "SSH", "Linux", "Twilio", "Pywhatkit"],
        github: "https://github.com/Shiwani-Yaduka/Remote-SSH-Menu-Based",
        highlights: ["Secure remote access", "User-friendly interface", "Docker containerization", "Educational value"],
        impact: "Proves her ability to create secure, practical tools for real-world scenarios"
      },
      "Smart Book Reading Tracker": {
        description: "A masterpiece of serverless architecture using AWS. This book tracker doesn't just log reading habits - it analyzes patterns, visualizes data, and uses scheduled events and database triggers to automate reminders and reading statistics. Designed for scalability and cost-effectiveness, it's a perfect example of cloud-native thinking.",
        tech: ["AWS Lambda", "Aurora MySQL", "CloudWatch", "Events", "MySQL Workbench"],
        github: "https://github.com/Shiwani-Yaduka/SMART_BOOK_TRACKING-AWS",
        highlights: ["Serverless architecture", "Data analysis", "Automated reminders", "Cost optimization"],
        impact: "Demonstrates her mastery of cloud services and data-driven application design"
      }
    },
    achievements: {
      stats: {
        experience: "1+ Years",
        projects: "20+ Projects Completed",
        technologies: "10+ Tools & Technologies",
        satisfaction: "100% Client Satisfaction"
      },
      highlights: [
        "Successfully delivered multiple AI-powered applications",
        "Demonstrated expertise in cloud architecture and serverless computing",
        "Created innovative solutions that bridge AI and practical applications",
        "Maintained high standards of code quality and user experience",
        "Showed strong problem-solving abilities across diverse technical challenges"
      ]
    },
    social: {
      github: "https://github.com/Shiwani-Yaduka",
      linkedin: "https://linkedin.com/in/shiwani12"
    },
    workPhilosophy: {
      approach: "She believes in creating technology that serves real human needs. Every project starts with understanding the problem, then designing elegant solutions that are both technically sound and user-friendly.",
      values: ["Innovation", "Quality", "User Experience", "Continuous Learning", "Collaboration", "Security"],
      goals: "To push the boundaries of what's possible with AI and cloud technologies while creating meaningful impact in people's lives."
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Voice output: speak bot responses
  useEffect(() => {
    if (!isVoiceOutput) return;
    if (!('speechSynthesis' in window)) return;
    const lastBotMsg = messages[messages.length - 1];
    if (lastBotMsg && lastBotMsg.sender === 'bot') {
      const utter = new window.SpeechSynthesisUtterance(lastBotMsg.text.replace(/[*_~`#>\-]/g, ''));
      utter.rate = 1.35; // Increased speed for more natural fast speech
      utter.pitch = 1.1;
      utter.lang = 'en-US';
      // Select a realistic female voice if available (by name)
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice =
        voices.find(v => v.lang.startsWith('en') && /zira|samantha|female|woman|google us english/i.test(v.name)) ||
        voices.find(v => v.lang.startsWith('en'));
      if (preferredVoice) utter.voice = preferredVoice;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
    }
  }, [messages, isVoiceOutput]);

  // Cancel speech immediately if voice output is turned off
  useEffect(() => {
    if (!isVoiceOutput && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, [isVoiceOutput]);

  // Voice input: start/stop speech recognition
  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Sorry, your browser does not support speech recognition.');
      return;
    }
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
        inputRef.current?.focus();
      };
      recognitionRef.current.onerror = () => setIsListening(false);
      recognitionRef.current.onend = () => setIsListening(false);
    }
    if (!isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    } else {
      setIsListening(false);
      recognitionRef.current.stop();
    }
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Navigation help
    if (message.includes('navigate') || message.includes('menu') || message.includes('sections')) {
      return `🚀 **Ready to explore? Let me be your guide!** 

Here's your **digital roadmap** to Shiwani's amazing portfolio:

🎯 **🏠 Home Sweet Home** - Where the magic begins! Introduction and overview
👑 **👤 About the Star** - Discover Shiwani's journey, superpowers, and what makes her tick
💎 **💼 Project Showcase** - Feast your eyes on her mind-blowing creations
📜 **📄 Resume & Journey** - The professional story that speaks volumes
⚡ **🛠️ Tech Arsenal** - The tools and technologies that power her innovations
✍️ **📝 Blog & Insights** - Deep thoughts and industry wisdom

**Pro tip:** 🎮 Just click that sleek navigation menu at the top and let the adventure begin!`;
    }

    // About Shiwani
    if (message.includes('who') && message.includes('shiwani') || message.includes('about')) {
      return `🌟 **Meet Shiwani Yaduka - The Tech Wizard!** 🌟

Picture this: A brilliant **AI + DevOps Engineer** who doesn't just code, she creates digital magic! ✨

**The Shiwani Story:**
${knowledgeBase.personal.description}

**Her Superpowers:**
${knowledgeBase.personal.personality.traits.map(trait => `🦸‍♀️ **${trait}**`).join('\n')}

**Her Secret Strengths:**
${knowledgeBase.personal.personality.strengths.map(strength => `💪 **${strength}**`).join('\n')}

**Work Style:**
${knowledgeBase.personal.personality.workStyle}

**What Drives Her:**
${knowledgeBase.personal.personality.motivation}

**Ready to connect?** 📧 ${knowledgeBase.personal.email}`;
    }

    // Skills and expertise
    if (message.includes('skill') || message.includes('technology') || message.includes('tech') || message.includes('expertise')) {
      return `🔥 **Shiwani's Tech Arsenal - Prepare to be Amazed!** 🔥

**Her Core Superpowers:**
${Object.entries(knowledgeBase.skills.levels).map(([skill, level]) => `⚡ **${skill}** (${level})`).join('\n')}

**Her Specialties:**
${Object.entries(knowledgeBase.skills.specialties).map(([specialty, description]) => `🎯 **${specialty}** - ${description}`).join('\n')}

**The Tech Toolbox:**
${knowledgeBase.skills.technologies.join(' • ')}

**The Numbers Don't Lie:** 
With ${knowledgeBase.achievements.stats.technologies} and ${knowledgeBase.achievements.stats.experience} under her belt, she's not just experienced - she's battle-tested! 💪

*"In a world full of developers, be a Shiwani!"* 🚀`;
    }

    // Projects
    if (message.includes('project') || message.includes('work')) {
      return `🎬 **Shiwani's Blockbuster Projects - Coming to a GitHub Near You!** 🎬

**The Greatest Hits:**

1. 🎯 **Smart To-Do List** - Where AI meets productivity! Task automation that actually works
2. 🍯 **VirtualHoney** - The chatbot that's sweeter than honey! Personalized AI conversations
3. 🔐 **Remote SSH Dashboard** - Secure command execution that feels like magic
4. 📚 **Smart Book Reading Tracker** - AWS-powered reading habits that stick

**The Stats That Matter:**
${knowledgeBase.achievements.stats.projects} with ${knowledgeBase.achievements.stats.satisfaction} - because excellence isn't just a goal, it's a habit! 🏆

**Want the behind-the-scenes scoop?** Just ask me about any specific project and I'll spill all the tech tea! ☕`;
    }

    // Specific project details
    for (const [projectName, project] of Object.entries(knowledgeBase.projects)) {
      if (message.includes(projectName.toLowerCase()) || 
          (projectName === "Smart To-Do List" && message.includes('todo')) ||
          (projectName === "VirtualHoney" && message.includes('virtual')) ||
          (projectName === "Remote SSH Menu-Based Dashboard" && message.includes('ssh')) ||
          (projectName === "Smart Book Reading Tracker" && message.includes('book'))) {
        return `🎭 **${projectName} - The Full Story!** 🎭

**The Plot:** ${project.description}

**The Tech Stack (AKA The Magic Ingredients):**
${project.tech.join(' ✨ ')}

**Key Highlights:**
${project.highlights.map(highlight => `✨ ${highlight}`).join('\n')}

**Impact:** ${project.impact}

**🎬 Watch the Magic Unfold:** ${project.github}

*This isn't just code - it's digital art!* 🎨`;
      }
    }

    // Contact and social
    if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
      return `📞 **Ready to Start Something Amazing? Let's Connect!** 📞

**Your VIP Access to Shiwani:**

📧 **Email:** ${knowledgeBase.personal.email} *(She responds faster than a server reboot!)*
🔗 **LinkedIn:** ${knowledgeBase.social.linkedin} *(Professional networking with style)*
🐙 **GitHub:** ${knowledgeBase.social.github} *(Where the code magic happens)*

**The Invitation:** 
She's always open to discussing new projects, opportunities, or just geeking out about the latest tech trends! 

*"The best collaborations start with a simple hello!"* 👋✨`;
    }

    // Experience and background
    if (message.includes('experience') || message.includes('background') || message.includes('years')) {
      return `📈 **Shiwani's Journey - From Code Newbie to Tech Legend!** 📈

**The Epic Stats:**
⏰ **Experience:** ${knowledgeBase.achievements.stats.experience} *(Every day is a new adventure!)*
📊 **Projects:** ${knowledgeBase.achievements.stats.projects} *(Each one tells a story)*
🛠️ **Technologies:** ${knowledgeBase.achievements.stats.technologies} *(The more, the merrier!)*
⭐ **Satisfaction:** ${knowledgeBase.achievements.stats.satisfaction} *(Excellence is her middle name)*

**Key Achievements:**
${knowledgeBase.achievements.highlights.map(highlight => `🏆 ${highlight}`).join('\n')}

**Work Philosophy:**
${knowledgeBase.workPhilosophy.approach}

**Her Values:**
${knowledgeBase.workPhilosophy.values.map(value => `💎 ${value}`).join('\n')}

**Her Mission:**
${knowledgeBase.workPhilosophy.goals}

*"In the world of tech, she's not just keeping up - she's leading the way!"* 🚀🌟`;
    }

    // Help
    if (message.includes('help') || message.includes('what can you do')) {
      return `🎪 **Welcome to the Shiwani Show - I'm Shinny, Your Backstage Pass!** 🎪

**What I Can Do (AKA My Superpowers):**

🔍 **Shiwani's Story** - Get the full scoop on this amazing human
📁 **Website Navigation** - I'll be your personal GPS through this digital wonderland
💼 **Project Deep Dives** - Behind-the-scenes access to her creations
🛠️ **Skills & Tech Stack** - Discover her digital superpowers
📞 **Contact & Connect** - Bridge the gap between you and greatness
🎯 **Personality & Philosophy** - Learn what makes her tick
🏆 **Achievements & Impact** - See her journey and accomplishments
❓ **General Q&A** - I'm basically a walking, talking Shiwani encyclopedia!

**🎯 Quick Start Examples:**
• "Tell me about Shiwani" *(The origin story)*
• "What projects has she worked on?" *(The greatest hits)*
• "What are her skills?" *(The superpower reveal)*
• "How can I contact her?" *(The connection)*
• "What's her work philosophy?" *(The mindset)*
• "Tell me about her personality" *(The human side)*

*I'm not just a chatbot - I'm your personal Shiwani concierge!* 🎭✨`;
    }

    // Personality and philosophy
    if (message.includes('personality') || message.includes('philosophy') || message.includes('mindset') || message.includes('work style')) {
      return `🧠 **Shiwani's Mind - The Inner Workings of a Tech Genius!** 🧠

**Her Personality DNA:**
${knowledgeBase.personal.personality.traits.map(trait => `✨ **${trait}**`).join('\n')}

**Her Secret Strengths:**
${knowledgeBase.personal.personality.strengths.map(strength => `💪 **${strength}**`).join('\n')}

**How She Works:**
${knowledgeBase.personal.personality.workStyle}

**What Drives Her:**
${knowledgeBase.personal.personality.motivation}

**Her Philosophy:**
${knowledgeBase.personal.background.philosophy}

**Her Approach:**
${knowledgeBase.workPhilosophy.approach}

**Her Values:**
${knowledgeBase.workPhilosophy.values.map(value => `💎 **${value}**`).join('\n')}

*"She doesn't just solve problems - she transforms them into opportunities!"* 🌟`;
    }

    // Background and interests
    if (message.includes('background') || message.includes('interests') || message.includes('education') || message.includes('what drives')) {
      return `🎓 **Shiwani's Journey - The Making of a Tech Pioneer!** 🎓

**Educational Foundation:**
${knowledgeBase.personal.background.education}

**What Lights Her Fire:**
${knowledgeBase.personal.background.interests.map(interest => `🔥 **${interest}**`).join('\n')}

**Her Core Philosophy:**
${knowledgeBase.personal.background.philosophy}

**Her Mission:**
${knowledgeBase.workPhilosophy.goals}

**What Makes Her Special:**
She's not just technically skilled - she's a visionary who sees the bigger picture. Her ability to bridge AI capabilities with practical applications shows a deep understanding of both technology and human needs.

*"In a world of specialists, she's a bridge builder!"* 🌉✨`;
    }

    // Technology-specific responses
    const techKeywords: Record<string, {
      name: string;
      description: string;
      usage: string;
      level: string;
      project?: string;
      projects?: string[];
    }> = {
      'twilio': {
        name: 'Twilio',
        description: 'A cloud communications platform that enables developers to build, scale and operate real-time communications within software applications.',
        usage: 'Shiwani used Twilio in her Remote SSH Menu-Based Dashboard project for sending notifications and alerts. She integrated it with Python to enable SMS notifications for system events and command executions.',
        level: 'Intermediate',
        project: 'Remote SSH Menu-Based Dashboard'
      },
      'aws': {
        name: 'AWS (Amazon Web Services)',
        description: 'A comprehensive cloud computing platform offering over 200 fully featured services.',
        usage: 'Shiwani is an AWS expert! She used AWS Lambda, Aurora MySQL, CloudWatch, and Events in her Smart Book Reading Tracker project. She has advanced knowledge of serverless architecture and cloud infrastructure.',
        level: 'Advanced',
        project: 'Smart Book Reading Tracker'
      },
      'docker': {
        name: 'Docker',
        description: 'A platform for developing, shipping, and running applications in containers.',
        usage: 'Shiwani used Docker in her Remote SSH Menu-Based Dashboard project for containerization and deployment. She has intermediate expertise in containerization and deployment strategies.',
        level: 'Intermediate',
        project: 'Remote SSH Menu-Based Dashboard'
      },
      'python': {
        name: 'Python',
        description: 'A high-level, interpreted programming language known for its simplicity and readability.',
        usage: 'Python is Shiwani\'s primary programming language! She used it extensively across all her projects - from AI/ML applications to web development and automation. She\'s proficient in Python for data science, web frameworks, and automation.',
        level: 'Advanced',
        projects: ['Smart To-Do List', 'VirtualHoney', 'Remote SSH Menu-Based Dashboard']
      },
      'streamlit': {
        name: 'Streamlit',
        description: 'An open-source Python library for creating web applications for data science and machine learning.',
        usage: 'Shiwani used Streamlit in her Smart To-Do List project to create an intuitive web interface for task management. She demonstrated expertise in building user-friendly web applications with Python.',
        level: 'Intermediate',
        project: 'Smart To-Do List'
      },
      'openai': {
        name: 'OpenAI',
        description: 'An AI research and deployment company, known for GPT models and AI APIs.',
        usage: 'Shiwani integrated OpenAI APIs in her VirtualHoney project for creating personalized AI chatbots. She has practical experience with generative AI and natural language processing.',
        level: 'Intermediate',
        project: 'VirtualHoney'
      },
      'gradio': {
        name: 'Gradio',
        description: 'A Python library for creating customizable web interfaces for machine learning models.',
        usage: 'Shiwani used Gradio in her Remote SSH Menu-Based Dashboard project to create a web-based interface for executing Linux commands. She showed expertise in building secure web applications.',
        level: 'Intermediate',
        project: 'Remote SSH Menu-Based Dashboard'
      },
      'mysql': {
        name: 'MySQL',
        description: 'An open-source relational database management system.',
        usage: 'Shiwani used Aurora MySQL in her Smart Book Reading Tracker project for data storage and management. She has experience with database design, queries, and optimization.',
        level: 'Intermediate',
        project: 'Smart Book Reading Tracker'
      },
      'ssh': {
        name: 'SSH (Secure Shell)',
        description: 'A cryptographic network protocol for secure remote access to systems.',
        usage: 'Shiwani implemented SSH functionality in her Remote SSH Menu-Based Dashboard project for secure remote command execution. She has expertise in secure remote system administration.',
        level: 'Intermediate',
        project: 'Remote SSH Menu-Based Dashboard'
      },
      'linux': {
        name: 'Linux',
        description: 'An open-source operating system kernel and family of Unix-like operating systems.',
        usage: 'Shiwani has strong Linux skills, demonstrated in her Remote SSH Menu-Based Dashboard project where she created tools for Linux command automation and system administration.',
        level: 'Intermediate',
        project: 'Remote SSH Menu-Based Dashboard'
      },
      'ai': {
        name: 'Artificial Intelligence',
        description: 'The simulation of human intelligence in machines.',
        usage: 'Shiwani is passionate about AI! She worked with generative AI in her VirtualHoney project and integrated AI capabilities in her Smart To-Do List for task automation. She has practical experience with modern AI technologies.',
        level: 'Intermediate',
        projects: ['VirtualHoney', 'Smart To-Do List']
      },
      'ml': {
        name: 'Machine Learning',
        description: 'A subset of AI that enables systems to learn and improve from experience.',
        usage: 'Shiwani has experience with machine learning through her work with generative AI models and natural language processing in her projects. She understands both the theoretical and practical aspects of ML.',
        level: 'Intermediate',
        projects: ['VirtualHoney', 'Smart To-Do List']
      },
      'generative ai': {
        name: 'Generative AI',
        description: 'AI systems that can generate new content, such as text, images, or code.',
        usage: 'Shiwani is actively working with generative AI! She used it in her VirtualHoney project for personality mimicry and in her Smart To-Do List for task automation. She has hands-on experience with modern generative AI technologies.',
        level: 'Intermediate',
        projects: ['VirtualHoney', 'Smart To-Do List']
      }
    };

    // Check for technology-specific questions
    for (const [keyword, tech] of Object.entries(techKeywords)) {
      if (message.toLowerCase().includes(keyword.toLowerCase())) {
        const projectText = tech.projects 
          ? tech.projects.map((p: string) => `🎯 **${p}**`).join('\n')
          : `🎯 **${tech.project}**`;
        
        return `🔧 **${tech.name} - Shiwani's Expertise!** 🔧

**What is ${tech.name}?**
${tech.description}

**How Shiwani Uses It:**
${tech.usage}

**Her Skill Level:** ${tech.level}

**Projects Using ${tech.name}:**
${projectText}

**Why This Matters:**
Shiwani doesn't just learn technologies - she masters them and applies them to solve real-world problems. Her experience with ${tech.name} shows her ability to adapt and innovate with cutting-edge tools!

*"Technology is just a tool - it's how you use it that matters!"* 🚀✨`;
      }
    }

    // Social/contact robust matching
    const socialPatterns = [
      /linkedin|linked ?in|inkedin|inked in/i,
      /github|git hub|ghub/i,
      /email|mail|contact|reach/i
    ];
    if (socialPatterns[0].test(message)) {
      return `🔗 **Connect with Shiwani on LinkedIn!**\n\nHere's her professional profile:\n${knowledgeBase.social.linkedin}\n\nFeel free to send a connection request or message—she loves meeting new people in tech! 🚀`;
    }
    if (socialPatterns[1].test(message)) {
      return `🐙 **Check out Shiwani's GitHub!**\n\nExplore her projects, code, and open-source contributions:\n${knowledgeBase.social.github}\n\nDon't forget to star your favorite repos! ⭐`;
    }
    if (socialPatterns[2].test(message)) {
      return `📧 **Contact Shiwani Directly!**\n\nEmail: ${knowledgeBase.personal.email}\n\nShe's always open to new opportunities, collaborations, or just a friendly tech chat!`;
    }

    // Default response
    return `🤔 **Hmm, that's an interesting question!** 

I'm not quite sure I caught that one, but no worries - I'm here to help! 

**Try asking me about:**
• Shiwani's background and journey
• Her amazing projects and creations
• Her skills and tech expertise
• How to navigate this awesome website
• How to get in touch with her
• Specific technologies like AWS, Python, Docker, Twilio, AI/ML, etc.
• Her personality and work style
• Her achievements and impact

**Or just type "help" and I'll show you everything I can do!** 

*Remember: There are no silly questions, only opportunities to learn something awesome!* 🌟`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-3 right-3 z-50 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group animate-bounce-slow"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-30"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.button>

      {/* Custom bounce animation for more visibility */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
      `}</style>

      {/* Enhanced Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 50, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50, rotateY: 15 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          >
            {/* Enhanced Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-5 flex items-center justify-between relative overflow-hidden">
              {/* Animated background elements */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="flex items-center space-x-4 relative z-10">
                <motion.div 
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Bot className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg">Shinny 🤖✨</h3>
                  <p className="text-sm opacity-90 flex items-center">
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full mr-2"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Shiwani's Personal AI Assistant
                  </p>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-all duration-300 relative z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Enhanced Messages */}
            <div className="h-80 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-900/50 dark:to-gray-800/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl shadow-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm text-gray-800 dark:text-gray-200 border border-gray-200/50 dark:border-gray-600/50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {message.sender === 'bot' && (
                        <motion.div
                          className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Bot className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                      <div className="whitespace-pre-wrap text-sm leading-relaxed font-medium">{message.text}</div>
                      {message.sender === 'user' && (
                        <motion.div
                          className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <User className="w-3 h-3" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Enhanced Typing indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/50 dark:border-gray-600/50 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Bot className="w-3 h-3 text-white" />
                      </motion.div>
                      <div className="flex space-x-2">
                        <motion.div
                          className="w-3 h-3 bg-blue-500 rounded-full"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-3 h-3 bg-purple-500 rounded-full"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-3 h-3 bg-pink-500 rounded-full"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Enhanced Input with Voice */}
            <div className="p-5 border-t border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="flex space-x-3 items-center">
                {/* Voice output toggle */}
                <button
                  onClick={() => setIsVoiceOutput((v) => !v)}
                  className="p-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 border border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                  title={isVoiceOutput ? 'Disable Voice Output' : 'Enable Voice Output'}
                  aria-label={isVoiceOutput ? 'Disable Voice Output' : 'Enable Voice Output'}
                >
                  {isVoiceOutput ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                </button>
                {/* Voice input button */}
                <button
                  onClick={handleVoiceInput}
                  className={`p-2 rounded-full border ${isListening ? 'bg-red-100 border-red-400 animate-pulse' : 'bg-gradient-to-r from-blue-100 to-purple-100 border-blue-300 dark:from-blue-900 dark:to-purple-900 dark:border-blue-700'} text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition`}
                  title={isListening ? 'Listening...' : 'Voice Input'}
                  aria-label={isListening ? 'Listening...' : 'Voice Input'}
                >
                  <Mic className={`w-5 h-5 ${isListening ? 'text-red-500' : ''}`} />
                </button>
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about Shiwani..."
                    className="w-full px-4 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:bg-gray-700/50 dark:text-white text-sm font-medium placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm"
                  />
                  <motion.div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    💬
                  </motion.div>
                </div>
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot; 