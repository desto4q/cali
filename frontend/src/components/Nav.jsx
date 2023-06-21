import React from 'react'
import { Link } from 'react-router-dom'
import UserProfile from './UserProfile'
import { useSelector } from 'react-redux'

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
            <button>logout</button>
        </div>
    </div>
  )
}

export default Nav