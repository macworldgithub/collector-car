// import Image from "next/image";
// import React from "react";

// type CarGalleryProps = {
//   phone: string;
//   images: string[];
//   videoThumbnail?: string; // optional video preview
// };

// const CarGallery: React.FC<CarGalleryProps> = ({ phone, images, videoThumbnail }) => {
//   return (
//     <section className="px-4 md:px-12 lg:px-20 py-10">
//       {/* Enquiry Section */}
//       <div className="text-center mb-10 text-black">
//         <p className="text-sm md:text-base">Interested in this vehicle ?</p>
//         <p className="font-semibold text-gray-800 mb-3">Call us on {phone}</p>
//         <button className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition">
//           Enquire
//         </button>
//       </div>

//       {/* Video Thumbnail (optional) */}
//       {videoThumbnail && (
//         <div className="flex justify-center mb-8">
//           <div className="relative w-full md:w-2/3 lg:w-1/2 aspect-video">
//             <Image
//               src={videoThumbnail}
//               alt="Video Thumbnail"
//               fill
//               className="object-cover rounded-lg"
//             />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 16 16"
//                   className="w-8 h-8 text-blue-600"
//                 >
//                   <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
//                   <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {images.map((src, idx) => (
//           <div key={idx} className="relative w-full aspect-[4/3]">
//             <Image
//               src={src}
//               alt={`Car image ${idx + 1}`}
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CarGallery;

"use client";
import Image from "next/image";
import React, { forwardRef } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
type CarGalleryProps = {
  phone: string;
  images: string[];
  videos?: string[]; // array of video URLs
};

// Use forwardRef to allow ref to be passed to the section element
const CarGallery = forwardRef<HTMLElement, CarGalleryProps>(
  ({ phone, images, videos = [] }, ref) => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const handleImageClick = (idx: number) => {
      setIndex(idx);
      setOpen(true);
    };
    return (
      <section ref={ref} className="px-4 md:px-12 lg:px-20 py-10">
        {/* Enquiry Section */}
        <div className="text-center mb-10 text-black">
          <p className="text-sm md:text-base">Interested in this vehicle ?</p>
          <p className="font-semibold text-gray-800 mb-3">Call us on {phone}</p>
          <button className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition">
            Enquire
          </button>
        </div>

        {/* Videos (if any) */}
        {videos.length > 0 && (
          <div className="flex flex-col items-center gap-6 mb-8">
            {videos.map((videoUrl, idx) => (
              <div key={idx} className="w-full md:w-2/3 lg:w-1/2 aspect-video">
                <video
                  src={videoUrl}
                  controls
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        )}

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-[4/3] cursor-pointer"
              onClick={() => handleImageClick(idx)}
            >
              {/* <Image
                src={src}
                alt={`Car image ${idx + 1}`}
                fill
                className="object-cover rounded-lg"
              /> */}
              <img
                src={src}
                alt={`Car image ${idx + 1}`}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={index}
          //@ts-ignore
          on={{ view: ({ index }) => setIndex(index) }}
        />
      </section>
    );
  }
);

// Set display name for better debugging
CarGallery.displayName = "CarGallery";

export default CarGallery;
