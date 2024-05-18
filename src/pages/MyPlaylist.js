import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar';

const MyPlaylist = () => {
  return (
    <div className="max-h-screen overflow-hidden">
        <div style={{ height: "7.5vh" }}>
            <Navbar />
        </div>
        <div className='flex' style={{ height: "92.5vh" }}>
            <Sidebar />

            <div className="flex-grow flex justify-center items-center">
                <div className="p-6 bg-gray-800 rounded-lg text-center">
                    <h1 className='text-2xl font-semibold text-white'>
                        Here are your Playlist videos
                    </h1>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MyPlaylist