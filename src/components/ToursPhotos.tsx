//import React from 'react'
import { Tourphoto } from "../components/index.ts"

function ToursPhotos() {
    
    

   
  return (
    <div className="w-full min-h-screen py-12 px-6  bg-blue-300 text-black ">
      <h2 className="text-4xl font-bold text-center mb-6 uppercase relative">Attraction Sites</h2>
      <div className="w-20 h-1 bg-red-500 mx-auto mb-10"></div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-10">
    {Tourphoto.map((item, index) => (
      <div key={index} className="cursor-pointer bg-white p-4 rounded-xl shadow-lg text-center hover:shadow-2xl transition duration-300">
        <img
          src={item.img}
          className='p-4 w-60 h-60 mx-auto rounded-4xl object-cover mb-4 transform transition duration-500 hover:scale-105 cursor-zoom-in'
        />
        <p className='text-lg font-semibold'>{item.name}</p>
        <p className='text-sm text-gray-700'>📞 {item.phone}</p>
        <p className='text-sm text-gray-700'>📍 {item.location}</p>
        <button className="mt-10 bg-transparent border-2  text-amber-500   w-30 h-10 rounded-md font-medium hover:bg-amber-500 hover:text-white transition ">Book Now</button>
      </div>
    ))}
  </div>
  </div>
  )
}

export default ToursPhotos
