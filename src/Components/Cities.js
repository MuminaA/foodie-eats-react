import React from "react";
import map from "../assets/map.png"
import map2 from "../assets/map2.jpg"

function Cities() {
  return (
    <div className="w-[95%] mx-auto">
      <div className="flex justify-between mb-5 items-end">
        <h2 className="md:text-4xl mobile:text-2xl font-semibold">Cities near me</h2>
        <p className="underline font-medium md:block mobile:hidden cursor-pointer">View all 500+ cities</p>
      </div>
      <div className="mb-5">
        <img src={map} alt='' className="md:block mobile:hidden"></img>
        <img src={map2} alt='' className="md:hidden mobile:block"></img>
      </div>
      <div className="grid grid-rows-6 md:grid-cols-4 md:gap-6 mobile:grid-cols-2 mobile:gap-3 grid-flow-col md:mb-24 mobile:mb-3">
          <div className="md:block mobile:hidden"><p className="cursor-pointer">Akron</p></div>
          <div><p className="cursor-pointer">Albuquerque</p></div>
          <div className="md:block mobile:hidden"><p className="cursor-pointer">Bridgeport</p></div>
          <div><p className="cursor-pointer">Concord</p></div>
          <div className="md:block mobile:hidden"><p className="cursor-pointer">Dayton</p></div>
          <div className="md:block mobile:hidden"><p className="cursor-pointer">El Paso</p></div>
          <div className="md:block mobile:hidden"><p className="cursor-pointer">Hartford</p></div>
          <div><p className="cursor-pointer">Houston</p></div>
          <div><p className="cursor-pointer">Indianapolis</p></div>
          <div className="md:block mobile:hidden"><p className="cursor-pointer">McAllen</p></div>
          <div><p className="cursor-pointer">Mesa</p></div>
          <div><p className="cursor-pointer">Milwaukee</p></div>
          <div><p className="cursor-pointer">Nashville</p></div>
          <div className="md:block mobile:hidden"><p className="cursor-pointer">New Orleans</p></div>
          <div><p className="cursor-pointer">Oklahoma City</p></div>
          <div className="md:block mobile:hidden"><p className="cursor-pointer">Omaha</p></div>
          <div className="md:block mobile:hidden"><p className="cursor-pointer">Orlando</p></div>
          <div className="md:block mobile:hidden"><p className="cursor-pointer">Palm Bay</p></div>
          <div><p className="cursor-pointer">Providence</p></div>
          <div><p className="cursor-pointer">Queens</p></div>
          <div className="md:block mobile:hidden"><p className="cursor-pointer">San Antonio</p></div>
          <div className="md:block mobile:hidden"><p className="cursor-pointer">Stony Brook</p></div>
          <div><p className="cursor-pointer">Tucson</p></div>
          <div><p className="cursor-pointer">West Hollywood</p></div>
      </div>
      <p className="underline font-medium md:hidden mobile:block mb-10 cursor-pointer">View all 500+ cities</p>
    </div>
  );
}
export default Cities;
