import React from 'react'
import Banner from "@/components/Banner";  
import StockCard from '@/components/StockCard';
import SellingForm from './SellingForm';
import ServicesPage from './ServicesPage';
const page = () => {
  return (
    <div className='bg-wghite'>
    <Banner
     image='/banner2.jpg'
     title='Selling your Car'
     subtitle='At Collector Car Depot we are always looking for new additions to our listings, to meet the expectations of potential buyers.'
    />
    <ServicesPage/>
    <SellingForm/>
    <StockCard/>
    </div>
  )
}

export default page;