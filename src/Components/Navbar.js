import React, { useEffect, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";
import logo from "../assets/foodie.png";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import { useCallback } from "react";

function Navbar() {
  // change navbar color after scroll
  const [color, setColor] = useState(false);

  // Use media query to check if screen size is less than or equal to 375px
  const isMobile = useMediaQuery({ maxWidth: 375 });

  const changeColor = () => {
    if (!isMobile && window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  // delivery input on navbar
  const [input, setInput] = useState(false);

  const changeNav = useCallback(() => {
    if (
      (!isMobile && window.scrollY >= 470) ||
      (isMobile && window.scrollY >= 180)
    ) {
      setInput(true);
    } else {
      setInput(false);
    }
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, [changeNav]);

  // setting route navigation
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  // stop page scroll
  useEffect(() => {
    if (nav) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // Prevent scrolling on mount
      document.body.style.overflow = "hidden";
      // Re-enable scrolling when component unmounts
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [nav]);

  // state variable to keep track of whether navbar should be fixed or not
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile && window.scrollY >= 180) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <div className="">
      {/* Navbar */}
      <nav
        className={`md:py-7 z-10 mobile:py-4 md:fixed font-Mulish w-full duration-200 ease ${
          color ? "bg-white shadow-3xl" : ""
        } ${fixed ? "fixed top-0 bg-white shadow-3xl mobile:py-0" : "absolute"}`}
      >
        <div className="flex justify-between w-[95%] mx-auto">
          <div className="flex md:gap-8 mobile:gap-5 items-center">
            <div className={fixed ? "hidden" : ""}>
              <TfiMenu
                onClick={() => setNav(!nav)}
                className="md:text-[1.3rem] cursor-pointer"
              />
            </div>
            <div
              className={`md:text-3xl mobile:text-2xl gap-[.3rem] font-medium flex ${
                fixed ? "hidden" : ""
              }`}
            >
              Foodie<span className="font-extra-bolded">Eats</span>
            </div>
            {input && (
              
                <div
                  className={`bg-gray-200 flex items-center gap-4 px-4 md:ml-16 border-b-2 md:my-0 mobile:my-3 ${
                    isInputFocused
                      ? "border-black transition duration-300 ease-out"
                      : "border-gray-200 transition duration-300 ease-in"
                  }`}
                >
                  <HiLocationMarker size={25} className="" />
                  <input
                    type="text"
                    placeholder="Enter delivery address"
                    className="md:pr-[28rem] mobile:pr-[5.5rem] py-3 placeholder:font-semibold outline-none bg-gray-200"
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                  ></input>
                </div>
              
            )}
          </div>
          <div
            className={`flex md:gap-3 mobile:gap-3 ${fixed ? "hidden" : ""}`}
          >
            <div>
              <button
                type="button"
                className="bg-white md:px-3 md:py-3 mobile:px-2 mobile:py-2 flex items-center gap-1 rounded-3xl font-semibold hover:bg-[#d3d4d5] shadow-4xl"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                <FaUser className="md:text-xl" />{" "}
                <span className="md:block mobile:hidden ">Log In</span>
              </button>{" "}
            </div>
            <div>
              <button
                type="button"
                className="bg-black md:text-base md:px-3 md:py-3 mobile:px-2 mobile:py-2 mobile:text-xs flex items-center rounded-3xl text-white font-semibold hover:bg-[#424649]"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        onClick={() => setNav(!nav)}
        className={
          nav ? "bg-black/80 fixed w-full h-screen z-10 top-0 left-0" : "hidden"
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
              <button
                className="bg-black text-white w-full py-4 rounded-md font-bold text-lg hover:bg-[#424649]"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
              </button>
            </div>
            <div>
              <button
                className="bg-gray-200 text-black w-full py-4 rounded-md font-bold text-lg hover:bg-[#d3d4d5]"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Log in
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3 font-bold text-sm text-gray-700 cursor-pointer">
            <p>
              Create a business account
            </p>
            <p>
              Add your restaurant
            </p>
            <p>
              Sign up to deliver
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
  );
}

export default Navbar;
