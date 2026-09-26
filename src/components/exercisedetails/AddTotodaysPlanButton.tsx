"use client"

import { ExerciseContext } from '@/context/ExerciseContext';
import { Icard } from '@/typs/card';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';

const AddTotodaysPlanButton = ({ exercise }: { exercise: Icard }) => {

    const { exercisePlan, setExercisePlan } = useContext(ExerciseContext)

    const handlePlanExercise = () => {
        // console.log("blablallakkkajakp", exercise)
        setExercisePlan([...exercisePlan, exercise])

        toast.success(`${exercise.name} added to plan`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <button className="bg-[#b6ff00] text-black font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#a3e600] cursor-pointer transition-colors"
            onClick={() => handlePlanExercise()}>
            Add to today's plan
        </button>
    );
};

export default AddTotodaysPlanButton;