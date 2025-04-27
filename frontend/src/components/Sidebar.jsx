import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="max-lg:hidden w-[25%] flex flex-col px-1 mt-2">
        <div className="sidebar-buttons flex flex-col rounded-md bg-[#181818] mb-0.5 p-4 cursor-pointer">
          <Link to="/">
            <div className="text-md flex items-center gap-4 text-white w-[98%] hover:bg-[#383838] p-4 rounded-md">
              <img className="w-6" src={assets.home_icon} alt="" />
              <p className="">Home</p>
            </div>
          </Link>
          <div className="text-md flex items-center gap-4 text-white w-[98%] hover:bg-[#383838] p-4 rounded-md">
            <img className="w-6" src={assets.search_icon} alt="" />
            <p className="">Search</p>
          </div>
        </div>

        <div className="sidebar-library flex h-screen flex-col rounded-md bg-[#181818] mt-0.5 p-4 gap-4">
          <div className="library-sidebar-icons flex justify-between items-center">
            <div className="flex gap-2">
              <img className="size-6" src={assets.stack_icon} alt="" />
              <p className="text-white">Your Library</p>
            </div>

            <div className="flex gap-2">
              <div className="p-3 h-10 w-10">
                <img
                  className="cursor-pointer transition-all duration-300 ease-in-out
                 transform hover:scale-110 hover:drop-shadow-sm hover:drop-shadow-white"
                  src={assets.arrow_icon}
                  alt=""
                />
              </div>
              <div className="p-3 h-10 w-10">
                <img
                  className="cursor-pointer transition-all duration-300 ease-in-out 
                transform hover:scale-110 hover:drop-shadow-sm hover:drop-shadow-white"
                  src={assets.plus_icon}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="library-playlist bg-[#232323] p-3 rounded-lg pb-5 pt-4">
            <div className="h-[90%] flex flex-col text-white">
              <p className="font-bold">Create your first playlist</p>
              <p className="font-extralight">It's easy we will help you</p>
              <button
                className="bg-white text-black rounded-full w-32 p-2 mt-4
               cursor-pointer transition duration-300 hover:scale-105"
              >
                Create Playlist
              </button>
            </div>
          </div>

          <div className="library-podcasts bg-[#232323] p-3 rounded-lg pb-5 pt-4">
            <div className="h-[90%] flex flex-col text-white">
              <p className="font-bold">Let's find some podcasts to follow</p>
              <p className="font-extralight">
                we'll keep you updated on new episodes
              </p>
              <button
                className="bg-white text-black rounded-full w-40 p-2 mt-4
               cursor-pointer transition duration-300 hover:scale-105"
              >
                Browse Podcasts
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
