import React from 'react'
import { useNavigate } from 'react-router-dom';
import{
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineWatchLater,
} from 'react-icons/md';

import {LuThumbsUp} from 'react-icons/lu';
import { ImProfile } from "react-icons/im";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { TiSocialInstagramCircular } from "react-icons/ti";




export default function Sidebar({ isOpen, toggleSidebar }) {
    const navigate = useNavigate();

    const mainLinks = [
        {
            icon: <MdHomeFilled className='text-xl'/>,
            name: 'Home',
            path: '/'

        },
        {
            icon:<MdOutlineSlowMotionVideo className='text-xl'/>,
            name:'Shorts',
            path: '/shorts'
        },
        {
            icon:<MdSubscriptions className='text-xl'/>,
            name:'Subscriptions',
            path: '/subscriptions'
        }
    ];

    const otherLinks = [
        {
            icon: <ImProfile className='text-xl' />,
            name: 'Your Channel',
            path: '/my-channel'
        },
        {
            icon: <MdOutlineVideoLibrary className='text-xl' />,
            name: 'Library',
            path: '/library'
        },
        {
            icon: <MdHistory className='text-xl' />,
            name: 'History',
            path: '/history'
        },
        {
            icon: <MdOutlinePlaylistPlay className='text-xl' />,
            name: 'Playlist',
            path: '/playlist'
        },
        {
            icon: <MdOutlineWatchLater className='text-xl' />,
            name: 'Watch Later',
            path: '/watch-later'
        },
        {
            icon: <LuThumbsUp className='text-xl' />,
            name: 'Liked Video',
            path: '/liked'
        }
    ];


    const subs= [
        {
            icon:<MdSubscriptions className='text-xl'/>,
            name :"Subscriptions : "
        },
        {
            icon:<TiSocialInstagramCircular className='text-xl'/>,
            name :"Channel 1  "
        }


    ];

    const handleNavigation = (path) => {
        navigate(path);
        toggleSidebar();
    };


  return (
    isOpen&& (
        <div
            className={`fixed left-0 top-10 h-full bg-[rgba(33,33,33,0.95)] transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} 
            style={{ width: '20%' }}>    

                <button onClick={toggleSidebar} className='close-sidebar-button'>
                    
                </button>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {mainLinks.map(
            ({icon,name,path}) => {
            return(
                <li key={name} className={`pl-6 py-3 hover:bg-zinc-700 ${name === "Home" ?"bg-zinc-600" : " "} rounded-xl`}>
                    <button onClick={() => handleNavigation(path)} className='flex items-center gap-3'>
                                {icon}
                                <span className='text-sm tracking-wider truncate'>{name}</span>
                            </button>
                </li>
            )}
        )}
      </ul>
      <ul className='flex flex-col border-3 border-gray-800 rounded-xl'>
        {otherLinks.map(
            ({icon,name,path},index) => {
            return(
                <li key={name} className={`pl-6 py-3 rounded-xl hover:bg-zinc-600 ${index === otherLinks.length - 1 ? 'border-b border-gray-600' : ''}`}>
                <button onClick={() => handleNavigation(path)} className='flex items-center gap-3'>
                                {icon}
                                <span className='text-sm tracking-wider'>{name}</span>
                            </button>
                </li>
            )
            }
        )}
      </ul>
      <ul className='flex flex-col border-3 border-gray-800 '>
        {subs.map(
            ({icon,name},index) => {
            return(
                <li key={name} className={`pl-6 py-3 rounded-xl hover:bg-zinc-600 ${index === otherLinks.length - 1 ? 'border-b border-gray-600' : ''}`}>
                <a href='#' className='flex items-center gap-5'> 
                    {icon}
                    <span className='text-sm tracking-wider'>{name}</span>
                    </a>
                </li>
            )
            }
        )}
      </ul>
      
    </div>
  )
 )
}
