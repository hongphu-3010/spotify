import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

function ListSong() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const handlePlaySong = (songId) => {
    setIdSong(songId);
    handleSetSong(songId);
  };
  useEffect(() => {
    setIdSong(song.id);
  }, [song]);
  return (
    <div className="col-span-2 overflow-y-auto">
      <table className="table w-full">
        <thead className="text-white h-12 sticky top-0 md:bg-slate-700 mb:bg-slate-900">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-400 cursor-pointer ${
                song.id === idSong && " bg-slate-600 text-teal-400"
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{song.id + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href="">
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSong;
