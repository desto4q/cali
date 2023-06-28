import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function UserProfile() {
    let user = useSelector(state=> {
        return state.user
    })
    useEffect(()=>{
      console.log(user)
    },[])

  return (
    <div className="userProfile">
        {user.profileImg ? <img src={user.profileImg} alt="" /> : <>
        <div className='imgHolder'>{user.username[0].toUpperCase()}</div>
        </>}
        <div className="details">
            <h3>{user.username }</h3>
            <p>{`#${user.id}`}</p>
        </div>
    </div>
  )
}

export default UserProfile