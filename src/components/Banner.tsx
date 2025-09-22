// import Image from "next/image";

// type BannerProps = {
//   image?: string;
//   video?: string;
//   title: string;
//   subtitle: string;
// };

// export default function Banner({ image, video, title, subtitle }: BannerProps) {
//   return (
//     <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden">
//       {/* Background Video */}
//       {video ? (
//         <video
//           src={video}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover brightness-50"
//         />
//       ) : (
//         image && (
//           <Image
//             src={image}
//             alt="Banner Background"
//             fill
//             className="object-cover brightness-50"
//             priority
//           />
//         )
//       )}

//       {/* Overlay Text */}
//       <div className="relative text-center text-white px-4 z-10">
//         <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
//         <p className="text-sm md:text-lg mt-2">{subtitle}</p>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";

// type BannerProps = {
//   image?: string;
//   video?: string;
//   title: string;
//   subtitle: string;
// };

// export default function Banner({ image, video, title, subtitle }: BannerProps) {
//   return (
//     <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden">
//       {/* Background Video */}
//       {video ? (
//         <video
//           src={video}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover brightness-50"
//         />
//       ) : (
//         image && (
//           <Image
//             src={image}
//             alt="Banner Background"
//             fill
//             className="object-cover brightness-50"
//             priority
//           />
//         )
//       )}

//       {/* Overlay Text */}
//       <div className="relative text-center text-white px-4 z-10">
//         <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
//         {subtitle && (
//           <p className="text-sm md:text-lg mt-2">{subtitle}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";

// type BannerProps = {
//   image?: string;
//   video?: string;
//   title: string;
//   subtitle: string;
//   onClick?: () => void; // Add onClick prop
// };

// export default function Banner({
//   image,
//   video,
//   title,
//   subtitle,
//   onClick,
// }: BannerProps) {
//   return (
//     <div
//       className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden cursor-pointer"
//       onClick={onClick} // Attach click handler
//     >
//       {/* Background Video */}
//       {video ? (
//         <video
//           src={video}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover brightness-50"
//         />
//       ) : (
//         image && (
//           <Image
//             src={image}
//             alt="Banner Background"
//             fill
//             className="object-cover brightness-50"
//             priority
//           />
//         )
//       )}

//       {/* Overlay Text */}
//       <div className="relative text-center text-white px-4 z-10">
//         <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
//         {subtitle && <p className="text-sm md:text-lg mt-2">{subtitle}</p>}
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// type BannerProps = {
//   images?: string[];
//   video?: string;
//   title: string;
//   subtitle: string;
//   onClick?: () => void;
// };

// export default function Banner({
//   images = [],
//   video,
//   title,
//   subtitle,
//   onClick,
// }: BannerProps) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevImage = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const nextImage = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const currentImage = images[currentIndex] || "/default-car.jpg";

//   return (
//     <div
//       className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden cursor-pointer"
//       onClick={onClick}
//     >
//       {/* Background Video OR Image */}
//       {video ? (
//         <video
//           src={video}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover brightness-50"
//         />
//       ) : (
//         <Image
//           src={currentImage}
//           alt={`Car Banner ${currentIndex + 1}`}
//           fill
//           className="object-cover brightness-50 transition-all duration-500"
//           priority
//         />
//       )}

//       {/* Overlay Text */}
//       <div className="relative text-center text-white px-4 z-10">
//         <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
//         {subtitle && <p className="text-sm md:text-lg mt-2">{subtitle}</p>}
//       </div>

//       {/* Navigation Arrows */}
//       {images.length > 1 && (
//         <>
//           <button
//             onClick={prevImage}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           <button
//             onClick={nextImage}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </>
//       )}
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BannerProps = {
  image?: string; // single image
  images?: string[]; // multiple images
  video?: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
};

export default function Banner({
  image,
  images = [],
  video,
  title,
  subtitle,
  onClick,
}: BannerProps) {
  // Normalize: if only single image is provided, treat it like an array of one
  const imageList = images.length > 0 ? images : image ? [image] : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  const currentImage = imageList[currentIndex] || "/default-car.jpg";

  return (
    <div
      className="relative w-full h-[300px] md:h-[750px] flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Background Video OR Image */}
      {video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
      ) : (
        <Image
          src={currentImage}
          alt={`Banner ${currentIndex + 1}`}
          fill
          className="object-cover brightness-50 transition-all duration-500"
          priority
        />
      )}

      {/* Overlay Text */}
      <div className="relative text-center text-white px-4 z-10">
        <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
        {subtitle && <p className="text-sm md:text-lg mt-2">{subtitle}</p>}
      </div>

      {/* Navigation Arrows (only if multiple images) */}
      {imageList.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
}
