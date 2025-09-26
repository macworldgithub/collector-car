// "use client";
// import { useState, useEffect } from "react";
// // import Image from "next/image";
// import Link from "next/link";

// // Define the frontend Car interface to match backend schema
// interface Car {
//   _id: string;
//   slug: string;
//   make: string;
//   title: string;
//   price: number;
//   images: string[];
//   status: "unsold" | "sold";
// }

// // Define the paginated response interface
// interface PaginatedCars {
//   data: Car[];
//   total: number;
// }

// export default function FilterCar() {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [totalCars, setTotalCars] = useState(0);
//   const [makes, setMakes] = useState<string[]>(["Any"]);
//   const [selectedMake, setSelectedMake] = useState("Any");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const carsPerPage = 9;

//   const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

//   // Fetch available makes for the filter dropdown
//   useEffect(() => {
//     const fetchMakes = async () => {
//       try {
//         const response = await fetch(`${baseUrl}/cars/makes`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error("Failed to fetch makes");
//         }
//         const data: string[] = await response.json();
//         setMakes(["Any", ...data]);
//         console.log(data, "data");
//       } catch (err) {
//         console.error("Error fetching makes:", err);
//       }
//     };
//     fetchMakes();
//   }, [baseUrl]);

//   // Fetch unsold cars with pagination and optional make filter
//   useEffect(() => {
//     const fetchCars = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         // Use /cars endpoint with make filter if not "Any"
//         const url =
//           selectedMake === "Any"
//             ? `${baseUrl}/cars?page=${currentPage}&limit=${carsPerPage}`
//             : `${baseUrl}/cars?page=${currentPage}&limit=${carsPerPage}&make=${encodeURIComponent(
//                 selectedMake
//               )}`;

//         const response = await fetch(url, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch cars");
//         }

//         const backendResponse: PaginatedCars = await response.json();
//         setCars(backendResponse.data);
//         setTotalCars(backendResponse.total);
//         setLoading(false);
//       } catch (err) {
//         setError("Error fetching cars. Please try again later.");
//         setLoading(false);
//         console.error(err);
//       }
//     };

//     fetchCars();
//   }, [baseUrl, currentPage, selectedMake]);

//   const totalPages = Math.ceil(totalCars / carsPerPage);
//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <section className="container mx-auto px-4 py-8">
//       <div className="flex justify-center mb-6 text-black">
//         <div>
//           <label className="block text-center font-semibold mb-2">
//             Filter By Make
//           </label>
//           <select
//             value={selectedMake}
//             onChange={(e) => {
//               setSelectedMake(e.target.value);
//               setCurrentPage(1); // Reset to page 1 on filter change
//             }}
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

//       {loading && <p className="text-center text-gray-600">Loading cars...</p>}
//       {error && <p className="text-center text-red-600">{error}</p>}

//       {!loading && !error && (
//         <>
//           {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
//             {cars.map((car) => (
//               <Link key={car._id} href={`/CarDetails/${car.slug}`}>
//                 <div className="cursor-pointer text-black rounded-xl hover:shadow-lg transition p-3 h-full flex flex-col">
//                   <Image
//                     src={car.images?.[0] ?? "/default-car.jpg"}
//                     alt={car.title}
//                     width={500}
//                     height={300}
//                     className="rounded-lg object-contain w-full h-48 bg-white"
//                   />

//                   <h3 className="mt-3 font-semibold text-lg text-center line-clamp-2">
//                     {car.title}
//                   </h3>
//                   <p className="text-blue-600 text-center font-bold mt-auto">
//                     ${car.price.toLocaleString()}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div> */}
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
//             {cars.map((car) => (
//               <Link key={car._id} href={`/CarDetails/${car.slug}`}>
//                 <div className="cursor-pointer text-black rounded-xl hover:shadow-lg transition p-3 h-full flex flex-col">
//                   {/* Image Container with fixed aspect ratio */}
//                   <div className="relative w-full aspect-[4/3] bg-white">
//                     {/* <Image
//                       src={car.images?.[0] ?? "/default-car.jpg"}
//                       alt={car.title}
//                       fill
//                       className="rounded-lg object-contain"
//                     /> */}
//                     {/* <img
//                       src={car.images?.[0] ?? "/default-car.jpg"}
//                       alt="car.title"
//                       className="rounded-lg object-contain w-full h-full"
//                     /> */}
//                     <img
//                       src={
//                         car.images && car.images.length > 0
//                           ? car.images[0]
//                           : "/default-car.jpg"
//                       }
//                       alt={car.title}
//                       className="absolute inset-0 w-full h-full rounded-lg object-contain"
//                     />
//                   </div>

//                   {/* Title */}
//                   <h3 className="mt-3 font-semibold text-lg text-center line-clamp-2">
//                     {car.title}
//                   </h3>

//                   {/* Price (pushed to bottom) */}
//                   <p className="text-blue-600 text-center font-bold mt-auto">
//                     ${car.price.toLocaleString()}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           {totalPages > 1 && (
//             <div className="flex justify-center mt-6 space-x-2">
//               <button
//                 onClick={() => paginate(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="text-blue-600 hover:underline disabled:text-gray-400"
//               >
//                 Previous
//               </button>
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                 (page) => (
//                   <button
//                     key={page}
//                     onClick={() => paginate(page)}
//                     className={`px-2 hover:underline ${
//                       currentPage === page ? "font-bold" : "text-blue-600"
//                     }`}
//                   >
//                     {page}
//                   </button>
//                 )
//               )}
//               <button
//                 onClick={() => paginate(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="text-blue-600 hover:underline disabled:text-gray-400"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </section>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

// Define the frontend Car interface to match backend schema
interface Car {
  _id: string;
  slug: string;
  make: string;
  title: string;
  price: number;
  images: string[];
  status: "unsold" | "sold" | "deposit";
}

// Define the paginated response interface
interface PaginatedCars {
  data: Car[];
  total: number;
}

export default function FilterCar() {
  const [cars, setCars] = useState<Car[]>([]);
  const [totalCars, setTotalCars] = useState(0);
  const [makes, setMakes] = useState<string[]>(["Any"]);
  const [selectedMake, setSelectedMake] = useState("Any");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 9;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  // Fetch available makes for the filter dropdown
  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await fetch(`${baseUrl}/cars/makes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch makes");
        }
        const data: string[] = await response.json();
        setMakes(["Any", ...data]);
      } catch (err) {
        console.error("Error fetching makes:", err);
      }
    };
    fetchMakes();
  }, [baseUrl]);

  // Fetch unsold cars with pagination and optional make filter
  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      setError(null);
      try {
        const url =
          selectedMake === "Any"
            ? `${baseUrl}/cars?page=${currentPage}&limit=${carsPerPage}`
            : `${baseUrl}/cars?page=${currentPage}&limit=${carsPerPage}&make=${encodeURIComponent(
                selectedMake
              )}`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch cars");
        }

        const backendResponse: PaginatedCars = await response.json();
        setCars(backendResponse.data);
        setTotalCars(backendResponse.total);
        setLoading(false);
      } catch (err) {
        setError("Error fetching cars. Please try again later.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchCars();
  }, [baseUrl, currentPage, selectedMake]);

  const totalPages = Math.ceil(totalCars / carsPerPage);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-6 text-black">
        <div>
          <label className="block text-center font-semibold mb-2">
            Filter By Make
          </label>
          <select
            value={selectedMake}
            onChange={(e) => {
              setSelectedMake(e.target.value);
              setCurrentPage(1); // Reset to page 1 on filter change
            }}
            className="border rounded px-3 py-2"
            disabled={loading}
          >
            {makes.map((make, idx) => (
              <option key={idx} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading && <p className="text-center text-gray-600">Loading cars...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {cars.map((car) => (
              <Link key={car._id} href={`/CarDetails/${car.slug}`}>
                <div className="cursor-pointer text-black rounded-xl hover:shadow-lg transition p-3 h-full flex flex-col">
                  {/* Image Container with fixed aspect ratio */}
                  <div className="relative w-full aspect-[4/3] bg-white">
                    <img
                      src={
                        car.images && car.images.length > 0
                          ? car.images[0]
                          : "/default-car.jpg"
                      }
                      alt={car.title}
                      className="absolute inset-0 w-full h-full rounded-lg object-contain"
                    />
                    {/* Status Badge */}
                    <div className="absolute top-2 right-2">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          car.status === "sold"
                            ? "bg-red-100 text-red-800"
                            : car.status === "deposit"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {car.status === "unsold"
                          ? "AVAILABLE"
                          : car.status.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 font-semibold text-lg text-center line-clamp-2">
                    {car.title}
                  </h3>

                  {/* Price (pushed to bottom) */}
                  <p className="text-blue-600 text-center font-bold mt-auto">
                    ${car.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
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
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => paginate(page)}
                    className={`px-2 hover:underline ${
                      currentPage === page ? "font-bold" : "text-blue-600"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
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