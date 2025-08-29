"use client";
import Image from "next/image";

export default function Services() {
  const topContent = [
    "At Collector Car Depot, we specialize in the best collector car listings across the classic automotive market, offering quality cars and delivering complete peace of mind to our clients.",
    "**Quality experience is our cornerstone** — whether it’s the sale or purchase of your vehicle of choice, every car or bike in our inventory represents what heartland motor enthusiasts expect across a full range of price brackets.",
    "Our commitment extends beyond providing a diverse inventory. We guide all clients through a complex market often fraught with scams and pitfalls.",
    "With expert knowledge and professional insight, we help avoid costly problems, ensuring a smooth, rewarding experience. Whether you’re considering an iconic Aussie legend or American classic, possibly a beautifully restored British or Euro classic, our valued advice ensures a prospective purchase meets your standards and delivers the expected satisfaction such a meaningful investment deserves.",
  ];

  const bottomContent = [
    "With over 30 years of solid hard earned experience right across the Classic car industry, Michael Saide the proprietor of CCD has forged an unparalleled reputation for getting the individual results each Client requires.",
    "With your trust in his unbiased advice, you will get an unwavering commitment to quality in every transaction.",
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
            <Image src={img} alt={`car-${i}`} fill className="object-cover" />
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
