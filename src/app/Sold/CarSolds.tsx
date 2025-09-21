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

// // Define the paginated response interface
// interface PaginatedCars {
//   data: Car[];
//   total: number;
// }

// export default function CarListing() {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [totalCars, setTotalCars] = useState(0); // New: total count from backend
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const carsPerPage = 9;

//   const baseUrl = process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     const fetchCars = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(`${baseUrl}/cars/sold?page=${currentPage}&limit=${carsPerPage}`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch cars");
//         }

//         interface BackendCar {
//           _id: string;
//           make: string;
//           title: string;
//           price: number;
//           images: string[];
//           status: 'unsold' | 'sold';
//         }

//         interface BackendResponse {
//           data: BackendCar[];
//           total: number;
//         }

//         const backendResponse: BackendResponse = await response.json();
//         const mappedCars: Car[] = backendResponse.data.map((car) => ({
//           id: car._id,
//           make: car.make,
//           title: car.title,
//           price: car.price || 0,
//           image: car.images && car.images.length > 0 ? car.images[0] : "/default-car.jpg",
//         }));

//         setCars(mappedCars);
//         setTotalCars(backendResponse.total); // New: set total count
//         setLoading(false);
//       } catch (err) {
//         setError("Error fetching cars. Please try again later.");
//         setLoading(false);
//         console.error(err);
//       }
//     };

//     fetchCars();
//   }, [baseUrl, currentPage]);

//   const totalPages = Math.ceil(totalCars / carsPerPage);
//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <section className="container mx-auto px-4 py-8">
//       {loading && <p className="text-center text-gray-600">Loading cars...</p>}
//       {error && <p className="text-center text-red-600">{error}</p>}

//       {!loading && !error && (
//         <>
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {cars.length > 0 ? (
//               cars.map((car) => (
//                 <Link key={car.id} href={`/CarDetails/${car.id}`}>
//                   <div className="cursor-pointer text-black rounded-xl shadow hover:shadow-lg transition p-3">
//                     <Image
//                       src={car.image}
//                       alt={car.title}
//                       width={400}
//                       height={300}
//                       className="rounded-lg object-cover w-full h-48"
//                     />
//                     <p className="text-center font-bold mt-2 tracking-widest">&quot;SOLD SOLD SOLD&quot;</p>

//                   </div>
//                 </Link>
//               ))
//             ) : (
//               <p className="text-center text-gray-600 col-span-full">No sold cars found.</p>
//             )}
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
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => paginate(page)}
//                   className={`px-2 hover:underline ${currentPage === page ? 'font-bold' : 'text-blue-600'}`}
//                 >
//                   {page}
//                 </button>
//               ))}
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
import Image from "next/image";
import Link from "next/link";

// Define the frontend Car interface to match backend schema
interface Car {
  _id: string;
  slug: string;
  make: string;
  title: string;
  price: number;
  images: string[];
  status: 'unsold' | 'sold';
}

// Define the paginated response interface
interface PaginatedCars {
  data: Car[];
  total: number;
}

export default function CarListing() {
  const [cars, setCars] = useState<Car[]>([]);
  const [totalCars, setTotalCars] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 9;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${baseUrl}/cars/sold?page=${currentPage}&limit=${carsPerPage}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

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
  }, [baseUrl, currentPage]);

  const totalPages = Math.ceil(totalCars / carsPerPage);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="container mx-auto px-4 py-8">
      {loading && <p className="text-center text-gray-600">Loading cars...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cars.length > 0 ? (
              cars.map((car) => (
                <Link key={car._id} href={`/CarDetails/${car.slug}`}>
                  <div className="cursor-pointer text-black rounded-xl shadow hover:shadow-lg transition p-3">
                    <Image
                      src={car.images && car.images.length > 0 ? car.images[0] : "/default-car.jpg"}
                      alt={car.title}
                      width={400}
                      height={300}
                      className="rounded-lg object-cover w-full h-48"
                    />
                    <p className="text-center font-bold mt-2 tracking-widest">&quot;SOLD SOLD SOLD&quot;</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">No sold cars found.</p>
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