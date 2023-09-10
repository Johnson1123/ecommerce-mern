import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishList: localStorage.getItem("wishList")
    ? JSON.parse(localStorage.getItem("wishList"))
    : [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    toggleWishList: (state, action) => {
      const itemIndex = state.wishList.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        const newState = state.wishList.filter(
          (item) => item._id !== action.payload._id
        );
        state.wishList = newState;
        toast.success("Item remove from wishList");
      } else {
        const temp = { ...action.payload };
        state.wishList.push(temp);
      }
      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    },

    removeFromWishList: (state, action) => {
      const itemIndex = state.wishList.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        const newState = state.wishList.filter(
          (item) => item._id !== action.payload._id
        );
        state.wishList = newState;
      }
      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    },
  },
});

export const { toggleWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
