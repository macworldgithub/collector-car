import React from 'react'
import Banner from "@/components/Banner";  
import AboutPage from './AboutPage';
import StockCard from '@/components/StockCard';
const page = () => {
  return (
     <div className='bg-white'>
        <Banner
            image="/banner2.jpg" 
            title="Our Services"
            subtitle="Collector Car Depot has 30 plus years of Passion, knowledge and experience in the classic car market."
          />
          <AboutPage/>
          <StockCard/>
    </div>
  )
}

export default page;
