import React from 'react';
import { AiOutlineYoutube, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDate = new Date().getDate();

  return (
    <div className="bg-blue-900 text-white py-10 relative z-10">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 sticky inset-x-0 mx-auto max-w-full md:max-w-lg bottom-10">
          <div className="bg-gray-200 text-black p-4 flex flex-col md:flex-row items-center justify-around">
            <h2 className="text-xl font-bold mb-4 md:mb-0">
              Ready to get started? <br />
              Talk to us today
            </h2>
            <button className="w-full md:w-28 h-14 bg-pink-500 text-white hover:bg-pink-400 transition duration-300">
              GET STARTED
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-center md:text-left ml-0 md:ml-16">
          <div>
            <h2 className="text-xl mb-3 font-semibold">Engineer Shashwat Jain</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, debitis at perspiciatis optio earum illum porro quisquam! Voluptatum ea incidunt, et ex facere obcaecati dicta.
            </p>
          </div>

          <div>
            <h2 className="text-lg mb-3 font-semibold">Subscribe to stay connected</h2>
            <input
              type="email"
              placeholder="Your E-Mail"
              required
              autoComplete="off"
              className="w-full p-2 mb-3 text-gray-800"
            />
            <button className="w-full bg-pink-500 text-white p-2 hover:bg-pink-400">
              SUBSCRIBE
            </button>
          </div>

          <div>
            <h2 className="text-lg mb-3 font-semibold">Follow US</h2>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <AiOutlineYoutube className="text-2xl" />
              <BsInstagram className="text-2xl" />
              <AiOutlineWhatsApp className="text-2xl" />
            </div>
          </div>

          <div>
            <h2 className="text-lg mb-3 font-semibold">Call Us</h2>
            <p>+91 942442XXXX</p>
          </div>
        </div>

        <hr className="border-white mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-center ml-0 md:ml-16">
          <div className="text-base mb-4 md:mb-0">
            @ {currentDate}/{currentMonth}/{currentYear} Shashwat.M.Jain. <br />
            All Rights Reserved
          </div>
          <div className="flex space-x-4 text-base flex-col md:flex-row mr-0 md:mr-16">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">TERMS & CONDITIONS</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
