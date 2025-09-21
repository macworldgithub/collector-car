"use client";
import CarGallery from "@/components/CarGallery";

export default function CarGalleryPage() {
  return (
    <CarGallery
      phone="0493 717 475"
      videoThumbnail="/car6.jpg"
      images={["/car6.jpg", "/car6.jpg", "/car6.jpg", "/car6.jpg", "/car6.jpg"]}
    />
  );
}