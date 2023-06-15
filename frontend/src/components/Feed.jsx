import React, { useEffect, useState } from 'react'
import Tweet from './Tweet'
import { fetchdata } from '../data/data'

function Feed() {
  let [data,setData]= useState([])
  useEffect(()=>{
    fetchdata()
  },[])
  useEffect(()=>{
    console.log(data)
  },[data])
  return (
    <div className="feed">
      <Tweet/>
    </div>
  )
}

export default Feed