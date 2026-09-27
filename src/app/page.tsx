import Banner from '@/components/homepage/Banner';
import Cards from '@/components/homepage/Cards';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Banner></Banner>
        <Cards></Cards>
      </div>
    </div>
  );
};

export default page;