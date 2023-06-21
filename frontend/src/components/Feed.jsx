import React, { useEffect, useLayoutEffect, useState } from 'react'
import Tweet from './Tweet'
import { fetchdata, sendData } from '../data/data'
import {useQuery, useQueryClient} from "@tanstack/react-query"
import Layout from "react-masonry-list"
function Feed() {  
  let bgImg = "https://firebasestorage.googleapis.com/v0/b/cali-1a1c9.appspot.com/o/background%2FGreen%20Forest%2C%20benjamin%20perrot.jpg?alt=media&token=aa728318-e779-4b59-8aec-3f862b904307";
  
  const client = useQueryClient()


  let {data,isLoading,isError} = useQuery(["data"], async () => {
    let resp = await fetchdata()
    return resp
  })
  let [col,setCol] = useState(4)


  let  resize = () => {
    let wi = window.innerWidth
    if (wi >= 1300) {
      setCol(4)
    }
    if (wi <= 1300) {
      setCol(3)
    }
    if (wi <= 1100) {
      setCol(2)
    }
  
  }
  
  useLayoutEffect(()=> {
    resize()
    window.addEventListener("resize",()=>{
      resize()
    })
    return () => window.removeEventListener('resize',()=>{
      resize()
    })
  },[])



  return (
    <div className="feed">
      <img src={bgImg} className='bgImg' alt="" />

      <>
        {
          isLoading != true  ? 
          <>
            <Layout minWidth={300} colCount={col} items={data.map(({id,user,body,image},key)=>{
              return (
                <Tweet username={user} id={id} body={body} image={image} key={key} />
              )
            })}/>

            {/* {data.map(({id,user,body,image},key)=>{
              return (
                <Tweet username={user} id={id} body={body} image={image} key={key} />
                )
                }
              )
            } */}
          </>
           : <>error</> 
        }
      </>
   
    </div>
  )
}

export default Feed