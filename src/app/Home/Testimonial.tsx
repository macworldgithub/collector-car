// "use client";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// interface Testimonial {
//   id: number;
//   name: string;
//   location: string;
//   message: string;
//   highlight?: string;
// }
// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Bill Frith",
//     location: "Belmont NSW",
//     message: `Hi Michael,

// It is with great pleasure I would like to thank you for the Sale of "Betty" my HDT VK SS Commodore. So lets set the scene. 

// I had been trying to sell my very special car for a long time with the usual low blows coming from social media. I found it very frustrating & sometimes thought my car must have been a dud. I thought my photos & description were very good but I just could not sell it. When you reached out, thats when the ball started rolling.

// Your vast experience in the car industry & general passion for what you do are just exceptional. Your photos & sales description were so good I thought "hang on I’d buy this car." They are amazing & a great keep sake. The sale price was on point & you made the sale seemless. You literally took all the pain & anguish out of it.

// So, I truely am so grateful for your effort & now can move on to my next adventure.`,
//   },
//   {
//     id: 2,
//     name: "Sarah Johnson",
//     location: "Sydney NSW",
//     message: `Michael’s professionalism and knowledge made the entire process seamless. 
// I would highly recommend his services to anyone.`,
//   },
//   {
//     id: 3,
//     name: "David Miller",
//     location: "Melbourne VIC",
//     message: `Selling my car was stress-free thanks to Michael. 
// His attention to detail and commitment were beyond expectations.`,
//   },
// ];

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   const testimonial = testimonials[currentIndex];

//   return (
//     <section className="w-full bg-white py-12 px-4 md:px-8 text-center relative">
//       <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
//         Testimonials<span className="text-black">”</span>
//       </h2>

//       <div className="max-w-3xl mx-auto">
//         <p className="text-gray-700 italic whitespace-pre-line leading-relaxed">
//           {testimonial.message}
//         </p>

//         <div className="mt-6">
//           <p className="font-semibold text-blue-800">
//             {testimonial.name} - {testimonial.location}
//           </p>
//         </div>
//       </div>

//       {/* Navigation */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 rounded-full shadow hover:bg-gray-800"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 rounded-full shadow hover:bg-gray-800"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>

//       {/* Dots indicator */}
//       <div className="flex justify-center mt-6 space-x-2">
//         {testimonials.map((_, i) => (
//           <span
//             key={i}
//             onClick={() => setCurrentIndex(i)}
//             className={`w-3 h-3 rounded-full cursor-pointer ${
//               i === currentIndex ? "bg-blue-600" : "bg-gray-300"
//             }`}
//           ></span>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  _id: string;
  name: string;
  location?: string;
  message: string;
  highlight?: string;
  userId: string;
}

interface PaginatedTestimonials {
  data: Testimonial[];
  total: number;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${baseUrl}/testimonials`);
        if (!response.ok) throw new Error("Failed to fetch testimonials");

        const backendResponse: PaginatedTestimonials = await response.json();
        setTestimonials(backendResponse.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching testimonials. Please try again later.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchTestimonials();
  }, [baseUrl]);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        nextSlide();
      }, 12000); // auto change every 5s
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  if (loading) {
    return (
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-black">
          Testimonials<span className="text-black">"</span>
        </h2>
        <p className="text-center text-gray-600">Loading testimonials...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-black">
          Testimonials<span className="text-black">"</span>
        </h2>
        <p className="text-center text-red-600">{error}</p>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-black">
          Testimonials<span className="text-black">"</span>
        </h2>
        <p className="text-gray-500 text-base sm:text-lg">
          No testimonials available at the moment.
        </p>
      </section>
    );
  }

  const testimonial = testimonials[currentIndex];

  // Animation variants for sliding
  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-8 py-8 text-center relative">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-black">
        Testimonials<span className="text-black">"</span>
      </h2>

      <div className="max-w-3xl mx-auto max-h-[80vh] overflow-hidden relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={testimonial._id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            <p className="text-black italic whitespace-pre-line leading-relaxed text-sm sm:text-base">
              {testimonial.message}
            </p>

            {testimonial.highlight && (
              <p className="text-blue-600 font-semibold mt-4 text-sm sm:text-base truncate">
                {testimonial.highlight}
              </p>
            )}

            <div className="mt-6">
              <p
                style={{ color: "#131154" }}
                className="font-semibold text-sm sm:text-base"
              >
                {testimonial.name}
                {testimonial.location && ` - ${testimonial.location}`}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        aria-label="Previous Testimonial"
        className="absolute left-2 top-1/2 transform -translate-y-1/2"
      >
        <ChevronLeft className="text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Testimonial"
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
      >
        <ChevronRight className="text-gray-800" />
      </button>
    </section>
  );
}
