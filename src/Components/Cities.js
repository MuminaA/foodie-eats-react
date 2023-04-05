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
          <div className="md:block mobile:hidden"><a>Akron</a></div>
          <div><a>Albuquerque</a></div>
          <div className="md:block mobile:hidden"><a>Bridgeport</a></div>
          <div><a>Concord</a></div>
          <div className="md:block mobile:hidden"><a>Dayton</a></div>
          <div className="md:block mobile:hidden"><a>El Paso</a></div>
          <div className="md:block mobile:hidden"><a>Hartford</a></div>
          <div><a>Houston</a></div>
          <div><a>Indianapolis</a></div>
          <div className="md:block mobile:hidden"><a>McAllen</a></div>
          <div><a>Mesa</a></div>
          <div><a>Milwaukee</a></div>
          <div><a>Nashville</a></div>
          <div className="md:block mobile:hidden"><a>New Orleans</a></div>
          <div><a>Oklahoma City</a></div>
          <div className="md:block mobile:hidden"><a>Omaha</a></div>
          <div className="md:block mobile:hidden"><a>Orlando</a></div>
          <div className="md:block mobile:hidden"><a>Palm Bay</a></div>
          <div><a>Providence</a></div>
          <div><a>Queens</a></div>
          <div className="md:block mobile:hidden"><a>San Antonio</a></div>
          <div className="md:block mobile:hidden"><a>Stony Brook</a></div>
          <div><a>Tucson</a></div>
          <div><a>West Hollywood</a></div>
      </div>
      <a href='#' className="underline font-medium md:hidden mobile:block mb-10">View all 500+ cities</a>
    </div>
  );
}
export default Cities;
