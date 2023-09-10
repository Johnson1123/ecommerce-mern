import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../../styles/styles";
import {
  AiFillEye,
  AiFillHeart,
  AiFillMessage,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { backend_url } from "../../../server";
import { Link } from "react-router-dom";

function ProductDetailsCard({ setOpen, product }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(false);

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const increaseCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex items-center justify-center z-40 bg-[#00000038]">
      <div className="w-90 md:w-[60%] h-[90vh] 800px:h-[85vh] relative bg-white rounded-lg p-4 shadow-sm overflow-y-scroll">
        <RxCross1
          className="absolute right-2 top-2 cursor-pointer"
          size={25}
          onClick={() => setOpen(false)}
        />
        <div className="block w-full 800px:flex">
          <div className="w-full 800px:[50%]">
            <img src={`${backend_url}${product.images[0]}`} alt="" />
            <div className="flex items-center">
              <img
                src={`${backend_url}${product?.images[0]}`}
                alt=""
                className="h-[50px] w-[50px] rounded-full mr-2"
              />
              <div className="">
                <Link to={`http://localhost:3000/shop/${product.shopId}`}>
                  <h3 className={`${styles.shop_name}`}>{product.shop.name}</h3>
                </Link>
                <h3 className="pb-3 text-[15px]">
                  {`(${
                    product?.shop?.ratings ? product?.shop?.ratings : "4/5"
                  }) `}
                  Ratings
                </h3>
              </div>
            </div>
            <button className="p-4 bg-black rounded-md cursor-pointer text-center h-[45px] flex items-center justify-center text-white text-[700] mt-3">
              Send Message
              <AiFillMessage size={20} className="text-white ml-2" />{" "}
            </button>
            <h5 className="text-md mt-5 text-[red]">
              ({product?.total_sell}) sold out
            </h5>
          </div>
          <div className="w-full 800px:w-50% mt-5 px-[5px]">
            <h2 className="text-lg font-bold text-center uppercase">
              {product.name}
            </h2>
            <p className="text-md font-light mt-2">{product.description}</p>
            <div className="flex mt-3">
              <h4 className={`${styles.productDiscountPrice}`}>
                {product.discountPrice}$
              </h4>
              <h3 className={`${styles.price}`}>
                {product.price ? product.price + "$" : null}
              </h3>
            </div>
            <div className="flex justify-between mt-4 px-4">
              <div className="flex">
                <button
                  className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition"
                  onClick={decreaseCount}
                >
                  -
                </button>
                <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                  {count}
                </span>
                <button
                  className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition"
                  onClick={increaseCount}
                >
                  +
                </button>
              </div>
              {click ? (
                <AiFillHeart
                  size={30}
                  className="cursor-pointer absolute"
                  color={click ? "red" : "#333"}
                  title="Remove from wishlist"
                />
              ) : (
                <AiOutlineHeart
                  size={30}
                  className="cursor-pointer"
                  color={click ? "red" : "#333"}
                  title="Add to wishlist"
                />
              )}
            </div>
            <button className="p-4 bg-black rounded-md cursor-pointer text-center h-[45px] flex items-center justify-center text-white text-[700] mt-10">
              Add to Cart
              <AiOutlineShoppingCart
                size={20}
                className="text-white ml-2"
              />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsCard;
