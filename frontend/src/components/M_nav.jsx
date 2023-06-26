import React, { useState } from 'react'
import UserProfile from './UserProfile'
import { Twirl as Hamburger, Twirl } from 'hamburger-react'
import Dropdown from './Dropdown'

function M_nav() {
  let [trans,setTrans] = useState(-100)
  let [isOpen,setOpen] = useState(false)
  let reset = ()=> {
    if (isOpen == false) {
      setOpen(true)
      setTrans(60)
    }
    else {
      setOpen(false)
      setTrans(-100)
    }
  }
  return (
    <div className="mobileNav">
      <Dropdown transform={trans} onCLick={()=>{
        reset()
      }}/>
      <div className="container">
        
        <UserProfile/>
        <div className="end">
          <Twirl color='#00C2A3' toggled={isOpen} toggle={(bool)=>{
            reset()
          }}/>
        </div>
      </div>
     
    </div>
  )
}

export default M_nav