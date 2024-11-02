import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row lg:mx-40 pb-20  ">
      <div className=" sm:w-[30%] ">
        <div className="text-5xl font-bold items-center leading-[70px] sm:mt-20 inline-block ">
          <span>
            Discover the World's{" "}
            <span className="mx-3 relative inline-block ">
              <span className=" text-au-chico-700 ">Hidden</span>
              <span>
                <img
                  src={require("../assets/dash.png")}
                  className="absolute object-top left-0 top-full h-auto w-full scale-125 "
                  alt=""
                  srcset=""
                />
              </span>
            </span>
            Wonders
          </span>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa
          inventore officia nobis placeat eligendi repudiandae ad quia,
          molestiae non, labore necessitatibus consequatur aliquam rerum
          reiciendis a. Cupiditate, modi esse?
        </div>
        <div className="btn bg-au-chico-700 inline-block px-10 py-3 text-white rounded-full my-5 ">
          Plan your trip
        </div>
      </div>
      <div className="sm:w-[60%] my-20 sm:my-0 relative " >
        <img
          src={require("../assets/map4.png")}
          className=" sm:scale-110 inline-block  "
          alt=""
        />
        <div className="absolute w-full inset-0 flex items-center gap-x-10 justify-end " >
          {" "}
          <img
            className="w-40 sm:w-56 h-52 sm:h-80 rounded-3xl object-cover "
            src={require("../assets/hero1.png")}
            alt=""
          />
          <div className=" flex flex-col gap-y-10  ">
            <img
              className="w-40 sm:w-56 h-40 sm:h-72 rounded-3xl object-cover "
              src={require("../assets/hero2.png")}
              alt=""
            />
            <img
              className="w-40 sm:w-56 h-28 sm:h-52 rounded-3xl object-cover "
              src={require("../assets/hero3.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
