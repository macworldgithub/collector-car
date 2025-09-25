import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const navigation = useRouter();
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
            <a
              href="tel:0493717475"
              className="flex items-center hover:text-gray-300 transition-colors"
            >
              <Phone className="h-4 w-4" /> <span>0493717475</span>
            </a>
          </p>
          <p className="flex items-center space-x-2 mt-2">
            <a
              href="mailto:admin@collectorcardepot.com"
              className="flex items-center hover:text-gray-300 transition-colors"
            >
              <Mail className="h-4 w-4" />{" "}
              <span>admin@collectorcardepot.com</span>
            </a>
          </p>

          {/* Social icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/newcastle.carshowgarage?mibextid=wwXIfr&rdid=4D90aKE6WIszUJ6F&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AAfLB3Qo3%2F%3Fmibextid%3DwwXIfr#"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="h-5 w-5 hover:text-gray-300" />
            </a>
            <a
              href="https://www.instagram.com/collectorcardepot_official/?igsh=MWVzZXoxZDd0OTVxZA%3D%3D#"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-5 w-5 hover:text-gray-300" />
            </a>
            <a
              href="https://wa.me/493717475"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="h-5 w-5 hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Logo bottom */}
      {/* Logo bottom */}
      <div
        className="flex justify-center items-center mt-6 cursor-pointer"
        onClick={() => {
          navigation.push("/"); // navigate to home
          if (onClose) onClose(); // close menu/drawer
        }}
      >
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
