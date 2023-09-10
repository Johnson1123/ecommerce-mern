import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seller: localStorage.getItem("seller")
    ? JSON.parse(localStorage.getItem("seller"))
    : null,

  accessToken: localStorage.getItem("accessToken")
    ? JSON.parse(localStorage.getItem("accessToken"))
    : null,
  isLoading: true,
};

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    setSeller: (state, action) => {
      state.seller = action.payload;
      state.isLoading = false;
      localStorage.setItem("seller", JSON.stringify(action.payload));
    },
    setToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", JSON.stringify(action.payload));
    },
  },
});

export const { setSeller, setToken } = sellerSlice.actions;
export default sellerSlice.reducer;
