import { useLayoutEffect, useState } from "react"
import { useEffect } from "react"
import { createContext } from "react"


export let userContext = createContext()


export let  AppContext = ({children}) =>{
  

  // let [user]  
  let [col,setCol] = useState(4)

  let  resize = () => {
    let wi = window.innerWidth
    if (wi >= 1300) {
      setCol(4)
    }
    if (wi <= 1300) {
      setCol(3)
    }
    if (wi <= 1100) {
      setCol(2)
    }
    if (wi <= 659){
      setCol(1)
    }
  
  }
  let bgImg = "https://firebasestorage.googleapis.com/v0/b/cali-1a1c9.appspot.com/o/background%2FGreen%20Forest%2C%20benjamin%20perrot.jpg?alt=media&token=aa728318-e779-4b59-8aec-3f862b904307";
  
  useLayoutEffect(()=> {
    resize()
    window.addEventListener("resize",()=>{
      resize()
    })
    return () => window.removeEventListener('resize',()=>{
      resize()
    })
  },[])
  

  let [pageNum,setPageNum] = useState()
  let values = {
    col,bgImg,pageNum
  }


  return(
    <userContext.Provider value={values}>
      {children}
    </userContext.Provider>
  )
}