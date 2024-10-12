import React from 'react';

const JewelrySearches = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Popular Searches */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <h2 className="text-xl font-bold mb-2">Popular Searches</h2>
        <p className="text-sm text-black">
          Rings | Earrings | Mangalsutra | Mangalsutra Bracelets | Bangles | Bracelets | Pendants | Necklaces | Couple Bands | Gold Coins | Chains | Watch Jewellery | Nose Pin | Dailywear Rings | Dailywear Bracelets
        </p>
      </div>

      {/* Top Searches in Gold Jewellery */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <h2 className="text-xl font-bold mb-2">Top Searches in Gold Jewellery</h2>
        <p className="text-sm text-black">
          Gold Jewellery | Gold Rings | Gold Earrings | Gold Pendants | Gold Necklaces | Gold Mangalsutras | Gold Bangles | Women Gold Rings | Men's Gold Earrings | Gold Chains for Men | Dailywear Gold Earrings | Dailywear Gold Bangles
        </p>
      </div>

      {/* Top Searches in Diamond Jewellery */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <h2 className="text-xl font-bold mb-2">Top Searches in Diamond Jewellery</h2>
        <p className="text-sm text-black">
          Diamond Jewellery | Diamond Rings | Diamond Earrings | Diamond Pendants | Diamond Necklaces | Diamond Mangalsutras | Diamond Bangles | Diamond Bracelets | Women Diamond Rings | Men's Diamond Earrings | Men's Diamond Rings | Men's Diamond Bracelets
        </p>
      </div>

      {/* Men's Jewellery Collection */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <h2 className="text-xl font-bold mb-2">Men's Jewellery Collection</h2>
        <p className="text-sm text-black">
          Men's Jewellery | Rings for Men | Earrings for Men | Men's Kada | Cufflinks for Men
        </p>
      </div>

      {/* Women's Jewellery Collection */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <h2 className="text-xl font-bold mb-2">Women's Jewellery Collection</h2>
        <p className="text-sm text-black">
          Jewellery For Women | Rings for Women | Earrings for Women | Bangles for Women | Pendants for Women | Bracelets for Women | Necklaces for Women
        </p>
      </div>
    </div>
  );
};

export default JewelrySearches;
