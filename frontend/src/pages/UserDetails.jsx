import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUserProfile } from '../data/data'
import Tweet from "../components/Tweet"

function UserDetails() {

  const {userId} = useParams()
  
  const {data,isLoading} = useQuery(["user",],async () => {
    let resp = await fetchUserProfile({id:userId})
    return resp
  })
  useEffect(()=>{
    console.log(userId,data)
  },[])
  
  return (
    <div>
      {
        isLoading != true ? data.map(({user,body,id,image},key
          )=>{
            return (
              <>
              <Tweet username={user} body={body} image={image} id={id}/>
              </>
            )
        }) : <></>
      }</div>
  )
}

export default UserDetails