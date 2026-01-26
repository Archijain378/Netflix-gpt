import React from "react";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overView }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold ">{title}</h1>
      <p className="w-1/4 pt-5">{overView}</p>
      <div className="flex">
        <button className="bg-white text-black p-4 px-14 text-xl  rounded-md mt-5 font-bold hover:bg-gray-300">
          ▶ Play
        </button>
        <button className="bg-gray-500 p-4 px-14 text-xl text-white rounded-md mt-5 mx-4 font-bold opacity-85 hover:bg-opacity-85">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
