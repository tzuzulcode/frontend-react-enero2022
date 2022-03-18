import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { post } from '../../api'


export const login = createAsyncThunk("user/login",async (credentials,thunkAPI)=>{
    const response = await post("/auth/login",{
        email:credentials.email,
        password:credentials.password
    })

    //action.payload del reducer (fullfilled)
    return response.data
})

export const validate = createAsyncThunk("user/validate",async (params,thunkAPI)=>{
    const response = await post("/auth/validate")
    return response.data
})

export const logout = createAsyncThunk("user/logout",async ()=>{
    const res = await post("/auth/logout")
    return res.data
})

// export const validate = createAsyncThunk("user/validate",(params,thunkAPI)=>{
//     return axios.post("https://backendtzuzulcode.wl.r.appspot.com/auth/validate",{
//       method:"POST",
//       credentials:'include'
//     })
//     .then(res=>res.json())
//     .then(data=>thunkAPI.fulfillWithValue(data))
//     .catch(error=>thunkAPI.rejectWithValue("Error de loggeo"))
// })


const userSlice = createSlice({
    name:"user",
    initialState:{
        logged:false,
        name:"",
        loading:false,
        error:true,
        message:""
    },
    // Thunks
    extraReducers(builder){
        builder.addCase(login.pending,(state,action)=>{
            state.loading = true
            state.error = false
            state.message = ""
            state.name = ""
        })

        builder.addCase(login.fulfilled,(state,action)=>{
            state.loading = false
            state.logged = true
            state.error = false
            state.name = action.payload.name
        })

        builder.addCase(login.rejected,(state,action)=>{
            state.loading = false
            state.error = true
            state.message = action.payload.message
        })

        builder.addCase(validate.pending,(state,action)=>{
            state.loading = true
        })

        builder.addCase(validate.fulfilled,(state,action)=>{
            state.logged = true
            state.name = action.payload?.user?.firstName
            state.error = false
            state.loading = false
        })

        builder.addCase(validate.rejected,(state,action)=>{
            state.logged = false
            state.loading = false
        })

        builder.addCase(logout.pending,(state,action)=>{
            state.loading = true
        })

        builder.addCase(logout.fulfilled,(state,action)=>{
            state.logged = false
            state.name = ""
            state.error = false
            state.loading = false
            state.message = ""
        })

        builder.addCase(logout.rejected,(state,action)=>{
            state.error = true
            state.logged = false
            state.message = "Error"
            state.loading = false
        })
    }
})

//export const {logout,validate} = userSlice.actions // Esto se utiliza en el dispatch
export default userSlice.reducer // Esto en el store