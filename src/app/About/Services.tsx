"use client";
import Image from "next/image";

export default function Services() {
  const topContent = [
    "At Collector Car Depot, we serve as a Marketing Service Provider and Facilitator for the classic car automotive market. Our platform connects heartland motor enthusiasts with Classic vehicle listings, ensuring that every vehicle—from iconic Aussie legends to Euro classics—gets the visibility it deserves.",
    "**We don't just list cars; we provide insights and knowledge needed to navigate a complex market often fraught with online scams and pitfalls. By acting as a specialized bridge between parties, we help buyers and sellers achieve an outcome, ensuring a smooth process for all involved.",
    "Our commitment is to deliver listings across all price brackets. Whether you are looking to showcase your vehicle to a national audience or researching your next purchase, our role as a facilitator ensures you have the tools necessary to meet your needs.",
  ];

  const bottomContent = [
    "**How We Facilitate Your Success:**",
    "**Strategic Marketing:** We advertise your vehicle's profile using targeted industry reach to find the right audience.",
    "**Market Navigation:** We provide the  insight required to bypass common industry pitfalls.",
    "**A Diverse Platform:**  From Australian Classics to American & European gems, we facilitate connections across a full range of automotive categories.",
    "**Confidence & Clarity:** While we are not brokers or agents, our valued advice helps ensure your prospective transaction is grounded with transparency directly with the owners of the Vehicles. ",
  ];

  const heading = bottomContent[0];
  const bullets = bottomContent.slice(1);

  const carImages = ["/car1.jpg", "/car2.jpg", "/car3.jpg"];

  return (
    <div className="w-full bg-white py-12 px-6 md:px-20 flex flex-col gap-12">
      {/* Top Content */}
      <div className="max-w-5xl mx-auto text-center md:text-left space-y-4">
        {topContent.map((para, i) => (
          <p
            key={i}
            className={`text-gray-800 text-sm md:text-base leading-relaxed ${
              para.startsWith("**") ? "font-medium" : ""
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
            <Image
              src={img}
              alt={`car-${i}`}
              unoptimized
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Bottom Content */}
      <div className="max-w-5xl mx-auto text-center md:text-left space-y-4">
        {/* {bottomContent.map((para, i) => (
          <p
            key={i}
            className="text-gray-800 text-sm md:text-base leading-relaxed"
          >
            {para}
          </p>
        ))} */}

        {/* Heading */}
        <p className="text-gray-900 font-semibold text-base md:text-lg">
          {heading.replace(/\*\*/g, "")}
        </p>

        {/* Bullet Points */}
        <ul className="list-disc pl-6 space-y-2 text-gray-800 text-sm md:text-base leading-relaxed">
          {bullets.map((item, i) => {
            const clean = item.replace(/\*\*/g, "");
            const [title, desc] = clean.split(":");

            return (
              <li key={i}>
                <strong>{title}:</strong> {desc}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
