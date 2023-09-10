import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  cartTotalPrice: 0,
  cartTotalQuantity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex] = {
          ...state.cart[itemIndex],
          quantity: state.cart[itemIndex].quantity + 1,
        };
        toast.success("Item add to the cart");
      } else {
        const temp = { ...action.payload, quantity: 1 };
        state.cart.push(temp);
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cart));
    },
    cartDecreament: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex] = {
          ...state.cart[itemIndex],
          quantity: state.cart[itemIndex].quantity - 1,
        };
      } else {
        const newState = state.cart.filter(
          (item) => item._id !== action.payload._id
        );
        state.cart = newState;
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cart));
    },
    removeItemFromCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        const newState = state.cart.filter(
          (item) => item._id !== action.payload._id
        );
        state.cart = newState;
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cart));
    },
    getTotal: (state, action) => {
      let { totalPrice, totalQuantity } = state.cart.reduce(
        (initalValue, cartItem) => {
          const { discountPrice, quantity } = cartItem;

          const total = discountPrice * quantity;

          initalValue.totalPrice += total;
          initalValue.totalQuantity += quantity;
          return initalValue;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.cartTotalPrice = totalPrice;
      state.cartTotalQuantity = totalQuantity;
    },
  },
});

export const { addItemToCart, removeItemFromCart, cartDecreament, getTotal } =
  CartSlice.actions;
export default CartSlice.reducer;
