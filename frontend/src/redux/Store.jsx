import  {configureStore } from '@reduxjs/toolkit'
import userReducer from "./slices/userSlice"

// console.log(userSlice.reducer)
const store = configureStore({
  reducer: userReducer, 
})


export default store