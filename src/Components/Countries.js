import React from "react";

function Countries() {
  return (
    <div className="w-[95%] mx-auto">
      <div className="flex justify-between mb-7 items-end">
        <h2 className="md:text-4xl mobile:text-2xl font-semibold">
          Countries with Foodie Eats
        </h2>
        <p className="underline font-medium md:block mobile:hidden cursor-pointer">
          View all countries
        </p>
      </div>
      <div className="grid md:grid-rows-8 md:grid-cols-4 md:gap-6 mobile:grid-rows-15 mobile:grid-cols-2 mobile:gap-3 grid-flow-col md:mb-24 mobile:mb-3">
        <div>
          <p className="cursor-pointer">Australia</p>
        </div>
        <div>
          <p className="cursor-pointer">Belgium</p>
        </div>
        <div>
          <p className="cursor-pointer">Canada</p>
        </div>
        <div>
          <p className="cursor-pointer">Chile</p>
        </div>
        <div>
          <p className="cursor-pointer">Costa Rica</p>
        </div>
        <div>
          <p className="cursor-pointer">Dominican Republic</p>
        </div>
        <div>
          <p className="cursor-pointer">Ecuador</p>
        </div>
        <div>
          <p className="cursor-pointer">El Salvador</p>
        </div>
        <div>
          <p className="cursor-pointer">France</p>
        </div>
        <div>
          <p className="cursor-pointer">Germany</p>
        </div>
        <div>
          <p className="cursor-pointer">Guatamala</p>
        </div>
        <div>
          <p className="cursor-pointer">Ireland</p>
        </div>
        <div>
          <p className="cursor-pointer">Italy</p>
        </div>
        <div>
          <p className="cursor-pointer">Japan</p>
        </div>
        <div>
          <p className="cursor-pointer">Kenya</p>
        </div>
        <div>
          <p className="cursor-pointer">Mexico</p>
        </div>
        <div>
          <p className="cursor-pointer">Netherlands</p>
        </div>
        <div>
          <p className="cursor-pointer">New Zealand</p>
        </div>
        <div>
          <p className="cursor-pointer">Panama</p>
        </div>
        <div>
          <p className="cursor-pointer">Poland</p>
        </div>
        <div>
          <p className="cursor-pointer">Portugal</p>
        </div>
        <div>
          <p className="cursor-pointer">South Africa</p>
        </div>
        <div>
          <p className="cursor-pointer">Spain</p>
        </div>
        <div>
          <p className="cursor-pointer">Sri Lanka</p>
        </div>
        <div>
          <p className="cursor-pointer">Swedan</p>
        </div>
        <div>
          <p className="cursor-pointer">Switzerland</p>
        </div>
        <div>
          <p className="cursor-pointer">Taiwan(ROC)</p>
        </div>
        <div>
          <p className="cursor-pointer">United Kingdom</p>
        </div>
        <div>
          <p className="cursor-pointer">Unites Sates</p>
        </div>
      </div>
      <p
        className="underline font-medium md:hidden mobile:block mb-10 cursor-pointer"
      >
        View all countries
      </p>
    </div>
  );
}

export default Countries;
