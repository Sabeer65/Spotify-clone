import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongCard = ({ image, name, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);
  return (
    <>
      <div
        onClick={() => playWithId(id)}
        className="w-[140px] flex-shrink-0 p-2 flex flex-col gap-2 text-white cursor-pointer hover:bg-[#383838] rounded-md"
      >
        <img
          title={name}
          className="w-full aspect-square rounded-md object-cover"
          src={image}
          alt={name}
        />
        <p title={name} className="text-sm font-semibold truncate">
          {name}
        </p>
        <p title={desc} className="text-xs font-extralight line-clamp-2">
          {desc}
        </p>
      </div>
    </>
  );
};

export default SongCard;
