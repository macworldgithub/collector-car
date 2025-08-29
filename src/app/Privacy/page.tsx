import Banner from '@/components/Banner'
import React from 'react'
import Content from './Content'
const page = () => {
  return (
    <div className='bg-white'>
        <Banner
        image='/bike1.jpg'
        title='Privacy Notice'
        subtitle=''
        />
        <Content/>
    </div>
  )
}

export default page;