import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from '../pages/Home'
import Nav from '../components/Nav'
function Router() {
  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router