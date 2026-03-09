import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    // Static project data
    const projects = [
        {
            _id: '1',
            title: 'CiviX',
            description: 'A comprehensive web application with advanced features and a modern UI.',
            technologies: ['TypeScript', 'React', 'Node.js'],
            githubUrl: 'https://github.com/SauravKumar81/CiviX',
            projectUrl: 'https://civi-x.vercel.app',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=800&q=80',
            category: 'Web Development'
        },
        {
            _id: '2',
            title: 'Controller-ps5',
            description: 'An interactive replication of a PS5 Controller user interface built focusing on advanced styling.',
            technologies: ['CSS', 'JavaScript', 'HTML'],
            githubUrl: 'https://github.com/SauravKumar81/Controller-ps5',
            projectUrl: 'https://ps5-delta.vercel.app',
            image: '/images/ps5_controller.png',
            category: 'UI/UX Design'
        },
        {
            _id: '3',
            title: 'Intenview Prep',
            description: 'A platform aimed at helping users prepare for technical interviews with curated questions.',
            technologies: ['TypeScript', 'Next.js'],
            githubUrl: 'https://github.com/SauravKumar81/intenview_prep',
            projectUrl: 'https://intenview-prep.vercel.app',
            image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?fit=crop&w=800&q=80',
            category: 'Education'
        },
        {
            _id: '4',
            title: 'Wallet',
            description: 'A secure and functional digital wallet application for tracking and managing assets.',
            technologies: ['JavaScript', 'React'],
            githubUrl: 'https://github.com/SauravKumar81/Wallet',
            projectUrl: 'https://kettywallet.vercel.app',
            image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?fit=crop&w=800&q=80',
            category: 'Finance / Web3'
        },
        {
            _id: '5',
            title: 'AnonCare',
            description: 'Anonymous Mental Health Chat application allowing users to connect and support each other securely.',
            technologies: ['TypeScript', 'Node.js', 'Socket.io'],
            githubUrl: 'https://github.com/SauravKumar81/AnonCare',
            projectUrl: 'https://anon-care.vercel.app',
            image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?fit=crop&w=800&q=80',
            category: 'Full Stack App'
        },
        {
            _id: '6',
            title: 'RELTO Hackathon 3.0',
            description: 'Project developed during the RELTO Hackathon showcasing innovative problem-solving.',
            technologies: ['TypeScript', 'Next.js'],
            githubUrl: 'https://github.com/SauravKumar81/RELTO-Hackathon-3.0',
            projectUrl: 'https://relto-eta.vercel.app/',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=800&q=80',
            category: 'Hackathon'
        },
        {
            _id: '7',
            title: 'Zomato Clone',
            description: 'A responsive clone of the popular food delivery app Zomato.',
            technologies: ['JavaScript', 'React'],
            githubUrl: 'https://github.com/SauravKumar81/Zomato',
            projectUrl: 'https://zomato-xi-jet.vercel.app',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?fit=crop&w=800&q=80',
            category: 'Web Clone'
        },
        {
            _id: '8',
            title: 'Two Good Co. Design',
            description: 'Creative and responsive design implementation for Two Good Co.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            githubUrl: 'https://github.com/SauravKumar81/Two-Good-Co.-',
            projectUrl: 'https://twogoodco12.netlify.app/',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?fit=crop&w=800&q=80',
            category: 'UI/UX Design'
        }
    ];

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
