"use client"

import { ExerciseContext, IExerciseContext } from '@/context/ExerciseContext';
import { Icard } from '@/typs/card';
import React, { useContext } from 'react';
import { FaRegBookmark } from 'react-icons/fa6';
import { Bounce, toast } from 'react-toastify';

const SaveForLaterButton = ({ exercise }: { exercise: Icard }) => {

    const { exerciseSave, setExerciseSave } = useContext(ExerciseContext) as IExerciseContext;

    const handlePlanExercise = () => {

        const isAlreadySaved = exerciseSave.find((item: Icard) => item.id === exercise.id);

        if (isAlreadySaved) {
        
            toast.warn(`${exercise.name} is already saved!`, {
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
            return;
        }
        // console.log("blablallakkkajakp", exercise)
        setExerciseSave([...exerciseSave, exercise])

        toast.success(`${exercise.name} added to save`, {
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

    return (
        <button className="bg-[#21262d] border border-gray-700 text-gray-300 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#30363d] cursor-pointer transition-colors"
            onClick={() => handlePlanExercise()}>
            <FaRegBookmark /> Save for later
        </button>

    );
};

export default SaveForLaterButton;