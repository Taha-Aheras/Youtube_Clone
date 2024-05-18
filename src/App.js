import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Search from './pages/Search'
import Watch from './pages/Watch'
import Notifications from './pages/Notifications'
import Shorts from './pages/Shorts'
import YourChannel from './pages/YourChannel'
import Subscriptions from './pages/Subscriptions'
import MyLib from './pages/MyLib'
import MyHis from './pages/MyHis'
import MyPlaylist from './pages/MyPlaylist'
import WatchLater from './pages/WatchLater'
import MyLiked from './pages/MyLiked'

import "./App.css"


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/watch/:id' element={<Watch/>}/>
    <Route path='/notifications' element={<Notifications/>}/>
    <Route path='/shorts' element={<Shorts/>}/>
    <Route path='/my-channel' element={<YourChannel/>}/>
    <Route path='/subscriptions' element={<Subscriptions/>}/>
    <Route path='/library' element={<MyLib/>}/>
    <Route path='/history' element={<MyHis/>}/>
    <Route path='/playlist' element={<MyPlaylist/>}/>
    <Route path='/watch-later' element={<WatchLater/>}/>
    <Route path='/liked' element={<MyLiked/>}/>

    </Routes>
    </BrowserRouter>
  )
}
