import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import Tweet from './Tweet'
import { fetchdata, sendData } from '../data/data'
import {useQuery, useQueryClient} from "@tanstack/react-query"
import Layout from "react-masonry-list"
import {Puff} from "react-loader-spinner"
import { userContext } from '../context/context'
import { Link, useParams,useNavigate } from 'react-router-dom'
import Paginate from './Paginate'
function Feed() {  
  const navigate = useNavigate()
  
  const client = useQueryClient()
  const {bgImg,pageNum} = useContext(userContext)

  const {id} = useParams()

  let {data,isLoading,isError,error} = useQuery(["data",id], async () => {
    let resp = await fetchdata({id:id})
    return resp
  })

  let {col}  = useContext(userContext)

 

    


  return (
    <div className="feed">
      <img src={bgImg} className='bgImg' alt="" />

      <>
        {
          isLoading != true  ? 
          <>
              {data != "error" ? 
                <>
                  {
                    data != "end" ? 
                  <>
                     <Layout minWidth={300} colCount={col} items={data.results
                .map(({user,id,body,image},key)=>{                  
                  return (
                    <Tweet username={user} id={id} body={body} image={image} key={key} />
                  )
                  }
                )
                }/>
                  </> :
                  <>
                    <div className='end'>end of content</div>
                  </>
                }
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

     
        <Paginate id={id}/>
   
    </div>
  )
}

export default Feed