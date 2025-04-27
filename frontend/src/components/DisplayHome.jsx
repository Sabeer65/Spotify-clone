import React, { useContext } from "react";
import Navbar from "./Navbar";
import AlbumCard from "./AlbumCard";
import SongCard from "./SongCard";
import { PlayerContext } from "../context/PlayerContext";

const DisplayHome = () => {
  const { songsData, albumsData } = useContext(PlayerContext);

  return (
    <>
      <Navbar />

      <div className="px-4">
        {" "}
        {/* Adds consistent horizontal padding */}
        <p className="font-semibold text-2xl my-4 text-white">
          Featured Charts
        </p>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth">
          {albumsData.map((item, index) => (
            <div key={index} className="snap-start shrink-0">
              <AlbumCard
                name={item.name}
                desc={item.desc}
                id={item._id}
                image={item.image}
              />
            </div>
          ))}
        </div>
        <p className="font-semibold text-2xl my-6 text-white">
          Today's Biggest Hits
        </p>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth">
          {songsData.map((item, index) => (
            <div key={index} className="snap-start shrink-0">
              <SongCard
                name={item.name}
                desc={item.desc}
                id={item._id}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
