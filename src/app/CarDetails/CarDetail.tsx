// "use client";
// import React from "react";

// type CarDetailsProps = {
//   title: string;
//   description: string;
//   factoryOptions: string[];
//   highlights: string[];
//   keyFeatures: { label: string; value: string }[];
//   specifications: { label: string; value: string }[];
//   location?: string;
// };

// const CarDetail: React.FC<CarDetailsProps> = ({
//   title,
//   description,
//   factoryOptions,
//   highlights,
//   keyFeatures,
//   specifications,
//   location = "Located in Blue Mountains NSW – Inspection by arrangement only.",
// }) => {
//   return (
//     <section className="px-4 md:px-12 lg:px-20 py-10 text-black bg-white">
//       {/* Title */}
//       <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 tracking-wide">
//         DESCRIPTION
//       </h2>

//       {/* Car Title & Description */}
//       <div className="max-w-4xl mx-auto mb-8">
//         <div
//           className="prose max-w-none text-gray-700 [&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6"
//           dangerouslySetInnerHTML={{ __html: description }}
//         />

//         {/* Factory Options */}
//         {factoryOptions.length > 0 && (
//           <div className="mb-6">
//             <h4 className="font-semibold text-gray-600 mb-2">
//               Factory Options –
//             </h4>
//             <ul className="space-y-1">
//               {factoryOptions.map((opt, index) => (
//                 <li key={index} className="text-base text-gray-600">
//                   {opt}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Highlights */}
//         <ul className="list-disc list-inside space-y-2 text-gray-600 text-base leading-relaxed">
//           {highlights.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Key Features Section */}
//       <div className="max-w-4xl mx-auto mt-12">
//         <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
//           KEY FEATURES
//         </h3>

//         <div className="border border-gray-300 rounded-none overflow-hidden mb-12">
//           {keyFeatures.map((feature, index) => (
//             <div
//               key={index}
//               className={`grid grid-cols-2 divide-x divide-gray-300 border-b border-gray-300 last:border-b-0
//               odd:bg-white even:bg-gray-50`}
//             >
//               <div className="px-6 py-4 text-center font-normal text-gray-600">
//                 {feature.label}
//               </div>
//               <div className="px-6 py-4 text-center font-normal text-gray-800">
//                 {feature.value}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Specifications Section */}
//       <div className="max-w-4xl mx-auto">
//         <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
//           SPECIFICATION
//         </h3>

//         <div className="border border-gray-300 rounded-none overflow-hidden">
//           {specifications.map((spec, index) => (
//             <div
//               key={index}
//               className={`grid grid-cols-2 divide-x divide-gray-300 border-b border-gray-300 last:border-b-0
//               odd:bg-white even:bg-gray-50`}
//             >
//               <div className="px-6 py-4 text-center font-normal text-gray-600">
//                 {spec.label}
//               </div>
//               <div className="px-6 py-4 text-center font-normal text-gray-800">
//                 {spec.value}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default CarDetail;

// "use client";
// import React from "react";

// type CarDetailsProps = {
//   title: string;
//   description: string;
//   factoryOptions: string[];
//   highlights: string[];
//   keyFeatures: { label: string; value: string }[];
//   specifications: { label: string; value: string }[];
//   youtubeLinks?: string[]; // Add youtubeLinks to props
//   location?: string;
// };

// const CarDetail: React.FC<CarDetailsProps> = ({
//   title,
//   description,
//   factoryOptions,
//   highlights,
//   keyFeatures,
//   specifications,
//   youtubeLinks = [],
//   location = "Located in Blue Mountains NSW – Inspection by arrangement only.",
// }) => {
//   // Function to convert YouTube URLs to embed URLs
//   const getYouTubeEmbedUrl = (url: string): string => {
//     // Handle youtu.be short URLs
//     if (url.includes("youtu.be/")) {
//       const videoId = url.split("youtu.be/")[1].split("?")[0];
//       return `https://www.youtube.com/embed/${videoId}`;
//     }

//     // Handle youtube.com watch URLs
//     if (url.includes("youtube.com/watch")) {
//       const urlParams = new URLSearchParams(new URL(url).search);
//       const videoId = urlParams.get("v");
//       return `https://www.youtube.com/embed/${videoId}`;
//     }

//     return url;
//   };
//   const parseDescriptionWithLinks = (html: string) => {
//     if (typeof document === "undefined") {
//       // Server-side rendering fallback
//       return { __html: html };
//     }

//     const tempDiv = document.createElement("div");
//     tempDiv.innerHTML = html;

//     // Find all text nodes and make links clickable
//     const walker = document.createTreeWalker(
//       tempDiv,
//       NodeFilter.SHOW_TEXT,
//       null
//     );

//     const textNodes = [];
//     let node;
//     while ((node = walker.nextNode())) {
//       textNodes.push(node);
//     }

//     textNodes.forEach((textNode) => {
//       if (
//         textNode.textContent &&
//         textNode.textContent.match(/https?:\/\/[^\s]+/)
//       ) {
//         const span = document.createElement("span");
//         span.innerHTML = textNode.textContent.replace(
//           /(https?:\/\/[^\s]+)/g,
//           '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline break-words">$1</a>'
//         );
//         textNode.parentNode?.replaceChild(span, textNode);
//       }
//     });

//     return { __html: tempDiv.innerHTML };
//   };
//   return (
//     <section className="px-4 md:px-12 lg:px-20 py-10 text-black bg-white">
//       <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 tracking-wide">
//         DESCRIPTION
//       </h2>

//       <div className="max-w-4xl mx-auto mb-8">
//         {/* Description with clickable links */}
//         <div
//           className="prose max-w-none text-gray-700 [&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6 [&_a]:text-blue-600 [&_a]:hover:text-blue-800 [&_a]:underline [&_a]:break-words"
//           dangerouslySetInnerHTML={parseDescriptionWithLinks(description)}
//         />

//         {/* YouTube Videos Section */}
//         {/* YouTube Videos Section */}
//         {youtubeLinks && youtubeLinks.length > 0 && (
//           <div className="mt-8">
//             <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
//               Video Gallery
//             </h3>
//             <div
//               className={`grid gap-6 ${
//                 youtubeLinks.length === 1
//                   ? "grid-cols-1 justify-items-center"
//                   : "grid-cols-1 md:grid-cols-2"
//               }`}
//             >
//               {youtubeLinks.map((link, index) => (
//                 <div
//                   key={index}
//                   className={`bg-gray-100 rounded-lg overflow-hidden shadow-md ${
//                     youtubeLinks.length === 1 ? "max-w-2xl w-full" : "w-full"
//                   }`}
//                 >
//                   <div className="aspect-w-16 aspect-h-9">
//                     <iframe
//                       src={getYouTubeEmbedUrl(link)}
//                       title={`YouTube video ${index + 1}`}
//                       className="w-full h-64"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                     ></iframe>
//                   </div>
//                   <div className="p-4">
//                     <a
//                       href={link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 hover:text-blue-800 underline text-sm break-words inline-flex items-center"
//                     >
//                       <svg
//                         className="w-4 h-4 mr-1"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
//                       </svg>
//                       Watch on YouTube
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {factoryOptions.length > 0 && (
//           <div className="mt-6">
//             <h4 className="font-semibold text-gray-600 mb-2">
//               Factory Options –
//             </h4>
//             <ul className="space-y-1">
//               {factoryOptions.map((opt, index) => (
//                 <li key={index} className="text-base text-gray-600">
//                   {opt}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {highlights.length > 0 && (
//           <ul className="list-disc list-inside space-y-2 text-gray-600 text-base leading-relaxed mt-4">
//             {highlights.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div className="max-w-4xl mx-auto mt-12">
//         <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
//           KEY FEATURES
//         </h3>

//         <div className="border border-gray-300 rounded-none overflow-hidden mb-12">
//           {keyFeatures.map((feature, index) => (
//             <div
//               key={index}
//               className={`grid grid-cols-2 divide-x divide-gray-300 border-b border-gray-300 last:border-b-0 
//               odd:bg-white even:bg-gray-50`}
//             >
//               <div className="px-6 py-4 text-center font-normal text-gray-600">
//                 {feature.label}
//               </div>
//               <div className="px-6 py-4 text-center font-normal text-gray-800">
//                 {feature.value}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="max-w-4xl mx-auto">
//         <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
//           SPECIFICATION
//         </h3>

//         <div className="border border-gray-300 rounded-none overflow-hidden">
//           {specifications.map((spec, index) => (
//             <div
//               key={index}
//               className={`grid grid-cols-2 divide-x divide-gray-300 border-b border-gray-300 last:border-b-0 
//               odd:bg-white even:bg-gray-50`}
//             >
//               <div className="px-6 py-4 text-center font-normal text-gray-600">
//                 {spec.label}
//               </div>
//               <div className="px-6 py-4 text-center font-normal text-gray-800">
//                 {spec.value}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CarDetail;
"use client";
import React from "react";

type CarDetailsProps = {
  title: string;
  description: string;
  factoryOptions: string[];
  highlights: string[];
  keyFeatures: { label: string; value: string }[];
  specifications: { label: string; value: string }[];
  location?: string;
};

const CarDetail: React.FC<CarDetailsProps> = ({
  title,
  description,
  factoryOptions,
  highlights,
  keyFeatures,
  specifications,
  location = "Located in Blue Mountains NSW – Inspection by arrangement only.",
}) => {
  const parseDescriptionWithLinks = (html: string) => {
    if (typeof document === "undefined") return { __html: html };

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const walker = document.createTreeWalker(tempDiv, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) textNodes.push(node);

    textNodes.forEach((textNode) => {
      if (textNode.textContent?.match(/https?:\/\/[^\s]+/)) {
        const span = document.createElement("span");
        span.innerHTML = textNode.textContent.replace(
          /(https?:\/\/[^\s]+)/g,
          '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline break-words">$1</a>'
        );
        textNode.parentNode?.replaceChild(span, textNode);
      }
    });

    return { __html: tempDiv.innerHTML };
  };

  return (
    <section className="px-4 md:px-12 lg:px-20 py-10 text-black bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 tracking-wide">
        DESCRIPTION
      </h2>

      <div className="max-w-4xl mx-auto mb-8">
        <div
          className="prose max-w-none text-gray-700 [&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6 [&_a]:text-blue-600 [&_a]:hover:text-blue-800 [&_a]:underline [&_a]:break-words"
          dangerouslySetInnerHTML={parseDescriptionWithLinks(description)}
        />

        {factoryOptions.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold text-gray-600 mb-2">
              Factory Options –
            </h4>
            <ul className="space-y-1">
              {factoryOptions.map((opt, index) => (
                <li key={index} className="text-base text-gray-600">
                  {opt}
                </li>
              ))}
            </ul>
          </div>
        )}

        {highlights.length > 0 && (
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-base leading-relaxed mt-4">
            {highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
          KEY FEATURES
        </h3>

        <div className="border border-gray-300 overflow-hidden mb-12">
          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 divide-x divide-gray-300 border-b border-gray-300 last:border-b-0 
              odd:bg-white even:bg-gray-50`}
            >
              <div className="px-6 py-4 text-center text-gray-600">
                {feature.label}
              </div>
              <div className="px-6 py-4 text-center text-gray-800">
                {feature.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
          SPECIFICATION
        </h3>

        <div className="border border-gray-300 overflow-hidden">
          {specifications.map((spec, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 divide-x divide-gray-300 border-b border-gray-300 last:border-b-0 
              odd:bg-white even:bg-gray-50`}
            >
              <div className="px-6 py-4 text-center text-gray-600">
                {spec.label}
              </div>
              <div className="px-6 py-4 text-center text-gray-800">
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarDetail;
