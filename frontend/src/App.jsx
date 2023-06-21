import React from 'react'
import "./App.scss"
import WebFont from 'webfontloader'
import Router from './router/Router'
import {useSelector} from "react-redux"

function App() {
  WebFont.load({
    google: {
      families: ["Montserrat"]
    }
  })
  
  
  return (
    <div className="app">
      <Router/>
    </div>
  )
}

export default App