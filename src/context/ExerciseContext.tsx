"use client";

import { Icard } from '@/typs/card';
import React, { createContext, ReactNode, useState } from 'react';

export interface IExerciseContext {
    exercisePlan: Icard[];
    setExercisePlan: React.Dispatch<React.SetStateAction<Icard[]>>;
    exerciseSave: Icard[];
    setExerciseSave: React.Dispatch<React.SetStateAction<Icard[]>>;
}

export const ExerciseContext = createContext<IExerciseContext>({
    exercisePlan: [],
    setExercisePlan: () => { },
    exerciseSave: [],
    setExerciseSave: () => { },
});

const ExerciseProvider = ({ children }: { children: ReactNode }) => {
    const [exercisePlan, setExercisePlan] = useState<Icard[]>([])
    const [exerciseSave, setExerciseSave] = useState<Icard[]>([])

    const sharedData = {
        exercisePlan,
        setExercisePlan,
        exerciseSave,
        setExerciseSave,
    }

    return (
        <ExerciseContext.Provider value={sharedData}>{children}</ExerciseContext.Provider>
    );
};

export default ExerciseProvider;