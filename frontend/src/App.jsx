import React, { useContext, useEffect, useState } from 'react'
import "./App.scss"
import WebFont from 'webfontloader'
import Router from './router/Router'
import {useDispatch, useSelector} from "react-redux"
import { login } from './redux/slices/userSlice'
import { userContext } from './context/context'

function App() {
  WebFont.load({
    google: {
      families: ["Montserrat"]
    }
  })


  //used to validate if user is logged in
  let dispatch = useDispatch()
  useEffect(()=> {
    let user = JSON.parse(localStorage.getItem("user"))
    if (user != null) {
      dispatch(login(user))
    }
  },[])
  
  //this is just for responsiveness didnt want to use media query :)
  let [flex,setFlex] = useState("column")
  const {col} = useContext(userContext)
  let changeFlex = () => {
    if (col <= 2 ) {
      setFlex("column")
    }
    else {
      setFlex("row")
    }
  }
  useEffect(()=>{
    changeFlex()
  },[col])


  return (
    <div className="app" style={{flexDirection: `${flex}`}}>
      <Router/>
    </div>
  )
}

export default App