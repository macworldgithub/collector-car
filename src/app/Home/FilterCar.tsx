"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Car = {
  id: number;
  make: string;
  title: string;
  price: number;
  image: string;
};

const cars: Car[] = [
  {
    id: 1,
    make: "Ford",
    title: "1964 Ford Thunderbird 390cu",
    price: 45000,
    image: "/car1.jpg",
  },
  {
    id: 2,
    make: "Ferrari",
    title: "1974 Ferrari Dino 308 GT4",
    price: 122900,
    image: "/car2.jpg",
  },
  {
    id: 3,
    make: "Austin",
    title: "1966 Austin Healey MKIII 3000",
    price: 90000,
    image: "/car3.jpg",
  },
  {
    id: 4,
    make: "Ford",
    title: "2010 Ford Mustang Shelby GT500",
    price: 109000,
    image: "/car4.jpg",
  },
  {
    id: 5,
    make: "Holden",
    title: "2011 Holden VE HDT SS Group A",
    price: 48500,
    image: "/car5.jpg",
  },
];

export default function FilterCar() {
  const [selectedMake, setSelectedMake] = useState("Any");

  const makes = ["Any", ...new Set(cars.map((car) => car.make))];

  const filteredCars =
    selectedMake === "Any"
      ? cars
      : cars.filter((car) => car.make === selectedMake);

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Filter Dropdown */}
      <div className="flex justify-center mb-6 text-black">
        <div>
          <label className="block text-center font-semibold mb-2">
            Filter By Make
          </label>
          <select
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
            className="border rounded px-3 py-2"
          >
            {makes.map((make, idx) => (
              <option key={idx} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCars.map((car) => (
          <Link key={car.id} href="/CarDetails">
            <div className="cursor-pointer text-black rounded-xl shadow hover:shadow-lg transition p-3">
              <Image
                src={car.image}
                alt={car.title}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <h3 className="mt-3 font-semibold text-lg text-center">
                {car.title}
              </h3>
              <p className="text-blue-600 text-center font-bold">
                ${car.price.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
