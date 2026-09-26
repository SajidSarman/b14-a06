"use client"

import { ExerciseContext } from '@/context/ExerciseContext';
import React, { useContext } from 'react';

const MyPlan = () => {
    const {exercisePlan, exerciseSave} = useContext(ExerciseContext)

    console.log(exercisePlan, exerciseSave, "exercisePlan", "exerciseSave")


    return (
        <div>
            myyyyyyyyyy
        </div>
    );
};

export default MyPlan;