"use client";
import React from "react";
const termsData = [
  {
    heading: "Important Notice regarding Vehicle Sales:",
    content: [
      "Please be aware that Collector Car Depot (ABN 84 492 738 231) acts exclusively as a broker agent for the sellers of all listed vehicles. We are not a second-hand vehicle trader.",
      "When you purchase a vehicle via us, your purchase contract will be directly with the vehicle’s owner (the Seller).",
      "Collector Car Depot provides vehicle details and descriptions in good faith, relying on information supplied by the Seller. We do not (guarantee or warrant) the accuracy of this information or the vehicle’s condition, we clearly show the condition via the multiple detailed photographs provided on our website listings and in some cases provide you with a video conversation via mobile phone for your convenience.",
      "We strongly recommend that prospective buyers conduct their own pre-purchase inspections and/or consult with a registered vehicle repairer to verify the vehicle’s details and condition. All sales are made on an “as is, where is” basis.",
    ],
  },
  {
    heading: "Website Availability:",
    content: [
      "We cannot promise that this website will be uninterrupted, free of error, bugs or viruses and we will not be liable if, for any reason, this website is unavailable at any time or for any computer virus or system failure. Access may be suspended at any time without prior notice being given.",
    ],
  },
  {
    heading: "TERMS OF SALE",
    content: [
      "Any & All Vehicles offered for sale through Collector Car Depot are the responsibility of the Owner / Seller. Collector Car Depot acts as the Seller’s Broker and relies fully on the information provided by the Seller of the vehicle in the advertising and sale of each vehicle.",
      "Collector Car Depot takes no responsibility for the accuracy or exactness of the information provided to them by the Seller.",
      "If a Buyer wishes to speak to the owner or inspect a vehicle listed for sale on the Collector Car Depot web site, Collector Car Depot will request a copy of the potential buyers driver’s license along with an email address and phone number. This is provided to the seller as confirmation of the legitimacy of the buyer and the seller is then asked to contact the potential buyer to discuss the car.",
      "The Buyer must make their own enquiries and inspections regarding the condition, authenticity and exactness of the vehicle and any statements made by the Seller, and satisfy themselves in all aspects prior to purchasing the car. The Buyer understands there is no warranty or guarantee offered by either the Seller or Collector Car Depot.",
      "If upon inspection the Buyer is not satisfied with the car for any reason and does not wish to proceed with the purchase the owner is advised and any personal details are deleted from Collector Car Depot records.",
      "If the Buyer is satisfied with the car and a price is agreed to with the Seller a formal agreement is prepared by Collector Car Depot and sent to the Buyer for payment to the Collector Car Depot Trust Account.",
      "Collector Car Depot also prepares a formal Bill of Sale for the owner stating the car is free of any encumbrance and noting banking details for the transaction. Once Collector Car Depot receives the total funds payment cleared into its trust account a transfer is then made to the Seller.",
      "Collector Car Depot receives a fee agreed to in the Sellers Broking Agreement for assisting the Seller to sell the vehicle.",
      "There is no fee or Buyer’s premium charged to the Buyer.",
    ],
  },
  {
    heading: "Copyright:",
    content: [
      "Copyright 2014 Collector Car Depot. All rights reserved. The logo and all text, images, graphics, sound files, animation files, and video files specifically representing Collector Car Depot or its agents, are all subject to Copyright and other intellectual property protection.",
      "Collector Car Depot sites may also contain images subject to third-party copyright, including those from car owners; vehicle manufacturers for example. No person may copy, modify, reproduce, transmit, distribute, display, photocopy, publish, license or create works from any material, on any part of this website, or otherwise use it for commercial or public purposes without the express written permission of Collector Car Depot.",
    ],
  },
];

export default function TermData() {
  return (
    <div className="bg-white py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
          Terms & Conditions
        </h1>

        <div className="space-y-10">
          {termsData.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                {section.heading}
              </h2>
              <div className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                {section.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
