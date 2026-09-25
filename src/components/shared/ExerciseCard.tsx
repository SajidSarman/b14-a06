import { Icard } from '@/typs/card';
import Image from 'next/image';
import React from 'react';
import { FaRegCircle, FaRegStar } from 'react-icons/fa';
import { FaFire } from 'react-icons/fa6';

interface IcardProps {
    data : Icard
}

const ExerciseCard = ({ data } : IcardProps) => {
    return (
        <div key={data.id} >
            <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-700 bg-[#15171c] text-white">
                <Image
                    src={data.image}
                    alt={data.name}
                    width={500}
                    height={300}
                    className="h-56 w-full object-cover"
                />

                <div className="p-6">
                    <div className="mb-5 flex gap-2">
                        {data.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#b6ff00] px-4 py-1 text-sm font-bold uppercase text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <div>
                        <h2 className="font-bold uppercase tracking-wide text-2xl">
                            {data.name}
                        </h2>
                        <p className="mt-1 text-gray-400">
                            {data.equipment}
                        </p>
                    </div>

                    <div className="mt-4 flex items-center gap-5  px-2 py-2 text-sm text-gray-300">

                        <span className="flex items-center gap-1">
                            <FaRegCircle /> {data.duration} min
                        </span>

                        <span className="flex items-center gap-1">
                            <FaFire /> {data.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1">
                            <FaRegStar /> {data.rating}
                        </span>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExerciseCard;