import aboutImage from '../assets/about-image.jpg';

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Social icons

function About() {
  return (
    <div className="w-full h-screen bg-[#f8f4f2] text-black py-12 px-6 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Image Section */}
      <div className="w-64 h-64">
        <img 
          src={aboutImage} 
          alt="About Us" 
          className="w-full h-full object-cover rounded-full shadow-lg cursor-zoom-in transform transition duration-500 hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl font-bold uppercase mb-4 relative">
          About Us
          <div className="w-12 h-1 bg-amber-500 mt-2 mx-auto md:mx-0"></div>
        </h2>
        <p className="text-lg leading-relaxed">
          At <span className="font-semibold">CoffeeHouse</span> in Berndorf, Germany, we pride 
          ourselves on being a go-to destination for coffee lovers and conversation seekers alike. 
          We're dedicated to providing an exceptional coffee experience in a cozy and inviting 
          atmosphere, where guests can relax, unwind, and enjoy their time in comfort.
        </p>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center md:justify-start gap-4 text-2xl text-gray-700">
          <FaFacebook className="hover:text-blue-600 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default About;
