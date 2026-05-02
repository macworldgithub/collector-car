"use client";
import Image from "next/image";

export default function Services() {
  const topContent = [
    "At Collector Car Depot, we serve as the premier marketing service provider and facilitator for the classic automotive market. Our platform connects heartland motor enthusiasts with high-quality listings, ensuring that every vehicle—from iconic Aussie legends to Euro classics—gets the visibility it deserves.",
    "**Quality experience is our cornerstone**. We don't just list cars; we provide insights and knowledge needed to navigate a complex market often fraught with scams and pitfalls. By acting as a specialized bridge between parties, we help buyers and sellers avoid costly mistakes, ensuring a smooth and rewarding process for all involved.",
    "Our commitment is to transparency and empowerment across all price brackets. Whether you are looking to showcase your vehicle to a national audience or researching your next meaningful investment, our role as a facilitator ensures you have the tools and advice necessary to meet your standards.",
  ];

  const bottomContent = [
    "**How We Facilitate Your Success:**",
    "**Strategic Marketing:** We advertise your vehicle's profile using targeted industry reach to find the right audience.",
    "**Market Navigation:** We provide the professional insight required to bypass common industry pitfalls.",
    "**A Diverse Platform:** From American classics to British gems, we facilitate connections across a full range of automotive categories.",
    "**Confidence & Clarity:** While we are not brokers or agents, our valued advice helps ensure your prospective transaction is grounded in factual information and peace of mind.",
  ];

  const carImages = [
    "/car1.jpg",
    "/car2.jpg",
    "/car3.jpg", 
  ];

  return (
    <div className="w-full bg-white py-12 px-6 md:px-20 flex flex-col gap-12">
      {/* Top Content */}
      <div className="max-w-5xl mx-auto text-center md:text-left space-y-4">
        {topContent.map((para, i) => (
          <p
            key={i}
            className={`text-gray-800 text-sm md:text-base leading-relaxed ${
              para.startsWith("**") ? "font-semibold" : ""
            }`}
          >
            {para.replace(/\*\*/g, "")}
          </p>
        ))}
      </div>

      {/* Car Images */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
        {carImages.map((img, i) => (
          <div
            key={i}
            className="relative w-80 h-64 rounded-lg overflow-hidden shadow-md items-center justify-center "
          >
            <Image src={img} alt={`car-${i}`} unoptimized fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Bottom Content */}
      <div className="max-w-5xl mx-auto text-center md:text-left space-y-4">
        {bottomContent.map((para, i) => (
          <p
            key={i}
            className="text-gray-800 text-sm md:text-base leading-relaxed"
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
