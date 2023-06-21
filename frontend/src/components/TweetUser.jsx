import React from 'react'

function TweetUser({user,img}) {
  return (
    <div className="tweetUser">
        <div className="img">{user[0]}</div>
        <p>{user && user}</p>
    </div>
  )
}

export default TweetUser