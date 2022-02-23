import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:"user",
    initialState:{
        logged:false
    },
    reducers:{
        login(state,action){
            state.logged = true
        },
        logout(state,action){
            state.logged = false
        }
    }
})

export const {login,logout} = userSlice.actions
export default userSlice.reducer