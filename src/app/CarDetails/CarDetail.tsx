// // components/CarDetails.tsx
// "use client";
// import React from "react";

// type CarDetailsProps = {
//   title: string;
//   description: string;
//   factoryOptions: string[];
//   highlights: string[];
//   keyFeatures: { label: string; value: string }[];
//   specifications: { label: string; value: string }[];
// };

// const CarDetail: React.FC<CarDetailsProps> = ({
//   title,
//   description,
//   factoryOptions,
//   highlights,
//   keyFeatures,
//   specifications,
// }) => {
//   return (
//     <section className="px-4 md:px-12 lg:px-20 py-10 text-black">
//       {/* Title */}
//       <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
//         DESCRIPTION
//       </h2>

//       {/* Car Title & Description */}
//       <div className="text-center max-w-3xl mx-auto mb-8">
//         <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-gray-700 text-sm md:text-base">{description}</p>
//       </div>

//       {/* Factory Options */}
//       <div className="text-center mb-8">
//         <h4 className="font-semibold">Factory Options –</h4>
//         <ul className="mt-2 space-y-1">
//           {factoryOptions.map((opt, index) => (
//             <li key={index} className="text-sm md:text-base text-gray-700">
//               {opt}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Highlights */}
//       <ul className="list-disc list-inside space-y-3 max-w-4xl mx-auto text-gray-700 mb-12 text-sm md:text-base">
//         {highlights.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//       {/* Features & Specifications */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Key Features */}
//         <div>
//           <h3 className="text-xl font-bold text-center mb-4">KEY FEATURES</h3>
//           <div className="border rounded-lg overflow-hidden">
//             {keyFeatures.map((feature, index) => (
//               <div
//                 key={index}
//                 className={`grid grid-cols-2 border-b last:border-b-0`}
//               >
//                 <div className="px-4 py-2 bg-gray-100 font-medium text-sm md:text-base">
//                   {feature.label}
//                 </div>
//                 <div className="px-4 py-2 text-sm md:text-base">
//                   {feature.value}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Specifications */}
//         <div>
//           <h3 className="text-xl font-bold text-center mb-4">SPECIFICATION</h3>
//           <div className="border rounded-lg overflow-hidden">
//             {specifications.map((spec, index) => (
//               <div
//                 key={index}
//                 className={`grid grid-cols-2 border-b last:border-b-0`}
//               >
//                 <div className="px-4 py-2 bg-gray-100 font-medium text-sm md:text-base">
//                   {spec.label}
//                 </div>
//                 <div className="px-4 py-2 text-sm md:text-base">
//                   {spec.value}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CarDetail;

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

type Car = {
  id: string;
  title: string;
  make: string;
  price: number;
  image: string;
  description?: string;
};

export default function CarDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3009";

  useEffect(() => {
    if (!id) return;

    const fetchCar = async () => {
      try {
        const response = await fetch(`${baseUrl}/cars/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch car details");
        }

        const data = await response.json();
        setCar({
          id: data._id,
          title: data.title,
          make: data.make,
          price: data.price,
          image: data.images && data.images.length > 0 
            ? `${baseUrl}${data.images[0]}` 
            : "/default-car.jpg",
          description: data.description,
        });
        setLoading(false);
      } catch (err) {
        setError("Error fetching car details. Please try again later.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchCar();
  }, [id, baseUrl]);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;
  if (!car) return <p className="text-center text-gray-600">Car not found</p>;

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">{car.title}</h2>
      <div className="max-w-2xl mx-auto">
        <Image
          src={car.image}
          alt={car.title}
          width={600}
          height={400}
          className="rounded-lg object-cover w-full h-64"
        />
        <p className="mt-4 text-lg font-semibold">Make: {car.make}</p>
        <p className="text-blue-600 font-bold">${car.price.toLocaleString()}</p>
        {car.description && <p className="mt-4 text-gray-600">{car.description}</p>}
      </div>
    </section>
  );
}