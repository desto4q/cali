import React from 'react'
import { Link } from 'react-router-dom'
import UserProfile from './UserProfile'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/slices/userSlice'

function Nav() {
    
    const  user = useSelector(state=>state.user)
    let Links = [
        {
            name: "Home",
            to: "",
            icon: "",
        },
        {
            name: "Post",
            to: "/post",
            icon: "",
        },
        {
            name: "Report",
            to: "",
            icon: "",
        },
        {
            name: "Help",
            to: "",
            icon: "",
        },
        
    ]
    let dispatch = useDispatch()
    let handleLogout = () => {
        localStorage.removeItem("user")
        dispatch(login({username: "", id: ""}))
    }
  return (
    <div className="nav">
        <div className="content">
            <div className="logo">
                Cali
            </div>
            <div className='link'>
                <UserProfile/>
                {Links.map(({name,icon,to},key)=>{
                    return (
                        <Link key={key} to={to}>
                            {name}
                        </Link>
                    )
                })}
                {user.username == "" ? <><Link to={"signup"}>Signup</Link> <Link to={"login"}>Login</Link></>: <></>}
            </div>
            <button onClick={e=> {
                handleLogout()
            }} className='logout'>logout</button>
        </div>
    </div>
  )
}

export default Nav