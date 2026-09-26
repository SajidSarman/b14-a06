import AddTotodaysPlanButton from '@/components/exercisedetails/AddTotodaysPlanButton';
import SaveForLaterButton from '@/components/exercisedetails/SaveForLaterButton';
import { Icard } from '@/typs/card';
import Image from 'next/image';
import React from 'react';
import { FaRegBookmark } from 'react-icons/fa6';

interface IExcerciseDetailsPageProps {
    params: Promise<{
        id: string;
    }>
}

const getCards = async (): Promise<Icard[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json()
    return data
}

const ExcerciseDetailsPage = async ({ params }: IExcerciseDetailsPageProps) => {
    const { id } = await params
    const ExerciseData = await getCards()
    const exercise = ExerciseData.find(exercise => String(exercise.id) === String(id)) as Icard
    console.log(exercise, 'exercise')

    return (
        <div className='container mx-auto p-4 text-gray-200'>

            <div className="grid grid-cols-1 lg:grid-cols-2 p-6 gap-6">

                <div className="flex items-center justify-center">
                    <Image
                        src={exercise.image}
                        alt={exercise.name}
                        width={500}
                        height={500}
                        className="rounded-xl w-full h-auto object-cover"
                    />
                </div>


                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-black uppercase text-white mb-2 tracking-wide">{exercise.name}</h2>
                        <p className="text-sm text-gray-400 mb-4 leading-relaxed">{exercise.description}</p>


                        <div className="mb-6 flex flex-wrap gap-2">
                            {exercise.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#b6ff00] px-3 py-1 text-xs font-black uppercase text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>


                        <div className="bg-[#161b22] border border-gray-800 rounded-xl text-xs mb-6 overflow-hidden">
                            <div className="flex justify-between items-center p-3 border-b border-gray-800">
                                <span className="text-gray-500 font-bold tracking-wider">EQUIPMENT</span>
                                <span className="text-gray-300 font-medium">{exercise.equipment}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 border-b border-gray-800">
                                <span className="text-gray-500 font-bold tracking-wider">DIFFICULTY</span>
                                <span className="text-gray-300 font-medium">{exercise.difficulty}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 border-b border-gray-800">
                                <span className="text-gray-500 font-bold tracking-wider">SETS</span>
                                <span className="text-gray-300 font-medium">{exercise.sets}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 border-b border-gray-800">
                                <span className="text-gray-500 font-bold tracking-wider">REPS</span>
                                <span className="text-gray-300 font-medium">{exercise.reps}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 border-b border-gray-800">
                                <span className="text-gray-500 font-bold tracking-wider">DURATION</span>
                                <span className="text-gray-300 font-medium">{exercise.duration}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 border-b border-gray-800">
                                <span className="text-gray-500 font-bold tracking-wider">CALORIES</span>
                                <span className="text-gray-300 font-medium">{exercise.caloriesBurned}</span>
                            </div>
                            <div className="flex justify-between items-center p-3">
                                <span className="text-gray-500 font-bold tracking-wider">RATING</span>
                                <span className="text-gray-300 font-medium">{exercise.rating}</span>
                            </div>
                        </div>


                        <div className="mb-6">
                            <h3 className="text-xs font-bold uppercase text-white mb-2">Instructions</h3>
                            <ol className="list-decimal list-inside text-xs text-gray-400 space-y-2 ">
                                {exercise.instructions && exercise.instructions.map((step) => (
                                    <li key={step}>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>


                    <div className="flex flex-wrap items-center justify-start gap-3 text-sm mt-4">
                        <AddTotodaysPlanButton exercise={exercise}></AddTotodaysPlanButton>
                        <SaveForLaterButton exercise={exercise} ></SaveForLaterButton>
                    </div>

                </div>
            </div>
        </div>
    );

};

export default ExcerciseDetailsPage;