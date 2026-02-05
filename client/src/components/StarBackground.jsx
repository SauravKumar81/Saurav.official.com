import React, { useMemo } from 'react';

const StarBackground = () => {
    // Generate static stars for consistent rendering using useMemo
    const stars = useMemo(() => Array.from({ length: 150 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        // varying durations for more natural feel
        duration: Math.random() * 3 + 2, 
        delay: Math.random() * 5,
    })), []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute bg-white rounded-full animate-twinkle"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDuration: `${star.duration}s`,
                        animationDelay: `${star.delay}s`,
                        opacity: Math.random() * 0.5 + 0.3,
                    }}
                />
            ))}
        </div>
    );
};

export default StarBackground;
