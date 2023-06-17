import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

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
                {Links.map(({name,icon,to},key)=>{
                    return (
                        <Link key={key} to={to}>
                            {name}
                        </Link>
                    )
                })}
            </div>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Nav