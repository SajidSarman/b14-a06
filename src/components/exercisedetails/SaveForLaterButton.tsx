"use client"

import { ExerciseContext } from '@/context/ExerciseContext';
import { Icard } from '@/typs/card';
import React, { useContext } from 'react';
import { FaRegBookmark } from 'react-icons/fa6';

const SaveForLaterButton = ({exercise}: {exercise: Icard}) => {

    const {exerciseSave, setExerciseSave} = useContext(ExerciseContext)

    const handlePlanExercise = () => {
        // console.log("blablallakkkajakp", exercise)
        setExerciseSave([...exerciseSave, exercise])
        
        alert(`${exercise.name} added to save`)
    }

    return (
        <button className="bg-[#21262d] border border-gray-700 text-gray-300 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#30363d] cursor-pointer transition-colors"
        onClick={()=> handlePlanExercise()}>
            <FaRegBookmark /> Save for later
        </button>
        
    );
};

export default SaveForLaterButton;