import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../features/productSlice";
import { authReducer } from "../features/authSlice";

const store = configureStore({
    reducer:{
        product:productReducer,
        auth:authReducer
    }
})

export default store;



