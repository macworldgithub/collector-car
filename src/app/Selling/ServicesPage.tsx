"use client";

export default function ServicesPage() {
  return (
    <div className="bg-white flex justify-center px-4 py-12">
      <div className="max-w-4xl text-gray-800 leading-relaxed">
        <p className="mb-4">
          At Collector Car Depot, we are always on the lookout for classic vehicles that meet our standards for quality and character. We understand that selling a classic can be a time-consuming and often stressful process; that's why we've positioned ourselves as a premier marketing service provider and facilitator to simplify the journey for you.
        </p>

        <p className="mb-4">
          Collector Car Depot stands apart from traditional providers. We provide the expertise and digital resources to connect your vehicle with the right buyers in a seamless, hassle-free manner. By facilitating clear communication and swift interactions between both parties, we help sellers maximize their vehicle's visibility and value with efficiency.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-8">Our Facilitation Services</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-lg mb-2">Marketing & Promotion</h3>
            <p className="mb-4">
              We offer tailored marketing agreements designed to showcase your vehicle to a qualified audience. We handle every listing with care, utilizing both public platforms and discreet networking to find the ideal match for your car.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-lg mb-2">Digital Presence & Social Media</h3>
            <p className="mb-4">
              Featured vehicles leverage our extensive reach across Facebook, Instagram, and YouTube, as well as our curated eBay Classifieds presence.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-lg mb-2">Active Inquiry Management</h3>
            <p className="mb-4">
              We bring potential buyers closer to the finish line by facilitating the exchange of high-resolution photos and live video tours via WhatsApp, the use of a Third party Inspection by potential buyers if requested ensuring all parties can make an informed decision with confidence.
            </p>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-8">Important Information</h2>

        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
          <p className="font-semibold">Collector Car Depot is a Marketing Facilitator, not a broker or agent.</p>
          
          <div className="space-y-2">
            <p><strong>Ownership:</strong> Collector Car Depot does not buy, own, or store vehicles.</p>
            <p><strong>Direct Transactions:</strong> All vehicles listed on this website remains the property of the private seller. Each vehicle is kept by the owner until the transaction is finalized directly between the buyer and the seller.</p>
            <p><strong>End-to-End Support:</strong> Our service provides a complete start-to-finish marketing and communication framework to help you "get it done" without the traditional hurdles of the private market.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
