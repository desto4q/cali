import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from '../pages/Home'
import Nav from '../components/Nav'
import Post from '../pages/Post'
import Signup from '../pages/Login/Signup'
import Login from '../pages/Login/Login'
function Router() {
  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path ="/post" element={<Post/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router