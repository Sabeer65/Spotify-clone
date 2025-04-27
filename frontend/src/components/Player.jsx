import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);
  return track ? (
    <div className="h-20 fixed bg-black inset-x-0 bottom-0 px-4 flex items-center justify-between gap-4">
      <div className=" hidden lg:flex items-center min-w-[200px]">
        <img
          className="w-12 h-12 object-cover rounded"
          src={track.image}
          alt=""
        />
        <div className="text-white ml-4 flex flex-col justify-center">
          <p className="font-bold text-sm">{track.name}</p>
          <p className="text-xs">{track.desc.slice(0, 20)}</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center">
        <div className="flex gap-4 items-center justify-center">
          <img
            className="w-5 cursor-pointer "
            src={assets.shuffle_icon}
            alt="Shuffle"
          />
          <img
            onClick={previous}
            className="w-5 cursor-pointer"
            src={assets.prev_icon}
            alt="Previous"
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-6 cursor-pointer"
              src={assets.pause_icon}
              alt="Play"
            />
          ) : (
            <img
              onClick={play}
              className="w-6 cursor-pointer"
              src={assets.play_icon}
              alt="Play"
            />
          )}

          <img
            onClick={next}
            className="w-5 cursor-pointer"
            src={assets.next_icon}
            alt="Next"
          />
          <img
            className="w-5 cursor-pointer"
            src={assets.loop_icon}
            alt="Loop"
          />
        </div>
        <div className="flex items-center gap-4 w-full max-w-[600px] mt-1">
          <p className="text-white text-xs">
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="flex-1 h-1 bg-gray-300 rounded-full relative overflow-hidden cursor-pointer"
          >
            <div
              ref={seekBar}
              className="h-1 bg-green-800 rounded-full absolute left-0 top-0 cursor-pointer"
            ></div>
          </div>
          <p className="text-white text-xs">
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2 min-w-[180px] justify-end">
        <img
          className="w-4 cursor-pointer"
          src={assets.plays_icon}
          alt="Plays"
        />
        <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="Mic" />
        <img
          className="w-4 cursor-pointer"
          src={assets.queue_icon}
          alt="Queue"
        />
        <img
          className="w-4 cursor-pointer"
          src={assets.speaker_icon}
          alt="Speaker"
        />

        <img
          className="w-4 cursor-pointer"
          src={assets.volume_icon}
          alt="Volume"
        />
        <div className="h-1 w-10 bg-white rounded-full cursor-pointer"></div>
        <img
          className="w-4 cursor-pointer"
          src={assets.mini_player_icon}
          alt="Mini Player"
        />
        <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="Zoom" />
      </div>
    </div>
  ) : null;
};

export default Player;
