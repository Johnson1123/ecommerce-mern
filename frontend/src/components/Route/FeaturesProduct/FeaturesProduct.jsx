import React from "react";
import styles from "../../../styles/styles";
import { productData } from "../../../static/data";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";

function FeaturesProduct() {
  const { products } = useSelector((state) => state.product);
  return (
    <div className="my-3">
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Products </h1>
        </div>
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-5 lg:gap[20px] xl:grid-cols-[5] xl:gap-[30px]">
          {products &&
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesProduct;
