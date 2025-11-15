// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Collector Car Depot",
//   description: "Welcome to Collector Car Depot",
// }; 
  
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navbar />
//         <main className="">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

/* ========================================
   GLOBAL METADATA
   ======================================== */
export const metadata: Metadata = {
  metadataBase: new URL("https://collectorcardepot.com"),
  title: {
    default: "Collector Car Depot",
    template: "%s | Collector Car Depot",
  },
  description: "Welcome to Collector Car Depot",
};

/* ========================================
   FALLBACK OG IMAGE FOR PAGES WITHOUT THEIR OWN
   ======================================== */
export async function generateMetadata() {
  return {
    openGraph: {
      images: [
        {
          url: "/stock-card.jpg",
          width: 1200,
          height: 630,
          alt: "Collector Car Depot",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/stock-card.jpg"],
    },
  };
}

/* ======================================== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}