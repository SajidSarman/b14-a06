import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 text-gray-200">
            <h1 className="text-7xl font-black text-[#ccff00] mb-2">404</h1>
            <h2 className="text-xl font-black text-white mb-2">PAGE NOT FOUND</h2>
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed mb-6">
                The page you are looking for doesn't exist.
            </p>
            <Link 
                href="/" 
                className="bg-[#ccff00] text-black font-bold text-xs py-3 px-8 rounded-full hover:bg-[#a3e600] transition-colors cursor-pointer shadow-md"
            >
                BACK TO WORKOUTS
            </Link>
        </div>
    );
};

export default NotFound;