import React, { useState } from "react";
import { BiCaretDown, BiHeart } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const TopDestinations = () => {
  const destinations = [
    "Popular",
    "USA",
    "Europe",
    "Africa & Middle East",
    "America & The Pacific",
    "Canada",
    "Africa & Middle East",
    "America & The Pacific",
    "Canada",
  ];

  const destinationsCardInfo = [
    {name:"Golden Bridge, Ba Na Hills", location:"Vietnam", image_name:"bana_hills"},
    {name:"Dubrovnik", location:"Croatia", image_name:"dubrovnik"},
    {name:"Hot Air Balloon Cappadocia", location:"Turkey", image_name:"hot_air_balloon"},
    {name:"Acropolis of Athens", location:"Greece", image_name:"acropolis"},
    {name:"Eiffel Tower", location:"France", image_name:"eiffel"},
    {name:"Colosseum", location:"Italy", image_name:"colosseum"},
    {name:"Sydney Habour Bridge", location:"Australia", image_name:"habour"},
    {name:"Niagara Falls", location:"Canada", image_name:"niagara"},
  ]

  const [navOpen, setNavOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  const filteredDestinations =
    selectedCategory === "Popular"
      ? destinations
      : destinations.filter((destination) =>
          destination.includes(selectedCategory)
        );

  return (
    <div className="lg:mx-40 pb-20  " id="destination" >
      <span className="text-4xl font-bold ">Top Destinations</span>
      <div
        className={`destinations h-28 justify-around items-center ${
          navOpen ? "items-start" : "items-center"
        } my-8 flex `}
      >
       
       {destinations.slice(0, 6).map((data, index) => (
          <span
            key={index}
            onClick={() => setSelectedCategory(data)}
            className={` sm:block hidden cursor-pointer ${
              selectedCategory === data && "font-bold"
            } `}
          >
            {data} 
          </span>
        ))} 
        {destinations.slice(0, 1).map((data, index) => (
          <span
            key={index}
            onClick={() => setSelectedCategory(data)}
            className={`block sm:hidden cursor-pointer ${
              selectedCategory === data && "font-bold"
            } `}
          >
             <OutsideClickHandler onOutsideClick={() => setNavOpen(false)}>
            <span
              onClick={() => {
                setNavOpen(true);
              }}
              className="cursor-pointer text-xl flex items-center gap-x-2 "
            >
              {data}
              <BiCaretDown />
            </span>
          </OutsideClickHandler>
          </span>
        ))}
        <div>
          <OutsideClickHandler onOutsideClick={() => setNavOpen(false)}>
            <span
              onClick={() => {
                setNavOpen(true);
              }}
              className="cursor-pointer items-center sm:flex hidden gap-x-2 "
            >
              More
              <BiCaretDown />
              
            </span>
            <div
            className={`tooltip flex cursor-pointer absolute flex-col bg-au-chico-300 shadow-2xl  text-sm py-2 rounded-xl ${
              navOpen ? "flex" : "hidden"
            }  `}
          >
            <span className=" ">
              {destinations.slice(7).map((data, index) => (
                <span
                  key={index}
                  className=" flex-col w-32 my-0.5 sm:flex hidden hover:border-l-au-chico-800 justify-center hover:border-l-4 h-8 px-5 "
                >
                  {data}
                </span>
              ))}
            </span> 
            <span className=" ">
              {destinations.slice(2).map((data, index) => (
                <span
                  key={index}
                  className="flex flex-col w-32 sm:hidden text-lg leading-6 my-3 justify-center hover:border-l-au-chico-800 hover:border-l-4 px-2 h-8 "
                >
                  {data}
                </span>
              ))}
            </span>
          </div>
          </OutsideClickHandler>

         
        </div>
        <div className="more-destinations-btn border-2 px-6 py-2 rounded-full ">
          Explore all destinations
        </div>
      </div>
      <div className="destinations-cards flex px-5 overflow-x-auto gap-10 ">
        { destinationsCardInfo.map((data, index) =>(
            <div>
            <div className="w-60 " >
            <img
              src={require(`../assets/${data.image_name}.png`)}
              className="w-full h-80 rounded-3xl object-cover "
              alt=""
            />
            <div className="location font-semibold mt-2 text-lg ">{data.name}</div>
            <div className=" text-sm ">{data.location}</div>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default TopDestinations;
