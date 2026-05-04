// "use client";

// type Section = {
//   title?: string;
//   content: string[];
// };

// export default function AboutPage() {
//   // 👇 Yahan se content dynamic control hoga
//   const sections: Section[] = [
//     {
//       content: [
//         "At Collector Car Depot (CCD), we bring over 30 years of passion, knowledge, and experience to the classic automotive landscape. As a dedicated marketing service provider and facilitator, we bridge the gap between private sellers and discerning enthusiasts, ensuring a transparent and professional environment for the classic car community. ",
//       ],
//     },
//     {
//       title: "A Curated Marketplace",
//       content: [
//         "While CCD is not a broker or agent, our expertise in sourcing and vetting listings from across the country allows us to present a wide selection of vehicles. Whether you are seeking an investment-grade vehicle or a reliable classic for club outings, our platform connects you directly with all options.",
//         "**Seller-Owned Inventory:** All vehicles featured through our service are owned by their respective sellers.",
//         "**Quality Facilitation:** We act as a conduit, providing the framework for a smooth, direct path to a successful transaction.",
//         "**Market Diversity:** Our listings span the entire classic car sector, offering options that meet various levels of affordability without compromising on character.",
//       ],
//     },
//     {
//       title: "Marketing Your Classic",
//       content: [
//         "If you have a car to sell, our marketing services are designed to put your vehicle in front of the right audience. Contact us today to discuss how our facilitation steps can streamline your listing process and maximize your reach.",
//       ],
//     },
//     {
//       title: "Help & Expert Advice",
//       content: [
//         "We take immense pride in offering professional guidance to help you navigate the complexities of the classic car market. Our role is to empower you with the information needed to make confident, informed decisions.",
//       ],
//     },
//     {
//       title: "Contact Information",
//       content: [
//         "**Michael Saide - Proprietor**",
//         "**Collector Car Depot**",
//         "**Mob - 0493 717 475**",
//         "**www.collectorcardepot.com.au**",
//       ],
//     },
//   ];

//   return (
//     <main className="flex items-center justify-center px-4 sm:px-6 py-12">
//       <div className="max-w-4xl w-full">
//         {sections.map((section, idx) => (
//           <div key={idx} className="mb-10 last:mb-0">
//             {section.title && (
//               <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
//                 {section.title}
//               </h2>
//             )}
//             {section.content.map((para, i) => (
//               <p
//                 key={i}
//                 className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 last:mb-0 text-justify"
//               >
//                 {para}
//               </p>
//             ))}
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

"use client";

type Section = {
  title?: string;
  content: string[];
};

export default function AboutPage() {
  const sections: Section[] = [
    {
      content: [
        "At Collector Car Depot (CCD), we bring over 30 years of passion, knowledge, and experience to the classic automotive landscape. As a dedicated Marketing Service Provider and Facilitator, we bridge the gap between private sellers and discerning enthusiasts, ensuring a professional environment for the classic car community.",
      ],
    },
    {
      title: "A Curated Marketplace",
      content: [
        "While CCD is not a broker or agent, our expertise in sourcing listings from across the country allows us to present a wide selection of vehicles. Whether you are seeking an investment-grade vehicle or a reliable classic for club outings, our platform connects you directly with all options.",
        "**Seller-Owned Inventory:** All vehicles featured through our service are owned by their respective sellers.",
        "**Quality Facilitation:** We act as a conduit  providing the framework for a smooth, direct path to a successful transaction.",
        "**Market Diversity:** Our listings span the entire classic car sector, offering options that meet various levels of affordability.",
      ],
    },
    {
      title: "Marketing Your Classic",
      content: [
        "If you have a car to sell, our marketing services are designed to put your vehicle in front of the right audience. Contact us today to discuss how our facilitation steps can streamline your listing process and maximize your reach.",
      ],
    },
    {
      title: "Help & Expert Advice",
      content: [
        "We take immense pride in offering professional guidance to help you navigate the complexities of the classic car market. Our role is to empower you with the information needed to make confident, informed decisions.",
      ],
    },
  ];

  return (
    <main className="flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="max-w-4xl w-full">
        {sections.map((section, idx) => {
          const bullets = section.content.filter((item) =>
            item.startsWith("**"),
          );
          const paragraphs = section.content.filter(
            (item) => !item.startsWith("**"),
          );

          return (
            <div key={idx} className="mb-10 last:mb-0">
              {section.title && (
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {section.title}
                </h2>
              )}

              {/* Normal paragraphs */}
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 text-justify"
                >
                  {para}
                </p>
              ))}

              {/* Bullet points */}
              {bullets.length > 0 && (
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg leading-relaxed">
                  {bullets.map((item, i) => {
                    const clean = item.replace(/\*\*/g, "");
                    const [title, desc] = clean.split(":");

                    return (
                      <li key={i}>
                        <strong>{title}:</strong> {desc}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
