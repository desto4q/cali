import React from 'react'
import { Links } from '../data/data'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Logout from './Logout'

function Dropdown({transform,onCLick}) {
    const user = useSelector(state=>state.user)
    useEffect(()=>{
        console.log(user)
    },[user])




  return (
    <div className="dropdown" style={{transform: `translateY(${transform}%)`}}>
        {Links.map(({name,to},key)=> {
            return (
                    <div key={key}  onClick={()=> {
                    onCLick()
                    }}>
                        <Link  to={to}>{name}</Link>
                    </div>
            )
        })}
        {user?.username == "" ?
         <> 
            <div  onClick={()=>{
                onCLick()
            }}>
                <Link to={"signup"}>Signup</Link>    
            </div> 
            <div  onClick={()=>{
                onCLick()
            }}>
                <Link to={"login"}>Login</Link>
            </div>
        </>
            : 
        <> 
            <Logout/>
        </>
        }
        
    </div>
  )
}

export default Dropdown