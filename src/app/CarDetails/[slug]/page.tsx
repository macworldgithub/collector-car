// "use client";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Banner from "@/components/Banner";
// import CarDetail from "../CarDetail";
// import CarGallery from "@/components/CarGallery";
// import EnquiryForm from "../EnquiryForm";

// // Define the Car interface
// interface Car {
//   _id: string;
//   title: string;
//   make: string;
//   description: string;
//   price: number;
//   factoryOptions: string[];
//   highlights: string[];
//   keyFeatures: { label: string; value: string }[];
//   specifications: { label: string; value: string }[];
//   status: "unsold" | "sold";
//   images: string[];
//   userId?: string;
// }

// export default function CarDetailPage() {
//   const { id } = useParams();
//   const [car, setCar] = useState<Car | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const baseUrl = process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     if (!id) return;
//     const fetchCar = async () => {
//       try {
//         const res = await fetch(`${baseUrl}/cars/${id}`);
//         if (!res.ok) throw new Error("Failed to fetch car details");
//         const data: Car = await res.json();
//         setCar(data);
//       } catch {
//         setError("Error fetching car details. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCar();
//   }, [id, baseUrl]);

//   if (loading) return <p className="text-center">Loading car details...</p>;
//   if (error) return <p className="text-center text-red-600">{error}</p>;
//   if (!car) return <p className="text-center">Car not found.</p>;

//   return (
//     <div className="bg-white">
//       <Banner
//         image={
//           car.images?.[0] ? `${car.images[0]}` : "/default-car.jpg"
//         }
//         title={car.status === "sold" ? `"SOLD SOLD SOLD"` : car.title}
//         subtitle={
//           car.status === "sold"
//             ? ""
//             : `$${car.price.toLocaleString()}`
//         }
//       />
//       <main>
//         <CarDetail
//           title={car.title}
//           description={car.description}
//           factoryOptions={car.factoryOptions || []}
//           highlights={car.highlights || []}
//           keyFeatures={car.keyFeatures || []}
//           specifications={car.specifications || []}
//         />

//         <CarGallery
//           phone="0493 717 475"
//           videoThumbnail={
//             car.images?.[0] ? `${car.images[0]}` : "/default-car.jpg"
//           }
//           images={car.images?.map((img: string) => `${img}`) || []}
//         />

//         <EnquiryForm />
//       </main>
//     </div>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// import Banner from "@/components/Banner";
// import CarDetail from "../CarDetail";
// import CarGallery from "@/components/CarGallery";
// import EnquiryForm from "../EnquiryForm";

// // Define the Car interface to match backend schema
// interface Car {
//   _id: string;
//   slug: string;
//   title: string;
//   make: string;
//   description: string;
//   price: number;
//   factoryOptions: string[];
//   highlights: string[];
//   keyFeatures: { label: string; value: string }[];
//   specifications: { label: string; value: string }[];
//   status: "unsold" | "sold";
//   images: string[];
//   userId?: string;
// }

// export default function CarDetailPage() {
//   const { slug } = useParams(); // Use slug instead of id
//   const [car, setCar] = useState<Car | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

//   useEffect(() => {
//     if (!slug) return;
//     const fetchCar = async () => {
//       try {
//         const res = await fetch(`${baseUrl}/cars/${slug}`);
//         if (!res.ok) throw new Error("Failed to fetch car details");
//         const data: Car = await res.json();
//         setCar(data);
//       } catch {
//         setError("Error fetching car details. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCar();
//   }, [slug, baseUrl]);

//   if (loading) return <p className="text-center">Loading car details...</p>;
//   if (error) return <p className="text-center text-red-600">{error}</p>;
//   if (!car) return <p className="text-center">Car not found.</p>;

//   return (
//     <div className="bg-white">
//       <Banner
//         image={car.images?.[0] ? car.images[0] : "/default-car.jpg"}
//         title={car.status === "sold" ? `"SOLD SOLD SOLD"` : car.title}
//         subtitle={car.status === "sold" ? "" : `$${car.price.toLocaleString()}`}
//       />
//       <main>
//         <CarDetail
//           title={car.title}
//           description={car.description}
//           factoryOptions={car.factoryOptions || []}
//           highlights={car.highlights || []}
//           keyFeatures={car.keyFeatures || []}
//           specifications={car.specifications || []}
//         />

//         <CarGallery
//           phone="0493 717 475"
//           videoThumbnail={car.images?.[0] ? car.images[0] : "/default-car.jpg"}
//           images={car.images?.map((img: string) => img) || []}
//         />

//         <EnquiryForm />
//       </main>
//     </div>
//   );
// }

// "use client";
// import { useState, useEffect, useRef } from "react";
// import { useParams } from "next/navigation";
// import Banner from "@/components/Banner";
// import CarDetail from "../CarDetail";
// import CarGallery from "@/components/CarGallery";
// import EnquiryForm from "../EnquiryForm";

// // Define the Car interface to match backend schema
// interface Car {
//   _id: string;
//   slug: string;
//   title: string;
//   make: string;
//   description: string;
//   price: number;
//   factoryOptions: string[];
//   highlights: string[];
//   keyFeatures: { label: string; value: string }[];
//   specifications: { label: string; value: string }[];
//   status: "unsold" | "sold";
//   images: string[];
//   videos?: string[]; // array of video URLs
//   youtubeLinks?: string[];  // ✅ YouTube video URLs

//   userId?: string;
// }

// export default function CarDetailPage() {
//   const { slug } = useParams(); // Use slug instead of id
//   const [car, setCar] = useState<Car | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const galleryRef = useRef<HTMLElement>(null); // Ref for CarGallery section

//   const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

//   useEffect(() => {
//     if (!slug) return;
//     const fetchCar = async () => {
//       try {
//         const res = await fetch(`${baseUrl}/cars/${slug}`);
//         if (!res.ok) throw new Error("Failed to fetch car details");
//         const data: Car = await res.json();
//         setCar(data);
//       } catch {
//         setError("Error fetching car details. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCar();
//   }, [slug, baseUrl]);

//   // Function to scroll to gallery
//   const scrollToGallery = () => {
//     galleryRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   if (loading) return <p className="text-center">Loading car details...</p>;
//   if (error) return <p className="text-center text-red-600">{error}</p>;
//   if (!car) return <p className="text-center">Car not found.</p>;

//   return (
//     <div className="bg-white">
//       <Banner
//         images={car.images?.length ? car.images : ["/default-car.jpg"]}
//         title={car.status === "sold" ? "SOLD SOLD SOLD" : car.title}
//         subtitle={car.status === "sold" ? "" : `$${car.price.toLocaleString()}`}
//         onClick={scrollToGallery}
//       />

//       <main>
//         <CarDetail
//           title={car.title}
//           description={car.description}
//           factoryOptions={car.factoryOptions || []}
//           highlights={car.highlights || []}
//           keyFeatures={car.keyFeatures || []}
//           specifications={car.specifications || []}
//         />

//         {/* <CarGallery
//           ref={galleryRef} // Pass ref to CarGallery
//           phone="0493 717 475"
//           videoThumbnail={car.images?.[0] ? car.images[0] : "/default-car.jpg"}
//           images={car.images?.map((img: string) => img) || []}
//         /> */}
//         {/* <CarGallery
//           ref={galleryRef} // Pass ref to CarGallery
//           phone="0493 717 475"
//           videos={car.videos} // or videos={[...]} if static
//           images={car.images}
//         /> */}
//         <CarGallery
//           ref={galleryRef}
//           phone="0493 717 475"
//           youtubeLinks={car.youtubeLinks || []}
//           videos={car.videos || []}
//           images={car.images || []}
//         />


//         <EnquiryForm />
//       </main>
//     </div>
//   );
// }
// import CarDetailClient from "./CarDetailClient";

// interface Car {
//   _id: string;
//   slug: string;
//   title: string;
//   make: string;
//   description: string;
//   price: number;
//   factoryOptions: string[];
//   highlights: string[];
//   keyFeatures: { label: string; value: string }[];
//   specifications: { label: string; value: string }[];
//   status: "unsold" | "sold";
//   images: string[];
//   videos?: string[];
//   youtubeLinks?: string[];
//   userId?: string;
// }

// // ✅ Server-side metadata generator
// export async function generateMetadata(
//   props: { params: Promise<{ slug: string }> }
// ) {
//   const { slug } = await props.params; // ✅ Await params
//   const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

//   try {
//     const res = await fetch(`${baseUrl}/cars/${slug}`, { cache: "no-store" });
//     if (!res.ok) throw new Error("Car not found");

//     const car: Car = await res.json();

//     const image = car.images?.length ? car.images[0] : "/default-car.jpg";
//     const title = car.status === "sold" ? `SOLD – ${car.title}` : car.title;

//     return {
//       title,
//       openGraph: {
//         title,
//         type: "article",
//         url: `https://collectorcardepot.com/CarDetails/${slug}`,
//         images: [
//           {
//             url: image,
//             width: 1200,
//             height: 630,
//             alt: title,
//           },
//         ],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title,
//         images: [image],
//       },
//     };
//   } catch {
//     return {
//       title: "Car not found",
//     };
//   }
// }

// // ✅ Server component wrapping your client component
// export default function CarDetailPage() {
//   return <CarDetailClient />;
// }

import CarDetailClient from "./CarDetailClient";

interface Car {
  _id: string;
  slug: string;
  title: string;
  make: string;
  description: string;
  price: number;
  factoryOptions: string[];
  highlights: string[];
  keyFeatures: { label: string; value: string }[];
  specifications: { label: string; value: string }[];
  status: "unsold" | "sold";
  images: string[];
  videos?: string[];
  youtubeLinks?: string[];
  userId?: string;
}

// ✅ Server-side metadata generator
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/cars/${slug}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Car not found");

    const car: Car = await res.json();

    const image = car.images?.length ? car.images[0] : "/default-car.jpg";
    const title = car.status === "sold" ? `SOLD – ${car.title}` : car.title;

    return {
      title,
      description: car.description,
      openGraph: {
        title,
        type: "article",
        url: `https://collectorcardepot.com/CarDetails/${slug}`,
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        images: [image],
      },
      // ✅ Custom metadata for WhatsApp
      metadataBase: new URL("https://collectorcardepot.com"),
      alternates: {},
      other: [
        { name: "og:image", content: image },
        { name: "og:image:width", content: "1200" },
        { name: "og:image:height", content: "630" },
        { name: "og:image:alt", content: title },
      ],
    };
  } catch {
    return {
      title: "Car not found",
    };
  }
}

// ✅ Server component wrapping your client component
export default function CarDetailPage() {
  return <CarDetailClient />;
}
