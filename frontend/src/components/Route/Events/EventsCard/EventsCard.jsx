import React from "react";
import styles from "../../../../styles/styles";
import Countdown from "../../Countdown/Countdown.jsx";
import { Link } from "react-router-dom";
function EventsCard() {
  return (
    <div className="w-full block lg:flex  rounded-lg bg-white p-2 mb-12 py-7">
      <div className="w-full lg:w-[50%] m-auto">
        <img
          src="https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png"
          alt=""
        />
      </div>
      <div className="w-full lg:w-[50%] lg:flex flex-col justify-center pr-3">
        <h2 className={`${styles.productTitle}`}>Computers and Laptops</h2>
        <p className="text-md font-light mt-3">
          Product details are a crucial part of any eCommerce website or online
          marketplace. These details help the potential customers to make an
          informed decision about the product they are interested in buying. A
          well-written product description can also be a powerful marketing tool
          that can help to increase sales.Product details typically include
          information about the product's features, specifications, dimensions,
          weight, materials, and other relevant information that can help
          customers to understand the product better. The product details
          section should also include high-quality images and videos of the
          product, as well as customer reviews and ratings.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1099$
            </h5>
            <h5 className="font-roboto font-[500] text-md text-[#333]">999$</h5>
          </div>
          <h5 className="text-[#44a55e] font-[500] text-md pr-3">120 sold </h5>
        </div>
        <Countdown />
        <div className="mt-10">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg bg-black cursor-pointer inline-block"
          >
            <span className="text-white">Add to Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
