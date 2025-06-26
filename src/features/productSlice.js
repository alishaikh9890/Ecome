import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name :"product",
    initialState:{
        products:[],
        page:1,
        skip:0,
        categories:[],
        catFilter:"",
        search:"",

    },
    reducers:{
        allProduct: (state,action)=>{
            state.products = action.payload.products;
        },

        allCategories : (state, action)=>{
                state.categories = action.payload
        },

        setCategory: (state, action) => {
            if(state.catFilter == action.payload)
            {
                state.catFilter = ""
            }else{
                state.catFilter = action.payload
            }
        },

        setSearch : (state, action) => {
            state.search = action.payload
        },

        nextPage:(state, action)=>{
            state.page++;
            state.skip += 8
        },

        prevPage:(state, action)=>{
            state.page--;
            state.skip -= 8
        }
    }
})

export const productActions = productSlice.actions

export const productReducer = productSlice.reducer