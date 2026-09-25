import ExerciseCard from '@/components/shared/ExerciseCard';
import { Icard } from '@/typs/card';
// import Image from 'next/image';
import React from 'react';


const getCards = async (): Promise<Icard[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json()
    return data
}


const Cards = async () => {
    const CardsData = await getCards()
    console.log(CardsData, "data from cards")
    return (
        <div className='container mx-auto'>
            <div className='font-bold py-10'>
                <h1 className='text-[30px]'>THE LIBRARY</h1>
                <p className='text-[14px] text-[#9ca3af]'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid grid-cols-3 gap-5 mb-10'>

                {
                    CardsData.map((data : Icard) => {
                        return <ExerciseCard key={data.id} data={data}></ExerciseCard>
                    })
                }
            </div>
        </div>
    );
};

export default Cards;