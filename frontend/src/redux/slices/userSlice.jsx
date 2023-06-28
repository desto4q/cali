import { createSlice } from "@reduxjs/toolkit"


let user = {
    username: "Guest" ,
    id: 0,

}


const userSlice = createSlice({
  name: 'user',
  initialState:{user},
  reducers: {
    login: (state,action) => {
        state.user = action.payload;

    }
  }
})



export const { login } = userSlice.actions
export default userSlice.reducer
