import React from 'react'
import TweetUser from './TweetUser'

function Tweet() {
    let dummyimg = "https://i.pinimg.com/564x/50/55/1f/50551f9183aa95a4564732612c568ee6.jpg"
  return (
    <div className="tweet">
        <TweetUser/>
        <hr></hr>
        <div className="body">
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <div className="imgCont">
                <img src={dummyimg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Tweet