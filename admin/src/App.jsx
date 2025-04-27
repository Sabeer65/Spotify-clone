import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import AddSong from "./pages/AddSong";
import ListSong from "./pages/ListSong";
import ListAlbum from "./pages/ListAlbum";
import AddAlbum from "./pages/AddAlbum";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";

export const url = "https://spotify-clone-4sz1.onrender.com";

const App = () => {
  return (
    <>
      <div className="flex items-start min-h-screen bg-amber-700">
        <ToastContainer />
        <Sidebar />

        <div className="flex-1 h-screen overflow-y-scroll bg-[#d8e1d2]">
          <NavBar />
          <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
            <Routes>
              <Route path="/add-song" element={<AddSong />} />
              <Route path="/add-album" element={<AddAlbum />} />
              <Route path="/list-album" element={<ListAlbum />} />
              <Route path="/list-song" element={<ListSong />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
