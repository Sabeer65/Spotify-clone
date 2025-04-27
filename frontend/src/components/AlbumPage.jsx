import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import { assets } from "../assets/assets";

const AlbumPage = ({ album }) => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState("");

  const { playWithId, albumsData, songsData } = useContext(PlayerContext);

  useEffect(() => {
    albumsData.map((item) => {
      if (item._id === id) {
        setAlbumData(item);
      }
    });
  }, []);

  return albumData ? (
    <>
      <Navbar />
      <div className="flex mt-6 pl-4">
        <img className="w-40 rounded-md" src={albumData.image} alt="" />
        <div className="flex flex-col ml-4 gap-2 mt-6">
          <p>Playlist</p>
          <p className="text-4xl font-bold">{albumData.name}</p>
          <p>{albumData.desc}</p>
          <div className="flex items-center">
            <img className="size-6 mr-1" src={assets.spotify_logo} alt="" />
            <p>
              <span className="font-bold">Spotify</span> • 1,251,211 likes •{" "}
              <span className="font-bold">50 songs</span>, about 2hr 30 min
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="w-screen grid grid-cols-4 sm:grid-cols-5 pl-4 mb-4 text-[#a7a7a7]">
          <div className="flex">
            <p className="mr-8">#</p>
            <p>Title</p>
          </div>
          <p className="text-sm">Album</p>
          <p className="text-sm hidden sm:block">Date Added</p>
          <img className="w-4" src={assets.clock_icon} alt="Clock Icon" />
        </div>
      </div>
      <hr />
      <div className="mt-5">
        {songsData
          .filter((item) => item.album === album.name)
          .map((item, index) => (
            <div
              key={index}
              onClick={() => playWithId(item._id)}
              className="w-screen grid grid-cols-4 sm:grid-cols-5 pl-4 py-2 rounded-md hover:bg-[#383838] items-center cursor-pointer"
            >
              <div className="flex items-center">
                <p className="mr-8">{index + 1}</p>
                <img className="w-10" src={item.image} alt="" />
                <p className="ml-2">{item.name}</p>
              </div>
              <p className="text-sm">{albumData.name}</p>
              <p className="text-sm hidden sm:block">5 days ago</p>
              <p>{item.duration}</p>
            </div>
          ))}
      </div>
    </>
  ) : null;
};

export default AlbumPage;
