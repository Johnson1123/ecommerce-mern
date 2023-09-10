import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Coupon: null,
};

const CouponSlice = createSlice({
  name: "Coupon",
  initialState,
  reducers: {
    setCoupon: (state, action) => {
      state.Coupon = action.payload;
    },
  },
});

export const { setCoupon } = CouponSlice.actions;
export default CouponSlice.reducer;
