import Link from "next/link";
import { Mail, Phone, Facebook, Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  currentListings: [
    { name: "Collectables", href: "/collectables" },
    { name: "About Us", href: "/About" },
    { name: "Our Services", href: "/OurServices" },
    { name: "Expert Advice", href: "/ExpertAdvice" },
  ],
  previouslySold: [
    { name: "Sold", href: "/Sold" },
    { name: "Selling Your Car", href: "/Selling" },
    { name: "Transportation", href: "/Transportation" },
    { name: "News and Events", href: "/News" },
  ],
};

type MainMenuProps = {
  onClose?: () => void;
};

export default function MainMenu({ onClose }: MainMenuProps) {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-gray-700 py-8">
        {/* Current Listings */}
        <div>
          <h3 className="font-bold mb-4">Current Listings</h3>
          <ul className="space-y-2">
            {footerLinks.currentListings.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-gray-400 transition-colors"
                  onClick={onClose} 
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Previously Sold */}
        <div>
          <h3 className="font-bold mb-4">Previously Sold</h3>
          <ul className="space-y-2">
            {footerLinks.previouslySold.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-gray-400 transition-colors"
                  onClick={onClose} 
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold mb-4">Contact Us</h3>
          <p className="flex items-center space-x-2">
            <Phone className="h-4 w-4" /> <span>0493717475</span>
          </p>
          <p className="flex items-center space-x-2 mt-2">
            <Mail className="h-4 w-4" />{" "}
            <span>admin@collectorcardepot.com</span>
          </p>

          {/* Social icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 hover:text-gray-300" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 hover:text-gray-300" />
            </a>
            <a href="#" aria-label="WhatsApp">
              <MessageCircle className="h-5 w-5 hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Logo bottom */}
      <div className="flex justify-center items-center mt-6">
        <Image
          src="/logo.png"
          alt="Collector Car Depot"
          width={160}
          height={56}
          className="h-24 w-auto"
        />
      </div>
    </footer>
  );
}
