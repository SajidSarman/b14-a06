import { Icard } from '@/typs/card';
// import Image from 'next/image';
import React from 'react';
import ExerciseCard from '../shared/ExerciseCard';

const getCards = async (): Promise<Icard[]> => {
    try {

        // const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
        const res = await fetch("https://api.api-store.workers.dev/api/fitlog")
        const data = await res.json()
        return data
    } catch (error) {
        console.error("API error:", error)
        return []
    }
}


const Cards = async () => {
    const CardsData = await getCards()
    // console.log(CardsData, "data from cards")
    return (
        <div id="library" className='container mx-auto scroll-mt-10'>
            <div className='font-bold py-8'>
                <h1 className='text-[30px]'>THE LIBRARY</h1>
                <p className='text-[14px] text-[#9ca3af]'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 px-4 sm:px-0'>

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