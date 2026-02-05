import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const StarBackground = () => {
    // Generate static stars for consistent rendering
    const stars = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 2,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute bg-white rounded-full animate-twinkle"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: `${star.delay}s`,
                        opacity: Math.random() * 0.5 + 0.3,
                    }}
                />
            ))}
        </div>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! (Simulation)');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 bg-dark-secondary relative overflow-hidden">
             
             {/* Starry Background */}
             <StarBackground />

             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple via-primary to-neon-green"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-neon-purple font-medium tracking-wide text-sm">CONTACT ME</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">Let's Work Together</h2>
                        <p className="text-gray-400 text-lg mb-12">
                            Have a project in mind or want to say hi? I'm always open to discussing new projects, click ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-neon-purple group-hover:text-white transition-all duration-300 text-gray-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Email</h4>
                                    <p className="text-gray-400">saurav@example.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-neon-green group-hover:text-dark transition-all duration-300 text-gray-400">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Phone</h4>
                                    <p className="text-gray-400">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 text-gray-400">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Location</h4>
                                    <p className="text-gray-400">Bangalore, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-dark p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-3xl -z-10"></div>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-purple outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-purple outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <input 
                                    type="text" 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-purple outline-none transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-purple outline-none transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-gradient-to-r from-neon-purple to-primary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
