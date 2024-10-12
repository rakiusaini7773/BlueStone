import React from 'react';
import { Link } from 'react-router-dom';
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2C2F88] text-white py-4">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-1 text-xs">ABOUT US</h3>
          <ul className="space-y-1 text-xs">
            <li><Link to="/who-we-are" className="hover:underline">Who we are?</Link></li>
            <li><Link to="/management-team" className="hover:underline">Management Team</Link></li>
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/design-philosophy" className="hover:underline">Design Philosophy</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-semibold mb-1 text-xs">POLICIES</h3>
          <ul className="space-y-1 text-xs">
            <li><Link to="/returns-policy" className="hover:underline">30-Day Returns</Link></li>
            <li><Link to="/exchange-buyback" className="hover:underline">Lifetime Exchange & Buyback</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/fraud-warning" className="hover:underline">Fraud Warning Disclaimer</Link></li>
          </ul>
        </div>

        {/* Jewellery Guide */}
        <div>
          <h3 className="font-semibold mb-1 text-xs">JEWELLERY GUIDE</h3>
          <ul className="space-y-1 text-xs">
            <li><Link to="/buying-price-guide" className="hover:underline">Buying and Price Guide</Link></li>
            <li><Link to="/certification-guide" className="hover:underline">Certification Guide</Link></li>
            <li><Link to="/diamond-solitaire-guide" className="hover:underline">Diamond and Solitaire Guide</Link></li>
            <li><Link to="/gemstone-guide" className="hover:underline">Gemstone Guide</Link></li>
            <li><Link to="/gifting-guide" className="hover:underline">Gifting Guide</Link></li>
            <li><Link to="/care-guide" className="hover:underline">Jewellery Care Guide</Link></li>
          </ul>
        </div>

        {/* App Download Section */}
        <div className="flex flex-col items-center md:items-end">
          {/* Phone Image at the Top */}
          <img 
            src="https://kinclimg5.bluestone.com/f_webp/static/resources/themes/bluestone/images/new/static/home/app-footer.v2.png" 
            alt="Phone" 
            className="mb-2 w-20 md:w-16 lg:w-24"
          />
          <h3 className="font-semibold mb-1 text-xs">Download Our App</h3>
          <p className="text-xs mb-1 text-center md:text-right">Shining new app, made just for you! It's Free, Easy & Smart.</p>
          <div className="flex space-x-1">
            <a href="https://play.google.com/store" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
              <FaGooglePlay className="w-5 h-5" />
            </a>
            <a href="https://www.apple.com/app-store" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
              <FaAppStoreIos className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Customer Delight & Shop with Confidence */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {/* Customer Delight */}
        <div>
          <h3 className="font-semibold mb-1 text-xs">CUSTOMER DELIGHT</h3>
          <ul className="space-y-1 text-xs">
            <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li className="hover:underline">18004190066</li>
            <li className="hover:underline">(9 am-10 pm, 7 days a week)</li>
          </ul>
        </div>

        {/* Shop with Confidence */}
        <div>
          <h3 className="font-semibold mb-1 text-xs">SHOP WITH CONFIDENCE</h3>
          <ul className="space-y-1 text-xs">
            <li><Link to="/why-buy-from-us" className="hover:underline">Why Buy From Us?</Link></li>
            <li><Link to="/our-certifications" className="hover:underline">Our Certifications</Link></li>
            <li><Link to="/press-room" className="hover:underline">Press Room</Link></li>
            <li><Link to="/testimonials" className="hover:underline">Testimonials</Link></li>
            <li><Link to="/corporate-gifting" className="hover:underline">Corporate Gifting</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 border-t border-gray-600 pt-2 text-center md:text-left">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          <p className="text-xs">&copy; 2024 BlueStone. All Rights Reserved. CIN: U73200KA2011PTC058678</p>

          {/* Social Media Icons */}
          <div className="flex space-x-2 justify-center md:justify-end">
            <a href="https://www.facebook.com" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
            </a>
            <a href="https://twitter.com" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
            </a>
            <a href="https://www.instagram.com" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            </a>
            <a href="https://www.pinterest.com" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
            <FaPinterestP />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

