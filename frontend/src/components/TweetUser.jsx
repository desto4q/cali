import React from 'react'

function TweetUser({user,img}) {
  return (
    <div className="tweetUser">
        <img src={img} alt="" />
        <p>{user && user}</p>
    </div>
  )
}

export default TweetUser