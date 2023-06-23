import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/userSlice'

function Logout() {
    const dispatch = useDispatch()
    let handleLogout = () => {
        localStorage.removeItem("user")
        dispatch(login({username: "", id: ""}))
    }
  return (
    <button className="logout" onClick={(e)=>{
        handleLogout()
    }}>
        Logout
    </button>
  )
}

export default Logout