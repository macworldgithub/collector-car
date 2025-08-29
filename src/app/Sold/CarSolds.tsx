"use client";
import Image from "next/image";

type Car = {
  id: number;
  make: string;
  title: string;
  image: string;
};

const cars: Car[] = [
  {
    id: 1,
    make: "Ford",
    title: "1964 Ford Thunderbird 390cu",
    image: "/car1.jpg",
  },
  {
    id: 2,
    make: "Ferrari",
    title: "1974 Ferrari Dino 308 GT4",
    image: "/car2.jpg",
  },
  {
    id: 3,
    make: "Austin",
    title: "1966 Austin Healey MKIII 3000",
    image: "/car3.jpg",
  },
  {
    id: 4,
    make: "Ford",
    title: "2010 Ford Mustang Shelby GT500",
    image: "/car4.jpg",
  },
  {
    id: 5,
    make: "Holden",
    title: "2011 Holden VE HDT SS Group A",
    image: "/car5.jpg",
  },
];

export default function CarListing() {
  return (
    <section className="container mx-auto px-4 py-8">
      {/* Cars Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <div
            key={car.id}
            className="text-black rounded-xl shadow hover:shadow-lg transition p-3"
          >
            <Image
              src={car.image}
              alt={car.title}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-48"
            />
            <p className=" text-center font-bold mt-2 underline">Sold sold sold </p>
          </div>
        ))}
      </div>
    </section>
  );
}
