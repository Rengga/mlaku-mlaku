import React from "react";
import "./header.css";
const header = () => {
  return (
    <div className="py-16 md:py-24 mt-0 2xl:px-96 xl:px-32 lg:px-24 md:px-8 px-3">
      <div className="max-w-7xl">
        <div className="bg-[url('https://cdn.dribbble.com/users/548267/screenshots/14864582/media/a476ab0781c7cf75a2501ad9dda6d719.jpg')] w-full min-width-full h-96 bg-cover rounded-lg ">
          <div className="h-full w-full bg-gradient-to-t from-emerald-100 flex justify-center items-center flex-col rounded-lg">
            <span className="md:text-4xl lg:text-5xl xl:text-2xl text-xl text-emerald-800 px-12 text-center">Mari Jalan-jalan keliling Jawa Timur</span>
            <span className="text-emerald-800 md:text-md text-sm">Healing-healing tai asw</span>
          </div>
        </div>
        <div className="bg-white rounded-lg w-auto h-auto absolute top-96 p-3" id="trending-box">
          <div className="mb-1">Trending</div>
          <div className="flex flex-row justify-center">
            <div className="w-24 h-28 sm:w-28 sm:h-32 bg-emerald-200 rounded-lg mr-3"></div>
            <div className="w-24 h-28 sm:w-28 sm:h-32 bg-emerald-200 rounded-lg mr-3"></div>
            <div className="w-24 h-28 sm:w-28 sm:h-32 bg-emerald-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
