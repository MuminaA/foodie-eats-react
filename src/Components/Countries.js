import React from "react";

function Countries() {
  return (
    <div className="w-[95%] mx-auto">
      <div className="flex justify-between mb-7 items-end">
        <h2 className="md:text-4xl mobile:text-2xl font-semibold">
          Countries with Foodie Eats
        </h2>
        <a href="#" className="underline font-medium md:block mobile:hidden">
          View all countries
        </a>
      </div>
      <div className="grid md:grid-rows-8 md:grid-cols-4 md:gap-6 mobile:grid-rows-15 mobile:grid-cols-2 mobile:gap-3 grid-flow-col md:mb-24 mobile:mb-3">
        <div>
          <a>Australia</a>
        </div>
        <div>
          <a>Belgium</a>
        </div>
        <div>
          <a>Canada</a>
        </div>
        <div>
          <a>Chile</a>
        </div>
        <div>
          <a>Costa Rica</a>
        </div>
        <div>
          <a>Dominican Republic</a>
        </div>
        <div>
          <a>Ecuador</a>
        </div>
        <div>
          <a>El Salvador</a>
        </div>
        <div>
          <a>France</a>
        </div>
        <div>
          <a>Germany</a>
        </div>
        <div>
          <a>Guatamala</a>
        </div>
        <div>
          <a>Ireland</a>
        </div>
        <div>
          <a>Italy</a>
        </div>
        <div>
          <a>Japan</a>
        </div>
        <div>
          <a>Kenya</a>
        </div>
        <div>
          <a>Mexico</a>
        </div>
        <div>
          <a>Netherlands</a>
        </div>
        <div>
          <a>New Zealand</a>
        </div>
        <div>
          <a>Panama</a>
        </div>
        <div>
          <a>Poland</a>
        </div>
        <div>
          <a>Portugal</a>
        </div>
        <div>
          <a>South Africa</a>
        </div>
        <div>
          <a>Spain</a>
        </div>
        <div>
          <a>Sri Lanka</a>
        </div>
        <div>
          <a>Swedan</a>
        </div>
        <div>
          <a>Switzerland</a>
        </div>
        <div>
          <a>Taiwan(ROC)</a>
        </div>
        <div>
          <a>United Kingdom</a>
        </div>
        <div>
          <a>Unites Sates</a>
        </div>
      </div>
      <a
        href="#"
        className="underline font-medium md:hidden mobile:block mb-10"
      >
        View all countries
      </a>
    </div>
  );
}

export default Countries;
