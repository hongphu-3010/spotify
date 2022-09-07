import { useContext } from "react";
import { Songs } from "../Context";

function DetailSong() {
  const { song } = useContext(Songs);
  return (
    <div className="md:col-span-1 p-3">
      <h2 className="text-cyan-500 font-bold">Now playing</h2>
      <h2 className="text-neutral-400 text-2xl">{song.name}</h2>
      <div className="md:w-[240px] m-auto md:mt-10 mb:mt-5 mb:w-[100px]">
        <img
          className="w-full mb:rounded-full mb:h-[100px] md:h-auto"
          src={song.links.images[0].url}
          alt="avatar"
        ></img>
      </div>
      <div className="flex justify-evenly items-center mt-10 mb:mt-5">
        <img
          className="w-[70px] rounded-full mb:hidden md:block "
          src={song.links.images[1].url}
          alt="avatar"
        ></img>
        <span className="text-xl text-white">{song.author}</span>
      </div>
    </div>
  );
}

export default DetailSong;
