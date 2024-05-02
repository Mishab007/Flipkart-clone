import React from "react";
import TopOffers from "../Image/Top-offers.png";
import Mobile from "../Image/mobile.png";
import Electronics from "../Image/electronics.png";
import Tv from "../Image/appliances.png";
import Fashion from "../Image/fashion.png";
import Bueaty from "../Image/bueaty.png";
import Home from "../Image/Home.png";
import Furniture from "../Image/furniture.png";
import Flight from "../Image/flights.png";
import Grocery from "../Image/grocery.png";
import Banner01 from "../Image/Banner01.png";
import Banner02 from "../Image/Banner02.png";
import Banner03 from "../Image/Banner03.png";
import Banner04 from "../Image/Banner04.png";

function Offerbar() {
  return (
    <div className="h-96 min-w-ful flex flex-col justify-center items-center gap-2 ">
      <div className="h-24  w-10/12 bg-white flex items-center justify-evenly px-28">
        <div className="h-20 w-32 bg-white flex flex-col items-center">
          <img src={TopOffers} alt="" />
          <p className="text-black font-bold bg-white">Top Offers</p>
        </div>
        <div className="h-20 w-40 bg-white flex flex-col items-center">
          <img src={Mobile} alt="" />
          <p className="text-black font-bold bg-white">Mobiles & Tablets</p>
        </div>
        <div className="h-20 w-32 bg-white flex flex-col items-center">
          <img src={Electronics} alt="" />
          <p className="text-black font-bold bg-white">Electronics</p>
        </div>
        <div className="h-20 w-40 bg-white flex flex-col items-center">
          <img src={Tv} alt="" />
          <p className="text-black font-bold bg-white">TV's & Appliances</p>
        </div>
        <div className="h-20 w-32 bg-white flex flex-col items-center">
          <img src={Fashion} alt="" />
          <p className="text-black font-bold bg-white">Fashion</p>
        </div>
        <div className="h-20 w-32 bg-white flex flex-col items-center">
          <img src={Bueaty} alt="" />
          <p className="text-black font-bold bg-white">Beuaty</p>
        </div>
        <div className="h-20 w-32 bg-white flex flex-col items-center">
          <img src={Home} alt="" />
          <p className="text-black font-bold bg-white">Home & Kitchen</p>
        </div>
        <div className="h-20 w-32 bg-white flex flex-col items-center">
          <img src={Furniture} alt="" />
          <p className="text-black font-bold bg-white">Furniture</p>
        </div>
        <div className="h-20 w-32 bg-white flex flex-col items-center">
          <img src={Flight} alt="" />
          <p className="text-black font-bold bg-white">Flights</p>
        </div>
        <div className="h-20 w-32 bg-white flex flex-col items-center">
          <img src={Grocery} alt="" />
          <p className="text-black font-bold bg-white">Grocery</p>
        </div>
      </div>

      <div className="h-4/6 w-10/12 ">
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          <div className="relative overflow-hidden rounded-lg md:h-72">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={Banner01}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={Banner02}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={Banner03}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={Banner04}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Offerbar;
