import React from 'react'
import Banner from "@/components/Banner";  
const page = () => {
    return (
        <div className='bg-white'>
            <Banner
                image="/banner1.jpg"
                title="Collectables Coming Soon"
                subtitle=""
            />
        </div>
    )
}

export default page;