const Navbar = () => {
  return (
    <nav className="fixed  w-full bg-opacity-50 backdrop-blur-lg bg-[#3b1515] text-white font-serif p-4 z-50">
      <div className=" flex justify-between items-center ">
        <h1 className="text-2xl font-bold flex items-center">☕ Coffee</h1>
        
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><a href="#" className="hover:text-amber-300 transition">Home</a></li>
          <li><a href="#" className="hover:text-amber-300 transition">Testimonials</a></li>
          <li><a href="#" className="hover:text-amber-300 transition">Menu</a></li>
          <li><a href="#" className="hover:text-amber-300 transition">Contact</a></li>
          <li><a href="#" className="hover:text-amber-300 transition">About</a></li>
          <li><a href="#" className="hover:text-amber-300 transition">Gallery</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
