// import React from "react";
// import Banner from "@/components/Banner";
// import ClassicCarAdvice from "@/app/ExpertAdvice/CarAdvice";
// import StockCard from "@/components/StockCard";
// const page = () => {
//   return (
//     <div className="bg-white">
//       <Banner
//         image="/ExpertAdvice.avif"
//         title="Expert Advice"
//         subtitle="The car market is a intricate landscape where having an experienced guide can be incredibly valuable."
//       />
//       <ClassicCarAdvice />
//       <StockCard />
//     </div>
//   );
// };

// export default page;

import React from "react";
import Banner from "@/components/Banner";
import ClassicCarAdvice from "@/app/ExpertAdvice/CarAdvice";
import StockCard from "@/components/StockCard";

const Page = () => {
  return (
    <div className="bg-white min-h-screen">
      <Banner
        image="/ExpertAdvice.avif"
        title="Terms & Conditions"
        subtitle="Important legal and operational information for buyers and users of Collector Car Depot."
      />
      <ClassicCarAdvice />
      <StockCard />
    </div>
  );
};

export default Page;
