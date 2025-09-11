  
import React from 'react';
import Banner from "@/components/Banner";  
import Testimonials from './Testimonial';
import CarSolds from './CarSolds'
const page = () => {
  return (
    <div className='bg-white'>
    <Banner
        video="https://collectorcardepot.com/wp-content/uploads/2025/02/3066415-uhd_4096_2160_24fps.mp4"
        title="Welcome To Collector Car Depot"
        subtitle="Collector & Performance Car Brokers"
      />
      <CarSolds/>
      <Testimonials />
    </div>
  );
};

export default page;
