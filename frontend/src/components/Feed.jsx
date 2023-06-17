import React, { useEffect, useState } from 'react'
import Tweet from './Tweet'
import { fetchdata, sendData } from '../data/data'

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
  let bgImg = "https://firebasestorage.googleapis.com/v0/b/cali-1a1c9.appspot.com/o/background%2FGreen%20Forest%2C%20benjamin%20perrot.jpg?alt=media&token=aa728318-e779-4b59-8aec-3f862b904307"
  return (
    <div className="feed">
      <img src={bgImg} className='bgImg' alt="" />
      {data != [] || data != undefined ? data.map(({body,image,user})=> {
        return <Tweet body={body} user={user} image={image}/>
      })
    : <></>}
    <>
    database is offline
    </>
    </div>
  )
}

export default Feed