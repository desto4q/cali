import { createContext } from "react"


export let userContext = createContext()


export let  AppContext = ({children}) =>{

  
  let values = {

  }


  return(
    <userContext.Provider value={values}>
      {children}
    </userContext.Provider>
  )
}