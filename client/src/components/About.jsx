import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.png';

const About = () => {
    return (
        <section id="about" className="py-24 bg-dark relative overflow-hidden">
             {/* Decorational Elements */}
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden glass-card p-2">
                             <img 
                                src={profileImage}
                                alt="Working" 
                                className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
                            />
                        </div>
                        {/* Background Shape */}
                        <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-neon-green/30 rounded-2xl -z-10"></div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:w-1/2 space-y-8"
                    >
                        <div>
                             <h2 className="text-neon-green font-medium tracking-wide text-sm mb-2">ABOUT ME</h2>
                             <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                Crafting digital experiences with <span className="gradient-text">code & passion</span>.
                            </h3>
                        </div>
                        
                        <p className="text-gray-400 leading-relaxed text-lg">
                            I am a Full-Stack Developer who bridges the gap between design and functionality. 
                            My journey began with a simple curiosity about how the web works, which has since evolved 
                            into a career dedicated to building robust, scalable applications.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                            <div>
                                <h4 className="text-white font-bold text-xl mb-1">03+</h4>
                                <p className="text-gray-500 text-sm">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-xl mb-1">50+</h4>
                                <p className="text-gray-500 text-sm">Projects Completed</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-xl mb-1">20+</h4>
                                <p className="text-gray-500 text-sm">Happy Clients</p>
                            </div>
                             <div>
                                <h4 className="text-white font-bold text-xl mb-1">24/7</h4>
                                <p className="text-gray-500 text-sm">Support</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
