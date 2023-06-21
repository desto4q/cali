import React from 'react'
import "./App.scss"
import WebFont from 'webfontloader'
import Router from './router/Router'
import {useDispatch, useSelector} from "react-redux"
import { login } from './redux/slices/userSlice'

function App() {
  WebFont.load({
    google: {
      families: ["Montserrat"]
    }
  })
  let dispatch = useDispatch()
  let user = JSON.parse(localStorage.getItem("user"))
  if (user != null) {
    dispatch(login(user))
  }
  
  
  return (
    <div className="app">
      <Router/>
    </div>
  )
}

export default App