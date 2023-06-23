import React from 'react'
import { Link } from 'react-router-dom'
import UserProfile from './UserProfile'
import { useDispatch, useSelector } from 'react-redux'
import { Links } from '../data/data'
import Logout from './Logout'

function Nav() {
    
    const  user = useSelector(state=>state.user)
    
    
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
                <Logout/>
            </div>
    </div>
  )
}

export default Nav