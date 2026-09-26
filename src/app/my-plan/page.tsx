"use client"

import { ExerciseContext } from '@/context/ExerciseContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { PiFireSimpleBold } from 'react-icons/pi';

const MyPlan = () => {

    const { exercisePlan, exerciseSave } = useContext(ExerciseContext);

    // console.log(exercisePlan, exerciseSave, "exercisePlan", "exerciseSave")

    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

    const currentList = activeTab === 'today' ? exercisePlan : exerciseSave || [];

    return (
        <div className="container mx-auto p-6 text-gray-200">

            <div className="mb-6">
                <h1 className="text-3xl font-black uppercase text-white mb-1">MY PLAN</h1>
                <p className="text-xs text-gray-400">Manage your custom routines and goals.</p>
            </div>

            <div className="flex bg-[#11141a] border border-gray-800 p-1 rounded-xl mb-6 w-fit">
                <button
                    onClick={() => setActiveTab('today')}
                    className={`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-colors ${activeTab === 'today' ? 'bg-[#21262d] text-white' : 'text-gray-400'
                        }`}
                >
                    Today's Plan
                </button>
                <button
                    onClick={() => setActiveTab('saved')}
                    className={`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-colors ${activeTab === 'saved' ? 'bg-[#21262d] text-white' : 'text-gray-400'
                        }`}
                >
                    Saved
                </button>
            </div>

            {/* e cards */}
            {currentList && currentList.length > 0 ? (

                <div className="flex flex-col gap-3">
                    {currentList.map((exercise) => {
                        return (
                            <div key={exercise.id} className="flex items-center justify-between bg-[#11141a] border border-gray-800 rounded-xl p-4 gap-4 w-full">
                          
                                <div className="flex items-center gap-4">
                                    <div className="w-24 h-14 rounded-lg overflow-hidden">
                                        <Image
                                            src={exercise.image}
                                            alt={exercise.name}
                                            width={96}
                                            height={56}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-black uppercase text-white tracking-wide mb-0.5">{exercise.name}</h4>
                                        <p className="text-[11px] text-gray-500 mb-1.5">{exercise.equipment}</p>

                                      
                                        <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold">
                                            <span className="flex items-center gap-1"><FiClock /> {exercise.duration} min</span>
                                            <span className="flex items-center gap-1"><PiFireSimpleBold /> {exercise.caloriesBurned} kcal</span>
                                            <span className="flex items-center gap-1"><FaRegStar /> {exercise.rating}</span>
                                        </div>
                                    </div>
                                </div>

                                {/*Controls */}
                                <div className="flex items-center gap-2 text-[11px] font-bold">
                                    <Link
                                        href={`/cards/${exercise.id}`}
                                        className="bg-transparent border border-gray-800 text-gray-400 py-2 px-4 rounded-xl hover:bg-[#161b22] hover:text-white transition-colors cursor-pointer inline-flex items-center justify-center"
                                    >
                                        View Details
                                    </Link>
                                    <button className="bg-[#b6ff00] text-black py-2 px-4 rounded-xl hover:bg-[#a3e600] transition-colors cursor-pointer shadow-sm">
                                        Mark as Done
                                    </button>
                                </div>
                            </div>

                        )
                    })}
                </div>
            ) : (
                //fallback
                <div className="border-3 border-dashed border-gray-600 rounded-2xl py-20 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl font-black uppercase text-white tracking-wide mb-1">Nothing Here Yet</h3>
                    <p className="text-xs text-gray-500 max-w-xs leading-relaxed">Browse the library and add a lift to get today moving.
                    </p>
                    <Link
                        href="/"
                        className="bg-[#b6ff00] text-black font-bold text-xs py-3 px-8 mt-5 rounded-full hover:bg-[#a3e600] transition-colors cursor-pointer"
                    >
                        Go to workouts
                    </Link>
                </div>
            )}

        </div>
    );
};



export default MyPlan;