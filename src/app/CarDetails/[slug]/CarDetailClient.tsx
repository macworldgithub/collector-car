// "use client"; // ✅ must be at the top

// import { useState, useEffect, useRef } from "react";
// import { useParams } from "next/navigation";
// import Banner from "@/components/Banner";
// import CarDetail from "../CarDetail";
// import CarGallery from "@/components/CarGallery";
// import EnquiryForm from "../EnquiryForm";

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

//   // 🆕 Add this field
//   imageKeys?: {
//     key: string;
//     orientation: "portrait" | "landscape";
//   }[];
// }

// export default function CarDetailClient() {
//   const { slug } = useParams<{ slug: string }>();
//   const [car, setCar] = useState<Car | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const galleryRef = useRef<HTMLElement>(null);

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
//           ref={galleryRef}
//           phone="0493 717 475"
//           youtubeLinks={car.youtubeLinks || []}
//           videos={car.videos || []}
//           // images={car.images || []}
//           imageKeys={car.imageKeys || []}
//         /> */}
//         <CarGallery
//           ref={galleryRef}
//           phone="0493 717 475"
//           youtubeLinks={car.youtubeLinks || []}
//           videos={car.videos || []}
//           images={car.images || []} // ✅ add this line
//           imageKeys={car.imageKeys || []}
//         />

//         <EnquiryForm />
//       </main>
//     </div>
//   );
// }

"use client"; // Must be at the top

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Banner from "@/components/Banner";
import CarDetail from "../CarDetail";
import CarGallery from "@/components/CarGallery";
import EnquiryForm from "../EnquiryForm";

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

  // Optional image metadata
  imageKeys?: {
    key: string;
    orientation: "portrait" | "landscape";
  }[];
}

export default function CarDetailClient() {
  const { slug } = useParams<{ slug: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const galleryRef = useRef<HTMLElement>(null);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  useEffect(() => {
    if (!slug) return;

    const fetchCar = async () => {
      try {
        const res = await fetch(`${baseUrl}/cars/${slug}`, {
          cache: "no-store", // Always fresh data
        });

        if (!res.ok) throw new Error("Car not found");

        const data: Car = await res.json();
        setCar(data);
      } catch (err) {
        console.error("Failed to fetch car:", err);
        setError("Unable to load car details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [slug, baseUrl]);

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600 animate-pulse">Loading car details...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-600 text-center max-w-md">{error}</p>
      </div>
    );
  }

  // Not found
  if (!car) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">Car not found.</p>
      </div>
    );
  }

  // Fallback image if none exist
  const displayImages = car.images.length > 0 ? car.images : ["/stock-card.jpg"];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <Banner
        images={displayImages}
        title={car.status === "sold" ? "SOLD SOLD SOLD" : car.title}
        subtitle={car.status === "sold" ? "" : `$${car.price.toLocaleString()}`}
        onClick={scrollToGallery}
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <CarDetail
          title={car.title}
          description={car.description}
          factoryOptions={car.factoryOptions || []}
          highlights={car.highlights || []}
          keyFeatures={car.keyFeatures || []}
          specifications={car.specifications || []}
        />

        {/* Gallery Section */}
        <section ref={galleryRef} className="mt-12">
          <CarGallery
            phone="0493 717 475"
            youtubeLinks={car.youtubeLinks || []}
            videos={car.videos || []}
            images={displayImages}
            imageKeys={car.imageKeys || []}
          />
        </section>

        {/* Enquiry Form */}
        <section className="mt-16">
          <EnquiryForm />
        </section>
      </main>
    </div>
  );
}