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
        <section id="skills" className="py-24 bg-dark-secondary relative">
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
                            className="bg-dark p-8 rounded-2xl border border-white/5 hover:border-neon-purple/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-neon-purple/20"
                        >
                            <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-neon-purple transition-colors">{skill.category}</h3>
                            <ul className="space-y-3">
                                {skill.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 group-hover:bg-neon-green transition-colors"></span>
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
