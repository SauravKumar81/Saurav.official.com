import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const DEFAULT_IMAGE = '/images/default_project.png';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;

    const categories = ['All', 'UI', 'Fullstack', 'Other'];

    // Static project data categorized into UI, Fullstack, Other
    const projects = [
        {
            _id: '1',
            title: 'CiviX',
            description: 'A comprehensive web application with advanced features and a modern UI.',
            technologies: ['TypeScript', 'React', 'Node.js'],
            githubUrl: 'https://github.com/SauravKumar81/CiviX',
            projectUrl: 'https://civi-x.vercel.app',
            image: '',
            category: 'Fullstack'
        },
        {
            _id: '2',
            title: 'Controller-ps5',
            description: 'An interactive replication of a PS5 Controller user interface built focusing on advanced styling.',
            technologies: ['CSS', 'JavaScript', 'HTML'],
            githubUrl: 'https://github.com/SauravKumar81/Controller-ps5',
            projectUrl: 'https://ps5-delta.vercel.app',
            image: '/images/ps5_controller.png',
            category: 'UI'
        },
        // {
        //     _id: '3',
        //     title: 'Intenview Prep',
        //     description: 'A platform aimed at helping users prepare for technical interviews with curated questions.',
        //     technologies: ['TypeScript', 'Next.js'],
        //     githubUrl: 'https://github.com/SauravKumar81/intenview_prep',
        //     projectUrl: 'https://intenview-prep.vercel.app',
        //     image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?fit=crop&w=800&q=80',
        //     category: 'Fullstack'
        // },
        {
            _id: '4',
            title: 'Wallet',
            description: 'A secure and functional digital wallet application for tracking and managing assets.',
            technologies: ['JavaScript', 'React'],
            githubUrl: 'https://github.com/SauravKumar81/Wallet',
            projectUrl: 'https://kettywallet.vercel.app',
            image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?fit=crop&w=800&q=80',
            category: 'Fullstack'
        },


        {
            _id: '6',
            title: 'RELTO Hackathon 3.0',
            description: 'Project developed during the RELTO Hackathon showcasing innovative problem-solving.',
            technologies: ['TypeScript', 'Next.js'],
            githubUrl: 'https://github.com/SauravKumar81/RELTO-Hackathon-3.0',
            projectUrl: 'https://relto-eta.vercel.app/',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=800&q=80',
            category: 'Other'
        },
        {
            _id: '382837827376',
            title: 'Hiroto_Sato',
            description: 'An immersive futuristic 3D portfolio website showcasing personal identity, skills, projects, and creative expertise through cinematic visuals, smooth animations, interactive sections, and premium modern UI/UX inspired by award-winning WebGL and Awwwards experiences.',
            technologies: ['TypeScript', 'Next.js'],
            githubUrl: 'https://github.com/SauravKumar81/Hiroto_Sato/',
            projectUrl: 'https://hiroto-sato.vercel.app/',
            image: '',
            category: 'UI'
        },

        {
            _id: '8',
            title: 'Two Good Co. Design',
            description: 'Creative and responsive design implementation for Two Good Co.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            githubUrl: 'https://github.com/SauravKumar81/Two-Good-Co.-',
            projectUrl: 'https://twogoodco12.netlify.app/',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?fit=crop&w=800&q=80',
            category: 'UI'
        },
        {
            _id: "1195218683",
            title: "Keynote Event Conference",
            description: "A modern conference and keynote event management website landing page.",
            technologies: ["TypeScript", "React"],
            githubUrl: "https://github.com/SauravKumar81/Keynote-Event-Conference-",
            projectUrl: "https://keynote-event-conference-3std.vercel.app",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?fit=crop&w=800&q=80",
            category: "UI"
        },
        {
            "_id": "1205317263",
            "title": "VitalGuard_project",
            "description": "Minor Project",
            "technologies": [],
            "githubUrl": "https://github.com/SauravKumar81/VitalGuard_project",
            "projectUrl": "",
            "image": "",
            "category": "Fullstack",
            "visibility": "public"
        },
        {
            "_id": "1173773911",
            "title": "poch-design-studio",
            "description": "",
            "technologies": [
                "JavaScript"
            ],
            "githubUrl": "https://github.com/SauravKumar81/poch-design-studio",
            "projectUrl": "https://poch-design-studio.vercel.app",
            "image": "",
            "category": "UI",
            "visibility": "public"
        }, {
            "_id": "1245662530",
            "title": "zenith-portfolio",
            "description": "An immersive futuristic 3D portfolio website showcasing personal identity, skills, projects, and creative expertise through cinematic visuals, smooth animations, interactive sections, and premium modern UI/UX inspired by award-winning WebGL and Awwwards experiences.",
            "technologies": [
                "TypeScript"
            ],
            "githubUrl": "https://github.com/SauravKumar81/zenith-portfolio",
            "projectUrl": "https://zenith-portfolio-eight.vercel.app",
            "image": "",
            "category": "UI",
            "visibility": "public"
        },
        {
            "_id": "1183590060",
            "title": "x-wallet",
            "description": "",
            "technologies": [
                "JavaScript"
            ],
            "githubUrl": "https://github.com/Dhiraj9283/x-wallet",
            "projectUrl": "https://x-wallet-three.vercel.app/",
            "image": "",
            "category": "Other",
            "visibility": "public"
        }, {
            "_id": "1282876085",
            "title": "norell",
            "description": "Norell — Portfolio Website Template for Creative Studios and Agencies",
            "technologies": [
                "TypeScript"
            ],
            "githubUrl": "",
            "projectUrl": "https://norell-beta.vercel.app",
            "image": "",
            "category": "UI",
            "visibility": "private"
        },
        {
            "_id": "1268035167",
            "title": "Shaderloom",
            "description": "A self-contained web tool that generates looping abstract shader art: liquid chrome, silk ribbons, soft gradient blooms, aura rings, light rays, halftone fields, data glyphs, reeded glass and pixel mosaics. Everything is rendered in real time with WebGL2 and every animation is a mathematically perfect loop.",
            "technologies": [
                "JavaScript"
            ],
            "githubUrl": "",
            "projectUrl": "https://shaderloom.vercel.app",
            "image": "",
            "category": "Other",
            "visibility": "private"
        },
        {
            "_id": "1267359587",
            "title": "Tillsite",
            "description": "",
            "technologies": [
                "TypeScript"
            ],
            "githubUrl": "",
            "projectUrl": "https://www.tillsite.com/",
            "image": "",
            "category": "Fullstack",
            "visibility": "private"
        },
        {
            "_id": "1270014474",
            "title": "Hospital",
            "description": "",
            "technologies": [
                "TypeScript"
            ],
            "githubUrl": "",
            "projectUrl": "https://hospital-gules-seven.vercel.app",
            "image": "",
            "category": "Other",
            "visibility": "private"
        },
    ];

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setCurrentPage(1);
    };

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category.toLowerCase() === activeCategory.toLowerCase());

    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
    const paginatedProjects = filteredProjects.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <span className="text-neon-green font-medium tracking-wide text-sm uppercase">Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Selected Works</h2>
                    </div>

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap gap-2 p-1.5 bg-dark-secondary/80 border border-white/10 rounded-xl backdrop-blur-md">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                                    ? 'text-white'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="activeProjectTab"
                                        className="absolute inset-0 bg-primary rounded-lg -z-10 shadow-lg shadow-primary/30"
                                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                    />
                                )}
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Animated Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {paginatedProjects.map((project, index) => {
                            const projectImgSrc = (project.image && project.image.trim() !== '')
                                ? project.image
                                : ((project.images?.[0] && project.images[0].trim() !== '') ? project.images[0] : DEFAULT_IMAGE);

                            const isPrivate = project.visibility === 'private' || !project.githubUrl || project.githubUrl.trim() === '';

                            return (
                                <motion.div
                                    layout
                                    key={project._id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="group relative rounded-2xl overflow-hidden bg-dark-secondary border border-white/5 flex flex-col"
                                >
                                    <div className="h-64 overflow-hidden relative bg-black/40 flex items-center justify-center">
                                        <img
                                            src={projectImgSrc}
                                            alt={project.title}
                                            onError={(e) => {
                                                e.currentTarget.src = DEFAULT_IMAGE;
                                            }}
                                            className={`w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out ${projectImgSrc === DEFAULT_IMAGE ? 'object-contain p-8 opacity-80' : 'object-cover'
                                                }`}
                                        />
                                        <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-center justify-center gap-4">
                                            {!isPrivate && (
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md border border-white/10" title="View Source Code">
                                                    <Github className="w-6 h-6" />
                                                </a>
                                            )}
                                            {project.projectUrl && (
                                                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md border border-white/10" title="Live Preview">
                                                    <ExternalLink className="w-6 h-6" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-6 relative flex-1 flex flex-col justify-between">
                                        <div className="absolute -top-6 right-6 bg-primary w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-primary/40 transform group-hover:-translate-y-2 transition-transform duration-300">
                                            <ArrowUpRight className="text-white w-6 h-6" />
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/20 text-neon-purple border border-primary/30">
                                                    {project.category}
                                                </span>
                                                {isPrivate && (
                                                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/10 text-gray-400 border border-white/10">
                                                        Private Repo
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">{project.title}</h3>
                                            <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
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
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-3 mt-16">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`p-3 rounded-xl border flex items-center justify-center transition-all duration-300 ${currentPage === 1
                                ? 'border-white/5 text-gray-600 cursor-not-allowed'
                                : 'border-white/10 text-white bg-dark-secondary hover:bg-white/10 hover:border-primary/50'
                                }`}
                            aria-label="Previous Page"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex gap-2 p-1.5 bg-dark-secondary/80 border border-white/10 rounded-xl backdrop-blur-md">
                            {Array.from({ length: totalPages }, (_, index) => {
                                const pageNumber = index + 1;
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => setCurrentPage(pageNumber)}
                                        className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all duration-300 ${currentPage === pageNumber
                                            ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`p-3 rounded-xl border flex items-center justify-center transition-all duration-300 ${currentPage === totalPages
                                ? 'border-white/5 text-gray-600 cursor-not-allowed'
                                : 'border-white/10 text-white bg-dark-secondary hover:bg-white/10 hover:border-primary/50'
                                }`}
                            aria-label="Next Page"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;


