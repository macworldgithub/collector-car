import React from "react";
import Banner from "@/components/Banner";
import StockCard from "@/components/StockCard";
const page = () => {
  return (
    <div className="bg-white">
      <Banner image="/transportation.avif" title="Transportation" subtitle="" />
      <section className="py-12 px-4">
        <div className="text-black text-center max-w-5xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            We have car transport contacts who can assist you in safely shipping
            your new purchase around Australia and have relationships with
            experts in classic car transportation. Depending on specific needs
            for enclosed or open shipping, vehicles are transported with the
            utmost care and attention throughout the entire process. This
            ensures that every car or bike reaches its destination safely and in
            the exact condition it left the owners/sellers possession or CCD’s
            possession.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-6">
            Collector Car Depot will put you directly in touch with these
            carriers to make your own bookings and payments directly. This
            guarantees you will have all the direct correspondence with those
            carriers and progress information straight from the transport
            company themselves.
          </p>
        </div>
      </section>
      <StockCard />
    </div>
  );
};

export default page;
