import React from "react";
const points = [
  {
    title: "Collector Car Depot’s Approach",
    desc: "We offer guidance to anyone interested into classic cars, emphasising the market’s complexity and the risks of poor advice when looking for a new purchase.",
  },
  {
    title: "Market Evolution",
    desc: "The market has shifted, with collectors now demanding high-quality cars and avoiding subpar examples, there is a car out there for everyone’s tastes and price point.",
  },
  {
    title: "Market Resilience",
    desc: "The classic car market has shown resilience over the past decade, often outperforming other investments.",
  },
  {
    title: "Factors Influencing Value",
    desc: "Top-tier cars maintain value and appreciate, especially those with:",
  },
  {
    title: "Impeccable History",
    desc: "Comprehensive documentation of ownership, maintenance, and restoration.",
  },
  {
    title: "Originality",
    desc: "Remaining close to factory specifications.",
  },
  {
    title: "Matching Numbers",
    desc: "Original chassis, engine, and gearbox.",
  },
  {
    title: "Provenance",
    desc: "Overall history, including notable ownership or racing history if applicable.",
  },
];

export default function ClassicCarAdvice() {
  return (
    <section className="px-4 py-12 md:py-16 max-sm:py-0 bg-white text-black">
      {/* Heading */}
      <h2 className="text-center text-lg md:text-xl font-semibold mb-8">
        Lets discusses the classic car market and offer advice for potential
        buyers:
      </h2>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-4 max-sm:space-y-0">
        {points.map((item, i) => (
          <div key={i} className="leading-relaxed">
            <span className="font-bold">{item.title}: </span>
            <span>{item.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
