import React from "react";

const ShimmerBody = () => {
  return (
    <div>
      <div className="bg-gray-200 w-[20rem] h-[14rem] m-auto pt-6 rounded-md shadow-lg">
        <div className="bg-blue-100 w-[18rem] h-[4rem] m-auto ml-4 rounded-md shadow-sm"></div>
        <div className="bg-blue-100 w-[12rem] h-[1.3rem] mt-4 ml-[1.1rem] rounded-md shadow-sm"></div>
        <div className="bg-blue-100 w-[14rem] h-[1.3rem] mt-4 ml-[1.1rem] rounded-md shadow-sm"></div>
        <div className="bg-blue-100 w-[16rem] h-[1.3rem] mt-4 ml-[1.1rem] rounded-md shadow-sm"></div>
      </div>
    </div>
  );
};

export default ShimmerBody;
