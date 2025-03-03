import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        {/* Copyright */}
        <p className="text-sm">© 2025 Coffee Shop</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl">
          <FaFacebook className="hover:text-blue-600 cursor-pointer transition duration-300" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer transition duration-300" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer transition duration-300" />
        </div>

        {/* Links */}
        <p className="text-sm space-x-3">
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-blue-600">Refund Policy</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
