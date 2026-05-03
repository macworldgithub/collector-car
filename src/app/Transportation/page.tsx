import React from "react";
import Banner from "@/components/Banner";
import StockCard from "@/components/StockCard";
const page = () => {
  return (
    <div className="bg-white">
      <Banner image="/transportation.avif" title="Transportation" subtitle="" />
      {/* <section className="py-12 px-4">
        <div className="text-black text-center max-w-5xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            To further simplify your journey, we provide access to a network of
            professional car transport contacts who specialize in shipping
            classic vehicles safely across Australia. As a facilitator, our goal
            is to connect you with the right experts to ensure your new purchase
            is handled with the utmost care, whether you require enclosed or
            open shipping solutions.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-6">
            By utilizing these industry relationships, you can ensure that every
            car reaches its destination.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6">
            Direct Coordination for Full Transparency
          </h2>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-6">
            As a marketing and facilitation service, Collector Car Depot does
            not book or manage transport on your behalf. Instead, we put you
            directly in touch with these carriers. This approach ensures:
          </p>

          <div className="text-left max-w-3xl mx-auto mt-8 space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                <strong>Direct Communication:</strong> You maintain a one-on-one
                relationship with the transport company for progress updates.
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                <strong>Transparent Pricing:</strong> You make bookings and
                payments directly to the carrier, ensuring no middleman markups.
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                <strong>Personalized Control:</strong> You retain full oversight
                of the logistics, scheduling, and specific requirements for your
                vehicle's journey.
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-8 italic">
            Please note: As we do not take possession of vehicles, all transport
            arrangements are a direct agreement between the buyer/seller and the
            third-party transport provider.
          </p>
        </div>
      </section> */}

   <section className="py-12 px-4">
        <div className="text-black max-w-4xl mx-auto">

          <p className="text-base sm:text-lg leading-relaxed">
            To further simplify your journey, we provide access to a network of professional car transport contacts who specialize in shipping classic vehicles safely across Australia. As a <strong>facilitator</strong>, our goal is to connect you with the right experts to ensure your new purchase is handled with the utmost care, whether you require enclosed or open shipping solutions.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mt-5">
            By utilizing these industry relationships, you can ensure that every car reaches its destination.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-4">
            Direct Coordination for Full Transparency
          </h2>

          <p className="text-base sm:text-lg leading-relaxed">
            As a <strong>marketing and facilitation service</strong>, Collector Car Depot does not book or manage transport on your behalf. Instead, we put you directly in touch with these carriers. This approach ensures:
          </p>

          <ul className="list-disc pl-6 mt-6 space-y-3 text-base sm:text-lg leading-relaxed">
            <li>
              <strong>Direct Communication:</strong> You maintain a one-on-one relationship with the transport company for progress updates.
            </li>

            <li>
              <strong>Transparent Pricing:</strong> You make bookings and payments directly to the carrier, ensuring no middleman markups.
            </li>

            <li>
              <strong>Personalized Control:</strong> You retain full oversight of the logistics, scheduling, and specific requirements for your vehicle's journey.
            </li>
          </ul>

          <p className="text-base sm:text-lg leading-relaxed mt-6 italic">
            Please note: As we do not take possession of vehicles, all transport arrangements are a direct agreement between the buyer/seller and the third-party transport provider.
          </p>

        </div>
      </section>



      <StockCard />
    </div>
  );
};

export default page;
