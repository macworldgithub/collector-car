import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Collector Car Depot",
//   description: "Welcome to Collector Car Depot",
// }; 
 export const metadata: Metadata = {
  title: "Collector Car Depot",
  description: "Welcome to Collector Car Depot",
  openGraph: {
    title: "Collector Car Depot",
    description: "Welcome to Collector Car Depot",
    type: "website",
    url: "https://collectorcardepot.com",
    siteName: "Collector Car Depot",
    images: [
      {
        url: "/stock-card.jpg", // your preview image
        width: 1200,
        height: 630,
        alt: "Collector Car Depot Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Collector Car Depot",
    description: "Welcome to Collector Car Depot",
    images: ["/stock-card.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

