import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    
    // Static fallback data
    const staticProjects = [
        {
            _id: '1',
            title: 'E-Commerce Platform',
            description: 'A full-featured online store built with MERN stack. Includes user authentication, product management, and payment integration.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
            githubUrl: 'https://github.com',
            projectUrl: 'https://example.com',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?fit=crop&w=800&q=80',
            category: 'Web Development'
        },
        {
            _id: '2',
            title: 'Task Management App',
            description: 'A collaborative task manager with real-time updates using Socket.io. Features drag-and-drop interface and team workspaces.',
            technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
            githubUrl: 'https://github.com',
            projectUrl: 'https://example.com',
            image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?fit=crop&w=800&q=80',
            category: 'Productivity'
        },
        {
            _id: '3',
            title: 'Weather Dashboard',
            description: 'Real-time weather application using OpenWeatherMap API. Provides 7-day forecast and historical data visualization.',
            technologies: ['React', 'Chart.js', 'API Integration'],
            githubUrl: 'https://github.com',
            projectUrl: 'https://example.com',
            image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?fit=crop&w=800&q=80',
            category: 'API Integration'
        }
    ];

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Try fetching from API first (with short timeout)
                const res = await axios.get('/api/projects', { timeout: 1000 });
                setProjects(res.data);
            } catch (err) {
                // Fallback to Demo Mode (Local Storage) if API fails
                // This connects the Admin Panel inputs to the public view
                const savedProjects = localStorage.getItem('demoProjects');
                if (savedProjects) {
                    setProjects(JSON.parse(savedProjects));
                } else {
                    setProjects(staticProjects);
                }
            }
        };
        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                         <span className="text-neon-green font-medium tracking-wide text-sm">PORTFOLIO</span>
                         <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Selected Works</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={project._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden bg-dark-secondary border border-white/5"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img 
                                    src={project.image || project.images?.[0]} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-center justify-center gap-4">
                                     <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md border border-white/10">
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md border border-white/10">
                                        <ExternalLink className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                            
                            <div className="p-6 relative">
                                <div className="absolute -top-6 right-6 bg-primary w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-primary/40 transform group-hover:-translate-y-2 transition-transform duration-300">
                                    <ArrowUpRight className="text-white w-6 h-6" />
                                </div>

                                <span className="text-sm font-medium text-neon-purple mb-2 block">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {(project.technologies || []).slice(0, 3).map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                    {(project.technologies || []).length > 3 && (
                                         <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/5">
                                            +{(project.technologies || []).length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
