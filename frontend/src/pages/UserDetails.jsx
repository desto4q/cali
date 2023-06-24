import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUserProfile } from '../data/data'
import Tweet from "../components/Tweet"
import Layout from "react-masonry-list"
import { userContext } from '../context/context'
import ProfilePaginator from '../components/ProfilePaginator'
import { Puff } from 'react-loader-spinner'

function UserDetails() {

  const { userId, username, pageId } = useParams()
  const { col } = useContext(userContext)

  const { data, isLoading } = useQuery(["user", pageId], async () => {
    let resp = await fetchUserProfile({ id: userId, page: pageId })
    return resp
  })


  






  return (
    <div className='feed userDetails'>

      <div className="userCont">
        <div className="userImg">
          {username[0]}
        </div>
        <hr />
        <h2>{username}</h2>
        <p>#{userId}</p>
      </div>
      {
        isLoading != true ?
          <>

            {data != "error" ?
              <>
                {data != "end" ?

                  <>
                    <Layout colCount={col} minWidth={300} items={data?.results.map(({ user, body, id, image }, key
                    ) => {
                      return (
                        <>
                          <Tweet username={user} body={body} image={image} id={id} />
                        </>
                      )
                    })} />
                  </>
                  : 
                  <>
                    <div className='end'>end of content</div>
                  </>
                  }
              </>
              :
              <><button>refetch</button></>
            }

            <ProfilePaginator userId={userId} pageId={pageId} user={username} />
          </> : <>
          <Puff/>
          </>
      }</div>
  )
}

export default UserDetails