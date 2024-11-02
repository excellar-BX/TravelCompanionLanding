import React, { useState } from "react";
import { BiHeart, BiMenuAltRight, BiSearch, BiSolidPlane, BiX } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";
import { Link } from "react-scroll";

const Nav = [
  { name: "Destination", route: "destination" },
  { name: "Inspiration", route: "latest" },
  { name: "Travel Plan", route: "travelplan" },
  { name: "Shop", route: "newsletter" },
  { name: "Blog", route: "blog" },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div className="flex flex-row justify-evenly items-center py-10 z-[99] ">
      <div className="flex flex-row items-center my-3 ">
        <div className=" text-au-chico-800 text-3xl rotate-45 ">
          <BiSolidPlane />
        </div>
        <div className="text-xl font-bold " >Globe Trekker</div>
      </div>
      <nav>
        <OutsideClickHandler onOutsideClick={()=> setNavOpen(false)} >
        <ul className={`flex-col sm:flex ${navOpen ? "scale-100" : "scale-0" } sm:scale-100 z-[99] transition-all ease-in-out duration-500 sm:w-fit w-52 rounded-2xl absolute sm:right-0 sm:top-0 top-20 right-6 sm:relative sm:flex-row text-xl bg-au-chico-500 py-4 sm:bg-none  sm:text-sm my-3 sm:font-semibold `}>
          {Nav.map((data, index) => (
            <div className=" px-6 my-2 border-l-white hover:border-l-[6px] sm:border-none  h-8   " >
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                key={index}
                to={data.route}
              >
                <li className="text-white cursor-pointer ">{data.name}</li>
              </Link>
            </div>
          ))}
        </ul>
        </OutsideClickHandler>
      </nav>
      <div className="search/signin bg-white h-fit px-3 text-lg rounded-full flex flex-row bg-opacity-20 items-center ">
        <BiSearch className="sm:block hidden" />
        <input type="text" className="bg-opacity-0 hidden md:block outline-none border-none bg-black sm:w-fit w-3 placeholder:text-black mx-2 " placeholder="search" />
        <div className="btn bg-black text-white text-sm sm:text-lg px-4 sm:px-8 py-2 rounded-full ">sign in</div>
      </div>
      <OutsideClickHandler onOutsideClick={()=> setNavOpen(false)} >
      {navOpen? <BiX className="text-4xl sm:hidden "  onClick={()=> setNavOpen(false)} /> : <BiMenuAltRight className="text-4xl sm:hidden " onClick={()=> setNavOpen(true)}  />}
        </OutsideClickHandler>
    </div>

  );
};

export default Header;
