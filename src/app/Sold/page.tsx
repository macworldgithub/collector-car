  
import React from 'react';
import Banner from "@/components/Banner";  
import Testimonials from './Testimonial';
import CarSolds from './CarSolds'
const page = () => {
  return (
    <div className='bg-white'>
    <Banner
        image="/car5.jpg" 
        title="Welcome To Collector Car Depot"
        subtitle="Collector & Performance Car Brokers"
      />
      <CarSolds/>
      <Testimonials />
    </div>
  );
};

export default page;
