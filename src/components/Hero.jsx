import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row xl:mx-auto md:mb-20 lg-20 mx-3 gap-[100px] max-w-[1500px] sm:mx-10  pb-20  ">
      <div className=" w-full lg:w-[40%] sm:w-[80%]  ">
        <div className="lg:text-5xl text-4xl font-bold items-center leading-[50px] lg:leading-[70px] sm:mt-20 inline-block ">
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
        <div className="description lg:text-base text-sm mt-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsa
          inventore officia nobis placeat eligendi repudiandae ad quia,
          molestiae non, labore necessitatibus consequatur aliquam rerum
          reiciendis a. Cupiditate, modi esse?
        </div>
        <div className="btn bg-au-chico-700 w-fit sm:mx-0 mx-auto px-10 py-3 text-white rounded-full my-10 lg:my-5 ">
          Plan your trip
        </div>
      </div>
      <div className="md:w-[60%] w-full md:my-20 sm:my-5 relative " >
        <img
          src={require("../assets/map4.png")}
          className=" sm:scale-110 inline-block  "
          alt=""
        />
        <div className="absolute w-full inset-0 flex items-center gap-x-3 sm:gap-x-10 md:justify-end " >
          {" "}
          <img
            className="w-40 sm:w-56 h-52 sm:h-80 rounded-3xl object-cover "
            src={require("../assets/hero1.png")}
            alt=""
          />
          <div className=" flex flex-col gap-y-10  ">
            <img
              className="w-40 sm:w-56 h-44 sm:h-72 rounded-3xl object-cover "
              src={require("../assets/hero2.png")}
              alt=""
            />
            <img
              className="w-40 sm:w-56 h-32 sm:h-52 rounded-3xl object-cover "
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
