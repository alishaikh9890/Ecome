import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

let initialState = {
  cart: [],
  cartLength: 0,
  total: 0,
  wishList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.cart = initialState.cart;
      state.cartLength = initialState.cartLength;
      state.total = initialState.total;
      state.wishList = initialState.wishList;
    },
    replaceCart: (state, action) => {
      state.cart = action.payload.cart;
      state.cartLength = action.payload.cartLength;
      state.total = action.payload.total;
      state.wishList = action.payload.wishList;
    },
    addToCard: (state, action) => {
      if (state.cart.some((ele) => ele.id == action.payload.id)) {
        state.cart.map((ele) => ele.id == action.payload.id && ele.count++);
      } else {
        state.cartLength++;
        state.cart.push({ ...action.payload, count: 1 });
        toast.info("Item Added To Cart...!", { autoClose: 2500 });
        }
    state.total = state.cart.reduce((t, ele)=> (ele.price*ele.count) + t, 0 ).toFixed(2)
    },
    decCount: (state, action) => {
      if (
        state.cart.some((ele) => ele.id == action.payload.id && ele.count == 1)
      ) {
        state.cartLength--;
        state.cart = state.cart.filter((ele) => ele.id != action.payload.id);
        toast.warning("Item Removed From Cart...!", { autoClose: 2500 });
      } else {
        state.cart.map((ele) => ele.id == action.payload.id && ele.count--);
      }
          state.total = state.cart.reduce((t, ele)=> (ele.price*ele.count) + t, 0 ).toFixed(2)
    },
    addToWishList: (state, action) => {
      if (state.wishList.some((el) => el.id == action.payload.id)) {
        state.wishList = state.wishList.filter(
          (el) => el.id != action.payload.id
        );
        toast("Removed from WishList...!", { autoClose: 2500 });
      } else {
        state.wishList.push(action.payload);
        toast("Added to WishList...!", { autoClose: 2500 });
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
