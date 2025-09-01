// components/CarDetails.tsx
"use client";
import React from "react";

type CarDetailsProps = {
  title: string;
  description: string;
  factoryOptions: string[];
  highlights: string[];
  keyFeatures: { label: string; value: string }[];
  specifications: { label: string; value: string }[];
};

const CarDetail: React.FC<CarDetailsProps> = ({
  title,
  description,
  factoryOptions,
  highlights,
  keyFeatures,
  specifications,
}) => {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-10 text-black">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
        DESCRIPTION
      </h2>

      {/* Car Title & Description */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-sm md:text-base">{description}</p>
      </div>

      {/* Factory Options */}
      <div className="text-center mb-8">
        <h4 className="font-semibold">Factory Options –</h4>
        <ul className="mt-2 space-y-1">
          {factoryOptions.map((opt, index) => (
            <li key={index} className="text-sm md:text-base text-gray-700">
              {opt}
            </li>
          ))}
        </ul>
      </div>

      {/* Highlights */}
      <ul className="list-disc list-inside space-y-3 max-w-4xl mx-auto text-gray-700 mb-12 text-sm md:text-base">
        {highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Features & Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Key Features */}
        <div>
          <h3 className="text-xl font-bold text-center mb-4">KEY FEATURES</h3>
          <div className="border rounded-lg overflow-hidden">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 border-b last:border-b-0`}
              >
                <div className="px-4 py-2 bg-gray-100 font-medium text-sm md:text-base">
                  {feature.label}
                </div>
                <div className="px-4 py-2 text-sm md:text-base">
                  {feature.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div>
          <h3 className="text-xl font-bold text-center mb-4">SPECIFICATION</h3>
          <div className="border rounded-lg overflow-hidden">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 border-b last:border-b-0`}
              >
                <div className="px-4 py-2 bg-gray-100 font-medium text-sm md:text-base">
                  {spec.label}
                </div>
                <div className="px-4 py-2 text-sm md:text-base">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetail;
