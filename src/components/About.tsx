// import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGlobeAfrica,
} from "react-icons/fa";
function About() {
  return (
    <div className="w-full h-screen bg-amber-200 text-black py-12 px-6 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Image Section */}
      <div className="w-64 h-64"></div>

      {/* Text Section */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl font-bold uppercase mb-4 relative">
          About Us
         
        </h2>
        <p className="text-lg leading-relaxed">
          At <span className="font-semibold"> Doria Travels </span>We are Dedicated
          to customer satisfaction and explore the adventures in any part of the
          World just name it and we will take you there We at Kentor Tours Are
          commonly discplined for customer satisfaction hope you enjoy with us.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4 text-2xl text-gray-700">
          <FaFacebook className="hover:text-blue-600 cursor-pointer transform transition duration-500" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer transform transition duration-500" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer transform transition duration-500" />
          <FaLinkedin className="hover:text-red-400 cursor-pointer transform transition duration-500" />

          <FaGlobeAfrica className="hover:text-blue-400 cursor-pointer transform transition duration-500" />
        </div>
      </div>
    </div>
  );
}

export default About;
