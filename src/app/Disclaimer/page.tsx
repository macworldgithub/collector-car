import React from 'react'
import Banner from "@/components/Banner"; 
import YoutubeDisclaimer from './YoutubeDisclaimer';
const page = () => {
    return (
        <div className='bg-white'>
            <Banner
       //@ts-ignore
                image="/bike2.jpg"
                title="YouTube Video Disclaimer"
                subtitle=""
            />
            <YoutubeDisclaimer/>
        </div>
    )
}

export default page;