import React from 'react';
import { FaTwitter, FaYoutube, FaTelegramPlane } from 'react-icons/fa';
import { FaApple, FaGooglePlay } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='mb-16'>
      <div className="container mb-16">
        <div className="grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-4">
          <div className="flex flex-col gap-10 ">
            <div className="flex items-center gap-4">
              <img src="/images/icon.png" alt="icon" width={40} />
              <div className="flex flex-col">
                <h2>Temp Number</h2>
                <p className="text-gray-500 text-[10px]">receive sms online</p>
              </div>
            </div>
            <div className="text-gray-500 text-[12px] text-justify">
              Temp Number is a service offering temporary second phone numbers.
              These numbers let you receive SMS online without disclosing your
              actual phone number and protect your privacy.
            </div>
            <div className="flex gap-4">
              <div className="bg-gray-100 rounded-full size-[40px] flex justify-center items-center text-gray-500 hover:bg-orange-500 hover:text-white transition">
                <FaTwitter className="text-xl" />
              </div>
              <div className="bg-gray-100 rounded-full size-[40px] flex justify-center items-center text-gray-500 hover:bg-orange-500 hover:text-white transition">
                <FaYoutube className="text-xl" />
              </div>
              <div className="bg-gray-100 rounded-full size-[40px] flex justify-center items-center text-gray-500 hover:bg-orange-500 hover:text-white transition">
                <FaTelegramPlane className="text-xl" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Products</h2>
            <ul className="list-none text-gray-500 flex flex-col gap-4 cursor-pointer">
              <li className="hover:text-orange-500 transition">Features</li>
              <li className="hover:text-orange-500 transition">How it works</li>
              <li className="hover:text-orange-500 transition">
                RealSim vs Virtual
              </li>
              <li className="hover:text-orange-500 transition">Use Case</li>
              <li className="hover:text-orange-500 transition">Enterprise</li>
              <li className="hover:text-orange-500 transition">
                Customer Stories
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Resources</h2>
            <ul className="list-none text-gray-500 flex flex-col gap-4 cursor-pointer">
              <li className="hover:text-orange-500 transition">Blog</li>
              <li className="hover:text-orange-500 transition">FAQ</li>
              <li className="hover:text-orange-500 transition">Download</li>
              <li className="hover:text-orange-500 transition">Help Center</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">General</h2>
            <ul className="list-none text-gray-500 flex flex-col gap-4 cursor-pointer">
              <li className="hover:text-orange-500 transition">
                Affiliate Program
              </li>
              <li className="hover:text-orange-500 transition">Partnership</li>
              <li className="hover:text-orange-500 transition">API</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Downloads</h2>
            <div className="flex items-center gap-2 bg-black text-white w-[160px] p-2 rounded-lg">
              <FaApple className="text-3xl" />
              <div className="flex flex-col">
                <p className="text-[10px]">Download on the</p>
                <p>App Store</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-black text-white w-[160px] p-2 rounded-lg">
              <FaGooglePlay className="text-3xl" />
              <div className="flex flex-col">
                <p className="text-[10px]">Get it on</p>
                <p>Google Play</p>
              </div>
            </div>
            <ul className="list-none text-gray-500 flex flex-col gap-4 cursor-pointer">
              <li className="hover:text-orange-500 transition">
                Terms of Service
              </li>
              <li className="hover:text-orange-500 transition">
                Privacy Policy
              </li>
              <li className="hover:text-orange-500 transition">Contact us</li>
              <li className="hover:text-orange-500 transition">
                Email Generator
              </li>
              <li className="hover:text-orange-500 transition">
                10 Minute Mail
              </li>
              <li className="hover:text-orange-500 transition">
                What Is My Number
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container bg-gray-100 text-gray-500 p-8 px-12 text-[13px] text-center rounded-3xl">
        This site is not affiliated with any web application or mobile services
        listed. The logos, mentions, and/or marks appearing on this page for the
        various web application or mobile services are for reference only, and
        are the service marks and property of the official services themselves.
      </div>
    </div>
  );
};

export default Footer;
