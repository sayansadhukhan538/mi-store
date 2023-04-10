import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavOption from './NavOption'

const NavRowMenu = ({miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {
  return (
    <div>
        <Routes>
          <Route exact path='/miphones' element={<NavOption miPhones={miPhones} />}/>
        </Routes>
        <Routes>
          <Route exact path='/redmiphones' element={<NavOption redmiPhones={redmiPhones} />}/>
        </Routes>
        <Routes>
          <Route exact path='/tv' element={<NavOption tv={tv} />}/>
        </Routes>
        <Routes>
          <Route exact path='/laptops' element={<NavOption laptop={laptop} />}/>
        </Routes>
        <Routes>
          <Route exact path='/lifestyle' element={<NavOption fitnessAndLifeStyle={fitnessAndLifeStyle} />}/>
        </Routes>
        <Routes>
          <Route exact path='/home' element={<NavOption home={home} />}/>
        </Routes>
        <Routes>
          <Route exact path='/audio' element={<NavOption audio={audio} />}/>
        </Routes>
        <Routes>
          <Route exact path='/accessories' element={<NavOption accessories={accessories} />}/>
        </Routes>


    </div>
  )
}

export default NavRowMenu
