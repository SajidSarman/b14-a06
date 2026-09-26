import React, { createContext, useState } from 'react';

const ExerciseContext = createContext({})

const ExerciseProvider = ({children}) => {
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