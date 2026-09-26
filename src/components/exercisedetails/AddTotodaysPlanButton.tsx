"use client"

import { ExerciseContext } from '@/context/ExerciseContext';
import { Icard } from '@/typs/card';
import React, { useContext } from 'react';

const AddTotodaysPlanButton = ({exercise}: {exercise: Icard}) => {

    const {exercisePlan, setExercisePlan} = useContext(ExerciseContext)
    // console.log(exerciseProvider, "ep");

    const handlePlanExercise = () => {
        console.log("blablallakkkajakp", exercise)
        setExercisePlan([...exercisePlan, exercise])
    }

    return (
        <button className="bg-[#b6ff00] text-black font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#a3e600] cursor-pointer transition-colors"
        onClick={()=> handlePlanExercise()}>
            Add to today's plan
        </button>
    );
};

export default AddTotodaysPlanButton;