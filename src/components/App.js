import React from "react";
import { useDispatch } from "react-redux";
import "../style.css";
import MoviePlaylist from "./MoviePlaylist";
import SongPlaylist from "./SongPlaylist";
import { reset } from "../store";
export default function App() {
  const dispatch=useDispatch()
  const handleResetClick = () => {
    dispatch(reset())
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
