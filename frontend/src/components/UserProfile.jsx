import React from 'react'
import { useSelector } from 'react-redux'

function UserProfile() {
    let user = useSelector(state=> {
        return state.user
    })

  return (
    <div className="userProfile">
        {user.profileImg ? <img src={user.profileImg} alt="" /> : <>
        <div className='imgHolder'>G</div>
        </>}
        <div className="details">
            <h3>{user.username}</h3>
            <p>{user.id}</p>
        </div>
    </div>
  )
}

export default UserProfile