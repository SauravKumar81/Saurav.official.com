import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark py-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-500 flex items-center justify-center gap-2">
                    &copy; {new Date().getFullYear()} Saurav Kumar. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                </p>
                <div className="mt-2 text-sm text-gray-600">
                    Built with React, Tailwind CSS & Node.js
                </div>
            </div>
        </footer>
    );
};

export default Footer;
