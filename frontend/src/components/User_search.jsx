import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function User_search({ id, user }) {
    let navigate = useNavigate()
    return (
        <div className="userSearch" onClick={()=>{
            navigate(`/${user}/${id}/page/1`)
        }}>
            <p>{ }</p>
            <Link to={`/${user}/${id}/page/1`}>
                <div className="img">{user && user[0]}</div>
                <p>{user && user}</p>
            </Link>
        </div>
    )
}

export default User_search