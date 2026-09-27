"use client"

import { ExerciseContext } from '@/context/ExerciseContext';
import { Icard } from '@/typs/card';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { MdOutlineDoneOutline } from 'react-icons/md';
import { PiFireSimpleBold } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';
import { Bounce, toast } from 'react-toastify';

const MyPlan = () => {

    const { exercisePlan, setExercisePlan, exerciseSave, setExerciseSave } = useContext(ExerciseContext);

    // console.log(exercisePlan, exerciseSave, "exercisePlan", "exerciseSave")

    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

    const [sortBy, setSortBy] = useState<'duration' | 'caloriesBurned' | 'rating'>('duration');

    // for done button
    const [completedExercises, setCompletedExercises] = useState<number[]>([]);

    const currentList = activeTab === 'today' ? exercisePlan : exerciseSave || [];


    // Calculate total exercises minutes calories
    const totalExercises = currentList.length;

    const totalMinutes = currentList.reduce(
        (sum: number, item: Icard) => sum + (Number(item.duration) || 0),
        0
    );

    const totalCalories = currentList.reduce(
        (sum: number, item: Icard) => sum + (Number(item.caloriesBurned) || 0),
        0
    );

    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === 'duration') return (b.duration || 0) - (a.duration || 0);
        if (sortBy === 'caloriesBurned') return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
        if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
        return 0;
    });

    return (
        <div className="container mx-auto p-6 text-gray-200">

            <div className="mb-5">
                <h1 className="text-3xl font-bold text-white mb-1">MY PLAN</h1>
                <p className="text-xs font-bold text-gray-400">Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            {/* total */}
            <div className="grid grid-cols-3 bg-[#151922] rounded-xl border border-gray-800 p-4 mb-6 text-left">
                <div className="pl-4 py-2">
                    <span className="text-[10px] text-gray-500 font-bold  block mb-1">EXERCISES</span>
                    <span className="text-3xl font-bold text-[#b6ff00]">{totalExercises}</span>
                </div>
                <div className="pl-6 py-2">
                    <span className="text-[10px] text-gray-500 font-bold  block mb-1">MINUTES</span>
                    <span className="text-3xl font-bold text-white">{totalMinutes}</span>
                </div>
                <div className="pl-6 py-2">
                    <span className="text-[10px] text-gray-500 font-bold block mb-1">CALORIES</span>
                    <span className="text-3xl font-bold text-white">{totalCalories}</span>
                </div>
            </div>

            <div className="flex items-center justify-between mb-6">


                <div className="flex bg-[#11141a] border border-gray-800 p-1 rounded-xl w-fit">
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

                {/* Sort By */}
                <div className="flex flex-col sm:flex-row items-center gap-2">
                    <span className="text-gray-400 text-[10px] font-bold">Sort By</span>
                    <div className="relative bg-[#11141a] border border-gray-800 text-white rounded-xl text-xs font-bold px-3 py-2 cursor-pointer hover:border-gray-700 transition-colors">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as 'duration' | 'caloriesBurned' | 'rating')}
                            className="bg-transparent text-white font-bold pr-4 outline-none cursor-pointer "
                        >
                            <option value="duration" className="bg-[#11141a]">Duration</option>
                            <option value="caloriesBurned" className="bg-[#11141a]">Calories</option>
                            <option value="rating" className="bg-[#11141a]">Rating</option>
                        </select>

                    </div>
                </div>

            </div>


            {/* e cards */}
            {currentList && currentList.length > 0 ? (

                <div className="flex flex-col gap-3">
                    {sortedList.map((exercise) => {
                        return (
                            <div key={exercise.id} className="flex flex-col sm:flex-row items-center justify-center sm:justify-between bg-[#151922] border border-gray-800 rounded-xl p-4 gap-4 w-full">
                            
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
                                <div className="flex items-center justify-center gap-2 text-[11px] font-bold">
                                    <Link
                                        href={`/cards/${exercise.id}`}
                                        className="border border-gray-500 text-white py-2 px-4 rounded-xl hover:bg-[#323b46] transition-colors cursor-pointer "
                                    >
                                        View Details
                                    </Link>

                                    {/* done */}
                                    {activeTab === 'today' && (
                                        <button
                                            onClick={() => {
                                                const isCompleted = completedExercises.includes(exercise.id);

                                                if (isCompleted) {
                                                    setCompletedExercises(completedExercises.filter(id => id !== exercise.id));

                                                } else {

                                                    setCompletedExercises([...completedExercises, exercise.id]);
                                                    toast.success(`${exercise.name} marked as done!`, {
                                                        position: "bottom-center",
                                                        autoClose: 3000,
                                                        hideProgressBar: false,
                                                        closeOnClick: false,
                                                        pauseOnHover: true,
                                                        draggable: true,
                                                        progress: undefined,
                                                        theme: "dark",
                                                        transition: Bounce,
                                                    });
                                                }
                                            }}
                                            className={`py-2 px-4 rounded-xl transition-all cursor-pointer shadow-sm flex items-center gap-1 font-bold ${completedExercises.includes(exercise.id)
                                                ? 'bg-[#1a2312] text-[#b6ff00] border border-[#b6ff00]'
                                                : 'bg-[#b6ff00] text-black hover:bg-[#a3e600]'
                                                }`}
                                        >
                                            <MdOutlineDoneOutline />
                                            {completedExercises.includes(exercise.id) ? 'Completed' : 'Mark as Done'}
                                        </button>
                                    )}
                                    
                                    {/* delete button */}
                                    <button
                                        onClick={() => {
                                            if (activeTab === 'today') {
                                                setExercisePlan(exercisePlan.filter((item: Icard) => item.id !== exercise.id));

                                                toast.warn(`Removed ${exercise.name} from Today's Plan`, {
                                                    position: "bottom-center",
                                                    autoClose: 3000,
                                                    hideProgressBar: false,
                                                    closeOnClick: false,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "dark",
                                                    transition: Bounce,
                                                });
                                            } else {
                                                setExerciseSave(exerciseSave.filter((item: Icard) => item.id !== exercise.id));

                                                toast.warn(`Removed ${exercise.name} from Saved`, {
                                                    position: "bottom-center",
                                                    autoClose: 3000,
                                                    hideProgressBar: false,
                                                    closeOnClick: false,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "dark",
                                                    transition: Bounce,
                                                });
                                            }
                                        }}
                                        className="text-gray-400 hover:text-red-500 pl-2 pr-1 text-xl cursor-pointer transition-colors"
                                        aria-label="Remove item"
                                    >
                                        <RxCross2 />
                                    </button>
                                </div>
                            </div>

                        )
                    })}
                </div>
            ) : (
                //fallback
                <div className="border-2 border-dashed border-gray-700 rounded-2xl py-20 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl font-black text-white mb-1">NOTHING HERE YET</h3>
                    <p className="text-xs text-gray-500 ">
                        Browse the library and add a lift to get today moving.
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