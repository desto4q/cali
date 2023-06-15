import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    let Links = [
        {
            name: "Profile",
            to: "",
            icon: "",
        },
        {
            name: "Feed",
            to: "",
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
                        <Link key={key}>
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