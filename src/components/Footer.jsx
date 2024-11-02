import React from "react";
import {
  BiGlobe,
  BiGlobeAlt,
  BiLogoFacebook,
  BiLogoFacebookSquare,
  BiLogoInstagram,
  BiLogoInstagramAlt,
  BiLogoTwitter,
  BiLogoYoutube,
  BiSolidPlane,
} from "react-icons/bi";
import { a } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className=" grid grid-row-5 gap-y-5 sm:text-left text-center sm:grid-cols-5
     lg:mx-40 mx-5 pb-20 "
    >
      <div>
        <div className="flex flex-row mb-6 ">
          <div className=" text-au-chico-800 text-2xl mx-2 rotate-45 ">
            <BiSolidPlane />
          </div>
          <div className="text-xl font-bold ">Globe Trekker</div>
        </div>
        <div className="socials block ">
          <div className="font-semibold text-xl my-5 text-left ">Follow us on</div>
          <div className="flex ">
            <span className="hover:bg-au-chico-700 shadow-xl bg-black text-white rounded-lg p-1 text-xl  mx-1 ">
              <BiLogoFacebook />
            </span>
            <span className="hover:bg-au-chico-700 shadow-xl  bg-black text-white rounded-lg  p-1 text-xl mx-1  ">
              <BiLogoInstagram />
            </span>{" "}
            <span className="hover:bg-au-chico-700 shadow-xl  p-1 text-xl  bg-black text-white rounded-lg  mx-1  ">
              <BiLogoTwitter />
            </span>
            <span className="hover:bg-au-chico-700 shadow-xl  p-1 text-xl  bg-black text-white rounded-lg  mx-1  ">
              <BiLogoYoutube />
            </span>{" "}
            <span className="hover:bg-au-chico-700 shadow-xl  p-1 text-xl  bg-black text-white rounded-lg  mx-1  ">
              <BiGlobe />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center ">
        <span className="head font-semibold  ">About us</span>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            About Global Trekker
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Contact Us
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Terms and Conditions
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Privacy Policy
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Work For Us
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            WriteFor Us
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Cookie Settings
          </span>
        </a>
      </div><div className="flex flex-col justify-center ">
        <span className="head font-semibold  ">Travel Interest</span>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Family Vacation
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
           Honeymoon
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Adventure
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Art and Culture
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Wildlife and Nature
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Travel on a Budget
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Road Trips
          </span>
        </a>
      </div><div className="flex flex-col justify-center ">
        <span className="head font-semibold  ">Top Destinations</span>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Paris
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Italy
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            London
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            New York City
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Tokyo
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Los Angeles
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Scotland
          </span>
        </a>
      </div><div className="flex flex-col  ">
        <span className="head font-semibold  ">
        Guidebook Shop</span>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Destinations Guide
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Non-English Guides
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Shopping Guides
          </span>
        </a>
        <a href="/" className="my-1" >
          <span className="my-1 text-sm hover:text-au-chico-700 cursor-pointer  ">
            Kid's Travel Guides
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
