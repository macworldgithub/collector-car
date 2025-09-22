import React from "react";
import Banner from "@/components/Banner";
import CarDetail from "./CarDetail";
import CarGallery from "@/components/CarGallery";
import EnquiryForm from "./EnquiryForm";
const page = () => {
  return (
    <div className="bg-white">
      <Banner
        image="/car6.jpg"
        title={`2010 Ford Mustang Shelby Convertible \n GT500 “Supercharged”`}
        subtitle="$109,000.00"
      />
      <main>
        <CarDetail
          title="2010 Ford Mustang Shelby Convertible “Supercharged” 1 of 52 in Grabber Blue"
          description="This 2010 Shelby GT500 Convertible is the real deal—a genuine, low-mileage, two owner modern muscle car with only 19400 kms from new and has won Top of Class Late model at the Mustang Nationals in March 2025."
          factoryOptions={[
            "Shelby Custom Car Cover",
            "HID Headlights",
            "SVT Engine Package",
          ]}
          highlights={[
            "Purchased new and converted to right-hand drive for Australian roads, this GT500 wears its iconic Grabber Blue with white stripes proudly, complete with its unique Shelby body kit and badging.",
            "Under the hood lies the original factory optioned SVT-enhanced, supercharged 5.4L DOHC V8 engine, paired with a Tremec six-speed manual transmission for a truly engaging driving experience. Brembo brakes with four-piston front calipers ensure serious stopping power, while the factory Shelby suspension and exhaust deliver that unmistakable rumble.",
            "Adding to its aggressive stance are genuine 20” Shelby Super Snake Alcoa Forged wheels. The power convertible top works at the touch of a button, and the two-tone leather interior, with all factory amenities, is in excellent condition. This is a great opportunity to own a piece of Shelby modern motoring.",
          ]}
          keyFeatures={[
            { label: "Exterior Colour", value: "Grabber Blue 1 of 52" },
            { label: "Interior", value: "2 Tone Leather" },
            { label: "Suspension", value: "OEM" },
            { label: "Wheels", value: "OEM Super Snake Forged" },
          ]}
          specifications={[
            {
              label: "Make/Model",
              value: "2010 Ford Shelby Mustang GT500 Convertible",
            },
            { label: "Mileage", value: "19400 Klms showing (see photos)" },
            { label: "Engine", value: "5.4L SVT Package" },
            { label: "Transmission", value: "6 Speed Manual" },
          ]}
        />

        <CarGallery
          phone="0493 717 475"
          //@ts-ignore
          videoThumbnail="/car6.jpg"
          images={[
            "/car6.jpg",
            "/car6.jpg",
            "/car6.jpg",
            "/car6.jpg",
            "/car6.jpg",
          ]}
        />
        <EnquiryForm />
      </main>
    </div>
  );
};

export default page;
