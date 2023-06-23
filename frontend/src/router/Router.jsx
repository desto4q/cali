import React, { useContext } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from '../pages/Home'
import Nav from '../components/Nav'
import Post from '../pages/Post'
import Signup from '../pages/Login/Signup'
import Login from '../pages/Login/Login'
import { userContext } from '../context/context'
import M_nav from '../components/M_nav'
function Router() {

  const {col,pageNum} = useContext(userContext)
  return (
    <BrowserRouter>
      {col <= 2 ? <M_nav/> : <Nav/>}
        <Routes>
            <Route path={`/page/:id`} element={<Home/>}/>
            <Route path ="/post" element={<Post/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
        
    </BrowserRouter>
  )
}

export default Router