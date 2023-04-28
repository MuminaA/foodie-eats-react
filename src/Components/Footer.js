import React from "react";
import apple from "../assets/app-store (1).svg";
import google from "../assets/google-play.png";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { IoLanguage } from "react-icons/io5";

function Footer() {
  return (
    <div>
      <hr className="mb-16" />
      <div className="w-[95%] mx-auto flex md:flex-row flex-col mobile:gap-12 justify-between">
        <div className="flex flex-col md:gap-36 gap-10 flex-2">
          <p className="md:text-3xl mobile:text-2xl gap-[.3rem] flex font-medium">
            Foodie <span className="font-bold">Eats</span>
          </p>
          <div className="flex gap-4">
            <img src={apple} alt="apple store" className="w-[135px] cursor-pointer"></img>
            <img src={google} alt="google play" className="w-[135px] cursor-pointer"></img>
          </div>
        </div>
        <div className="list-none flex-1">
          <ul className="flex flex-col gap-4">
            <li className="hover:underline cursor-pointer">Get Help</li>
            <li className="hover:underline cursor-pointer">Buy gift cards</li>
            <li className="hover:underline cursor-pointer">
              Add your restaurant
            </li>
            <li className="hover:underline cursor-pointer">
              Sign up to deliver
            </li>
            <li className="hover:underline cursor-pointer">
              Create a business account
            </li>
            <li className="hover:underline cursor-pointer">Promotions</li>
          </ul>
        </div>
        <div className="list-none flex-1">
          <ul className="flex flex-col gap-4">
            <li className="hover:underline cursor-pointer">
              Restaurants near me
            </li>
            <li className="hover:underline cursor-pointer">View all cities</li>
            <li className="hover:underline cursor-pointer">
              View all countries
            </li>
            <li className="hover:underline cursor-pointer">Pickup near me</li>
            <li className="hover:underline cursor-pointer">
              About Foodie Eats
            </li>
            <li className="hover:underline cursor-pointer flex items-center gap-1">
              <IoLanguage size={17} />
              English
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-[95%] mx-auto my-10 opacity-40" />
      <div className="w-[95%] mx-auto pb-24">
        <div className="flex md:flex-row mobile:flex-col mobile:gap-6 justify-between pb-3">
          <div>
            <ul className="flex gap-4">
              <li className="cursor-pointer">
                
                  <AiFillFacebook size={20} />
                
              </li>
              <li className="cursor-pointer">
                
                  <AiOutlineTwitter size={20} />
                
              </li>
              <li className="cursor-pointer">
                
                  <AiOutlineInstagram size={20} />
                
              </li>
            </ul>
          </div>
          <div className="flex md:flex-row mobile:flex-col md:gap-9 mobile:gap-4 text-[.9rem]">
            <p className="hover:underline cursor-pointer">
              Privacy Policy
            </p>
            <p className="hover:underline cursor-pointer">
              Terms
            </p>
            <p className="hover:underline cursor-pointer">
              Pricing
            </p>
            <p className="hover:underline cursor-pointer">
              Do not sell or share my personal information
            </p>
          </div>
        </div>
        <div className="flex md:flex-row mobile:flex-col justify-end md:gap-9 mobile:gap-4 text-[.9rem]">
          <p>
            This is a protected by reCAPTCHA and the{" "}
            <span className="hover:underline cursor-pointer">
              Google Privacy Policy
            </span>{" "}
            and{" "}
            <span className="hover:underline cursor-pointer">
              Terms of Service
            </span>{" "}
            apply
          </p>
          <p>&copy;2023 Foodie Technologies Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
