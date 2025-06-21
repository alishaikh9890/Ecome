import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name : "auth",
    initialState:{auth:{
        username:"",
        email:"",
        photo:""
    }},
    reducers:{
        login:(state, action)=>{
            state.auth = action.payload
        },

        logout:() => {
            state.auth = {
                username:"",
                email:"",
                photo:""
            }
        }
    }
})

export const authActions = authSlice.actions

export const authReducer = authSlice.reducer