const Navbar = () => {
    return (
      <nav className="fixed backdrop-blur-3xl top-0 left-0 w-full  flex justify-between items-center bg-transparent z-20">
        <h2 className="text-2xl font-bold text-black">Kento Tours</h2>
        <ul className="flex space-x-6 text-lg text-black">
          <li className="hover:text-gray-300 hover:underline cursor-pointer">Home</li>
          <li className="hover:text-gray-300 hover:underline cursor-pointer">Destinations</li>
          <li className="hover:text-gray-300 hover:underline cursor-pointer">Tours</li>
          <li className="hover:text-gray-300 hover:underline cursor-pointer">Reviews</li>
          <li className="hover:text-gray-300 hover:underline cursor-pointer">Contact</li>
        </ul>
      </nav>
    );
  };

  export default Navbar;