import { Icard } from '@/typs/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { PiFireSimpleBold } from 'react-icons/pi';


interface IcardProps {
    data: Icard
}

const ExerciseCard = ({ data }: IcardProps) => {
    return (
        <div key={data.id} >
            <Link href={`/cards/${data.id}`}>
                <div className="w-full overflow-hidden rounded-2xl border border-gray-800 bg-[#151922] text-white">
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

                        <div className="mt-4 flex items-center border-t border-gray-800 gap-5 py-2 text-sm text-gray-300">

                            <span className="flex items-center gap-1">
                                <FiClock />{data.duration} min
                            </span>

                            <span className="flex items-center gap-1">
                                <PiFireSimpleBold />{data.caloriesBurned} kcal
                            </span>

                            <span className="flex items-center gap-1">
                                <FaRegStar /> {data.rating}
                            </span>

                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ExerciseCard;