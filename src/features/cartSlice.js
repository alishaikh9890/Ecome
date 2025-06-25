import { createSlice } from "@reduxjs/toolkit";

let initialState ={
    cart:[],
    cartLength:0,
    total:0
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCard: (state, action)=>{
            state.cartLength++;
            state.cart.push(action.payload)
        }
    }
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer