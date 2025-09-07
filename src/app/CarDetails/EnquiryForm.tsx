// "use client";
// import React, { useState } from "react";

// export default function EnquiryForm() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     telephone: "",
//     message: "",
//     contactPreferences: [] as string[],
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCheckboxChange = (value: string) => {
//     setFormData((prev) => {
//       if (prev.contactPreferences.includes(value)) {
//         return {
//           ...prev,
//           contactPreferences: prev.contactPreferences.filter((v) => v !== value),
//         };
//       } else {
//         return {
//           ...prev,
//           contactPreferences: [...prev.contactPreferences, value],
//         };
//       }
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <section className="px-4 md:px-12 lg:px-20 py-10 ">
//       <h2 className="text-center text-2xl font-bold mb-6 text-black">
//         Enquire about this vehicle
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-4xl mx-auto space-y-6 text-gray-600"
//       >
//         {/* First + Last Name */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="border rounded-md p-3 w-full"
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="border rounded-md p-3 w-full"
//             required
//           />
//         </div>

//         {/* Email + Telephone */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border rounded-md p-3 w-full"
//             required
//           />
//           <input
//             type="tel"
//             name="telephone"
//             placeholder="Telephone"
//             value={formData.telephone}
//             onChange={handleChange}
//             className="border rounded-md p-3 w-full"
//             required
//           />
//         </div>

//         {/* Message */}
//         <textarea
//           name="message"
//           placeholder="Message"
//           rows={5}
//           value={formData.message}
//           onChange={handleChange}
//           className="border rounded-md p-3 w-full"
//           required
//         />

//         {/* Contact Preferences */}
//         <div>
//           <label className="block font-medium mb-2">
//             Contact Preferences <span className="text-red-500">*</span>
//           </label>
//           <div className="flex gap-6 flex-wrap text-sm">
//             {["By Email", "By SMS", "By Telephone"].map((opt) => (
//               <label key={opt} className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   checked={formData.contactPreferences.includes(opt)}
//                   onChange={() => handleCheckboxChange(opt)}
//                   className="h-4 w-4"
//                 />
//                 {opt}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Disclaimer */}
//         <p className="text-sm text-gray-600">
//           We will use the information provided here to only respond to your enquiry.
//           For further information on how we use your personal information, please see our{" "}
//           <a href="/privacy-policy" className="text-red-500 underline">
//             Privacy Policy
//           </a>.
//         </p>

//         {/* Submit Button */}
//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition"
//           >
//             Enquire Now
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// }

"use client";
import React, { useState } from "react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    message: "",
    contactPreferences: [] as string[],
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => {
      if (prev.contactPreferences.includes(value)) {
        return {
          ...prev,
          contactPreferences: prev.contactPreferences.filter(
            (v) => v !== value
          ),
        };
      } else {
        return {
          ...prev,
          contactPreferences: [...prev.contactPreferences, value],
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("http://localhost:3009/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit enquiry");
      }

      setSuccess("Your enquiry has been submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        message: "",
        contactPreferences: [],
      });
    } catch (err: any) {
      setError("Failed to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 md:px-12 lg:px-20 py-10 ">
      <h2 className="text-center text-2xl font-bold mb-6 text-black">
        Enquire about this vehicle
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto space-y-6 text-gray-600"
      >
        {/* Success/Error Messages */}
        {success && <div className="text-green-600 text-center">{success}</div>}
        {error && <div className="text-red-600 text-center">{error}</div>}

        {/* First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border rounded-md p-3 w-full"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border rounded-md p-3 w-full"
            required
          />
        </div>

        {/* Email + Telephone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md p-3 w-full"
            required
          />
          <input
            type="tel"
            name="telephone"
            placeholder="Telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="border rounded-md p-3 w-full"
            required
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="border rounded-md p-3 w-full"
          required
        />

        {/* Contact Preferences */}
        <div>
          <label className="block font-medium mb-2">
            Contact Preferences <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-6 flex-wrap text-sm">
            {["By Email", "By SMS", "By Telephone"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.contactPreferences.includes(opt)}
                  onChange={() => handleCheckboxChange(opt)}
                  className="h-4 w-4"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-600">
          We will use the information provided here to only respond to your
          enquiry. For further information on how we use your personal
          information, please see our{" "}
          <a href="/privacy-policy" className="text-red-500 underline">
            Privacy Policy
          </a>
          .
        </p>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Enquire Now"}
          </button>
        </div>
      </form>
    </section>
  );
}
