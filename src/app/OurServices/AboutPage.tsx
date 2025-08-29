"use client";

type Section = {
  title?: string;
  content: string[];
};

export default function AboutPage() {
  // 👇 Yahan se content dynamic control hoga
  const sections: Section[] = [
    {
      content: [
        "Collector Car Depot has 30 plus years of Passion, knowledge and experience invested in the classic car market.",
        "CCD’s expertise in sourcing exceptional cars or bikes from around the country assures you of the best choices possible, ensuring an exceptional selection for those seeking investment-grade classic cars or vehicles for your car club and regular outings.",
        "All vehicles available at Collector Car Depot are owned by the sellers, CCD ensure the quality control is the best possible and smooth path to a transaction.",
        "There are listings for a broad sector of the Classic Car buyers market to meet all areas of affordability.",
        "If you have a car to sell, feel free to contact us to discuss the steps to a listing.",
      ],
    },
    {
      title: "Help & Advice",
      content: [
        "We take pride in offering expert guidance to anyone looking to understand the classic car market and make informed purchasing decisions.",
        "Feel free to call us and discuss any questions you may have about the market.",
      ],
    },
  ];

  return (
    <main className="flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="max-w-4xl w-full">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-10 last:mb-0">
            {section.title && (
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {section.title}
              </h2>
            )}
            {section.content.map((para, i) => (
              <p
                key={i}
                className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 last:mb-0 text-justify"
              >
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
