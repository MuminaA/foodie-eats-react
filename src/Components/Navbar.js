import React, { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";
import logo from "../assets/foodie.png";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="bg-hero-background bg-cover h-screen bg-center font-Mulish">
      <div className="w-[95%] mx-auto">
        {/* Navbar */}
        <nav className="w-full flex justify-between items-center py-7">
          <div className="flex md:gap-8 mobile:gap-5 items-center">
            <div>
              <TfiMenu
                onClick={() => setNav(!nav)}
                className="md:text-[1.3rem] cursor-pointer"
              />
            </div>
            <div className="md:text-3xl mobile:text-2xl gap-[.3rem] font-medium flex">
              Foodie<span className="font-extra-bolded">Eats</span>
            </div>
          </div>

          <div className="flex md:gap-1 mobile:gap-3">
            <div>
              <button
                type="button"
                className="bg-white md:px-3 md:py-3 mobile:px-2 mobile:py-2 flex items-center gap-1 rounded-3xl font-semibold hover:bg-[#d3d4d5]"
                onClick={() => {navigate('/signup')}}
              >
                <FaUser className="md:text-xl" />{" "}
                <span className="md:block mobile:hidden ">Log In</span>
              </button>{" "}
            </div>
            <div>
              <button
                type="button"
                className="bg-black md:text-base md:px-3 md:py-3 mobile:px-2 mobile:py-2 mobile:text-xs flex items-center rounded-3xl text-white font-semibold hover:bg-[#424649]"
                onClick={() => {navigate('/signup')}}
              >
                Sign up
              </button>
            </div>
          </div>
        </nav>

        <div
          onClick={() => setNav(!nav)}
          className={
            nav
              ? "bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
              : "hidden"
          }
        ></div>

        <div
          className={`bg-white fixed w-[300px] h-screen z-10 top-0 left-0 p-6 flex flex-col justify-between ease-in-out duration-500 ${
            nav ? "translate-x-0 " : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div>
                <button className="bg-black text-white w-full py-4 rounded-md font-bold text-lg hover:bg-[#424649]"
                onClick={() => {navigate('/signup')}}>
                  Sign up
                </button>
              </div>
              <div>
                <button className="bg-gray-200 text-black w-full py-4 rounded-md font-bold text-lg hover:bg-[#d3d4d5]"
                onClick={() => {navigate('/signup')}}>
                  Log in
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3 font-bold text-sm text-gray-700">
              <p>
                <a href="#">Create a business account</a>
              </p>
              <p>
                <a href="#">Add your restaurant</a>
              </p>
              <p>
                <a href="#">Sign up to deliver</a>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-10">
            <div className="flex gap-3 items-center">
              <div>
                <img src={logo} alt="logo" className="rounded-xl w-[4.5rem]" />
              </div>
              <p className="font-semibold font-sans leading-5">
                There's more to love in the app.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-200 flex items-center gap-2 rounded-3xl p-2 font-semibold hover:bg-[#d3d4d5]">
                <AiFillApple />
                iPhone
              </button>
              <button className="bg-gray-200 flex items-center gap-2 rounded-3xl p-2 font-semibold hover:bg-[#d3d4d5]">
                <AiFillAndroid />
                Android
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
