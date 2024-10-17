import React from "react";
import { data } from "./data";

function TypesOfTshirts() {
  return (
    <div className="w-full  my-14">
      <h1 className="text-4xl md:text-5xl text-center  font-extrabold">
        TYPES OF T-SHIRTS
      </h1>
      <div className="flex flex-wrap p-10 gap-10 mt-24 justify-center items-stretch">
        {data.map((elm, ix) => (
          <div key={ix} className="md:basis-1/4 rounded-md h-auto p-5 shadow-custom  mt-10">
            <div className="w-48 h-48 my-5  rounded-full  m-auto p-5 bg-[#EFEFEF] ">
              <img
                className="w-[95%] m-auto mt-[-77px] rounded-lg"
                src={elm.imgSrc}
                alt="type of tshirt image"
              />
            </div>
            <h1 className="text-2xl font-semibold">{elm.head}</h1>
            <p>{elm.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TypesOfTshirts;
