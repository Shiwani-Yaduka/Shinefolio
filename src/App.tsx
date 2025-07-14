import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import SmallProjects from './pages/SmallProjects';
import Blog from './pages/Blog';
import Resume from './pages/Resume';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Layout>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/small-projects" element={<SmallProjects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </AnimatePresence>
          </Layout>
          <Chatbot />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;