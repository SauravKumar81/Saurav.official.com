import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Copy, Check, Globe, Code2, Database, Layout, Server, Cpu } from 'lucide-react';

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let timeout;
    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); 
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  return <span>{displayText}</span>;
}

const TiltCard = ({ children, className }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;
        const xPct = mouseXFromCenter / width;
        const yPct = mouseYFromCenter / height;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative transition-all duration-200 ease-linear ${className}`}
        >
            <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }} className="h-full">
                {children}
            </div>
        </motion.div>
    );
};



const About = () => {
    const [copied, setCopied] = useState(false);
    const email = "saurav.dev@example.com"; 

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="about" className="py-24 relative overflow-hidden" style={{ perspective: "1000px" }}>
             
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                     <h2 className="text-secondary font-display text-4xl mb-2">About Me</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Card 1: Code Editor (Interactive Typewriter) */}
                    <div className="md:col-span-2">
                        <TiltCard className="bg-dark-secondary rounded-3xl p-8 border border-white/10 overflow-hidden group hover:border-primary/50 h-full">
                             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors -z-10"></div>
                             
                             <div className="flex gap-2 mb-6">
                                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
                             </div>
                             
                             <div className="font-mono text-sm md:text-base text-gray-300 space-y-2 relative z-10">
                                 <p><span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{"{"}</span></p>
                                 <p className="pl-6">name: <span className="text-green-400">"<TypewriterText text="Saurav Kumar" delay={500} />"</span>,</p>
                                 <p className="pl-6">role: <span className="text-green-400">"<TypewriterText text="Full-Stack Developer" delay={1500} />"</span>,</p>
                                 <p className="pl-6">experience: <span className="text-orange-400">4</span>,</p>
                                 <p className="pl-6">skills: <span className="text-yellow-400">['React', 'Node.js', 'MongoDB', 'Next.js']</span>,</p>
                                 <p className="pl-6">hardWorker: <span className="text-red-400">true</span>,</p>
                                 <p className="pl-6">problemSolver: <span className="text-red-400">true</span>,</p>
                                 <p><span className="text-yellow-400">{"}"}</span>;</p>
                             </div>
                             
                             <div className="mt-8">
                                 <h3 className="text-2xl font-bold text-white mb-2">Hi, I'm Saurav</h3>
                                 <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Over the last 4 years, I developed my frontend and backend dev skills to deliver dynamic software and web applications.</p>
                             </div>
                        </TiltCard>
                    </div>

                    {/* Card 2: Technical Expertise (Description Based) */}
                    <div className="h-full">
                        <TiltCard className="bg-dark-secondary rounded-3xl p-8 border border-white/10 overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:shadow-nft-purple/20 h-full">
                             <div className="absolute bottom-0 right-0 w-40 h-40 bg-nft-purple/20 rounded-full blur-3xl group-hover:bg-nft-purple/40 transition-colors -z-10"></div>

                             <div className="relative z-10 h-full flex flex-col justify-between">
                                 <div>
                                    <h3 className="text-xl font-bold text-white mb-4">Technical Expertise</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                        My core stack is built on <span className="text-white font-medium">React, Node.js, and MongoDB</span>, allowing me to architect full-stack applications from the ground up. 
                                    </p>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base mt-4">
                                        I am passionate about <span className="text-white font-medium">performance optimization</span> and implementing complex UI interactions using libraries like Framer Motion and Three.js to bring digital experiences to life.
                                    </p>
                                 </div>
                                 
                                 <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
                                     <span>MERN STACK</span>
                                     <span>NEXT.JS</span>
                                     <span>TAILWIND</span>
                                 </div>
                             </div>
                        </TiltCard>
                    </div>

                    {/* Card 3: Location / Remote (Interactive Globe) */}
                     <div className="h-full">
                        <TiltCard className="bg-dark-secondary rounded-3xl p-8 border border-white/10 overflow-hidden flex flex-col justify-end min-h-[250px] group hover:border-primary/50 h-full">
                            {/* Globe / Map Graphic Mockup */}
                            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10">
                                 <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" alt="Globe" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                 <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-transparent to-transparent"></div>
                            </div>

                            <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
                                <h3 className="text-xl font-bold text-white mb-1">Time Zone</h3>
                                <p className="text-gray-400 text-sm group-hover:text-white transition-colors">Based in India, open to remote work worldwide.</p>
                                <div className="mt-4 flex items-center gap-2 text-primary font-bold">
                                    <Globe className="w-4 h-4 animate-spin-slow-custom group-hover:text-white transition-colors" />
                                    <span>UTC+05:30</span>
                                </div>
                            </div>
                        </TiltCard>
                    </div>

                    {/* Card 4: CTA (Hover Gradient) */}
                    <div className="md:col-span-2 h-full">
                        <TiltCard className="bg-gradient-to-r from-primary to-nft-purple rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden group shadow-lg hover:shadow-primary/25 h-full">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700 -z-10"></div>

                            <div className="relative z-10 text-center md:text-left" style={{ transform: "translateZ(50px)" }}>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Want to start a project?</h3>
                                <p className="text-white/80 group-hover:text-white transition-colors">Let's build something amazing together.</p>
                            </div>
                            
                            <button 
                                onClick={handleCopy}
                                style={{ transform: "translateZ(80px)" }}
                                className="relative z-10 bg-black/30 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-black/40 transition-all group/btn active:scale-95"
                            >
                                {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 group-hover/btn:text-primary transition-colors" />}
                                <span className="font-mono">{copied ? "Email Copied!" : "Copy Email Address"}</span>
                            </button>
                        </TiltCard>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
