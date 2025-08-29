import React from 'react';
import Banner from "@/components/Banner";  
import ClassicCarAdvice from '@/app/ExpertAdvice/CarAdvice';
import StockCard from '@/components/StockCard';
const page = () => {
  return (
    <div className='bg-white'>
    <Banner
        image="/car2.jpg" 
        title="Expert Advice"
        subtitle="The car market is a intricate landscape where having an experienced guide can be incredibly valuable."
      />
    <ClassicCarAdvice/>
    <StockCard/>
    </div>
  );
};

export default page;

