import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name : "auth",
    initialState:{auth:{
        uid:"",
        username:"",
        email:"",
        photo:""
    }},
    reducers:{
        login:(state, action)=>{
            state.auth = action.payload
        },

        logout:(state) => {
            state.auth = {
                uid:"",
                username:"",
                email:"",
                photo:""
            }
        }
    }
})

export const authActions = authSlice.actions

export const authReducer = authSlice.reducer