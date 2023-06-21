import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../../redux/slices/userSlice'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import {Navigate, redirect} from "react-router-dom"
function Login() {
    const dispatch = useDispatch()
    const user = useSelector((state) => {
        return state.user
        // console.log(state)
      })
              

    const loginUser = async (e) => {
        e.preventDefault()
        console.log(e)
        let username = e.target[0].value
        let password = e.target[1].value
        let newuser = {
            username: username,
            password: password
        }
        let url = "http://127.0.0.1:8000/login/"
        let resp = await axios.post(url,newuser).then(res => 
            {
                
                if (res.data ==  "incorrect password" ) {
                    const notify = () => toast("incorrect password")
                    notify()
                }
                else {
                    const notify = () => toast("logged in")
                    notify()
                    let data = {...res.data}
                    dispatch(login(data))
                    
                    
                }
            })
    }

    let bgImg = "https://firebasestorage.googleapis.com/v0/b/cali-1a1c9.appspot.com/o/background%2FGreen%20Forest%2C%20benjamin%20perrot.jpg?alt=media&token=aa728318-e779-4b59-8aec-3f862b904307"

    
    if (user.username != "") {
        return(
            <>
        <Navigate to="/"/>
        </>

        )
            }
  return (
    <>
 

     <div className="Cali signUp">
        <ToastContainer/>
        <img src={bgImg} className='bgImg' alt="" />
        <div className="content">
        <form action="#" onSubmit={((e)=>{
            loginUser(e)
        })}>
            <h2>Cali Login</h2>
            <div className="username">
                <label htmlFor="username">
                    username
                </label>
                <input type="text" placeholder='username here....' name="username" id="username" required />
            </div>
            
            <div className="password">
                <label htmlFor="password">password</label>
                <input placeholder='password here....' type="password" name="password" id="password" required />
            </div>

            <button onClick={()=>{
                
            }}>Login</button>
        </form>
        </div>
     </div>
    </>
  )
}

export default Login