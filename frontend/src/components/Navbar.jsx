import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="bg-[#232323] p-3 h-10 w-10 rounded-full cursor-pointer hover:scale-105 hover:invert transition duration-300"
            src={assets.arrow_left}
            alt="Previous Page Button"
          />
          <img
            onClick={() => navigate(1)}
            className="bg-[#232323] p-3 h-10 w-10 rounded-full cursor-pointer hover:scale-105 hover:invert transition duration-300"
            src={assets.arrow_right}
            alt="Previous Page Button"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white text-black text-[12px] h-10 cursor-pointer p-2 rounded-full hidden md:block hover:scale-105 active:scale-95 transition duration-300">
            Explore Premium
          </button>
          <button className="bg-black text-white text-[12px] h-10 cursor-pointer p-2 rounded-full hidden md:block hover:scale-105 active:scale-95 transition duration-300">
            Install App
          </button>
          <button className="bg-purple-600 text-black text-[12px] cursor-pointer w-10 h-10 rounded-full flex items-center justify-center">
            G
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="bg-white text-black text-[12px] cursor-pointer px-4 py-2 rounded-full mt-4 hover:scale-105 transition duration-300 active:scale-95">
          All
        </button>
        <button className="bg-black text-white text-[12px] cursor-pointer px-4 py-2 rounded-full mt-4 hover:scale-105 transition duration-300 active:scale-95">
          Music
        </button>
        <button className="bg-black text-white text-[12px] cursor-pointer px-4 py-2 rounded-full mt-4 hover:scale-105 transition duration-300 active:scale-95">
          Podcasts
        </button>
      </div>
    </>
  );
};

export default Navbar;
