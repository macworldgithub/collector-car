// import React from "react";
// const points = [
//   {
//     title: "Collector Car Depot’s Approach",
//     desc: "We offer guidance to anyone interested into classic cars, emphasising the market’s complexity and the risks of poor advice when looking for a new purchase.",
//   },
//   {
//     title: "Market Evolution",
//     desc: "The market has shifted, with collectors now demanding high-quality cars and avoiding subpar examples, there is a car out there for everyone’s tastes and price point.",
//   },
//   {
//     title: "Market Resilience",
//     desc: "The classic car market has shown resilience over the past decade, often outperforming other investments.",
//   },
//   {
//     title: "Factors Influencing Value",
//     desc: "Top-tier cars maintain value and appreciate, especially those with:",
//   },
//   {
//     title: "Impeccable History",
//     desc: "Comprehensive documentation of ownership, maintenance, and restoration.",
//   },
//   {
//     title: "Originality",
//     desc: "Remaining close to factory specifications.",
//   },
//   {
//     title: "Matching Numbers",
//     desc: "Original chassis, engine, and gearbox.",
//   },
//   {
//     title: "Provenance",
//     desc: "Overall history, including notable ownership or racing history if applicable.",
//   },
// ];

// export default function ClassicCarAdvice() {
//   return (
//     <section className="px-4 py-12 md:py-16 max-sm:py-0 bg-white text-black">
//       {/* Heading */}
//       <h2 className="text-center text-lg md:text-xl font-semibold mb-8">
//         Lets discusses the classic car market and offer advice for potential
//         buyers:
//       </h2>

//       {/* Content */}
//       <div className="max-w-4xl mx-auto space-y-4 max-sm:space-y-0">
//         {points.map((item, i) => (
//           <div key={i} className="leading-relaxed">
//             <span className="font-bold">{item.title}: </span>
//             <span>{item.desc}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function ClassicCarAdvice() {
  return (
    <section className="px-4 py-12 md:py-16 bg-white text-black">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Title & Date */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Terms & Conditions
          </h1>
        </div>

        {/* Agent Disclosure */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            Agent Disclosure and Buyer Due Diligence
          </h2>
          <p className="leading-relaxed">
            <strong>Collector Car Depot (ABN 84 492 738 231)</strong> operates
            exclusively as a <strong>Broker Agent (Seller's Agent)</strong>{" "}
            specialising in the marketing and facilitation of sales for
            Collector, Classic, Muscle, and Performance Vehicles.
          </p>
        </div>

        {/* 1. Agency Status and Ownership */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            1. Agency Status and Ownership
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
            <li>
              Collector Car Depot does not own, purchase, or maintain inventory
              of any listed vehicles. We are not a second-hand vehicle trader.
            </li>
            <li>
              The vehicles remain in the custody of their respective owners
              (Sellers) until a confirmed sale is finalised.
            </li>
            <li>
              When you purchase a vehicle through us, your purchase{" "}
              <strong>Bill Of Sale reciept</strong> is directly with the
              vehicle’s owner (the Seller).
            </li>
          </ul>
        </div>

        {/* 2. Vehicle Information and Sale Terms */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">
            2. Vehicle Information and Sale Terms
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
            <li>
              Vehicle details and descriptions are provided in good faith,
              relying solely on information supplied by the Seller.
            </li>
            <li>
              Collector Car Depot does not guarantee or warrant the accuracy of
              this information or the vehicle’s condition.
            </li>
            <li>
              All sales are made on an <strong>"as is, where is" basis</strong>.
            </li>
          </ul>
        </div>

        {/* 3. Buyer Due Diligence */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">3. Buyer Due Diligence</h3>
          <p className="font-medium">
            ALL PROSPECTIVE BUYERS ARE STRONGLY ENCOURAGED to conduct thorough
            due diligence prior to purchase.
          </p>
          <p>This includes:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
            <li>
              <strong>In-Person Inspection:</strong> Arranging a personal
              inspection of the vehicle in person.
            </li>
            <li>
              <strong>Professional Consultation:</strong> Consulting with a
              registered vehicle repairer or independent inspector to verify the
              vehicle's details and condition.
            </li>
            <li>
              <strong>Virtual Inspection:</strong> Utilising our detailed
              website photographs and, upon arrangement, we can conduct a live
              video connection (via WhatsApp, FaceTime, Facebook Messenger, or
              Zoom) to view the car up close.
            </li>
          </ul>
        </div>

        {/* === STYLISH DISCLOSURE BOX === */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-xl border border-gray-300 shadow-sm">
          <p className="text-sm md:text-base leading-relaxed font-medium italic text-gray-800">
            This disclosure ensures all users understand that{" "}
            <span className="font-bold text-black">
              Collector Car Depot acts solely as an agent
            </span>{" "}
            and does not take possession or ownership of the vehicles listed on
            this site.
          </p>
        </div>

        {/* Inspection & Buyer Verification */}
        <div className="space-y-3">
          <p className="text-sm md:text-base leading-relaxed">
            If a Buyer wishes to speak to the owner or inspect a vehicle listed
            for sale on the Collector Car Depot web site, Collector Car Depot
            can if required request a copy of the potential buyer’s{" "}
            <strong>driver’s license</strong> along with an{" "}
            <strong>email address</strong> and <strong>phone number</strong>.
            This is provided to the seller as confirmation of the legitimacy of
            the buyer and the seller is then asked to contact the potential
            buyer to discuss the car or vice versa.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            If upon inspection the Buyer is not satisfied with the car for any
            reason and does not wish to proceed with the purchase the owner is
            advised and any personal details are{" "}
            <strong>deleted from Collector Car Depot records</strong>.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            If the Buyer is satisfied with the car and a price is agreed to with
            the Seller Collector Car Depot assists the Seller to prepare and
            send to the Buyer all required information for payment.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Collector Car Depot also assists the Seller to prepare a formal{" "}
            <strong>Bill of Sale</strong> stating whether the car is free of any
            encumbrance and terms of the vehicle status, the banking details for
            the transaction are sent via the most appropriate means possible to
            ensure safety of that information.
          </p>
        </div>

        {/* Payment Process */}
        <div className="space-y-3">
          <p className="text-sm md:text-base leading-relaxed">
            Once Collector Car Depot receives a{" "}
            <strong>deposit of funds</strong> into its{" "}
            <strong>trust account</strong> a transfer of the remaining amount
            can be sent directly to the owner for completion of the purchase{" "}
            <strong>OR</strong> Collector Car Depot can provide full management
            of funds for the Sale, in this case once all funds are cleared
            payment is then made to the Seller.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Collector Car Depot receives a fee agreed in the Seller’s Broking
            Agreement for assisting the Seller to sell the vehicle.
          </p>
          <p className="font-bold text-sm md:text-base leading-relaxed">
            There is{" "}
            <strong>no fee or Buyer’s premium charged to the Buyer</strong>.
          </p>
        </div>

        {/* Website Availability */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Website Availability</h3>
          <p className="text-sm md:text-base leading-relaxed">
            We cannot promise that this website will be uninterrupted, free of
            error, bugs or viruses and we will not be liable if, for any reason,
            this website is unavailable at any time or for any computer virus or
            system failure. Access may be suspended at any time without prior
            notice being given.
          </p>
        </div>

        {/* Copyright */}
        <div className="space-y-3 border-t pt-6">
          <h3 className="text-lg font-semibold">Copyright</h3>
          <p className="text-sm md:text-base leading-relaxed">
            Copyright 2024 Collector Car Depot. All rights reserved.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            The logo and all text, images, graphics, sound files, animation
            files, and video files specifically representing Collector Car Depot
            or its agents, are all subject to Copyright and other intellectual
            property protection.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Collector Car Depot sites may also contain images subject to
            third-party copyright, including those from car owners; vehicle
            manufacturers for example. No person may copy, modify, reproduce,
            transmit, distribute, display, photocopy, publish, license or create
            works from any material, on any part of this website, or otherwise
            use it for commercial or public purposes without the express written
            permission of Collector Car Depot.
          </p>
        </div>
      </div>
    </section>
  );
}
