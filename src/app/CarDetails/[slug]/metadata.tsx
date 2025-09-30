import { Metadata } from "next";

// Define the Car interface to match backend schema
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
  images: string[]; // Complete signed S3 URLs
  videos?: string[];
  youtubeLinks?: string[];
  userId?: string;
}

// Define metadata generation function
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  try {
    const res = await fetch(`${baseUrl}/cars/${params.slug}`);
    if (!res.ok) throw new Error("Failed to fetch car details");
    const car: Car = await res.json();

    // Use the first signed S3 URL directly
    const firstImage = car.images?.[0] || "/default-car.jpg"; // Fallback to default image

    return {
      title: car.title,
      description: car.description.slice(0, 160), // Truncate for meta
      openGraph: {
        title: car.title,
        description: car.description.slice(0, 160),
        images: [
          {
            url: firstImage, // Signed S3 URL
            width: 1200,
            height: 630,
            alt: car.title,
          },
        ],
        url: `https://collectorcardepot.com/CarDetails/${params.slug}`,
        type: "website",
      },
    };
  } catch {
    return {
      title: "Car Not Found",
      description: "Unable to load car details.",
      openGraph: {
        title: "Car Not Found",
        description: "Unable to load car details.",
        images: [
          {
            url: `${baseUrl}/default-car.jpg`, // Fallback image
            width: 1200,
            height: 630,
            alt: "Default Car Image",
          },
        ],
        url: `https://collectorcardepot.com/CarDetails/${params.slug}`,
        type: "website",
      },
    };
  }
}