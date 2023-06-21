import React, { useEffect, useState } from 'react'
import axios from "axios"
import SearchBar from '../components/SearchBar'
import Feed from '../components/Feed'
import Signup from './Login/Signup'


function Home() {
  return (
    <div className="home">
      {/* <Signup/> */}
      <Feed/>
    </div>
  )
}

export default Home