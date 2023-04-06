import React from "react";
import map from "../assets/map.png"
import map2 from "../assets/map2.jpg"

function Cities() {
  return (
    <div className="w-[95%] mx-auto">
      <div className="flex justify-between mb-5 items-end">
        <h2 className="md:text-4xl mobile:text-2xl font-semibold">Cities near me</h2>
        <a href='#' className="underline font-medium md:block mobile:hidden">View all 500+ cities</a>
      </div>
      <div className="mb-5">
        <img src={map} alt='' className="md:block mobile:hidden"></img>
        <img src={map2} alt='' className="md:hidden mobile:block"></img>
      </div>
      <div className="grid grid-rows-6 md:grid-cols-4 md:gap-6 mobile:grid-cols-2 mobile:gap-3 grid-flow-col md:mb-24 mobile:mb-3">
          <div className="md:block mobile:hidden"><a href=''>Akron</a></div>
          <div><a href=''>Albuquerque</a></div>
          <div className="md:block mobile:hidden"><a href=''>Bridgeport</a></div>
          <div><a href=''>Concord</a></div>
          <div className="md:block mobile:hidden"><a href=''>Dayton</a></div>
          <div className="md:block mobile:hidden"><a href=''>El Paso</a></div>
          <div className="md:block mobile:hidden"><a href=''>Hartford</a></div>
          <div><a href=''>Houston</a></div>
          <div><a href=''>Indianapolis</a></div>
          <div className="md:block mobile:hidden"><a href=''>McAllen</a></div>
          <div><a href=''>Mesa</a></div>
          <div><a href=''>Milwaukee</a></div>
          <div><a href=''>Nashville</a></div>
          <div className="md:block mobile:hidden"><a href=''>New Orleans</a></div>
          <div><a href=''>Oklahoma City</a></div>
          <div className="md:block mobile:hidden"><a href=''>Omaha</a></div>
          <div className="md:block mobile:hidden"><a href=''>Orlando</a></div>
          <div className="md:block mobile:hidden"><a href=''>Palm Bay</a></div>
          <div><a href=''>Providence</a></div>
          <div><a href=''>Queens</a></div>
          <div className="md:block mobile:hidden"><a href=''>San Antonio</a></div>
          <div className="md:block mobile:hidden"><a href=''>Stony Brook</a></div>
          <div><a href=''>Tucson</a></div>
          <div><a href=''>West Hollywood</a></div>
      </div>
      <a href='#' className="underline font-medium md:hidden mobile:block mb-10">View all 500+ cities</a>
    </div>
  );
}
export default Cities;
