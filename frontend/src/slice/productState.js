import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : null,

  shopProduct: localStorage.getItem("shopProduct")
    ? JSON.parse(localStorage.getItem("shopProduct"))
    : null,
  loading: true,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
      state.loading = false;
      localStorage.setItem("product", JSON.stringify(action.payload));
    },
    setShopProduct: (state, action) => {
      state.shopProduct = action.payload;
      localStorage.setItem("shopProduct", JSON.stringify(action.payload));
    },
  },
});

export const { setProduct, setShopProduct } = productSlice.actions;
export default productSlice.reducer;
