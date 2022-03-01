import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


export const login = createAsyncThunk("user/login",async (credentials,thunkAPI)=>{
    const response = await fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/login",{
            method:"POST",
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:credentials.email,
                password:credentials.password
            })
        })
    const data = await response.json()
    console.log(data)

    //action.payload del reducer (fullfilled)
    return data
})


const userSlice = createSlice({
    name:"user",
    initialState:{
        logged:false,
        name:"",
        loading:false,
        error:true,
        message:""
    },
    reducers:{
        // login(state,action){
        //     state.logged = true
        //     state.name = action.payload
        // },
        logout(state,action){
            state.logged = false
            state.name = ""
        }
    },
    // Thunks
    extraReducers(builder){
        builder.addCase(login.pending,(state,action)=>{
            state.loading=true
        })

        builder.addCase(login.fulfilled,(state,action)=>{
            state.loading = false
            state.logged = true
            state.error = false
            state.name = action.payload.firstName
        })

        builder.addCase(login.rejected,(state,action)=>{
            state.loading = false
            state.error = true
            state.message = action.payload.message
        })
    }
})

export const {logout} = userSlice.actions // Esto se utiliza en el dispatch
export default userSlice.reducer // Esto en el store