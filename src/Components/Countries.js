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
          <a href=''>Australia</a>
        </div>
        <div>
          <a href=''>Belgium</a>
        </div>
        <div>
          <a href=''>Canada</a>
        </div>
        <div>
          <a href=''>Chile</a>
        </div>
        <div>
          <a href=''>Costa Rica</a>
        </div>
        <div>
          <a href=''>Dominican Republic</a>
        </div>
        <div>
          <a href=''>Ecuador</a>
        </div>
        <div>
          <a href=''>El Salvador</a>
        </div>
        <div>
          <a href=''>France</a>
        </div>
        <div>
          <a href=''>Germany</a>
        </div>
        <div>
          <a href=''>Guatamala</a>
        </div>
        <div>
          <a href=''>Ireland</a>
        </div>
        <div>
          <a href=''>Italy</a>
        </div>
        <div>
          <a href=''>Japan</a>
        </div>
        <div>
          <a href=''>Kenya</a>
        </div>
        <div>
          <a href=''>Mexico</a>
        </div>
        <div>
          <a href=''>Netherlands</a>
        </div>
        <div>
          <a href=''>New Zealand</a>
        </div>
        <div>
          <a href=''>Panama</a>
        </div>
        <div>
          <a href=''>Poland</a>
        </div>
        <div>
          <a href=''>Portugal</a>
        </div>
        <div>
          <a href=''>South Africa</a>
        </div>
        <div>
          <a href=''>Spain</a>
        </div>
        <div>
          <a href=''>Sri Lanka</a>
        </div>
        <div>
          <a href=''>Swedan</a>
        </div>
        <div>
          <a href=''>Switzerland</a>
        </div>
        <div>
          <a href=''>Taiwan(ROC)</a>
        </div>
        <div>
          <a href=''>United Kingdom</a>
        </div>
        <div>
          <a href=''>Unites Sates</a>
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
