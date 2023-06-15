import React, { useEffect, useState } from 'react'
import Tweet from './Tweet'
import { fetchdata } from '../data/data'

function Feed() {
  let [data,setData]= useState([])

  let fetching = async () => {
    let resp =  await fetchdata()
    setData(resp)

  }
  useEffect(  ()=>{
    fetching()
  },[])


  useEffect(()=>{
    console.log(data)
  },[data])
  return (
    <div className="feed">
      {data != [] ? data.map(({body,image,user})=> {
        return <Tweet body={body} user={user} image={image}/>
      })
    : <></>}
    </div>
  )
}

export default Feed