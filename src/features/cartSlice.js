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
            if(state.cart.some((ele) => ele.id == action.payload.id))
            {
                state.cart.map((ele) => ele.id == action.payload.id && ele.count++)
            }else{
                state.cartLength++;
                state.cart.push({...action.payload, count:1})
            }
        },
        decCount: (state, action) =>{    
             if(state.cart.some((ele) => ele.id == action.payload.id && ele.count == 1))
            {
                state.cartLength--;
               state.cart = state.cart.filter((ele)=> ele.id != action.payload.id)
            }else{
                state.cart.map((ele) => ele.id == action.payload.id && ele.count--)
            }
        }
    }
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer