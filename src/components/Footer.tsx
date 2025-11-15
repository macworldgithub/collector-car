"use client";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });

  const quickLinks = [
    { name: "Terms & Conditions", href: "/Terms-Conditions" },
    { name: "Privacy Notice", href: "/Privacy" },
    { name: "Youtube Video Disclaimer", href: "/Disclaimer" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/newcastle.carshowgarage?mibextid=wwXIfr&rdid=4D90aKE6WIszUJ6F&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AAfLB3Qo3%2F%3Fmibextid%3DwwXIfr#",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/collectorcardepot_official/?igsh=MWVzZXoxZDd0OTVxZA%3D%3D#",
    },
    { icon: <FaWhatsapp />, href: "https://wa.me/493717475" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted: ", form);
  };

  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <div className="bg-gray-700 text-white py-8 px-4 text-center">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Sign-up for our newsletter to hear first <br />
          about our latest listings, news and more.
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-3xl mx-auto"
        >
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="px-3 py-2 rounded-md text-black w-full md:w-auto bg-white"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Surname"
            value={form.lastName}
            onChange={handleChange}
            className="px-3 py-2 rounded-md text-black w-full md:w-auto bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="px-3 py-2 rounded-md text-black w-full md:w-auto bg-white"
          />
          <button
            type="submit"
            className="bg-white text-black px-3 py-2 rounded-md hover:bg-gray-200 md:w-auto"
          >
            Signup
          </button>
        </form>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#0F0F5A] text-white py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo.png"
              alt="Collector Car Depot"
              width={112}
              height={112}
              className="mb-3"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-3">QUICK LINKS</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-gray-300 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-3">Contact Details</h3>
            <p className="text-sm">0493717475</p>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-3">Social Links</h3>
            <div className="flex gap-4 text-lg">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm">
              Collector & Performance Cars <br />
              ABN 84 492 738 231
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
