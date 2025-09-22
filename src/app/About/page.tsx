import React from "react";
import Banner from "@/components/Banner";
import StockCard from "@/components/StockCard";
import Services from "./Services";

const page = () => {
  return (
    <div className="bg-white">
      <Banner
        //@ts-expect-error jhgjhb
        image="/IMG_8540-ezgif.com-apng-to-avif-converter-scaled.avif"
        title="About Us"
        subtitle={`At Collector Car Depot, we specialize in the best collector\ncar listings across the classic automotive market,\noffering quality cars and delivering complete peace of mind to our clients.`}
      />
      <Services />
      <StockCard />
    </div>
  );
};

export default page;
