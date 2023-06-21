import React, { useEffect } from 'react'
import TweetUser from './TweetUser'
import { useSelector } from 'react-redux'
import axios from 'axios'

function Tweet({username,image,body,id}) {
    let dummyimg = "https://i.pinimg.com/564x/50/55/1f/50551f9183aa95a4564732612c568ee6.jpg"
    let user = useSelector(state=>state.user) 

    let handleDelete = async (e) => {
      e.preventDefault()
      let url = "http://127.0.0.1:8000/tweet/delete"
      let resp = await axios.post(url,{id:id}).then(res => res)
      console.log(resp)
    }


  return (
    <div className="tweet">
        <TweetUser user={username.user} img={username.profileImg}/>
        <hr />
         {user.username == username.user ? <button onClick={(e)=>{
          handleDelete(e)
        }}>delete</button>: null}
        <div className="body">
            {body != "unknown" ?<p>{body}</p> : null}
        </div>
        {image != "" ? <div className="imgCont">
          <img loading='lazy' src={image} alt="" />
        </div>
        :null}
    </div>
  )
}

export default Tweet