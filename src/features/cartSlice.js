import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

let initialState ={
    cart:[],
    cartLength:0,
    total:0,
    wishList:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        replaceCart:(state, action)=>{
            state.cart = action.payload.cart
            state.cartLength = action.payload.cartLength
            state.total = action.payload.total
            state.wishList = action.payload.wishList
        },
        addToCard: (state, action)=>{
            if(state.cart.some((ele) => ele.id == action.payload.id))
            {
                state.cart.map((ele) => ele.id == action.payload.id && ele.count++)
            }else{
                state.cartLength++;
                state.cart.push({...action.payload, count:1})
                toast.info("Item Added To Cart...!")
            }
        },
        decCount: (state, action) =>{    
             if(state.cart.some((ele) => ele.id == action.payload.id && ele.count == 1))
            {
                state.cartLength--;
               state.cart = state.cart.filter((ele)=> ele.id != action.payload.id)
               toast.warning("Item Removed From Cart...!")
            }else{
                state.cart.map((ele) => ele.id == action.payload.id && ele.count--)
            }
        },
        addToWishList: (state, action)=>{
            if(state.wishList.some((el) => el.id == action.payload.id)){
                state.wishList = state.wishList.filter((el) => el.id != action.payload.id)
            }
            else{
                state.wishList.push(action.payload)
            }
        }
    }
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer