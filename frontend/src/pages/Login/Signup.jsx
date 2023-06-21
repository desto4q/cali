import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../../redux/slices/userSlice'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

function Signup() {
    const dispatch = useDispatch()
    const user = useSelector((state) => {
        return state.user
        // console.log(state)
      })
      

    const login = async (e) => {
        e.preventDefault()
        let username = e.target[0].value
        let password = e.target[1].value
        let newuser = {
            username: username,
            password: password
        }
        let url = "http://127.0.0.1:8000/create/"
        let resp = await axios.post(url,newuser).then(res => 
            {
                if (res.data ==  "exist" ) {
                    const notify = () => toast("username exists")
                    notify()
                }
            })
        // console.log(username,password)
    }

    let bgImg = "https://firebasestorage.googleapis.com/v0/b/cali-1a1c9.appspot.com/o/background%2FGreen%20Forest%2C%20benjamin%20perrot.jpg?alt=media&token=aa728318-e779-4b59-8aec-3f862b904307"
  return (
    <>
     {/* <h2>Signup</h2>
     <button onClick={()=> {
        dispatch(login({
            username: "destiny",
            id: 20,
        }))
     }}>

        update
     </button>
     <h1>{user.username}</h1> */}

     <div className="Cali signUp">
        <ToastContainer/>
        <img src={bgImg} className='bgImg' alt="" />
        <div className="content">
        <form action="#" onSubmit={((e)=>{
            login(e)
        })}>
            <h2>Cali SignUp</h2>
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

            <button>Signup</button>
        </form>
        </div>
     </div>
    </>
  )
}

export default Signup