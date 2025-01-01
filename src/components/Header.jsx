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
    <div className="flex flex-row items-center text-sm sm:text-base py-10 justify-between lg:justify-start  z-[99] ">
      <div className="flex flex-row sm:mx-10 md:w-[23%] justify-center items-center my-3 ">
        <div className=" text-au-chico-800 text-3xl rotate-45 ">
          <BiSolidPlane />
        </div>
        <div className="text-xl font-bold " >Globe Trekker</div>
      </div>
      <nav>
          <OutsideClickHandler onOutsideClick={()=> setNavOpen(false)} >
        <ul className={`flex-col justify-center flex-1 lg:flex ${navOpen ? "scale-100" : "scale-0" } lg:scale-100 lg:block z-[99] transition-all ease-in-out duration-500 lg:w-fit w-52 rounded-2xl lg:static absolute lg:right-0 lg:top-0 top-20 right-6 lg:flex-row  text-lg bg-au-chico-500 py-4 lg:bg-opacity-0  lg:text-xl my-3 lg:font-semibold `}>
          {Nav.map((data, index) => (
            <div className=" px-6 my-2 border-l-white hover:border-l-[6px] sm:border-none  h-8   " >
              <Link
                activeClass="active "
                smooth={true}
                spy={true}
                key={index}
                to={data.route}
              >
                <li className="text-white lg:text-black cursor-pointer ">{data.name}</li>
              </Link>
            </div>
          ))}
      <div className="search/signin bg-white h-fit text-lg rounded-full flex justify-end scale-[90%] lg:scale-100 flex-row bg-opacity-20 items-center ">
        <BiSearch className="" />
        <input type="text" className="bg-opacity-0  outline-none border-none bg-black w-[40%]  placeholder:text-black mx-2 " placeholder="search" />
        <div className="btn bg-black text-white text-sm lg:text-lg p-2 w-[40%] text-center lg:px-8 py-2 rounded-full ">sign in</div>
      </div>
        </ul>
        </OutsideClickHandler>
      </nav>
      {navOpen? <BiX className="text-4xl lg:hidden w-32 "  onClick={()=> setNavOpen(false)} /> : <BiMenuAltRight className="text-4xl w-32 lg:hidden " onClick={()=> setNavOpen(true)}  />}
    </div>

  );
};

export default Header;
