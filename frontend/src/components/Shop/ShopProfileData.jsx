import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "../../styles/styles";
import { productData } from "../../static/data";
import ProductCard from "../Route/ProductCard/ProductCard";
import { setShopProduct } from "../../slice/productState";
import { useGetAllProductMutation } from "../../slice/userApiSlice";

const ShopProfileData = ({ isOwner }) => {
  const [getAllShopProduct, { isLoading, error }] = useGetAllProductMutation();
  const dispatch = useDispatch();

  const { seller } = useSelector((state) => state.seller);
  const { shopProduct } = useSelector((state) => state?.product);
  const { id } = useParams();

  const [active, setActive] = useState(1);

  useEffect(() => {
    (async () => {
      const res = await getAllShopProduct(id).unwrap();
      await dispatch(setShopProduct(res.products));
    })();
  }, []);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <div className="w-full flex">
          <div className="flex items-center" onClick={() => setActive(1)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 1 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Shop Products
            </h5>
          </div>
          <div className="flex items-center" onClick={() => setActive(2)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 2 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Running Events
            </h5>
          </div>

          <div className="flex items-center" onClick={() => setActive(3)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 3 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Shop Reviews
            </h5>
          </div>
        </div>
        <div>
          {isOwner && (
            <div>
              <Link to="/dashboard">
                <div className={`${styles.button} !rounded-[4px] h-[42px]`}>
                  <span className="text-[#fff]">Go Dashboard</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
      <br />
      {active === 1 && (
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px]">
          {shopProduct &&
            shopProduct.map((product, index) => (
              <ProductCard product={product} key={index} isShop={true} />
            ))}
        </div>
      )}
      ;
    </div>
  );
};

export default ShopProfileData;
