import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import MainTrack from './components/MainTrack'
import HeroSec from './components/HeroSec'
import FootBar from './components/FootBar'

export default function Main() {
  return (
        <section>
        <div className="track">
        
          <NavBar/>
          <HeroSec/>
          
        {/* <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element = {<HeroSec/>}></Route>
          <Route path='/maintrack' element = {<MainTrack/>}></Route>
          <Route path='/footbar' element = {<FootBar/>}></Route>
        </Routes>
        </BrowserRouter> */}</div>
        
        <div className='mainda'>
            <MainTrack/>
        </div>
        
        </section>
  )
}
