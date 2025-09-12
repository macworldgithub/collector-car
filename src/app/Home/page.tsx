import React from "react";
import FilterCar from "./FilterCar";
import Testimonials from "./Testimonial";
import Banner from "@/components/Banner";

const Home = () => {
  return (
    <div className="bg-white">
      <Banner
        image="/car5.jpg"
        title="Welcome To Collector Car Depot"
        subtitle="Collector & Performance Car Brokers"
      />
      <FilterCar />
      <Testimonials />
    </div>
  );
};

export default Home;
