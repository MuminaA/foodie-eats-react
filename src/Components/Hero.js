import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { RiTimeFill } from "react-icons/ri";
import { GrFormSchedule } from "react-icons/gr";

function Hero() {
  return (
    <div className="bg-hero-background bg-cover h-screen bg-center">
    <div className="w-[95%] mx-auto">
      <div className="flex items-center absolute md:top-1/2 mobile:top-[30%] transform -translate-y-1/2 w-[95%]">
        <div className="flex flex-col md:gap-7 mobile:gap-4">
          <div>
            <h1 className="md:text-[3.2rem] mobile:text-[2.2rem] font-bold">
              Order food to your door
            </h1>
          </div>
          <div className="flex md:flex-row mobile:flex-col gap-2">
            <div className="bg-white flex items-center gap-4 py-1 px-4">
              <HiLocationMarker size={25} className="" />
              <input
                type="text"
                placeholder="Enter delivery address"
                className=" md:pr-[17rem] mobile:pr-24 py-3 placeholder:font-semibold outline-none"
              ></input>
            </div>
            <div>
              <select className="py-4 md:pl-4 md:pr-4 mobile:pl-4 mobile:pr-[12.1rem] outline-none">
                <option value="">
                  <RiTimeFill size={30}/>
                  Deliver now
                </option>
                <option value="">
                <GrFormSchedule />
                Schedule for later</option>
              </select>
            </div>
            <div>
              <button className="bg-black text-white md:py-4 md:px-5 rounded-lg font-semibold mobile:py-3 px-[142px] whitespace-nowrap hover:bg-[#424649]">
                Find Food
              </button>
            </div>
          </div>
          <div>
            <p className="font-medium text-sm">
              <a href="#" className="underline">
                Sign In
              </a>{" "}
              for your recent addresses
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
