import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-10 sticky" style={{zIndex:'10000'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-lg mb-4">
            Ready to get started?<br />
            Talk to us today
          </h2>
          <button className="w-28 h-14 bg-pink-600 text-white hover:bg-pink-500 transition duration-300">
            GET STARTED
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h2 className="text-xl mb-3">Engineer Shashwat Jain</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, debitis at perspiciatis optio earum illum porro quisquam! Voluptatum ea incidunt, et ex facere obcaecati dicta.
            </p>
          </div>

          <div>
            <h2 className="text-lg mb-5">Subscribe to stay connected</h2>
            <input type="email" placeholder="Your E-Mail" required autoComplete="off" className="w-full p-2 mb-5 text-gray-800"/>
            <button className="w-full bg-pink-600 text-white p-2">
              SUBSCRIBE
            </button>
          </div>

          <div>
            <h2 className="text-lg mb-3">Follow US</h2>
            <div className="flex space-x-4 mt-8">
              <i className="fa-brands fa-youtube fa-sm"></i> 
              <i className="fa-brands fa-instagram fa-sm"></i>
              <i className="fa-brands fa-whatsapp fa-sm"></i>
            </div>
          </div>

          <div>
            <h2 className="text-lg mb-3">Call Us</h2>
            <p>+91 942442XXXX</p>
          </div>
        </div>

        <hr className="border-gray-700 mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-center">
          <div className="text-base mb-4 md:mb-0">
            @ {new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()} Shashwat.M.Jain.
            <br />
            All Rights Reserved
          </div>
          <div className="flex space-x-4 text-base">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">TERMS & CONDITIONS</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
