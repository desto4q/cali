import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from '../pages/Home'
import Nav from '../components/Nav'
import Post from '../pages/Post'
function Router() {
  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path ="/post" element={<Post/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router