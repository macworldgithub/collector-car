// "use client";
// import { useState } from "react";
// export default function SellingForm() {
//   const [formData, setFormData] = useState({
//     title: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     telephone: "",
//     manufacturer: "",
//     model: "",
//     year: "",
//     registration: "",
//     mileage: "",
//     comments: "",
//     contactPrefs: [] as string[],
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       setFormData((prev) => ({
//         ...prev,
//         contactPrefs: checked
//           ? [...prev.contactPrefs, value]
//           : prev.contactPrefs.filter((v) => v !== value),
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Submitted:", formData);
//     alert("Form submitted! Check console for data.");
//   };

//   return (
// <div className=" flex items-center justify-center bg-gray-200 px-4 py-10 text-black">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8"
//       >
//         {/* Title */}
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-black">
//           Selling your car
//         </h2>

//         {/* Personal Info */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-400">
//           <select
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             className="border rounded-md p-2"
//           >
//             <option>- Title -</option>
//             <option>Mr</option>
//             <option>Mrs</option>
//             <option>Ms</option>
//             <option>Dr</option>
//           </select>
//           <input
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="border rounded-md p-2"
//           />
//           <input
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="border rounded-md p-2"
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//           <input
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             className="border rounded-md p-2"
//           />
//           <input
//             name="telephone"
//             placeholder="Telephone"
//             value={formData.telephone}
//             onChange={handleChange}
//             className="border rounded-md p-2"
//           />
//         </div>

//         {/* Car Details */}
//         <h3 className="font-semibold mt-6 mb-2 text-center md:text-left ">
//           Your Car Details:
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <input
//             name="manufacturer"
//             placeholder="Manufacturer"
//             value={formData.manufacturer}
//             onChange={handleChange}
//             className="border rounded-md p-2"
//           />
//           <input
//             name="model"
//             placeholder="Model"
//             value={formData.model}
//             onChange={handleChange}
//             className="border rounded-md p-2"
//           />
//           <input
//             name="year"
//             placeholder="Year"
//             value={formData.year}
//             onChange={handleChange}
//             className="border rounded-md p-2"
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//           <input
//             name="registration"
//             placeholder="Registration"
//             value={formData.registration}
//             onChange={handleChange}
//             className="border rounded-md p-2"
//           />
//           <input
//             name="mileage"
//             placeholder="Mileage"
//             value={formData.mileage}
//             onChange={handleChange}
//             className="border rounded-md p-2"
//           />
//         </div>

//         {/* Comments */}
//         <h3 className="font-semibold mt-6 mb-2">Comments:</h3>
//         <textarea
//           name="comments"
//           placeholder="Your comments..."
//           value={formData.comments}
//           onChange={handleChange}
//           className="border rounded-md p-2 w-full h-28"
//         />

//         {/* Contact Preferences */}
//         <h3 className="font-semibold mt-6 text-center md:text-left">
//           Contact Preferences
//         </h3>
//         <div className="flex flex-wrap gap-4 mt-2">
//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               value="Email"
//               onChange={handleChange}
//               checked={formData.contactPrefs.includes("Email")}
//             />
//             By Email
//           </label>
//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               value="SMS"
//               onChange={handleChange}
//               checked={formData.contactPrefs.includes("SMS")}
//             />
//             By SMS
//           </label>
//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               value="Telephone"
//               onChange={handleChange}
//               checked={formData.contactPrefs.includes("Telephone")}
//             />
//             By Telephone
//           </label>
//         </div>

//         <p className="text-xs mt-4 text-gray-600">
//           We will use the information provided here to only respond to your
//           enquiry. For further information on how we use your personal
//           information, please see our{" "}
//           <a href="/privacy" className="text-pink-600 underline">
//             Privacy Policy
//           </a>
//           .
//         </p>

//         {/* Submit */}
//         <div className="flex justify-center mt-6">
//           <button
//             type="submit"
//             className="bg-black text-white px-6 py-2 rounded-md shadow hover:bg-gray-800 transition"
//           >
//             Submit Form
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

"use client";
import { useState } from "react";

export default function SellingForm() {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    manufacturer: "",
    model: "",
    year: "",
    registration: "",
    mileage: "",
    comments: "",
    contactPrefs: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const { name, value } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      const checked = target.checked;
      setFormData((prev) => ({
        ...prev,
        contactPrefs: checked
          ? [...prev.contactPrefs, value]
          : prev.contactPrefs.filter((v) => v !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sell`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Submitted:", formData);
        alert(result.message || "Form submitted successfully!");
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 px-4 py-10 text-black">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8"
      >
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-black">
          Selling your car
        </h2>

        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-400">
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border rounded-md p-2"
          >
            <option>- Title -</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Ms</option>
            <option>Dr</option>
          </select>
          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border rounded-md p-2"
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border rounded-md p-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md p-2"
          />
          <input
            name="telephone"
            placeholder="Telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="border rounded-md p-2"
          />
        </div>

        {/* Car Details */}
        <h3 className="font-semibold mt-6 mb-2 text-center md:text-left">
          Your Car Details:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            name="manufacturer"
            placeholder="Manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
            className="border rounded-md p-2"
          />
          <input
            name="model"
            placeholder="Model"
            value={formData.model}
            onChange={handleChange}
            className="border rounded-md p-2"
          />
          <input
            name="year"
            placeholder="Year"
            value={formData.year}
            onChange={handleChange}
            className="border rounded-md p-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input
            name="registration"
            placeholder="Registration"
            value={formData.registration}
            onChange={handleChange}
            className="border rounded-md p-2"
          />
          <input
            name="mileage"
            placeholder="Mileage"
            value={formData.mileage}
            onChange={handleChange}
            className="border rounded-md p-2"
          />
        </div>

        {/* Comments */}
        <h3 className="font-semibold mt-6 mb-2">Comments:</h3>
        <textarea
          name="comments"
          placeholder="Your comments..."
          value={formData.comments}
          onChange={handleChange}
          className="border rounded-md p-2 w-full h-28"
        />

        {/* Contact Preferences */}
        <h3 className="font-semibold mt-6 text-center md:text-left">
          Contact Preferences
        </h3>
        <div className="flex flex-wrap gap-4 mt-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              value="Email"
              onChange={handleChange}
              checked={formData.contactPrefs.includes("Email")}
            />
            By Email
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              value="SMS"
              onChange={handleChange}
              checked={formData.contactPrefs.includes("SMS")}
            />
            By SMS
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              value="Telephone"
              onChange={handleChange}
              checked={formData.contactPrefs.includes("Telephone")}
            />
            By Telephone
          </label>
        </div>

        <p className="text-xs mt-4 text-gray-600">
          We will use the information provided here to only respond to your
          enquiry. For further information on how we use your personal
          information, please see our{" "}
          <a href="/privacy" className="text-pink-600 underline">
            Privacy Policy
          </a>
          .
        </p>

        {/* Submit */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md shadow hover:bg-gray-800 transition"
          >
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
}