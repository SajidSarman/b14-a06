"use client"


import { ExerciseContext } from '@/context/ExerciseContext';
import { Icard } from '@/typs/card';
import Link from 'next/link';
import React, { useContext } from 'react';

interface ExerciseContextType {
    exercisePlan: Icard[];
    exerciseSave: Icard[];
}

const NavBadges = () => {
    const context = useContext(ExerciseContext) as ExerciseContextType;
    const planCount = context?.exercisePlan?.length || 0;
    const saveCount = context?.exerciseSave?.length || 0;
    return (
        <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/my-plan" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span>Plan</span>
                <span className="flex items-center justify-center bg-[#ccff00] text-black font-black w-5 h-5 rounded-full text-[10px]">
                    {planCount}
                </span>
            </Link>
            

            <Link href="/my-plan" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span>Saved</span>
                <span className="flex items-center justify-center border border-gray-500 text-gray-300 font-black w-5 h-5 rounded-full text-[10px]">
                    {saveCount}
                </span>
            </Link>
        </div>
    );
};

export default NavBadges;