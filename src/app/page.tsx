// import React from 'react';
// import HomeComponent from './Home/page'; 

// export default function HomePage() {
//   return <HomeComponent />;
// }

// src/app/page.tsx
import type { Metadata } from "next";
import HomeComponent from "./Home/page";

/* ========================================
   HOMEPAGE METADATA – uses stock-card.jpg
   ======================================== */
export const metadata: Metadata = {
  title: "Collector Car Depot",
  description: "Welcome to Collector Car Depot",
  openGraph: {
    title: "Collector Car Depot",
    description: "Welcome to Collector Car Depot",
    url: "https://collectorcardepot.com",
    siteName: "Collector Car Depot",
    images: [
      {
        url: "https://collectorcardepot.com/stock-card.jpg",
        width: 1200,
        height: 630,
        alt: "Collector Car Depot",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Collector Car Depot",
    description: "Welcome to Collector Car Depot",
    images: ["https://collectorcardepot.com/stock-card.jpg"],
  },
};

/* ======================================== */
export default function HomePage() {
  return <HomeComponent />;
}