import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Settings } from 'lucide-react';

const Skills = () => {
    const skills = [
        {
            category: "Frontend",
            icon: <Layout className="w-8 h-8 text-neon-purple" />,
            items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"]
        },
        {
            category: "Backend",
            icon: <Server className="w-8 h-8 text-neon-green" />,
            items: ["Node.js", "Express.js", "Python", "GraphQL", "Socket.io"]
        },
        {
            category: "Database",
            icon: <Database className="w-8 h-8 text-blue-500" />,
            items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"]
        },
        {
            category: "DevOps",
            icon: <Settings className="w-8 h-8 text-accent" />,
            items: ["Docker", "AWS", "CI/CD", "Git", "Nginx"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-neon-purple font-medium tracking-wide text-sm">MY EXPERTISE</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">Technical Skills</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A curated list of technologies I use to build scalable and high-performance applications.
                    </p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className="group flex flex-col items-center text-center"
                        >
                            <div className="mb-4 inline-flex p-4 bg-white/5 rounded-2xl group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                {React.cloneElement(skill.icon, { className: "w-8 h-8" })}
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{skill.category}</h3>
                            
                            <div className="w-12 h-1 bg-white/10 rounded-full mb-6 group-hover:bg-primary/50 transition-colors"></div>

                            <ul className="space-y-3">
                                {skill.items.map((item, idx) => (
                                    <li key={idx} className="text-gray-400 group-hover:text-gray-200 transition-colors font-medium">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
