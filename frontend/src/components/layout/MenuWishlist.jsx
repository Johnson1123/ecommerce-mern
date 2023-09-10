import React, { useState } from "react";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import { image } from "../../Assets";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../../slice/wishList";
import { addItemToCart } from "../../slice/cartSlice";
import { backend_url } from "../../server";

function MenuWishlist({ setOpenWishlist }) {
  const dispatch = useDispatch();
  const { wishList } = useSelector((state) => state.wishList);

  const removeWishList = (item) => {
    dispatch(removeFromWishList(item));
  };

  const addToCart = async (item) => {
    await dispatch(addItemToCart(item));
    dispatch(removeFromWishList(item));
  };

  return (
    <div className="fixed w-full h-screen z-20 bg-[#00000069] top-0 right-0">
      <div className="fixed w-[30%] h-[100%] bg-[#fff] right-0 top-0 min-h-full flex py-5 fex-col shadow-sm">
        <div className="h-[100%] overflow-y-scroll w-[100%]">
          <div
            className="absolute right-5 top-3 cursor-pointer"
            onClick={() => setOpenWishlist(false)}
          >
            <AiOutlineClose size={25} />
          </div>
          <div className="w-full pr-3">
            <div className="flex items-center p-4 mt-4">
              <IoBagHandleOutline size={20} />
              <p className="ml-2 text-lg">{wishList.length} items</p>
            </div>
            <div className="flex flex-col px-2 w-[100%]">
              {wishList.length == 0 ? (
                <p className="h-[80vh] w-[100%] flex justify-center  items-center text-[20px]">
                  No item in wishList
                </p>
              ) : (
                wishList.map((item, index) => {
                  return (
                    <div className="flex justify-between items-center py-2 border-b-2 border-slate-100 my-2">
                      <div
                        className="cursor-pointer"
                        onClick={() => removeWishList(item)}
                      >
                        <AiOutlineClose size={8} color="#111" />
                      </div>
                      <img
                        src={`${backend_url}${item.images[0]}`}
                        alt=""
                        className="w-[70px] h-[70px] object-cover"
                      />
                      <div className="w-[55%]">
                        <p className="text-md font-bold leading-5">
                          {item.name}
                        </p>
                        <p className="">{`${item.description.slice(
                          0,
                          80
                        )}....`}</p>
                        <p className="text-[#e44343]  text-md font-semibold mt-2">
                          {`US$${item?.discountPrice}`}
                        </p>
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => addToCart(item)}
                      >
                        <AiOutlineShoppingCart size={20} color="#111" />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuWishlist;
