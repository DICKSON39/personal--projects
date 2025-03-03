// import React from 'react'
import user1 from '../assets/user-1.jpg';
import user2 from '../assets/user-2.jpg';
import user3 from '../assets/user-3.jpg';
import user4 from '../assets/user-4.jpg';
import user5 from '../assets/user-5.jpg';


function Testimonial() {
  const testimonialItems = [
    { img: user1, name: 'Sarah Muniz', comment: 'I really liked the services in the shop' },
    { img: user2, name: 'John Doe', comment: 'Quite a nice place' },
    { img: user3, name: 'Alice Smith', comment: 'Liked it' },
    { img: user4, name: 'Michael Brown', comment: 'Ooh I am sure I will come back again' },
    { img: user5, name: 'Emma Wilson', comment: 'Just Happy' },
    
  ];

  return (
    <div className='w-full h-screen bg-black text-white py-16 px-6 md:text-left'>
      <h2 className='text-3xl font-bold text-center mb-10 uppercase tracking-wide'>
        Testimonials
      </h2>
      <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {testimonialItems.map((item, index) => (
          <div key={index} className=' p-6 rounded-lg shadow-lg text-center'>
            <img
              src={item.img}
              alt={item.name}
              className='w-60 h-60 mx-auto    mb-4 transform transition duration-500 hover:scale-105 cursor-zoom-in'
            />
            <h3 className='text-xl font-semibold'>{item.name}</h3>
            <p className='text-sm italic mt-2'>{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
