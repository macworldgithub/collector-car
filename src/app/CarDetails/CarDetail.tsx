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
  return (
    <section className="px-4 md:px-12 lg:px-20 py-10 text-black bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 tracking-wide">
        DESCRIPTION
      </h2>

      <div className="max-w-4xl mx-auto mb-8">
        <div
          className="prose max-w-none text-gray-700 [&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {factoryOptions.length > 0 && (
          <div className="mb-6">
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

        <ul className="list-disc list-inside space-y-2 text-gray-600 text-base leading-relaxed">
          {highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
          KEY FEATURES
        </h3>

        <div className="border border-gray-300 rounded-none overflow-hidden mb-12">
          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 divide-x divide-gray-300 border-b border-gray-300 last:border-b-0 
              odd:bg-white even:bg-gray-50`}
            >
              <div className="px-6 py-4 text-center font-normal text-gray-600">
                {feature.label}
              </div>
              <div className="px-6 py-4 text-center font-normal text-gray-800">
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

        <div className="border border-gray-300 rounded-none overflow-hidden">
          {specifications.map((spec, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 divide-x divide-gray-300 border-b border-gray-300 last:border-b-0 
              odd:bg-white even:bg-gray-50`}
            >
              <div className="px-6 py-4 text-center font-normal text-gray-600">
                {spec.label}
              </div>
              <div className="px-6 py-4 text-center font-normal text-gray-800">
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