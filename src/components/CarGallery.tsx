// "use client";
// import React, { forwardRef, useState } from "react";
// import { Lightbox } from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// type CarGalleryProps = {
//   phone: string;
//   imageKeys: ImageKey[];
//   images?: string[]; // ✅ add this
//   youtubeLinks?: string[];
//   videos?: string[];
// };

// type ImageKey = {
//   key: string;
//   orientation: "portrait" | "landscape";
// };

// const CarGallery = forwardRef<HTMLElement, CarGalleryProps>(
//   (
//     { phone, imageKeys = [], images = [], youtubeLinks = [], videos = [] },
//     ref
//   ) => {
//     const [open, setOpen] = useState(false);
//     const [index, setIndex] = useState(0);

//     const handleImageClick = (idx: number) => {
//       setIndex(idx);
//       setOpen(true);
//     };

//     // Separate and order images by orientation
//     const landscapeImages = imageKeys
//       .map((img, idx) => ({ img, url: images[idx], originalIndex: idx }))
//       .filter((item) => item.img.orientation === "landscape" && item.url);

//     const portraitImages = imageKeys
//       .map((img, idx) => ({ img, url: images[idx], originalIndex: idx }))
//       .filter((item) => item.img.orientation === "portrait" && item.url);

//     // Combine ordered images for lightbox
//     const orderedImages = [...landscapeImages, ...portraitImages];

//     const getYouTubeEmbedUrl = (url: string): string => {
//       if (url.includes("youtu.be/")) {
//         const videoId = url.split("youtu.be/")[1].split("?")[0];
//         return `https://www.youtube.com/embed/${videoId}`;
//       }
//       if (url.includes("youtube.com/watch")) {
//         const urlParams = new URLSearchParams(new URL(url).search);
//         const videoId = urlParams.get("v");
//         return `https://www.youtube.com/embed/${videoId}`;
//       }
//       return url;
//     };

//     return (
//       <section ref={ref} className="px-4 md:px-12 lg:px-20 py-10 text-black">
//         {/* Enquiry Section */}
//         <div className="text-center mb-10">
//           <p className="text-sm md:text-base">Interested in this vehicle?</p>
//           <p className="font-semibold text-gray-800 mb-3">Call us on {phone}</p>
//           <button
//             onClick={() => {
//               const formSection = document.getElementById("enquiry-form");
//               if (formSection)
//                 formSection.scrollIntoView({ behavior: "smooth" });
//             }}
//             className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
//           >
//             Enquire
//           </button>
//         </div>

//         {/* YouTube Videos */}
//         {youtubeLinks.length > 0 && (
//           <div className="flex flex-col items-center gap-6 mb-8">
//             {youtubeLinks.map((link, idx) => (
//               <div key={idx} className="w-full md:w-2/3 lg:w-1/2 aspect-video">
//                 <iframe
//                   src={getYouTubeEmbedUrl(link)}
//                   title={`YouTube video ${idx + 1}`}
//                   className="w-full h-full object-cover rounded-lg"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Uploaded Videos */}
//         {videos.length > 0 && (
//           <div className="flex flex-col items-center gap-6 mb-8">
//             {videos.map((videoUrl, idx) => (
//               <div key={idx} className="w-full md:w-2/3 lg:w-1/2 aspect-video ">
//                 <video
//                   src={videoUrl}
//                   controls
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Dynamic Masonry Grid Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] grid-flow-dense">
//           {imageKeys.map((img, idx) => {
//             const imageUrl = images[idx];
//             if (!imageUrl) return null;

//             const isPortrait = img.orientation === "portrait";
//             return (
//               <div
//                 key={`image-${idx}`}
//                 className={`relative cursor-pointer overflow-hidden rounded-lg ${
//                   isPortrait ? "row-span-2 sm:col-span-1" : "row-span-1"
//                 }`}
//                 onClick={() => handleImageClick(idx)}
//               >
//                 <img
//                   src={imageUrl}
//                   alt={`Car image ${idx + 1}`}
//                   className="w-full h-full object-cover hover:scale-105 transition duration-300"
//                   loading="lazy"
//                 />
//               </div>
//             );
//           })}
//         </div>

//         {/* Lightbox - using original image array to maintain correct order */}
//         <Lightbox
//           open={open}
//           close={() => setOpen(false)}
//           slides={images.map((src) => ({ src }))}
//           index={index}
//           //@ts-ignore
//           on={{ view: ({ index }) => setIndex(index) }}
//         />
//       </section>
//     );
//   }
// );

// CarGallery.displayName = "CarGallery";
// export default CarGallery;

"use client";
import React, { forwardRef, useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type CarGalleryProps = {
  phone: string;
  images: string[];
  youtubeLinks?: string[];
  videos?: string[];
};

const CarGallery = forwardRef<HTMLElement, CarGalleryProps>(
  ({ phone, images, youtubeLinks = [], videos = [] }, ref) => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const handleImageClick = (idx: number) => {
      setIndex(idx);
      setOpen(true);
    };

    const getYouTubeEmbedUrl = (url: string): string => {
      if (url.includes("youtu.be/")) {
        const videoId = url.split("youtu.be/")[1].split("?")[0];
        return `https://www.youtube.com/embed/${videoId}`;
      }
      if (url.includes("youtube.com/watch")) {
        const urlParams = new URLSearchParams(new URL(url).search);
        const videoId = urlParams.get("v");
        return `https://www.youtube.com/embed/${videoId}`;
      }
      return url;
    };

    return (
      <section ref={ref} className="px-4 md:px-12 lg:px-20 py-10 text-black">
        {/* Enquiry Section */}
        <div className="text-center mb-10">
          <p className="text-sm md:text-base">Interested in this vehicle ?</p>
          <p className="font-semibold text-gray-800 mb-3">Call us on {phone}</p>
          <button
            onClick={() => {
              const formSection = document.getElementById("enquiry-form");
              if (formSection) {
                formSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
          >
            Enquire
          </button>
        </div>

        {/* YouTube Videos */}
        {youtubeLinks.length > 0 && (
          <div className="flex flex-col items-center gap-6 mb-8">
            {youtubeLinks.map((link, idx) => (
              <div key={idx} className="w-full md:w-2/3 lg:w-1/2 aspect-video">
                <iframe
                  src={getYouTubeEmbedUrl(link)}
                  title={`YouTube video ${idx + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        )}

        {/* Uploaded Videos */}
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
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="mb-4 break-inside-avoid cursor-pointer"
              onClick={() => handleImageClick(idx)}
            >
              <img
                src={src}
                alt={`Car image ${idx + 1}`}
                className="w-full h-auto rounded-lg"
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

CarGallery.displayName = "CarGallery";
export default CarGallery;
