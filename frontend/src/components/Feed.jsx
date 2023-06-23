import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import Tweet from './Tweet'
import { fetchdata, sendData } from '../data/data'
import {useQuery, useQueryClient} from "@tanstack/react-query"
import Layout from "react-masonry-list"
import {Puff} from "react-loader-spinner"
import { userContext } from '../context/context'
import { Link, useParams,useNavigate } from 'react-router-dom'
function Feed() {  
  const navigate = useNavigate()
  
  const client = useQueryClient()
  const {bgImg,pageNum} = useContext(userContext)

  const {id} = useParams()

  let {data,isLoading,isError,error} = useQuery(["data",id], async () => {
    console.log(id)
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

      <div className="paginate">
        <button>
          <Link to={`/page/${parseInt(id) > 0 ? parseInt(id) -1 : 1}`}>-</Link>
        </button>
            <form action="#" onSubmit={e=>{
              e.preventDefault()
              let value = parseInt(e.target[0].value)
              if (value < 1) {
                value = 1
                navigate(`/page/${value}`)
                e.target[0].value = ""
              }
              else {
                navigate(`/page/${value}`)
                e.target[0].value = ""
              }
              
            }}>
              <input type="number" placeholder={id}/>
              <button className='go'>Go</button>
            </form>
        <button>
          <Link to={`/page/${parseInt(id)+1}`}>+</Link>
        </button>
      </div>
   
    </div>
  )
}

export default Feed