import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { RiTimeFill } from "react-icons/ri";
import { GrFormSchedule } from "react-icons/gr";
import { RiArrowDownSLine } from "react-icons/ri";

function Hero() {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

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
              <div
                className={`bg-white flex items-center gap-4 px-4 border-b-2 ${
                  isInputFocused
                    ? "border-black transition duration-300 ease-out"
                    : "border-white transition duration-300 ease-in"
                }`}
              >
                <HiLocationMarker size={25} className="" />
                <input
                  type="text"
                  placeholder="Enter delivery address"
                  className=" md:pr-[17rem] mobile:pr-24 py-3 placeholder:font-semibold outline-none"
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                ></input>
              </div>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="flex items-center py-4 md:pl-4 md:pr-4 mobile:pl-4 mobile:pr-[0.89rem] outline-none bg-white text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setIsOpen(!isOpen)}
                  ><div className="flex items-center gap-2"><RiTimeFill size={20}/>
                    <span className="mr-2 font-semibold">Deliver now</span>
                    <RiArrowDownSLine className="h-5 w-5 md:ml-0 mobile:ml-44" aria-hidden="true" /></div>
                    
                  </button>
                </div>
                {isOpen && (
                  <div className="pb-3 origin-top-left absolute w-[12.5rem] shadow-lg bg-white">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <button
                        className="block px-4 py-3 text-black hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        role="menuitem"
                      ><div className="flex items-center gap-2">
                        <RiTimeFill size={20} className="bg-gray-200 rounded-full w-6 h-6 p-0.5"/>
                        <span className="mr-2 font-semibold">Deliver now</span></div>
                      </button>
                      <button
                        className="block px-4 py-3 text-black hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        role="menuitem"
                      ><div className="flex items-center gap-2">
                        <GrFormSchedule size={20} className="bg-gray-200 rounded-full w-6 h-6 p-0.5"/>
                        <span className="mr-2 font-semibold whitespace-nowrap">Schedule for later</span></div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <button className="bg-black text-white md:py-4 md:px-5 rounded-lg font-semibold mobile:py-3 px-[142px] whitespace-nowrap hover:bg-[#424649]">
                  Find Food
                </button>
              </div>
            </div>
            <div>
              <p className="font-medium text-sm">
                <a href="../signup" className="underline"
                >Sign In</a> for your recent addresses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
