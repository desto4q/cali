import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function UserProfile() {
    let user = useSelector(state=> {
        return state.user
    })
    useEffect(()=>{},[])

  return (
    <div className="userProfile">
        {user.profileImg ? <img src={user.profileImg} alt="" /> : <>
        <div className='imgHolder'>{user.username ? user.username[0].toUpperCase(): "G"}</div>
        </>}
        <div className="details">
            <h3>{user.username ? user.username  : "Guest"}</h3>
            <p>{user.id ? `#${user.id}` : "#000000"}</p>
        </div>
    </div>
  )
}

export default UserProfile