import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import Tweet from './Tweet'
import { fetchdata, sendData } from '../data/data'
import {useQuery, useQueryClient} from "@tanstack/react-query"
import Layout from "react-masonry-list"
import {Puff} from "react-loader-spinner"
import { userContext } from '../context/context'
function Feed() {  
  
  
  const client = useQueryClient()
  const {bgImg} = useContext(userContext)


  let {data,isLoading,isError,error} = useQuery(["data"], async () => {
    let resp = await fetchdata()
    return resp
  })

  let {col}  = useContext(userContext)

 

    useEffect(()=>{
      console.log(data)
    },[isError])


  return (
    <div className="feed">
      <img src={bgImg} className='bgImg' alt="" />

      <>
        {
          isLoading != true  ? 
          <>
            {data != "error" ? 
              <>
                <Layout minWidth={300} colCount={col} items={data
                .map(({id,user,body,image},key)=>{
                  return (
                    <Tweet username={user} id={id} body={body} image={image} key={key} />
                  )
                  }
                )
                }/>
              </>
              : 
              <>
                <button>
                  refetch
                </button>
              </>}
          </>
           : <><Puff/></> 
        }
      </>
   
    </div>
  )
}

export default Feed