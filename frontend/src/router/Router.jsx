import  { useContext } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from '../pages/Home'
import Nav from '../components/Nav'
import Post from '../pages/Post'
import Signup from '../pages/Login/Signup'
import Login from '../pages/Login/Login'
import { userContext } from '../context/context'
import M_nav from '../components/M_nav'
import UserDetails from '../pages/UserDetails'
import Searchpage from '../pages/Searchpage'
import Dummy from '../pages/Dummy'
function Router() {

  const {col} = useContext(userContext)
  return (
    <BrowserRouter>
      {col <= 2 ? <M_nav/> : <Nav/>}
        <Routes>
          <Route path='/' element={<Dummy/>}/>
            <Route path={`/page/:id`} element={<Home/>}/>
            <Route path ="/post" element={<Post/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/:username/:userId/page/:pageId' element={<UserDetails/>}/>
            <Route path='/search/page/:pageId' element={<Searchpage/>}/>
        </Routes>
        
    </BrowserRouter>
  )
}

export default Router