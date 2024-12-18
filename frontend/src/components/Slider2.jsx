import React from "react";

const Slider2 = () => {
  return (
    <div className="overflow-hidden py-3 md:py-6 bg-[#AF2126] relative">
      <div className="flex w-[500%] lg:w-[200%] animate-slide">
        <div className="flex w-1/2 justify-around">
          {/* Flex container for image and text */}
          <div className="flex items-center">
           
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
            Orders placed on or before October 26th will be delivered before Diwali (Before 31st October)
            </h1>
          </div>
          <div className="flex items-center">
            {/* <img
              src="Dailymade.svg"
              className="h-5 w-5"
              alt="Daily Made Icon"
            />
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
              No Artificial Flavours
            </h1> */}
          </div>
          <div className="flex items-center">
            {/* <img
              src="Nochemical.svg"
              className="h-5 w-5"
              alt="No Chemicals Icon"
            /> */}
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
            Orders placed after October 26th will begin to be processed from November 4th.
            </h1>
          </div>
          
        </div>

        <div className="flex w-1/2 justify-around">
          <div className="flex items-center">
           
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
            Orders placed on or before October 26th will be delivered before Diwali (Before 31st October)
            </h1>
          </div>
         
          <div className="flex items-center">
            <img
              src="Nochemical.svg"
              className="h-5 w-5"
              alt="No Chemicals Icon"
            />
            <h1 className="ml-2 text-xs lg:text-sm font-bold text-white">
            Orders placed after October 26th will begin to be processed from November 4th.
            </h1>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Slider2;