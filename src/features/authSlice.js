import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth",
    initialState:{auth:{
        uid:"",
        username:"",
        email:"",
        photo:""
    },
    authPop:false
},
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
        }, 

        authPopOpen:(state)=>{
            state.authPop = true
        },
        
        authPopClose:(state)=>{
            state.authPop = false
        }
    }
})

export const authActions = authSlice.actions

export const authReducer = authSlice.reducer