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
            <Menu className="w-10 h-10" />
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
            <a href="tel:+61493717475" className="flex items-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
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