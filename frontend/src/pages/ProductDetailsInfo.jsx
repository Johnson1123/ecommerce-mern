import React, { useState } from "react";
import styles from "../styles/styles";
import { Link } from "react-router-dom";
import { backend_url } from "../server";

function ProductDetailsInfo({ data }) {
  const [active, setActive] = useState(0);
  return (
    <div className={`rounded-md bg-[#f5f6fb] w-full`}>
      <div className="p-4 800px:px-10">
        <div className="flex justify-between my-3 pb-2 border-b-2 border-[#f3f3f3]">
          {["Product Details", "Product Reviews", "Seller Information"].map(
            (item, i) => {
              return (
                <div className="" key={i} onClick={() => setActive(i)}>
                  <p className="text-sm 800px:text-md font-bold cursor-pointer ">
                    {item}
                  </p>
                  {active === i ? (
                    <div className="h-[3px] w-[100%] bg-[#e44343]"></div>
                  ) : null}
                </div>
              );
            }
          )}
        </div>
        <div className="w-full">
          {active === 0 && (
            <p className="leading-[1.7]">{data[0].description}</p>
          )}
          {active === 1 && (
            <div className="flex justify-center items-center min-h-[40vh] ">
              <p className="text-lg font-bold"> No Reviews yet</p>
            </div>
          )}
          {active === 2 && (
            <div className="block 800px:flex min-h-[40vh] px-4 justify-between">
              <div className="w-full 800px:w-[60%]">
                <div className="flex items-center">
                  <img
                    src={`${backend_url}${data[0].shop?.avatar}`}
                    alt=""
                    className="w-[40px] h-[40px] rounded-full mr-3"
                  />
                  <div className="">
                    <Link
                      to={`/shop/${data[0].shop._id}`}
                      className="text-green-900 text-md"
                    >
                      {data[0]?.shop.name}
                    </Link>
                    <p>({data[0]?.rating}) Ratings</p>
                  </div>
                </div>
                <p className="w-full 800px:w-[80%] mt-5 text-sm">
                  {data[0].shop?.address}
                </p>
              </div>
              <div className="mt-5 800px:mt-0">
                <p className="">
                  <span className="text-sm font-semibold">Joined On: </span>
                  <span className="text-sm">
                    {" "}
                    {data[0].shop?.createdAt.slice(0, 10)}
                  </span>
                </p>
                <p className="">
                  <span className="text-sm font-semibold">Total Products</span>
                  <span className="text-sm"> {data[0].sold_out}</span>
                </p>
                <p className="">
                  <span className="text-sm font-semibold">Total Reviews: </span>
                  <span className="text-sm"> 131</span>
                </p>
                <button className="p-4 bg-green-900 rounded-md cursor-pointer text-center h-[40px] flex items-center justify-center text-sm text-white text-[700] mt-5">
                  <Link to={`http://localhost:3000/shop/${data[0].shopId}`}>
                    Visit Shop
                  </Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsInfo;
