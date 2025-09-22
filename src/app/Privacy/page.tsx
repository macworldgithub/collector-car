import Banner from "@/components/Banner";
import React from "react";
import Content from "./Content";
const page = () => {
  return (
    <div className="bg-white">
      <Banner
        images={["/privacy-notice.avif"]}
        title="Privacy Notice"
        subtitle=""
      />
      <Content />
    </div>
  );
};

export default page;
