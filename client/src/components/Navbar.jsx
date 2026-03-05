import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-6 px-6">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        
        {/* Logo/Brand */}
        <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
               {/* Iconify-like Logo */}
               <div className="w-8 h-8 relative">
                   <div className="absolute inset-0 bg-primary blur-lg opacity-50"></div>
                   <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white relative z-10">
                       <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
               </div>
               <span className="font-bold text-lg tracking-widest text-white uppercase">Saurav</span>
            </Link>
        </div>

        {/* Desktop Menu (Centered Pill) */}
        <div className="hidden md:flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 absolute left-1/2 -translate-x-1/2">
             {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-6 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all tracking-widest"
                >
                  {link.name}
                </a>
              ))}
        </div>

        {/* Social Icons / CTA */}
        <div className="hidden md:flex items-center gap-4">
             <div className="flex items-center gap-2 pr-4 border-r border-white/10">
                 <a href="https://github.com/sauravkumar81" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Github className="w-5 h-5" /></a>
                 <a href="https://www.linkedin.com/in/sauravkumar81/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Linkedin className="w-5 h-5" /></a>
             </div>
             <Link to="/admin/login" className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                Let's Talk <ArrowRight className="w-4 h-4" />
             </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </div>
      
       {/* Mobile Menu */}
       {isOpen && (
        <div className="md:hidden bg-dark-secondary absolute top-full left-0 w-full mt-2 border-t border-white/10 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white block px-3 py-4 text-center text-sm font-bold tracking-widest border-b border-white/5 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

