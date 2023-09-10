import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import { apiSlice } from "./slice/apiSlice";
import sellerSlice from "./slice/sellerState";
import tokenReducer from "./slice/tokenSlice";
import productSlice from "./slice/productState";
import EventSlice from "./slice/eventState";
import CouponSlice from "./slice/couponState";
import CartSlice from "./slice/cartSlice";
import WishListSlice from "./slice/wishList";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    token: tokenReducer,
    seller: sellerSlice,
    product: productSlice,
    event: EventSlice,
    coupon: CouponSlice,
    cart: CartSlice,
    wishList: WishListSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
