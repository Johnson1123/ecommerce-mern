import React from "react";
import {
  footerProductLinks,
  footerSupportLinks,
  footercompanyLinks,
} from "../../static/data";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-[#000] text-white">
      <div className="md:flex items-center justify-between px-4 py-5 bg-green-900 sm:px-12 mb-12">
        <h1 className="text-2xl lg:text-3xl font-bold  md:w-2/5 text-center mb-5 md:mb-0 md:text-left">
          <span className="text-[#56d879]">Subcribe </span>
          <span className="">
            us to get news <br /> events and offers
          </span>
        </h1>
        <div className="md:flex">
          <input
            type="text"
            name=""
            id=""
            className=" w-full md:mr-1  mb-5 md:mb-0 border-2 border-green-600 rounded-lg h-[50px] text-black px-2 py-2 focus:outline-none"
          />
          <button className="rounded-md bg-green-600 py-3 md:py-2 px-6 text-md font-bold cursor-pointer hover:bg-teal-500 md:w-auto w-full ">
            Submit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="https://johnsononifade.netlify.app/static/media/favicon.cafee00063933ef2ccb5.png"
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
            className="w-[40px]"
          />
          <br />
          <p> discover your next shopping adventure. .</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2020 Becodemy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
