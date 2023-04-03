import React, { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";
import logo from "./assets/foodie.png";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false)

  return (
    <div className="bg-hero-background bg-cover h-screen bg-center font-Mulish relative">
      <div className="w-[95%] mx-auto">
        {/* Navbar */}
        <nav className="w-full flex justify-between items-center py-7">
          <div className="flex desktop:gap-8 mobile:gap-5 items-center">
            <div>
              <TfiMenu onClick={ () => setNav(!nav)}
              className="desktop:text-[1.3rem] cursor-pointer "/>
            </div>
            <div className="desktop:text-3xl mobile:text-xl gap-[.3rem] font-semi-bolded flex">
              Foodie<span className="font-extra-bolded">Eats</span>
            </div>
          </div>

          <div className="flex desktop:gap-1 mobile:gap-3">
            <div>
              <button
                type="button"
                className="bg-white desktop:px-3 desktop:py-3 mobile:px-2 mobile:py-2 flex items-center gap-1 rounded-3xl font-semibold"
              >
                <FaUser className="desktop:text-xl" />{" "}
                <span className="desktop:block mobile:hidden ">Log In</span>
              </button>
            </div>
            <div>
              <button
                type="button"
                className="bg-black desktop:text-base desktop:px-3 desktop:py-3 mobile:px-2 mobile:py-2 mobile:text-xs flex items-center rounded-3xl text-white font-semibold"
              >
                Sign up
              </button>
            </div>
          </div>
        </nav>

      <div onClick={() => setNav(!nav)}
      className={nav ? "bg-black/80 fixed w-full h-screen z-10 top-0 left-0" : "hidden"}></div>

      <div className={ `bg-white fixed w-[300px] h-screen z-10 top-0 left-0 p-6 flex flex-col justify-between ease-in-out duration-500 ${ nav ? "translate-x-0 " : "-translate-x-full"}`}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div>
                <button className="bg-black text-white w-full py-4 rounded-md font-bold text-lg">
                  Sign up
                </button>
              </div>
              <div>
                <button className="bg-gray-200 text-black w-full py-4 rounded-md font-bold text-lg">
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
              <p className="font-semibold font-sans leading-5">There's more to love in the app.</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-200 flex items-center gap-2 rounded-3xl p-2 font-semibold">
                <AiFillApple />
                iPhone
              </button>
              <button className="bg-gray-200 flex items-center gap-2 rounded-3xl p-2 font-semibold">
                <AiFillAndroid />
                Android
              </button>
            </div>
          </div>
        </div>

        {/* hero */}
        {/* <div className="bg-blue-600 flex items-center absolute bottom-0 top-0">
            <div>
              <div>
                <h1>Order food to your door</h1>
              </div>
              <div>
                <div>
                  <input type="text"></input>
                </div>
                <div>dropdow</div>
                <div>
                  <button>Find Food</button>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
}

export default Navbar;
