import React from 'react';

const BlueStonePromise = () => {
  return (
    <div className="flex justify-center items-center py-10 bg-pink-50">
      <div className="p-6 md:flex md:items-center md:justify-between rounded-lg shadow-lg">
        {/* Left Image Section */}
        <div className="md:w-1/2 md:pr-6 flex justify-center">
          {/* Replace src with the actual image URL */}
          <img 
            src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/bs-p.png" 
            alt="BlueStone Promise" 
            className="w-full h-auto object-contain" 
          />
        </div>

        {/* Right Icon Grid Section */}
        <div className="md:w-1/2 grid grid-cols-3 gap-2">
          {/* First Image */}
          <div className="flex flex-col items-center">
            <img 
              src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/bp-1_v2.png" 
              alt="200+ Stores" 
              className="w-16 h-16 rounded-full bg-blue-900" 
            />
            <p className="text-sm mt-2 text-center text-gray-600">80+ Cities Nationwide</p>
          </div>

          {/* Second Image */}
          <div className="flex flex-col items-center">
            <img 
              src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/bp-2.png" 
              alt="Certified Jewellery" 
              className="w-16 h-16 rounded-full bg-blue-900" 
            />
            <p className="text-sm mt-2 text-center text-gray-600">100% Certified Jewellery</p>
          </div>

          {/* Third Image */}
          <div className="flex flex-col items-center">
            <img 
              src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/bp-3.png" 
              alt="Lifetime Exchange" 
              className="w-16 h-16 rounded-full bg-blue-900" 
            />
            <p className="text-sm mt-2 text-center text-gray-600">Lifetime Exchange & Buyback</p>
          </div>

          {/* Fourth Image */}
          <div className="flex flex-col items-center">
            <img 
              src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/bp-4.png" 
              alt="30 Days Money Back" 
              className="w-16 h-16 rounded-full bg-blue-900" 
            />
            <p className="text-sm mt-2 text-center text-gray-600">30 Days Money Back</p>
          </div>

          {/* Fifth Image */}
          <div className="flex flex-col items-center">
            <img 
              src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/bp-5.png" 
              alt="100% Transparency" 
              className="w-16 h-16 rounded-full bg-blue-900" 
            />
            <p className="text-sm mt-2 text-center text-gray-600">100% Transparency</p>
          </div>

          {/* Sixth Image */}
          <div className="flex flex-col items-center">
            <img 
              src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/bp-6.png" 
              alt="Free Shipping" 
              className="w-16 h-16 rounded-full bg-blue-900" 
            />
            <p className="text-sm mt-2 text-center text-gray-600">Free Shipping</p>
          </div>

          {/* Seventh Image */}
          <div className="flex flex-col items-center">
            <img 
              src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/bp-7.png " 
              alt="No Compromise On Ethics" 
              className="w-16 h-16 rounded-full bg-blue-900" 
            />
            <p className="text-sm mt-2 text-center text-gray-600">No Compromise On Ethics</p>
          </div>

          {/* Eighth Image */}
          <div className="flex flex-col items-center">
            <img 
              src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/bp-9.png" 
              alt="Curated Comfort" 
              className="w-16 h-16 rounded-full bg-blue-900" 
            />
            <p className="text-sm mt-2 text-center text-gray-600">Curated Comfort With Try at Home</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src="https://kinclimg5.bluestone.com/f_webp/static/hp/d/bp-9.png" 
              alt="Curated Comfort" 
              className="w-16 h-16 rounded-full bg-blue-900" 
            />
            <p className="text-sm mt-2 text-center text-gray-600">Curated Comfort With Try at Home</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueStonePromise;
