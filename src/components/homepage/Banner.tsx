import React from 'react';
import bannerImage from "@/assets/banner.png"
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

const Banner = () => {
    return (

        <div className='container mx-auto font-bold flex flex-col lg:flex-row justify-between items-center border border-gray-800 bg-[#151922] rounded-2xl px-6 sm:px-10 py-10 lg:py-15 my-6 sm:my-10 gap-8 lg:gap-4'>
            
            <div className='max-w-155 text-center lg:text-left flex flex-col items-center lg:items-start'>
                <p className='text-[#c2f800] text-[11px]'>WORKOUT LIBRARY</p>
                <h2 className='text-3xl sm:text-4xl lg:text-[60px]  my-2'>TRAIN WITH INTENT. LOG EVERY SET.</h2>
                <p className='text-xs sm:text-sm max-w-md text-gray-400'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                <a
                    href="#library"
                    className="bg-[#c2f800] text-black px-6 py-3 rounded-xl mt-6 inline-flex items-center justify-center gap-2 hover:bg-[#a3e600] transition-colors shadow-md text-xs font-black tracking-wide cursor-pointer w-fit"
                >
                    BROWSE WORKOUTS <FaArrowRight />
                </a>
            </div>
            <div className=' max-w-62.5 sm:max-w-87.5 lg:max-w-none flex justify-center'>
            {/* <div> */}
                <Image src={bannerImage} alt="Banner"></Image>
            </div>
        </div>

    );
};

export default Banner;