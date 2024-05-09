import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { changeSearchTerm, clearVideos } from "../features/youtube/youtubeSlice";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);




  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos);
      dispatch(getSearchPageVideos(false));
    }
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNotificationClick = () => {
    navigate('/notifications');
  };

  return (
    <>
    <div className="flex justify-between items-center px-14 h-14  bg-[#202020] opacity-95 sticky top-0 z-50"style={{ zIndex: 1000 }}>
      <div className="flex gap-8 items-center text-2xl">
        <div onClick={toggleSidebar} className="hover:cursor-pointer hover:text-gray-300">
          <GiHamburgerMenu />
        </div>
        <Link to="/" className="flex gap-1 items-center justify-center" >
          <BsYoutube className="text-3xl text-green-500" />
          <span className="relative text-2xl ">Tahatube
          <span className="absolute text-xs text-gray-400" style={{ fontSize: '12px', top: '40%', left: '105%', whiteSpace: 'nowrap'}}>By-Taha</span>
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl">
            <div className="flex gap-5 items-center pr-5">
              <input
                type="text"
                placeholder="Search"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
                value={searchTerm}
                onChange={e=>dispatch(changeSearchTerm(e.target.value))}
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
              <AiOutlineSearch className="text-xl " />
            </button>
          </div>
        </form>

        <button className="text-xl p-3 bg-zinc-900 rounded-full">
          <FaMicrophone />
        </button>
      </div>
      <button className="flex gap-8 items-center text-xl" onClick={handleNotificationClick}>
        <RiVideoAddLine />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            {" "}
            9+{" "}
          </span>
        </div>
        <img
          src="https://pbs.twimg.com/media/GD7eVAQWUAA3cFP?format=jpg&name=large"
          alt="profile logo"
          className="w-9 h-9 rounded-full"
        />
      </button>
    </div>
    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}
