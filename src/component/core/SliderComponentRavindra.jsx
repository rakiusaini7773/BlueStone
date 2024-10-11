// SliderComponent.jsx
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom left and right arrow components
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer bg-blue-500 text-white p-2 rounded-full"
      onClick={onClick}
    >
      ➡️
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer bg-blue-500 text-white p-2 rounded-full"
      onClick={onClick}
    >
      ⬅️
    </div>
  );
};

const SliderComponent = () => {
  // Array of images
  const slides = [
    {
      image: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/d-mrp.jpg",
      gradient: "from-white via-transparent to-transparent",
    },
    {
      image: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/d-mrp-t.jpg",
      gradient: "from-blue-500 via-transparent to-transparent",
      buttonText: "TRY NOW",
      button: true,
    },
    {
      image: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/d-mkg.jpg",
      gradient: "from-red-500 via-transparent to-transparent",
    },
    {
      image: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/d-mkg-t.jpg",
      gradient: "from-gray-700 via-transparent to-transparent",
    },
    {
      image: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/d-sltr_v1.jpg",
      gradient: "from-green-500 via-transparent to-transparent",
    },
    {
      image: "https://kinclimg5.bluestone.com/f_webp/static/hp/d/bgu_v1.jpg",
      gradient: "from-yellow-500 via-transparent to-transparent",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true, // Enables infinite scroll
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full mx-auto py-10 relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} text-white flex items-center justify-center p-8`}>
              {/* The heading, subheading, and button have been removed */}
              {slide.button && (
                <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {slide.buttonText}
                </button>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
