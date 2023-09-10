import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productData } from "../static/data";
import styles from "../styles/styles";
import { AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import ProductDetailsInfo from "./ProductDetailsInfo.jsx";
import SuggestedProduct from "./SuggestedProduct.jsx";
import { useDispatch, useSelector } from "react-redux";
import { backend_url } from "../server";
import { addItemToCart } from "../slice/cartSlice";
function ProductDetails() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [count, setCount] = useState(1);
  const [select, setSelect] = useState(0);
  const productName = name.replace(/-/g, " ");
  const { products } = useSelector((state) => state.product);
  const { cart } = useSelector((state) => state.cart.cart);
  const [imageList, setImageLink] = useState([]);

  const handleAddCartItem = async (item) => {
    await dispatch(addItemToCart(item));
  };

  useEffect(() => {
    const data = [...products].filter((i) => i.name === productName);
    setData(data);
    setImageLink(data[0].images);
  }, []);

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
    <div className="bg-white py-5">
      {data ? (
        <>
          <div className="">
            <div
              className={`${styles.section} w-[90%] 800px:w-[80%] min-h-screen`}
            >
              <div className="w-full py-5 800px:flex justify-between">
                <div className="block w-full 800px:w-[47%] 800px:mr-4">
                  <div className="w-[100%] h-[500px]">
                    <img
                      src={`${backend_url}${data[0].images[select]}`}
                      alt=""
                      className="w-[100%] h-[100%] object-cover cover"
                    />
                  </div>
                  <div className="w-full flex mt-5">
                    {imageList &&
                      imageList.map((item, index) => {
                        return (
                          <div className={`cursor-pointer mx-2`}>
                            <img
                              src={`${backend_url}${data[0]?.images[index]}`}
                              alt=""
                              className="h-[100px] w-[100px] object-cover rounded"
                              onClick={() => setSelect(index)}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="w-full 800px:w-[47%] ">
                  <h2 className="text-lg font-bold py-4 uppercase text-center text-green-900">
                    {data[0].name}
                  </h2>
                  <p className="">{data[0].description}</p>
                  <div className="mt-5">
                    <span className="font-bold">{`${data[0].discountPrice}$`}</span>
                    <span className="text-[#e44343] line-through text-sm ml-2 font-bold">{`${data[0].originalPrice}$`}</span>
                  </div>
                  <div className="flex 800px:mt-10">
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
                  <button
                    onClick={() => handleAddCartItem(data[0])}
                    className="p-4 bg-green-900 rounded-md cursor-pointer text-center h-[40px] flex items-center justify-center text-white text-[700] mt-7"
                  >
                    Add to Cart
                    <AiOutlineShoppingCart
                      size={20}
                      className="text-white ml-2"
                    />
                  </button>

                  <div className="block 800px:flex mt-[50px]">
                    <div className="flex items-center">
                      <img
                        src={`${backend_url}${data[0]?.shop?.avatar}`}
                        alt=""
                        className="w-[40px] h-[40px] rounded-full mr-3"
                      />
                      <div className="">
                        <Link
                          to={`http://localhost:3000/shop/${data[0].shopId}`}
                        >
                          {data[0]?.shop.name}
                        </Link>
                        <p>(4/5) Ratings</p>
                      </div>
                    </div>
                    <button className="p-4 bg-green-600 rounded-md cursor-pointer text-center h-[45px] flex items-center justify-center text-white text-[700] mt-5 800px:mt-0 800px:ml-10">
                      Send Message
                      <AiOutlineMessage size={20} className="text-white ml-2" />
                    </button>
                  </div>
                </div>
              </div>
              <ProductDetailsInfo data={data} />
            </div>
          </div>
          <SuggestedProduct data={data} />
        </>
      ) : null}
    </div>
  );
}

export default ProductDetails;
