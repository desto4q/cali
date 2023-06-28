import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchUserProfile } from '../data/data'
import Tweet from "../components/Tweet"
import { userContext } from '../context/context'
import ProfilePaginator from '../components/ProfilePaginator'
import { Puff } from 'react-loader-spinner'
import { IconArrowLeft } from '@tabler/icons-react'
import Mymasonry from '../components/Mymasonry'

function UserDetails() {

  const { userId, username, pageId } = useParams()
  const { col } = useContext(userContext)

  const { data, isLoading } = useQuery(["user", pageId], async () => {
    let resp = await fetchUserProfile({ id: userId, page: pageId })
    return resp
  })

  let navigate = useNavigate()
  useEffect(() => {
    console.log(userId)
  }, [data])





  return (
    <div className='feed userDetails'>

      <div className="userCont">
        <div className="backbtn" onClick={(e => {
          navigate(-1)
        })}>
          <IconArrowLeft />
        </div>
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

                    <Mymasonry
                      data={data?.results.map(({ user, body, id, image }, key
                      ) => {
                        return (
                          <>
                            <Tweet username={user} body={body} image={image} id={id} />
                          </>
                        )
                      })}></Mymasonry>
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
            <Puff />
          </>
      }</div>
  )
}

export default UserDetails