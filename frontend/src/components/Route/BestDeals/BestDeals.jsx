import React, { useEffect, useState } from "react";
import styles from "../../../styles/styles";
import { productData } from "../../../static/data";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { useSelector } from "react-redux";
function BestDeals() {
  const [data, setData] = useState([]);
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    // const sortedData = products.sort((a, b) => b.sold_out - a.sold_out);
    const firstFive = products && products.slice(0, 5);
    setData(firstFive);
  }, []);

  return (
    <div className={`${styles.section} px-4 my-5`}>
      <div className={`${styles.heading}`}>
        <h1>Best Deals</h1>
      </div>
      <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-5 lg:gap[20px] xl:grid-cols-[5] xl:gap-[30px]">
        {data &&
          data.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
}

export default BestDeals;
