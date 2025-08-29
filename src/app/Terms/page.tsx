import React from 'react'
import Banner from '@/components/Banner';
import TermData from './TermData';
const page = () => {
  return (
    <div className='bg-white'>
        <Banner
            image="/car5.jpg" 
            title="Terms of Sale / Website Use"
            subtitle=""
          />
          <TermData/>
    </div>
  )
}

export default page;