import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";

const LatestStories = () => {
  return (
    <div className="xl:mx-auto lg-20 mx-3  max-w-[1500px] sm:mx-10 pb-20 my-10 relative " id="blog" >
      <div className="" >
        <span className=" text-4xl tracking-wider font-bold ">
          Latest Stories
        </span>

        <div className="more-articles-btn absolute bottom-2 h-fit sm:top-0 border-2 right-16 sm:right-0 px-6 sm:my-4 sm:mb-0 py-2 rounded-full ">
          Read More Articles
        </div>
      </div>
      <div className="stories flex flex-col lg:flex-row w-full gap-5 sm:gap-20  sm:my-10 ">
        <div className="lg:w-[60%] w-full ">
          <div>
            <img
              src={require("../assets/eating.png")}
              className="object-cover rounded-3xl my-5 w-full sm:h-96  "
              alt=""
            />
          </div>
          <div className="details">
            <div className="category text-blue-stone-500 font-bold my-2 ">
              Food and drink
            </div>
            <div className="title text-xl my-1 font-semibold ">
              Los Angeles food & drink guide: 10 things to try in Los Angeles,
              California
            </div>
            <div className="date_details flex items-center text-sm ">
              <div className="date  ">Aug 19 2024</div>
              <div className="seperator w-1 mx-1 h-1 rounded-full bg-black "></div>
              <div className="time">4 min read</div>
            </div>
            <div className="description my-1 text-sm ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              rerum aliquam officiis recusandae earum sed voluptatibus dolorem
              exercita
            </div>
          </div>
        </div>
        <div className=" flex flex-col sm:gap-10 ">
          <div className="flex sm:flex-row flex-col my-4 gap-4 items-start sm:items-start sm:gap-10 ">
            <div className=' ' >
              <img
                src={require("../assets/clothes.png")}
                className="sm:w-60 w-full h-fit object-cover  sm:h-40 rounded-3xl "
                alt=""
              />
            </div>
            <div className="details">
              <div className="category text-blue-stone-500 font-bold my-2 ">
                Shopping
              </div>
              <div className="title text-xl my-1 font-semibold ">
                15 South London Markets You'll love: Best Markets in South London
              </div>
              <div className="date_details flex items-center text-sm ">
                <div className="date  ">Aug 15 2024</div>
                <div className="seperator w-1 mx-1 h-1 rounded-full bg-black "></div>
                <div className="time">6 min read</div>
              </div>
            </div>
          </div>{" "}
          <div className="flex sm:flex-row flex-col my-4 gap-4 items-center sm:items-start sm:gap-10 ">
            <div>
              <img
                src={require("../assets/beach.png")}
                className="sm:w-60 w-full h-fit object-cover  sm:h-40 rounded-3xl"
                alt=""
              />
            </div>
            <div className="details">
              <div className="category text-blue-stone-500 font-bold my-2 ">
                Hotels
              </div>
              <div className="title text-xl my-1 font-semibold ">
                10 incredible hotels around the World you can book with points in 2024
              </div>
              <div className="date_details flex items-center text-sm ">
                <div className="date  ">Aug 10 2024</div>
                <div className="seperator w-1 mx-1 h-1 rounded-full bg-black "></div>
                <div className="time">5 min read</div>
              </div>
            </div>
          </div>{" "}
          <div className="flex sm:flex-row flex-col my-4 gap-4 items-center sm:items-start sm:gap-10 ">
            <div>
              <img
                src={require("../assets/night.png")}
                className="sm:w-60 w-full h-fit object-cover  sm:h-40 rounded-3xl "
                alt=""
              />
            </div>
            <div className="details">
              <div className="category text-blue-stone-500 font-bold my-2 ">
                 Travel Budget
              </div>
              <div className="title text-xl my-1 font-semibold ">
                Visiting Chicago on a Budget: Affordable Eats and Attraction Deals
              </div>
              <div className="date_details flex items-center text-sm ">
                <div className="date  ">Aug 02 2024</div>
                <div className="seperator w-1 mx-1 h-1 rounded-full bg-black "></div>
                <div className="time">8 min read</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestStories;
