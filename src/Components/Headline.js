import React from "react";
import employees from "../assets/Bustling-food-market.png"
import cook from "../assets/cook.png";
import delivery from '../assets/delivery.png';

function Headline() {
  return (
    <div className="flex md:flex-row mobile:flex-col gap-6 py-16 w-[95%] mx-auto">
      <div className="flex flex-col gap-2">
        <img src={employees} alt='employees' className="object-cover md:h-80 w-[85rem]"></img>
        <p className="md:text-3xl mobile:text-xl font-semibold">Feed your employees</p>
        <a href='#' className="underline font-medium mobile:text-sm">Create a business account</a>
      </div>
      <div className="flex flex-col gap-2">
        <img src={cook} alt='cooker' className="object-cover md:h-80 w-[85rem]"></img>
        <p className="md:text-3xl mobile:text-xl font-semibold">Your restaurant, delivered</p>
        <a href='#' className="underline font-medium mobile:text-sm">Add your restaurant</a>
      </div>
      <div className="flex flex-col gap-2">
        <img src={delivery} alt='deliver' className="object-cover md:h-80 w-[85rem]"></img>
        <p className="md:text-3xl mobile:text-xl font-semibold">Deliver with Uber Eats</p>
        <a href='#' className="underline font-medium mobile:text-sm">Sign up to deliver</a>
      </div>
    </div>
  );
}

export default Headline;
