import Image from 'next/image';
import React from 'react';
import Logo from "@/assets/logo.png";

const Footer = () => {
  return (

    <footer className="w-full border-t border-gray-800 bg-[#0d1117] py-6 px-4 mt-auto">
      {/* <div className="container mx-auto px-6 flex flex-row items-center justify-between text-xs"> */}
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 md:px-6 text-xs">

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 relative overflow-hidden">
            <Image
              src={Logo}
              alt="FitLog Footer Logo"
              className="object-contain w-full h-full"
            />
          </div>
          <span className="font-black tracking-widest text-white uppercase text-sm">
            FITLOG
          </span>
        </div>

        <p className="text-gray-500 font-medium tracking-wide text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;