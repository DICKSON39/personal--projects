
import burgerFries from '../assets/burger-frenchfries.png';
import coldBeverages from '../assets/cold-beverages.png';
import refreshment from '../assets/refreshment.png';
import specialCombo from '../assets/special-combo.png';
import hotBeverages from '../assets/hot-beverages.png';
import desserts from '../assets/desserts.png';

function MenuSection() {
  const menuItems = [
    { img: hotBeverages, title: "Hot Beverages", desc: "Enjoy a variety of steaming hot drinks, including rich coffee, aromatic tea, and creamy hot chocolate." },
    { img: coldBeverages, title: "Cold Beverages", desc: "Refresh yourself with our chilled drinks, from iced coffee and fruit juices to milkshakes and smoothies." },
    { img: specialCombo, title: "The Special Combo", desc: "A perfect pairing of delicious food and beverages, carefully curated to satisfy your cravings." },
    { img: burgerFries, title: "Burger and French Fries", desc: "Savor our juicy burgers with crispy golden fries, made fresh to order with premium ingredients." },
    { img: desserts, title: "Desserts", desc: "Indulge in our sweet treats, including cakes, pastries, and ice cream, perfect for any occasion." },
    { img: refreshment, title: "Cold Refreshment", desc: "Stay cool with our refreshing selection of chilled beverages, infused with fruity and tangy flavors." }
  ];

  return (
    <div className="md:flex-row w-full h-screen bg-black text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-6">OUR MENU</h2>
      <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6 lg:px-20">
        {menuItems.map((item, index) => (
          <div key={index} className="text-center">
            <img src={item.img} alt={item.title} className="w-36 h-36 mx-auto mb-4 " />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-400 text-sm px-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
