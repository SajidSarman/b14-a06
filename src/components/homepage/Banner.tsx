import React from 'react';
import bannerImage from "@/assets/banner.png"
import Image from 'next/image';

const Banner = () => {
    return (
        // <section className='container mx-auto'>

        <div className='container mx-auto font-bold flex justify-between items-center border border-gray-800 bg-[#15171d] rounded-2xl px-10 py-15 my-10'>
            <div className='max-w-155'>
                <p className='text-[#c2f800] text-[11px]'>WORKOUT LIBRARY</p>
                <h2 className='text-[60px]'>TRAIN WITH INTENT. LOG EVERY SET.</h2>
                <p className='text-gray-400'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                <button className='bg-[#c2f800] text-black px-5 py-3 rounded-lg mt-5'>BROWSE WORKOUTS</button>
            </div>
            <div>
                <Image src={bannerImage} alt="Banner"></Image>
            </div>
        </div>
        //{/* </section> */}
    );
};

export default Banner;