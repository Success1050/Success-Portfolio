'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail, ExternalLink, Code2, Smartphone, Globe, Database, Terminal, Palette, Send, MessageCircle, Twitter } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'services', 'projects', 'experience', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // CV Download Handler
  const handleDownloadCV = () => {
    // Replace this URL with your actual CV location
    const cvUrl = '/your-cv.pdf'; // Or use a cloud storage link like: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID'
    
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'YourName_CV.pdf'; // This will be the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Placeholder data - replace with your actual data
  const services = [
    { icon: <Smartphone className="w-8 h-8" />, title: "Mobile App Development", desc: "Native and cross-platform mobile applications using React Native and Flutterflow" },
    { icon: <Globe className="w-8 h-8" />, title: "Web Development", desc: "Modern, responsive web applications using Next.js, React, and TypeScript" },
    { icon: <Database className="w-8 h-8" />, title: "Backend Development", desc: "Scalable APIs and server-side solutions with Node.js, python and databases" },
  ];

  const webProjects = [
    { title: "Christa Fashion", desc: "Full-stack online Fashion shopping platform with payment integration", tech: ["React.js", "TypeScript", "Tailwind", "Paystack"], link: "https://www.christafashiontv.com/", image: "/5.png" },
    { title: "SuperShopper", desc: "A platform where users earn through engagements, and businesses increase their sales by posting their business", tech: ["Next.js", "TypeScript", "Supabase"], link: "https://supershopper.app/", image: "/1.png" },
    { title: "FincBloc", desc: "A Crypto trading website", tech: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"], link: "https://fincbloc.vercel.app/", image: "/2.png" },
    { title: "SmartInvest", desc: "A Crypto investment website", tech: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"], link: "https://smartinvest-wine.vercel.app/", image: "/3.png" },
    { title: "Nonso Electricals", desc: "An Electricals website, where electricial items are sold", tech: ["Reactjs", "Tailwind", "TypeScript"], link: "https://nonso-electricals.vercel.app/", image: "/4.png" },
    { title: "Success-travels Agency", desc: "A Travel Agency website, where users can book their travel", tech: ["Reactjs", "Tailwind", "TypeScript"], link: "https://success-travels-fullstack-fx2z.vercel.app/", image: "/6.png" },
  ];

  const mobileProjects = [
    { title: "StudentSpark", desc: "A mobile application that makes studying easier for students", tech: ["React Native", "Supabase", "Expo"], image: "/7.png" },
    { title: "Vibemate", desc: "Connect and share moments with friends and partners", tech: ["React Native", "Expo", "Supabase"], image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop" },
    { title: "Food Delivery App", desc: "Order food from local restaurants", tech: ["Flutter", "Firebase", "Google Maps"], image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=500&h=300&fit=crop" },
  ];

  const allProjects = [...webProjects, ...mobileProjects];
  
  const getFilteredProjects = () => {
    if (activeProjectTab === 'web') return webProjects;
    if (activeProjectTab === 'mobile') return mobileProjects;
    return allProjects;
  };

  const experiences = [
    { role: "Senior Developer", company: "Company Name", period: "2022 - Present", desc: "Led development of multiple web and mobile applications" },
    { role: "Full Stack Developer", company: "Company Name", period: "2020 - 2022", desc: "Developed and maintained client projects" },
    { role: "Junior Developer", company: "Company Name", period: "2018 - 2020", desc: "Built responsive web applications" },
  ];

  const skills = [
    { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
    { category: "Mobile", items: ["React Native", "Flutter", "iOS", "Android"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"] },
    { category: "Tools", items: ["Git", "Docker", "Figma", "VS Code", "Postman"] },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'projects', 'experience', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${activeSection === item ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'services', 'projects', 'experience', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-slate-800 rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Code2 className="w-16 h-16 text-cyan-400" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Mobile App & Web Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Crafting beautiful digital experiences with modern technologies
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              View Projects
            </button>
            <button onClick={handleDownloadCV} className="px-8 py-3 border-2 border-cyan-500 rounded-full hover:bg-cyan-500/10 transition-all flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
          <div className="flex gap-6 justify-center mt-12">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a passionate developer specializing in creating exceptional digital experiences. With expertise in both mobile and web development, I bring ideas to life using cutting-edge technologies.
              </p>
              <p className="text-lg leading-relaxed">
                My approach combines technical excellence with creative problem-solving, ensuring that every project not only meets requirements but exceeds expectations.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and staying up-to-date with the latest industry trends.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all">
                <div className="text-3xl font-bold text-cyan-400 mb-2">30+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all">
                <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h2>
          
          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-800/50 p-1 rounded-lg border border-slate-700">
              <button
                onClick={() => setActiveProjectTab('all')}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeProjectTab === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveProjectTab('web')}
                className={`px-6 py-2 rounded-md transition-all flex items-center gap-2 ${
                  activeProjectTab === 'web'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Globe className="w-4 h-4" />
                Web Dev
              </button>
              <button
                onClick={() => setActiveProjectTab('mobile')}
                className={`px-6 py-2 rounded-md transition-all flex items-center gap-2 ${
                  activeProjectTab === 'mobile'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                Mobile Apps
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredProjects().map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group">
                <div className="relative overflow-hidden h-48">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {(project as any).link && (project as any).link !== '#' && (
                    <a href={(project as any).link} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-400">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{skill.category}</h3>
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="text-center mb-12">
            <p className="text-xl text-gray-400 mb-8">
              Have a project in mind or just want to chat? Feel free to reach out through any of these channels!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Contact Cards */}
            <a href="mailto:your.email@example.com" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="text-gray-400">your.email@example.com</p>
                </div>
              </div>
            </a>

            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">WhatsApp</h3>
                  <p className="text-gray-400">+1 234 567 890</p>
                </div>
              </div>
            </a>

            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">LinkedIn</h3>
                  <p className="text-gray-400">linkedin.com/in/yourprofile</p>
                </div>
              </div>
            </a>

            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Github className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">GitHub</h3>
                  <p className="text-gray-400">github.com/yourusername</p>
                </div>
              </div>
            </a>

            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Twitter className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Twitter</h3>
                  <p className="text-gray-400">@yourhandle</p>
                </div>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-center">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                <textarea
                  rows={5} 
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2 font-medium"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2024 Portfolio. Built with Next.js, TypeScript & Tailwind CSS</p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}