import React from "react";
import Banner from "@/components/Banner";
import TermData from "./TermData";
import Terms from "../../../public/terms.avif";
const page = () => {
  return (
    <div className="bg-white">
      <Banner
        //@ts-ignore
        images={["/terms.avif"]}
        title="Terms of Sale / Website Use"
        subtitle=""
      />
      <TermData />
    </div>
  );
};

export default page;
