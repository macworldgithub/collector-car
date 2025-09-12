// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import MainMenu from "./MainMenu";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <header className="bg-[#13125a] text-white relative z-50">
//         <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
//           {/* Left - Menu Button */}
//           <button
//             onClick={() => setOpen(true)}
//             className="flex items-center space-x-2"
//           >
//             <Menu className="w-6 h-6" />
//             <span className="hidden sm:inline font-semibold">Menu</span>
//           </button>

//           {/* Center - Logo */}
//           <div className="flex items-center justify-center">
//             <Image
//               src="/logo.png"
//               alt="Collector Car Depot"
//               width={120}
//               height={50}
//               priority
//             />
//           </div>

//           {/* Right - Contact */}
//           <div className="hidden md:flex flex-col items-end">
//             <span className="font-bold">0493 717 475</span>
//             <span className="text-xs">Monday to Friday</span>
//             <span className="text-xs">9am to 5pm</span>
//           </div>
//         </div>
//       </header>

//       {/* Full Screen Slider */}
//       <div
//         className={`fixed top-0 left-0 h-full w-full bg-black text-white z-50 transform transition-transform duration-300 ${
//           open ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Cancel Button */}
//         <div className="flex justify-end p-4">
//           <button onClick={() => setOpen(false)}>
//             <X className="w-8 h-8" />
//           </button>
//         </div>

//         {/* Menu Content */}
//         <div className="overflow-y-auto h-[calc(100%-4rem)] px-4 pb-10">
//           <MainMenu onClose={() => setOpen(false)} /> {/* 👈 pass close handler */}
//         </div>
//       </div>
//     </>
//   );
// }

"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import MainMenu from "./MainMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-[#13125a] text-white relative z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Left - Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="flex items-center space-x-2"
          >
            <Menu className="w-6 h-6" />
            <span className="hidden sm:inline font-semibold">Menu</span>
          </button>

          {/* Center - Logo */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/logo.png"
              alt="Collector Car Depot"
              width={120}
              height={50}
              priority
              className="object-contain"
            />
          </div>

          {/* Right - Contact */}
          <div className="flex items-center">
            <a href="tel:+61493717475" className="flex flex-col items-end">
              <span className="font-bold">0493 717 475</span>
              <span className="text-xs">Monday to Friday</span>
              <span className="text-xs">9am to 5pm</span>
            </a>
          </div>
        </div>
      </header>

      {/* Full Screen Slider */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Cancel Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="overflow-y-auto h-[calc(100%-4rem)] px-4 pb-10">
          <MainMenu onClose={() => setOpen(false)} />
        </div>
      </div>
    </>
  );
}