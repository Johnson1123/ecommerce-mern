import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { productData } from "../static/data";
import { useDispatch, useSelector } from "react-redux";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    if (categoryData === null) {
      const d =
        products && [...products].sort((a, b) => a.total_sell - b.total_sell);
      setData(d);
    } else {
      const d =
        products && [...products].filter((i) => i.category === categoryData);
      setData(d);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Header activeHeading={3} />
        <br />
        <br />
        <div className={`${styles.section}`}>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-5 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {data &&
              data.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
          </div>
          {data && data.length === 0 ? (
            <h1 className="text-center w-full pb-[100px] text-[20px]">
              No products Found!
            </h1>
          ) : null}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;
