import React, { useContext, useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../../redux/slices/userSlice'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import {Navigate, redirect} from "react-router-dom"
import { userContext } from '../../context/context';
function Login() {
    const dispatch = useDispatch()
    const user = useSelector((state) => {
        return state.user
        // console.log(state)
      })
              

    const loginUser = async (e) => {
        const notify = () => toast('pending')
        notify()
        e.preventDefault()
        console.log(e)
        let username = e.target[0].value
        let password = e.target[1].value
        let newuser = {
            username: username,
            password: password
        }
        let url = "https://cali-production.up.railway.app/login/"
        let resp = await toast.promise(axios.post(url,newuser),{pending: "ispending",success: "success",error: "error"}).then(res => 
            {
                
                if (res.data ==  "incorrect password" ) {
                    const notify = () => toast("incorrect password")
                    notify()
                }
                else {
                    const notify = () => toast("logged in")
                    notify()
                    let data = {...res.data}
                    localStorage.setItem("user",JSON.stringify(data))
                    dispatch(login({...data}))
                    
                    
                }
            })
    }
    const {bgImg} = useContext(userContext)


    
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