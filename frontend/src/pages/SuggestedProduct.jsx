import React, { useEffect, useState } from "react";
import { productData } from "../static/data";
import styles from "../styles/styles";
import { useSelector } from "react-redux";
import ProductCard from "../components/Route/ProductCard/ProductCard";
// import ProductCard from "../components/Route/ProductCard/ProductCard";

function SuggestedProduct({ data }) {
  const [product, setProduct] = useState(null);
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    const selectedData =
      products && [...products].filter((i) => i.category === data[0].category);
    setProduct(selectedData);
  }, []);
  return (
    <div className="bg-[#f3f3f3] my-5">
      {product && (
        <div className={`p-4 ${styles.section} `}>
          <h2 className={`${styles.heading} text-[25px] mb-5`}>
            Related Product
          </h2>
          <div className="mb-12 grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-5 lg:gap-[25px] xlg:grid-cols-5 xlg:gap-[30px]">
            {product
              ? product.map((item, i) => {
                  return <ProductCard product={item} key={i} />;
                })
              : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default SuggestedProduct;
