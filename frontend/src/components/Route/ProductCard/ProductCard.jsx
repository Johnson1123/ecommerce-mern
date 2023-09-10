import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Ratings from "../../Products/Ratings.jsx";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import { backend_url } from "../../../server";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishList } from "../../../slice/wishList";

const ProductCard = ({ product }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(false);
  const dispatch = useDispatch();
  const { wishList } = useSelector((state) => state.wishList);

  const toggleWishlist = (item) => {
    dispatch(toggleWishList(item));
  };

  useEffect(() => {
    wishList.find((item) =>
      item._id === product._id ? setList(true) : setList(false)
    );
  }, [wishList]);
  const d = product.name;

  const product_name = d.replace(/\s+/g, "-");

  //   const removeFromWishlistHandler = (product) => {
  //     setClick(!click);
  //     dispatch(removeFromWishlist(product));
  //   };

  //   const addToWishlistHandler = (product) => {
  //     setClick(!click);
  //     // dispatch(addToWishlist(product));
  //   };
  return (
    <>
      <div className="w-full h-[380px] bg-white rounded-lg shadow-md p-3 relative cursor-pointer hover:scale-[1.05] transition-all duration-500">
        <div className="flex justify-end"></div>

        <div className=" w-[100%]">
          <Link to={`${`/product/${product_name}`}`}>
            <img
              src={`${backend_url}${product?.images[0]}`}
              alt=""
              className="w-full h-[170px] object-cover "
            />
          </Link>
          <div>
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              color={list ? "red" : "#333"}
              title="Remove from wishlist"
              onClick={() => toggleWishlist(product)}
            />

            <AiOutlineEye
              size={22}
              className="cursor-pointer absolute right-2 top-14"
              onClick={() => setOpen(!open)}
              color="#333"
              title="Quick view"
            />
            <AiOutlineShoppingCart
              size={25}
              className="cursor-pointer absolute right-2 top-24"
              color="#444"
              title="Add to cart"
            />
          </div>
        </div>
        <Link to={`http://localhost:3000/shop/${product.shopId}`}>
          <h5
            className={`${styles.shop_name} text-sm text-green-500 font-medium`}
          >
            {product?.shop?.name}
          </h5>
        </Link>
        <Link to={`/product/${product?.name}`}>
          <h4 className="pb-1 font-[500] text-green-700">
            {product?.name?.length > 40
              ? product.name.slice(0, 40) + "..."
              : product.name}
          </h4>

          <div className="py-1 flex items-center justify-between">
            <div className="flex items-center">
              <Ratings rating="4" />
              <p className="text-sm">(4/5)</p>
            </div>
            <span className="font-[400] text-[17px] text-green-500">
              {product?.sold_out} sold
            </span>
          </div>

          <div className="flex items-center">
            <h5 className={`${styles.productDiscountPrice}`}>
              {product.discountPrice !== 0
                ? product?.discountPrice
                : product?.originalPrice}
              $
            </h5>
            <h4 className={`${styles.price}`}>
              {product?.originalPrice ? product?.originalPrice + " $" : null}
            </h4>
          </div>
          <div className="flex justify-center mt-4">
            <button className="text-white bg-green-600 px-4 rounded-md py-1">
              add to Cart
            </button>
          </div>
        </Link>

        {/* side options */}

        {open ? (
          <ProductDetailsCard setOpen={setOpen} product={product} open={open} />
        ) : null}
      </div>
    </>
  );
};

export default ProductCard;
