
// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// // Define the Car interface
// interface Car {
//   id: string;
//   make: string;
//   title: string;
//   price: number;
//   image: string;
// }

// export default function FilterCar() {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [selectedMake, setSelectedMake] = useState("Any");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const baseUrl = process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await fetch(`${baseUrl}/cars`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch cars");
//         }

//         // Define the backend Car type based on the schema
//         interface BackendCar {
//           _id: string;
//           make: string;
//           title: string;
//           price: number;
//           images: string[];
//         }

//         const data: BackendCar[] = await response.json();
//         // Map backend Car schema to frontend Car type
//         const mappedCars: Car[] = data.map((car) => ({
//           id: car._id,
//           make: car.make,
//           title: car.title,
//           price: car.price,
//           image:
//             car.images && car.images.length > 0
//               ? `${baseUrl}${car.images[0]}`
//               : "/default-car.jpg",
//         }));

//         setCars(mappedCars);
//         setLoading(false);
//       } catch (err) {
//         setError("Error fetching cars. Please try again later.");
//         setLoading(false);
//         console.error(err);
//       }
//     };

//     fetchCars();
//   }, [baseUrl]);

//   const makes = ["Any", ...new Set(cars.map((car) => car.make))];

//   const filteredCars =
//     selectedMake === "Any"
//       ? cars
//       : cars.filter((car) => car.make === selectedMake);

//   return (
//     <section className="container mx-auto px-4 py-8">
//       {/* Filter Dropdown */}
//       <div className="flex justify-center mb-6 text-black">
//         <div>
//           <label className="block text-center font-semibold mb-2">
//             Filter By Make
//           </label>
//           <select
//             value={selectedMake}
//             onChange={(e) => setSelectedMake(e.target.value)}
//             className="border rounded px-3 py-2"
//             disabled={loading}
//           >
//             {makes.map((make, idx) => (
//               <option key={idx} value={make}>
//                 {make}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Loading and Error States */}
//       {loading && <p className="text-center text-gray-600">Loading cars...</p>}
//       {error && <p className="text-center text-red-600">{error}</p>}

//       {/* Cars Grid */}
//       {!loading && !error && (
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredCars.length > 0 ? (
//             filteredCars.map((car) => (
//               <Link key={car.id} href={`/CarDetails/${car.id}`}>
//                 <div className="cursor-pointer text-black rounded-xl shadow hover:shadow-lg transition p-3">
//                   <Image
//                     src={car.image}
//                     alt={car.title}
//                     width={400}
//                     height={300}
//                     className="rounded-lg object-cover w-full h-48"
//                   />
//                   <h3 className="mt-3 font-semibold text-lg text-center">
//                     {car.title}
//                   </h3>
//                   <p className="text-blue-600 text-center font-bold">
//                     ${car.price.toLocaleString()}
//                   </p>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p className="text-center text-gray-600 col-span-full">
//               No cars found for the selected make.
//             </p>
//           )}
//         </div>
//       )}
//     </section>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// // Define the frontend Car interface (simplified for rendering)
// interface Car {
//   id: string;
//   make: string;
//   title: string;
//   price: number;
//   image: string;
// }

// export default function FilterCar() {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [selectedMake, setSelectedMake] = useState("Any");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const baseUrl = process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await fetch(`${baseUrl}/cars`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch cars");
//         }

//         // Define the backend Car type based on the schema (includes images as signed S3 URLs)
//         interface BackendCar {
//           _id: string;
//           make: string;
//           title: string;
//           price: number;
//           images: string[];
//           status: 'unsold' | 'sold';
//         }

//         const data: BackendCar[] = await response.json();
//         // Map backend Car schema to frontend Car type
//         const mappedCars: Car[] = data.map((car) => ({
//           id: car._id,
//           make: car.make,
//           title: car.title,
//           price: car.price,
//           image:
//             car.images && car.images.length > 0
//               ? car.images[0]  // Use signed S3 URL directly (no baseUrl prefix)
//               : "/default-car.jpg",
//         }));

//         setCars(mappedCars);
//         setLoading(false);
//       } catch (err) {
//         setError("Error fetching cars. Please try again later.");
//         setLoading(false);
//         console.error(err);
//       }
//     };

//     fetchCars();
//   }, [baseUrl]);

//   const makes = ["Any", ...new Set(cars.map((car) => car.make))];

//   const filteredCars =
//     selectedMake === "Any"
//       ? cars
//       : cars.filter((car) => car.make === selectedMake);

//   return (
//     <section className="container mx-auto px-4 py-8">
//       {/* Filter Dropdown */}
//       {/* <div className="flex justify-center mb-6 text-black">
//         <div>
//           <label className="block text-center font-semibold mb-2">
//             Filter By Make
//           </label>
//           <select
//             value={selectedMake}
//             onChange={(e) => setSelectedMake(e.target.value)}
//             className="border rounded px-3 py-2"
//             disabled={loading}
//           >
//             {makes.map((make, idx) => (
//               <option key={idx} value={make}>
//                 {make}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div> */}

//       {/* Loading and Error States */}
//       {loading && <p className="text-center text-gray-600">Loading cars...</p>}
//       {error && <p className="text-center text-red-600">{error}</p>}

//       {/* Cars Grid */}
//       {!loading && !error && (
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredCars.length > 0 ? (
//             filteredCars.map((car) => (
//               <Link key={car.id} href={`/CarDetails/${car.id}`}>
//                 <div className="cursor-pointer text-black rounded-xl shadow hover:shadow-lg transition p-3">
//                   <Image
//                     src={car.image}
//                     alt={car.title}
//                     width={400}
//                     height={300}
//                     className="rounded-lg object-cover w-full h-48"
//                   />
//                   <h3 className="mt-3 font-semibold text-lg text-center">
//                     {car.title}
//                   </h3>
//                   <p className="text-blue-600 text-center font-bold">
//                     ${car.price.toLocaleString()}
//                   </p>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p className="text-center text-gray-600 col-span-full">
//               No cars found for the selected make.
//             </p>
//           )}
//         </div>
//       )}
//     </section>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Define the frontend Car interface (simplified for rendering)
interface Car {
  id: string;
  make: string;
  title: string;
  price: number;
  image: string;
}

export default function FilterCar() {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedMake, setSelectedMake] = useState("Any");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 9;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(`${baseUrl}/cars?page=${currentPage}&limit=${carsPerPage}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch cars");
        }

        interface BackendCar {
          _id: string;
          make: string;
          title: string;
          price: number;
          images: string[];
          status: 'unsold' | 'sold';
        }

        const data: BackendCar[] = await response.json();
        const mappedCars: Car[] = data.map((car) => ({
          id: car._id,
          make: car.make,
          title: car.title,
          price: car.price,
          image: car.images && car.images.length > 0 ? car.images[0] : "/default-car.jpg",
        }));

        setCars(mappedCars);
        setLoading(false);
      } catch (err) {
        setError("Error fetching cars. Please try again later.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchCars();
  }, [baseUrl, currentPage]);

  const makes = ["Any", ...new Set(cars.map((car) => car.make))];
  const filteredCars = selectedMake === "Any" ? cars : cars.filter((car) => car.make === selectedMake);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const paginatedCars = filteredCars.slice((currentPage - 1) * carsPerPage, currentPage * carsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="container mx-auto px-4 py-8">
      {/* <div className="flex justify-center mb-6 text-black">
        <div>
          <label className="block text-center font-semibold mb-2">Filter By Make</label>
          <select
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
            className="border rounded px-3 py-2"
            disabled={loading}
          >
            {makes.map((make, idx) => (
              <option key={idx} value={make}>{make}</option>
            ))}
          </select>
        </div>
      </div> */}

      {loading && <p className="text-center text-gray-600">Loading cars...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedCars.length > 0 ? (
              paginatedCars.map((car) => (
                <Link key={car.id} href={`/CarDetails/${car.id}`}>
                  <div className="cursor-pointer text-black rounded-xl shadow hover:shadow-lg transition p-3">
                    <Image
                      src={car.image}
                      alt={car.title}
                      width={400}
                      height={300}
                      className="rounded-lg object-cover w-full h-48"
                    />
                    <h3 className="mt-3 font-semibold text-lg text-center">{car.title}</h3>
                    <p className="text-blue-600 text-center font-bold">${car.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">No cars found for the selected make.</p>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="text-blue-600 hover:underline disabled:text-gray-400"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => paginate(page)}
                  className={`px-2 hover:underline ${currentPage === page ? 'font-bold' : 'text-blue-600'}`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="text-blue-600 hover:underline disabled:text-gray-400"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}