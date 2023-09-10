import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import { image } from "../../Assets";
import { useDispatch, useSelector } from "react-redux";
import { backend_url } from "../../server";
import {
  addItemToCart,
  cartDecreament,
  getTotal,
  removeItemFromCart,
} from "../../slice/cartSlice";
import { useNavigate } from "react-router-dom";

function MenuCart({ setOpenCart }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const { cartTotalPrice } = useSelector((state) => state.cart);
  const [qty, setQty] = useState(1);
  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  const handleNavigation = () => {
    setOpenCart(false);
    navigate("/checkout");
  };
  const qtyIncrease = () => {
    if (qty < 10) {
      return setQty(qty + 1);
    }
  };
  const qtyDecrease = () => {
    if (qty > 1) {
      return setQty(qty - 1);
    }
  };

  const addToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  const reduceCart = (item) => {
    dispatch(cartDecreament(item));
  };

  const deleteFromCart = (item) => {
    dispatch(removeItemFromCart(item));
  };
  return (
    <div className="fixed w-full h-screen z-20 bg-[#00000069] top-0 right-0">
      <div className="absolute w-[30%] h-[100%] bg-[#fff] right-0 top-0 min-h-full flex py-5 flex-col shadow-sm">
        <div className="h-[100%] overflow-y-scroll">
          <div
            className="absolute right-5 top-3 cursor-pointer"
            onClick={() => setOpenCart(false)}
          >
            <AiOutlineClose size={25} />
          </div>
          <div className="w-full pr-3">
            <div className="flex items-center p-4 mt-4">
              <IoBagHandleOutline size={20} />
              <p className="ml-2 text-lg font-bold">{cart.length} items</p>
            </div>
            <div className="flex flex-col px-2">
              {cart.length == 0 ? (
                <p className="h-[80vh] w-[100%] flex justify-center  items-center text-[20px]">
                  No item in cart
                </p>
              ) : (
                cart.map((cartItem, index) => {
                  return (
                    <div className="flex justify-between items-center py-2 border-b-2 border-slate-100 my-2">
                      <div className="w-[45px]">
                        <div
                          className="cursor-pointer w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[red] text-slate-700 text-lg"
                          onClick={() => addToCart(cartItem)}
                        >
                          +
                        </div>
                        <div className="cursor-pointer w-[30px] h-[30px] rounded-full flex justify-center items-center text-slate-700">
                          {cartItem.quantity}
                        </div>
                        <div
                          className="cursor-pointer w-[30px] h-[30px] text-3xl rounded-full flex justify-center items-center bg-[#cacaca] text-slate-700"
                          onClick={() => reduceCart(cartItem)}
                        >
                          -
                        </div>
                      </div>
                      <img
                        src={`${backend_url}${cartItem.images[0]}`}
                        alt=""
                        className="w-[70px] h-[70px] object-cover"
                      />
                      <div className="w-[55%]">
                        <p className="text-md font-bold leading-5">
                          {cartItem.name}
                        </p>
                        <p className="text-sm mt-1">{`$${cartItem.discountPrice} * ${cartItem.quantity}`}</p>
                        <p className="text-[#e44343]  text-md font-semibold mt-2">
                          {`US$${cartItem.discountPrice * cartItem.quantity}`}
                        </p>
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => deleteFromCart(cartItem)}
                      >
                        <AiOutlineClose size={10} color="#111" />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            {cart.length ? (
              <button
                onClick={handleNavigation}
                className="cursor-pointer text-white bg-[#e44343] py-3 px-5 rounded-sm mx-auto my-3 justify-center flex items-center w-[300px]"
              >
                {` Checkout Now $${cartTotalPrice}`}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCart;
