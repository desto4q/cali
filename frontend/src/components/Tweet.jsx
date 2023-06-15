import React from 'react'
import TweetUser from './TweetUser'

function Tweet({user,image,body}) {
    let dummyimg = "https://i.pinimg.com/564x/50/55/1f/50551f9183aa95a4564732612c568ee6.jpg"
  return (
    <div className="tweet">
        <TweetUser user={user.user} img={user.profileImg}/>
        <hr></hr>
        <div className="body">
            <p>{body}</p>
            <div className="imgCont">
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Tweet