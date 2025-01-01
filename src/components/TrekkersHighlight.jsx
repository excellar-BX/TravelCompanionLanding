import React from "react";
import { BiPlay, BiPlayCircle, BiSolidStar } from "react-icons/bi";

const TrekkersHighlight = () => {
  return (
    <div className="xl:mx-auto lg-20 mx-3  max-w-[1500px] sm:mx-10 pb-20" id="latest" >
      <div className=" text-4xl tracking-wider font-bold ">
        Trekker's Highlights
      </div>
      <div className="grid gap-y-5 sm:grid-cols-2 xl:grid-cols-3 ">
        <div>
          <div className="flex gap-x-3 mt-9 mb-5 items-center ">
            <div className=" w-14 h-14  ">
              <img
                src={require("../assets/profile.png")}
                className="rounded-full w-full h-full object-cover "
                alt=""
              />
            </div>
            <div className="about">
              <div className="text-xl font-semibold">Maria Angelica</div>
              <div className=" text-sm ">Manila, Philippines</div>
            </div>
          </div>
          <div className=" text-web-orange-500 flex gap-x-2 ">
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
            <BiSolidStar />
          </div>
          <div className="description">
            <div className=" text-lg font-semibold ">
              An Unforgettable Journey Through Turkey
            </div>
            <div className=" text-sm ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
              corporis fugiat? Atque ipsa minus repudiandae itaque nihil
              debitis, odio odit laborum sit quod quaerat ullam corporis veniam,
              laboriosam corrupti quos debitis, odio odit laborum sit quod
              quaerat ullam corporis veniam, laboriosam corrupti quos debitis,
              odio odit laborum sit quod quaerat ullam corporis veniam,
              laboriosam corrupti quos.
            </div>
          </div>
        </div>
        <div className="sm:w-[80%] mx-auto ">
          <img
            src={require("../assets/travel.png")}
            className=" sm:mx-5 h-full object-cover rounded-3xl " 
            alt=""
          />
        </div>
        <div className="lg:w-[60%] w-full " >
          <div className=" relative " >
            <video className="rounded-3xl object-cover w-full xl:h-52 "  loop autoPlay src={require("../assets/sunset.mp4")} alt="" />
             </div>
          <div className=" text-lg font-semibold my-4 " >Sunset from Bosphorus Yatch Cruise</div>
          <div className="sm:my-20 mx-auto border-2 w-fit px-6 py-2 rounded-full " > See more highlights</div>
        </div>
      </div>
    </div>
  );
};

export default TrekkersHighlight;
