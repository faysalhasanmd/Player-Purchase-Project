import React from "react";
import footerImg from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className="w-[1200px] border-1 border-gray-600 mx-auto bg-[#060919] p-6 text-white">
      <div className="mb-4">
        <img className="mx-auto" src={footerImg} alt="" />
      </div>
      <div className="grid grid-cols-3  justify-center">
        <div className="w-4/12 mx-auto">
          <h1 className="text-2xl font-bold">About Us</h1>
          <p className="text-gray-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div className="w-4/12 mx-auto">
          <h1 className="ml-[-20px] text-2xl font-bold">Quick Links</h1>
          <ul className="list-disc">
            <li className="text-gray-400">Home</li>
            <li className="text-gray-400">Services</li>
            <li className="text-gray-400">About</li>
            <li className="text-gray-400">Contact</li>
          </ul>
        </div>
        <div className="w-[100%]">
          <h1 className="text-2xl font-bold">Subscribe</h1>
          <p className="text-gray-400">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex mt-3.5">
            <button className="bg-white text-gray-400 font-semibold border-r-0 rounded-l-[12px] p-2.5">
              enter your email
            </button>
            <button className=" border-l-0 rounded-r-[12px] text-black font-bold p-2.5 bg-gradient-to-r from-[#f8d89f] to-[#ea8195]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
