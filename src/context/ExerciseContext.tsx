"use client";

import React, { createContext, ReactNode, useState } from 'react';

export const ExerciseContext = createContext({})

const ExerciseProvider = ({children}: {children: ReactNode}) => {
    const [exercisePlan, setExercisePlan] = useState([])
    const [exerciseSave, setExerciseSave] = useState([])

    const sharedData = {
        exercisePlan, 
        setExercisePlan,
        exerciseSave, 
        setExerciseSave,
    }

    return <ExerciseContext.Provider value={sharedData}>{children}</ExerciseContext.Provider>;
};

export default ExerciseProvider;