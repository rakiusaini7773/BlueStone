import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../../App.css";

const cards = [
  {
    image: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/evil_eye_dcs.jpg",
    link: "/evil-eye", // Link to another page
  },
  {
    image: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/hello-kitty.jpg",
    link: "/hello-kitty", // Link to another page
  },
  {
    image: "https://kinclimg5.bluestone.com/f_webp/static/hp/m/art-collection.jpg",
    link: "/art", // Link to another page
  },
];

const CardsComponent = () => {
  return (
    <div className=" w-full relative p-4"> {/* Added padding for mobile */}
      {/* Container for cards */}
      <div className="flex flex-col md:flex-row justify-between gap-6"> {/* Changed to column layout on mobile */}
        {/* Loop through the cards array */}
        {cards.map((card, index) => (
          <div
            key={index}
            className={`mb-6 md:mb-0 ${index === 1 ? "mt-4 md:mt-14" : "mt-8 md:mt-28"} animate-slide-up delay-${index * 200} w-full md:w-1/3`} 
          >
            {/* Use Link to redirect to the corresponding page */}
            <Link to={card.link}>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[250px] md:h-[330px] object-cover rounded-lg shadow-md" // Adjusted height for mobile
              />
              <div className="bg-white opacity-75 rounded-lg flex flex-col items-center justify-center p-4">
                <h3 className="text-lg md:text-2xl font-bold mb-2 text-center">{card.title}</h3>
                {card.description && (
                  <p className="text-center text-gray-600">{card.description}</p>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Positioned button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-slide-up delay-600">
        {/* Use Link to redirect to a page showing all collections */}
        <Link to="/collections">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300">
            Browse all Collections
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardsComponent;
